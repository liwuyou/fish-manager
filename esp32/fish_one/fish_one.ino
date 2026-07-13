#include <ESP32Servo.h>
#include <EEPROM.h>
#include <U8g2lib.h>
#include <Wire.h>
#include <WiFi.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <WebSocketsClient.h>
#include <ArduinoJson.h>

// ==================== 前置信息 ====================
// ESP32-wroom, 128MB flash, 4MB psram, 用于控制养鱼生态箱
// 作者: 李无忧
// 版本: 3.0.2
// 日期: 2026-6-30
// 描述: WiFi + WebSocket远程控制版本

#define MODEL_NAME "fish_one"

// ==================== 引脚定义 ====================
#define RELAY_PIN     25   // 继电器1 - 控制12V+5V电源
#define RELAY2_PIN    27   // 继电器2 - GPIO27 (新增)
#define PWM1_PIN      18   // 水泵1 - GPIO18, LEDC通道4
#define PWM2_PIN      19   // 水泵2 - GPIO19, LEDC通道5
#define PWM3_PIN      23   // 灯条 - GPIO23, LEDC通道6
#define PWM_AIR_PUMP_PIN  17   // 气泵 - GPIO17, LEDC通道2 (新增)
#define PWM_FAN_PIN       26   // 风扇 - GPIO26, LEDC通道3 (新增)
#define UV_PIN        16   // UV灯 - GPIO16, 数字量 (新增)
#define SERVO_PIN     13   // 舵机 - GPIO13 (SG90)
#define BUTTON1_PIN   15   // 按钮1 - GPIO15 (开关机)
#define BUTTON2_PIN   14   // 按钮2 - GPIO14 (水泵1)
#define BUTTON4_PIN   5    // 按钮4 - GPIO5 (灯条)
#define BUTTON5_PIN   12   // 按钮5 - GPIO12 (舵机)
#define OLED_SDA_PIN  21   // OLED SDA - GPIO21
#define OLED_SCL_PIN  22   // OLED SCL - GPIO22
#define BUZZER_PIN    33   // 蜂鸣器 - GPIO33, LEDC通道7
#define ADC_PIN_WATER_QUALITY  34   // 水质检测 - ADC1_CH6
#define ADC_PIN_WATER_TEMP     35   // 水温检测 - ADC1_CH7
#define ADC_PIN_WATER_TEMP_REF 32   // 温度参考 - ADC1_CH4

// TDS 测量
#define TDS_SCOUNT   10              // 采样次数（10×1秒=10秒更新一次）
#define VREF         3.3             // ESP32 ADC参考电压

// ==================== LEDC配置 ====================
#define LEDC_FREQ     1000    // PWM频率 1kHz
#define LEDC_RES      8       // 8位分辨率
#define LEDC_CH_PUMP1  4
#define LEDC_CH_PUMP2  5
#define LEDC_CH_LIGHT  6
#define LEDC_CH_BUZZER 7
#define LEDC_CH_AIR_PUMP  2   // 气泵 - LEDC通道2 (避开舵机)
#define LEDC_CH_FAN       3   // 风扇 - LEDC通道3 (避开舵机)

// ==================== EEPROM地址 ====================
#define EEPROM_PHONE_ADDR    0
#define EEPROM_WIFI_ADDR    50
#define EEPROM_SERVER_ADDR 150
#define EEPROM_SIZE       256

// ==================== 按键时间配置 ====================
#define POWER_ON_DELAY      1500   // 开关机长按时间
#define PUMP_START_DELAY    1000   // 水泵启动长按时间
#define DEBOUNCE_DELAY        50   // 按键消抖

// ==================== 舵机配置 ====================
#define SERVO_LEFT_LIMIT   0
#define SERVO_RIGHT_LIMIT  180
#define SERVO_MOVE_SPEED   120      // 度/秒
#define SERVO_STEP_DELAY   40      // 步进间隔(ms)
#define SERVO_RIGHT_STOP_TIME 1500 // 右限位停顿时间(ms)
#define SERVO_MIN_ANGLE    0
#define SERVO_MAX_ANGLE    180

// ==================== OLED配置 ====================
#define OLED_UPDATE_INTERVAL 2000  // OLED更新间隔

// ==================== WiFi配置 ====================
#define AP_TIMEOUT 60000         // AP超时 1分钟

// ==================== 远程服务器配置 ====================
#define WS_SERVER_HOST "192.168.2.11"
#define WS_SERVER_PORT 7965
#define WS_SERVER_PATH "/ws/device"
#define WS_HEARTBEAT_INTERVAL 30000  // WebSocket心跳间隔 30秒
#define WS_RECONNECT_DELAY  5000     // 重连延迟 5秒
#define STATUS_DEBOUNCE_DELAY 10000   // 状态防抖上报延迟 10秒

// ==================== ADC配置 ====================
#define ADC_TEMP_CORRECT_ENABLE true  // 是否开启5V电压校准（GPIO32测量实际5V）
// NTC热敏电阻参数（10kΩ @25°C, B=3950, 下拉4kΩ, 5V供电）
#define NTC_R0          10000   // 25°C时电阻(Ω)
#define NTC_B           3950    // B值
#define R_FIXED         3300    // 下拉电阻(Ω)，下拉电路：5V→NTC→ADC→R_FIXED→GND
#define T0_KELVIN       298.15  // 25°C对应开尔文温度

// ==================== 串口调试 ====================
#define SERIAL_DEBUG_ENABLE true

#if SERIAL_DEBUG_ENABLE
#define DPRINT(x)   Serial.print(x)
#define DPRINTLN(x) Serial.println(x)
#else
#define DPRINT(x)
#define DPRINTLN(x)
#endif

// ==================== 全局变量 ====================
bool systemPowered = true;
bool relay1State = false;
bool relay2State = false;

int pwm1Level = 0;
int pwm2Level = 0;
int pwm3Level = 0;
int airPumpLevel = 0;
int fanLevel = 0;
bool uvLightOn = false;
int pwmValues[] = {0, 85, 170, 255};

Servo servo;
int servoLeftLimit = SERVO_LEFT_LIMIT;
int servoRightLimit = SERVO_RIGHT_LIMIT;
bool servoMoving = false;
unsigned long servoMoveStartTime = 0;

int lastButton1 = HIGH;
int lastButton2 = HIGH;
int lastButton4 = HIGH;
int lastButton5 = HIGH;
unsigned long button1PressTime = 0;
unsigned long button2PressTime = 0;
unsigned long button4PressTime = 0;
bool button1LongPressed = false;
bool button2LongPressed = false;
bool button4LongPressed = false;
bool pump2On = false;
bool lightOn = false;

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE, OLED_SCL_PIN, OLED_SDA_PIN);
bool oledInitialized = false;

float adcWQVoltage = 0;
float adcTempVoltage = 0;
float adcTempRefVoltage = 0;
float waterTemperature = 0;         // 水温(°C)
float tdsValue = 0;                 // TDS值(ppm)
int tdsBuffer[TDS_SCOUNT];          // TDS采样缓冲区
int tdsBufferIndex = 0;             // 当前缓冲区索引
bool tdsBufferReady = false;        // 缓冲区是否已填满

String deviceMAC = "";
String deviceKey = "";
String phoneNumber = "";
String homeWiFiSSID = "";
String homeWiFiPassword = "";

bool wifiAPEnabled = false;
bool wifiConnected = false;
unsigned long apStartTime = 0;
unsigned long apLastConnectedTime = 0;

WebServer server(80);
DNSServer dnsServer;
const byte DNS_PORT = 53;

WebSocketsClient webSocket;
bool wsConnected = false;
bool wsInitialized = false;
unsigned long lastHeartbeat = 0;
unsigned long lastStatusTriggerTime = 0;
bool statusReportPending = false;
unsigned long lastWsAttempt = 0;
unsigned long lastWsLoopTime = 0;
bool wsReconnecting = false;

// 非阻塞辅助启动
int kickStartPin = -1;
int kickStartTargetLevel = 0;
unsigned long kickStartUntil = 0;
bool kickStartActive = false;
const int* kickStartPwmVals = NULL;

// ==================== 函数声明 ====================
void handleButtons();
void updateOLED();
void readADC();
void updateServo();
void playBuzzerTone(int freq, int duration);
void powerOnSystem();
void powerOffSystem();
void initDeviceID();
void startWiFiAP();
void stopWiFiAP();
void handleWiFiAPTimeout();
void connectToHomeWiFi();
void connectToHomeWiFiBackground();
void handleRoot();
void handleSaveConfig();
void handleWiFiScan();
void handleStatus();
void handleCaptivePortal();
void initWebServer();

void initWebSocket();
void wsEvent(WStype_t type, uint8_t * payload, size_t length);
void wsSendHello();
void wsSendHeartbeat();
void wsSendStatus();
void wsSendCmdResult(String cmdId, String cmd, bool success, String message = "");
void kickStartLedcWrite(int pin, int* levelVar, int newLevel, const int pwmVals[]);
void handleWsCmd(String cmdId, String cmd, JsonObject params);

// ==================== 蜂鸣器 ====================
#define BUZZER_TONE_SHORT   1000
#define BUZZER_TONE_SUCCESS 1500
#define BUZZER_TONE_ERROR    800
#define BUZZER_TONE_ALARM   2000
#define BUZZER_DURATION_SHORT 100
#define BUZZER_DURATION_LONG  500

void playBuzzerTone(int freq, int duration) {
  #if SERIAL_DEBUG_ENABLE
  ledcAttachChannel(BUZZER_PIN, freq, LEDC_RES, LEDC_CH_BUZZER);
  ledcWrite(BUZZER_PIN, 128);
  delay(duration);
  ledcWrite(BUZZER_PIN, 0);
  #endif
}

// ==================== 设备ID ====================
void initDeviceID() {
  WiFi.mode(WIFI_AP_STA);
  delay(100);
  deviceMAC = WiFi.macAddress();
  
  String macClean = "";
  for (int i = 0; i < deviceMAC.length(); i++) {
    if (deviceMAC[i] != ':') macClean += deviceMAC[i];
  }
  deviceKey = macClean.substring(macClean.length() - 8);
  deviceKey.toUpperCase();
  
  DPRINT("[DEVICE] MAC: ");
  DPRINTLN(deviceMAC);
  DPRINT("[DEVICE] 密钥: ");
  DPRINTLN(deviceKey);
}

// ==================== WiFi AP ====================
void startWiFiAP() {
  if (wifiAPEnabled) return;
  
  String apSSID = "fish-manager-" + deviceKey;
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAP(apSSID.c_str(), "12345678");
  delay(500);
  
  IPAddress apIP = WiFi.softAPIP();
  dnsServer.start(DNS_PORT, "*", apIP);
  initWebServer();
  server.begin();
  
  wifiAPEnabled = true;
  apStartTime = millis();
  apLastConnectedTime = millis();
  
  DPRINT("[WiFi] AP启动: ");
  DPRINTLN(apSSID);
  DPRINT("[WiFi] AP密码: 12345678");
}

void stopWiFiAP() {
  if (!wifiAPEnabled) return;
  
  dnsServer.stop();
  server.stop();
  WiFi.softAPdisconnect(true);
  
  if (wifiConnected && WiFi.status() == WL_CONNECTED) {
    WiFi.mode(WIFI_STA);
  } else {
    WiFi.mode(WIFI_OFF);
    wifiConnected = false;
  }
  
  wifiAPEnabled = false;
  DPRINTLN("[WiFi] AP已关闭");
}

void handleWiFiAPTimeout() {
  if (!wifiAPEnabled) return;
  
  int stationCount = WiFi.softAPgetStationNum();
  
  if (stationCount > 0) {
    apLastConnectedTime = millis();
    return;
  }
  
  unsigned long timeoutRef = (apStartTime == apLastConnectedTime) ? apStartTime : apLastConnectedTime;
  
  if (millis() - timeoutRef >= AP_TIMEOUT) {
    stopWiFiAP();
    DPRINTLN("[WiFi] AP超时关闭");
  }
}

// ==================== 家庭WiFi ====================
void connectToHomeWiFiBackground() {
  if (homeWiFiSSID.isEmpty()) return;
  if (WiFi.status() == WL_CONNECTED) return;
  
  DPRINT("[WiFi] 后台连接: ");
  DPRINTLN(homeWiFiSSID);
  WiFi.begin(homeWiFiSSID.c_str(), homeWiFiPassword.c_str());
}

void connectToHomeWiFi() {
  if (homeWiFiSSID.isEmpty()) return;
  
  DPRINT("[WiFi] 连接: ");
  DPRINTLN(homeWiFiSSID);
  WiFi.begin(homeWiFiSSID.c_str(), homeWiFiPassword.c_str());
  
  unsigned long start = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - start < 10000) {
    delay(500);
    DPRINT(".");
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    wifiConnected = true;
    DPRINTLN("");
    DPRINT("[WiFi] 成功, IP: ");
    DPRINTLN(WiFi.localIP().toString());
    playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
  } else {
    wifiConnected = false;
    DPRINTLN("");
    DPRINTLN("[WiFi] 连接失败");
    playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
  }
}

// ==================== Web服务器 ====================
void initWebServer() {
  server.on("/", HTTP_GET, handleRoot);
  server.on("/save", HTTP_POST, handleSaveConfig);
  server.on("/status", HTTP_GET, handleStatus);
  server.on("/scan", HTTP_GET, handleWiFiScan);
  server.on("/generate_204", HTTP_GET, handleCaptivePortal);
  server.on("/hotspot-detect.html", HTTP_GET, handleCaptivePortal);
  server.on("/gen_204", HTTP_GET, handleCaptivePortal);
  server.onNotFound(handleCaptivePortal);
}

void handleCaptivePortal() {
  server.sendHeader("Location", "http://" + WiFi.softAPIP().toString() + "/");
  server.send(302, "text/plain", "Redirect");
}

void handleWiFiScan() {
  String json = "[";
  int n = WiFi.scanNetworks();
  for (int i = 0; i < n; i++) {
    if (i > 0) json += ",";
    json += "{\"ssid\":\"" + WiFi.SSID(i) + "\",\"rssi\":" + WiFi.RSSI(i) + "}";
  }
  json += "]";
  WiFi.scanDelete();
  server.send(200, "application/json", json);
}

void handleRoot() {
  String html = "<!DOCTYPE html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1.0'>";
  html += "<title>设备配置</title><style>";
  html += "body{font-family:sans-serif;margin:20px;background:#f0f0f0;}";
  html += ".card{background:white;border-radius:8px;padding:20px;margin:10px 0;box-shadow:0 2px 4px rgba(0,0,0,0.1);}";
  html += "h2{color:#333;margin-top:0;}input,select{width:100%;padding:10px;margin:8px 0;border:1px solid #ddd;border-radius:4px;box-sizing:border-box;}";
  html += "button{background:#4CAF50;color:white;padding:12px 20px;border:none;border-radius:4px;cursor:pointer;width:100%;font-size:16px;}";
  html += ".info{color:#666;font-size:14px;margin-bottom:15px;}";
  html += ".code{font-family:monospace;color:#e74c3c;background:#f9f9f9;padding:5px;border-radius:3px;}";
  html += ".success{background:#d4edda;color:#155724;padding:10px;border-radius:4px;margin:10px 0;}";
  html += ".loading{color:#666;text-align:center;padding:20px;}";
  html += "</style></head><body>";
  
  html += "<div class='card'><h2>设备信息</h2>";
  html += "<div class='info'><b>设备唯一码:</b><br><span class='code'>" + deviceMAC + "</span></div>";
  html += "<div class='info'><b>设备密钥:</b><br><span class='code'>" + deviceKey + "</span></div>";
  html += "</div>";
  
  html += "<div class='card'><h2>WiFi配置</h2>";
  html += "<form id='configForm' action='/save' method='POST'>";
  html += "<label>选择家庭WiFi:</label>";
  html += "<select name='ssid' id='wifiSelect'><option value=''>-- 请选择WiFi --</option></select>";
  html += "<button type='button' onclick='scanWiFi()' style='background:#2196F3;margin:4px 0;'>🔄 刷新WiFi列表</button>";
  html += "<div id='selectedSSID' style='margin:10px 0;color:#666;'></div>";
  html += "<label>WiFi密码:</label><input type='password' name='password' id='password' placeholder='请输入WiFi密码' required><br>";
  html += "<button type='submit'>保存配置</button>";
  html += "</form>";
  html += "<div id='loadingMsg' class='loading'>正在扫描WiFi...</div>";

  // 显示已保存的WiFi
  if (!homeWiFiSSID.isEmpty()) {
    html += "<div class='info' style='font-size:12px;color:#999;'>当前已配置WiFi: " + homeWiFiSSID + "</div>";
    html += "<form action='/save' method='POST' style='margin-top:8px;' onsubmit='return confirm(\"确定清除WiFi配置？\")'>";
    html += "<input type='hidden' name='ssid' value=''>";
    html += "<input type='hidden' name='password' value=''>";
    html += "<button type='submit' style='background:#f44336;font-size:14px;'>清除WiFi配置</button>";
    html += "</form>";
  }

  html += "</div>";
  
  if (wifiConnected) {
    html += "<div class='success'><b>WiFi已连接</b><br>IP: " + WiFi.localIP().toString() + "</div>";
  }
  
  html += "<script>";
  html += "function scanWiFi(){";
  html += "var s=document.getElementById('wifiSelect');var l=document.getElementById('loadingMsg');";
  html += "s.innerHTML='<option value=\"\">-- 扫描中 --</option>';l.style.display='block';l.innerHTML='正在扫描WiFi...';";
  html += "fetch('/scan').then(function(r){return r.json();}).then(function(d){";
  html += "s.innerHTML='<option value=\"\">-- 请选择WiFi --</option>';";
  html += "d.forEach(function(w){var o=document.createElement('option');o.value=w.ssid;o.text=w.ssid+' ('+w.rssi+'dBm)';if(w.ssid=='" + homeWiFiSSID + "')o.selected=true;s.appendChild(o);});";
  html += "l.style.display='none';";
  html += "}).catch(function(e){l.innerHTML='⚠️ 扫描失败，点击按钮重试';});";
  html += "}";
  html += "setTimeout(scanWiFi,500);";
  html += "</script></body></html>";
  
  server.send(200, "text/html; charset=UTF-8", html);
}

void handleSaveConfig() {
  if (server.hasArg("ssid")) homeWiFiSSID = server.arg("ssid");
  if (server.hasArg("password")) homeWiFiPassword = server.arg("password");
  
  EEPROM.begin(EEPROM_SIZE);
  // 清除WiFi配置区域
  for (int i = 0; i < 100; i++) EEPROM.write(EEPROM_WIFI_ADDR + i, 0);
  
  if (!homeWiFiSSID.isEmpty()) {
    int addr = EEPROM_WIFI_ADDR;
    for (int i = 0; i < homeWiFiSSID.length() && i < 50; i++) EEPROM.write(addr++, homeWiFiSSID[i]);
    EEPROM.write(addr++, 0);
    for (int i = 0; i < homeWiFiPassword.length() && i < 50; i++) EEPROM.write(addr++, homeWiFiPassword[i]);
    EEPROM.write(addr++, 0);
  }
  EEPROM.commit();
  EEPROM.end();
  
  String html = "<!DOCTYPE html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1.0'>";
  html += "<title>配置完成</title><style>";
  html += "body{font-family:sans-serif;margin:20px;background:#f0f0f0;display:flex;justify-content:center;align-items:center;min-height:100vh;}";
  html += ".card{background:white;border-radius:8px;padding:30px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.1);max-width:400px;}";
  html += "h2{color:#27ae60;margin-top:0;}p{color:#666;line-height:1.6;}";
  html += ".btn{background:#4CAF50;color:white;padding:12px 24px;border:none;border-radius:4px;cursor:pointer;font-size:16px;text-decoration:none;display:inline-block;margin-top:10px;}";
  html += "</style></head><body>";
  html += "<div class='card'>";
  html += "<h2>配置已保存</h2>";
  html += "<p>ESP32正在连接家庭WiFi...</p>";
  html += "<p style='font-size:12px;color:#999;'>成功后请使用手机APP远程控制</p>";
  html += "<a href='/' class='btn'>返回</a>";
  html += "</div></body></html>";
  
  server.send(200, "text/html; charset=UTF-8", html);
  
  delay(500);
  connectToHomeWiFi();
}

void handleStatus() {
  char buf[300];
  snprintf(buf, sizeof(buf), 
    "{\"pwm1Level\":%d,\"pwm2Level\":%d,\"pwm3Level\":%d,\"servoMoving\":%s,\"adcWQVoltage\":%.2f,\"adcTempVoltage\":%.2f,\"waterTemperature\":%.1f,\"tdsValue\":%.0f,\"systemPowered\":%s}",
    pwm1Level, pwm2Level, pwm3Level,
    servoMoving ? "true" : "false",
    adcWQVoltage, adcTempVoltage, waterTemperature, tdsValue,
    systemPowered ? "true" : "false");
  server.send(200, "application/json", buf);
}

// ==================== WebSocket远程控制 ====================
void initWebSocket() {
  if (wsInitialized) return;
  wsInitialized = true;
  webSocket.begin(WS_SERVER_HOST, WS_SERVER_PORT, WS_SERVER_PATH);
  webSocket.onEvent(wsEvent);
  webSocket.setReconnectInterval(WS_RECONNECT_DELAY);
  lastWsLoopTime = 0;
  DPRINTLN("[WS] 初始化完成");
}

void wsEvent(WStype_t type, uint8_t * payload, size_t length) {
  switch(type) {
    case WStype_DISCONNECTED:
      wsConnected = false;
      lastWsAttempt = millis();
      DPRINTLN("[WS] 断开连接");
      break;
      
    case WStype_CONNECTED:
      wsConnected = true;
      DPRINTLN("[WS] 连接成功");
      wsSendHello();
      wsSendStatus();  // 立即上报初始状态（含传感器值）
      playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
      break;
      
    case WStype_TEXT: {
      if (length == 0 || length > 512) break;
      
      char buf[513];
      memcpy(buf, payload, length);
      buf[length] = '\0';
      String msg = String(buf);
      
      DPRINT("[WS] 收到: ");
      DPRINTLN(msg);
      
      DynamicJsonDocument doc(256);
      DeserializationError error = deserializeJson(doc, msg);
      if (error) break;
      
      const char* type = doc["type"] | "";
      String typeStr = String(type);
      
      if (typeStr == "cmd") {
        String cmdId = doc["cmd_id"].as<String>();
        String cmd = doc["cmd"].as<String>();
        if (cmd.length() == 0) break;
        JsonObject params = doc["params"].as<JsonObject>();
        handleWsCmd(cmdId, cmd, params);
      }
      break;
    }
    
    default:
      break;
  }
}

void wsSendHello() {
  DynamicJsonDocument doc(128);
  doc["type"] = "hello";
  doc["device_key"] = deviceKey;
  doc["mac"] = deviceMAC;
  doc["model"] = MODEL_NAME;
  
  String msg;
  serializeJson(doc, msg);
  webSocket.sendTXT(msg);
}

void wsSendHeartbeat() {
  DynamicJsonDocument doc(64);
  doc["type"] = "heartbeat";
  
  String msg;
  serializeJson(doc, msg);
  webSocket.sendTXT(msg);
}

void wsSendStatus() {
  DynamicJsonDocument doc(384);
  doc["type"] = "status";
  
  JsonObject status = doc.createNestedObject("status");
  status["pwm1Level"] = pwm1Level;
  status["pwm2Level"] = pwm2Level;
  status["pwm3Level"] = pwm3Level;
  status["airPumpLevel"] = airPumpLevel;
  status["fanLevel"] = fanLevel;
  status["uvLightOn"] = uvLightOn;
  status["relay1State"] = relay1State;
  status["relay2State"] = relay2State;
  status["servoMoving"] = servoMoving;
  status["adcWQVoltage"] = adcWQVoltage;
  status["adcTempVoltage"] = adcTempVoltage;
  status["waterTemperature"] = waterTemperature;
  status["tdsValue"] = tdsValue;
  status["systemPowered"] = systemPowered;
  
  String msg;
  serializeJson(doc, msg);
  webSocket.sendTXT(msg);
}

void scheduleStatusReport() {
  lastStatusTriggerTime = millis();
  statusReportPending = true;
}

void kickStartLedcWrite(int pin, int* levelVar, int newLevel, const int pwmVals[]) {
  int oldLevel = *levelVar;
  *levelVar = newLevel;
  if (oldLevel == 0 && newLevel == 1) {
    ledcWrite(pin, pwmVals[3]);
    kickStartPin = pin;
    kickStartTargetLevel = newLevel;
    kickStartPwmVals = pwmVals;
    kickStartUntil = millis() + 100;
    kickStartActive = true;
    return;
  }
  ledcWrite(pin, pwmVals[newLevel]);
}

void wsSendCmdResult(String cmdId, String cmd, bool success, String message) {
  DynamicJsonDocument doc(128);
  doc["type"] = "cmd_result";
  doc["cmd_id"] = cmdId;
  doc["cmd"] = cmd;
  doc["success"] = success;
  if (message.length() > 0) doc["message"] = message;
  
  JsonObject result = doc.createNestedObject("result");
  result["pwm1Level"] = pwm1Level;
  result["pwm2Level"] = pwm2Level;
  result["pwm3Level"] = pwm3Level;
  result["airPumpLevel"] = airPumpLevel;
  result["fanLevel"] = fanLevel;
  result["uvLightOn"] = uvLightOn;
  result["relay1State"] = relay1State;
  result["relay2State"] = relay2State;
  result["servoMoving"] = servoMoving;
  result["systemPowered"] = systemPowered;
  
  String msg;
  serializeJson(doc, msg);
  webSocket.sendTXT(msg);
}

void handleWsCmd(String cmdId, String cmd, JsonObject params) {
  DPRINT("[CMD] ");
  DPRINTLN(cmd);
  
  if (!systemPowered && cmd != "power_on") {
    wsSendCmdResult(cmdId, cmd, false, "设备已关机");
    return;
  }
  
  if (cmd == "set_pump") {
    int pump = params["pump"] | 1;
    int level = params["level"] | 0;
    level = constrain(level, 0, 3);
    
    if (pump == 1) {
      kickStartLedcWrite(PWM1_PIN, &pwm1Level, level, pwmValues);
    } else if (pump == 2) {
      kickStartLedcWrite(PWM2_PIN, &pwm2Level, level, pwmValues);
    }
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "set_light") {
    int level = params["level"] | 0;
    level = constrain(level, 0, 3);
    pwm3Level = level;
    ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "set_air_pump") {
    int level = params["level"] | 0;
    level = constrain(level, 0, 3);
    kickStartLedcWrite(PWM_AIR_PUMP_PIN, &airPumpLevel, level, pwmValues);
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "set_fan") {
    int level = params["level"] | 0;
    level = constrain(level, 0, 3);
    kickStartLedcWrite(PWM_FAN_PIN, &fanLevel, level, pwmValues);
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "set_uv") {
    bool on = params["on"] | false;
    uvLightOn = on;
    digitalWrite(UV_PIN, on ? HIGH : LOW);
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "set_relay2") {
    bool on = params["on"] | false;
    relay2State = on;
    digitalWrite(RELAY2_PIN, on ? HIGH : LOW);
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "trigger_servo") {
    if (servoMoving) {
      wsSendCmdResult(cmdId, cmd, false, "舵机正在运动");
      return;
    }
    servoMoving = true;
    servoMoveStartTime = millis();
    wsSendCmdResult(cmdId, cmd, true, "舵机已启动");
    wsSendStatus();
    
  } else if (cmd == "power_off") {
    powerOffSystem();
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "power_on") {
    powerOnSystem();
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else if (cmd == "request_status") {
    wsSendCmdResult(cmdId, cmd, true);
    wsSendStatus();
    
  } else {
    wsSendCmdResult(cmdId, cmd, false, "未知命令");
  }
}

// ==================== 按键处理 ====================
void handleButtons() {
  unsigned long now = millis();
  int button1 = digitalRead(BUTTON1_PIN);
  int button2 = digitalRead(BUTTON2_PIN);
  int button4 = digitalRead(BUTTON4_PIN);
  int button5 = digitalRead(BUTTON5_PIN);
  
  // 按键1: 开关机
  if (button1 == LOW && lastButton1 == HIGH) {
    button1PressTime = now;
    button1LongPressed = false;
  } else if (button1 == LOW && !button1LongPressed) {
    if (now - button1PressTime >= POWER_ON_DELAY) {
      button1LongPressed = true;
      if (systemPowered) {
        powerOffSystem();
      } else {
        powerOnSystem();
      }
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    }
  }
  lastButton1 = button1;
  
  if (!systemPowered) return;
  
  // 按键2: 水泵1
  if (button2 == LOW && lastButton2 == HIGH) {
    button2PressTime = now;
    button2LongPressed = false;
  } else if (button2 == LOW && !button2LongPressed) {
    if (now - button2PressTime >= PUMP_START_DELAY) {
      button2LongPressed = true;
      if (pwm1Level == 0) {
        kickStartLedcWrite(PWM1_PIN, &pwm1Level, 1, pwmValues);
        playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
      } else {
        pwm1Level = 0;
        ledcWrite(PWM1_PIN, 0);
        playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
      }
      scheduleStatusReport();
    }
  } else if (button2 == HIGH && lastButton2 == LOW && !button2LongPressed) {
    if (pwm1Level > 0) {
      pwm1Level = (pwm1Level % 3) + 1;
      ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
      scheduleStatusReport();
    }
  }
  lastButton2 = button2;
  
  // 按键4: 灯条
  if (button4 == LOW && lastButton4 == HIGH) {
    button4PressTime = now;
    button4LongPressed = false;
  } else if (button4 == LOW && !button4LongPressed) {
    if (now - button4PressTime >= PUMP_START_DELAY) {
      button4LongPressed = true;
      if (pwm3Level == 0) {
        pwm3Level = 1;
        playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
      } else {
        pwm3Level = 0;
        playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
      }
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      scheduleStatusReport();
    }
  } else if (button4 == HIGH && lastButton4 == LOW && !button4LongPressed) {
    if (pwm3Level > 0) {
      pwm3Level = (pwm3Level % 3) + 1;
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
      scheduleStatusReport();
    }
  }
  lastButton4 = button4;
  
  // 按键5: 舵机
  if (button5 == HIGH && lastButton5 == LOW && !servoMoving) {
    servoMoving = true;
    servoMoveStartTime = now;
    playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    scheduleStatusReport();
  }
  lastButton5 = button5;
}

// ==================== 舵机控制 ====================
void updateServo() {
  if (!servoMoving) return;
  
  static int servoPhase = 0;
  static unsigned long phaseStartTime = 0;
  static int currentAngle = SERVO_LEFT_LIMIT;
  static int targetAngle = SERVO_LEFT_LIMIT;
  static unsigned long lastStepTime = 0;
  
  unsigned long now = millis();
  int stepSize = SERVO_MOVE_SPEED * SERVO_STEP_DELAY / 1000;
  if (stepSize < 1) stepSize = 1;
  
  if (servoPhase == 0) {
    currentAngle = servo.read();
    if (currentAngle < SERVO_MIN_ANGLE) currentAngle = SERVO_MIN_ANGLE;
    if (currentAngle > SERVO_MAX_ANGLE) currentAngle = SERVO_MAX_ANGLE;
    targetAngle = SERVO_RIGHT_LIMIT;
    servoPhase = 1;
    phaseStartTime = now;
    lastStepTime = now;
    return;
  }
  
  if (servoPhase == 1) {
    if (now - lastStepTime >= SERVO_STEP_DELAY) {
      lastStepTime = now;
      if (currentAngle < targetAngle) {
        currentAngle += stepSize;
        if (currentAngle > targetAngle) currentAngle = targetAngle;
        servo.write(currentAngle);
      } else {
        servoPhase = 2;
        phaseStartTime = now;
      }
    }
    return;
  }
  
  if (servoPhase == 2) {
    if (now - phaseStartTime >= SERVO_RIGHT_STOP_TIME) {
      targetAngle = SERVO_LEFT_LIMIT;
      servoPhase = 3;
      phaseStartTime = now;
      lastStepTime = now;
    }
    return;
  }
  
  if (servoPhase == 3) {
    if (now - lastStepTime >= SERVO_STEP_DELAY) {
      lastStepTime = now;
      if (currentAngle > targetAngle) {
        currentAngle -= stepSize;
        if (currentAngle < targetAngle) currentAngle = targetAngle;
        servo.write(currentAngle);
      } else {
        servoPhase = 0;
        servoMoving = false;
        if (wsConnected) wsSendStatus();
        playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
      }
    }
    return;
  }
}

// ==================== ADC采样 ====================
void readADC() {
  int rawWQ = analogRead(ADC_PIN_WATER_QUALITY);
  
  // 填充TDS缓冲区
  tdsBuffer[tdsBufferIndex] = rawWQ;
  tdsBufferIndex++;
  if (tdsBufferIndex >= TDS_SCOUNT) {
    tdsBufferIndex = 0;
    tdsBufferReady = true;
  }
  
  // 缓冲区满时计算TDS
  if (tdsBufferReady) {
    int buf[TDS_SCOUNT];
    memcpy(buf, tdsBuffer, sizeof(tdsBuffer));
    int median = getMedianNum(buf, TDS_SCOUNT);
    float avgVoltage = median * VREF / 4095.0;
    float compCoeff = 1.0 + 0.02 * (waterTemperature - 25.0);  // 温度补偿
    float compVoltage = avgVoltage / compCoeff;
    tdsValue = (133.42 * compVoltage * compVoltage * compVoltage 
              - 255.86 * compVoltage * compVoltage 
              + 857.39 * compVoltage) * 0.5;
    if (tdsValue < 0) tdsValue = 0;
    adcWQVoltage = avgVoltage;
  }
  
  int rawTemp = analogRead(ADC_PIN_WATER_TEMP);
  float tempV_adc = rawTemp * 3.3 / 4095.0;
  adcTempVoltage = tempV_adc;
  
  int rawRef = 0;
  adcTempRefVoltage = 0;
  float supplyVCC = 5.0;  // 默认5V供电，开启校准后由GPIO32实测
  #if ADC_TEMP_CORRECT_ENABLE
  rawRef = analogRead(ADC_PIN_WATER_TEMP_REF);
  adcTempRefVoltage = rawRef * 3.3 / 4095.0;
  supplyVCC = adcTempRefVoltage * 2.0;
  #endif
  
  // 计算NTC电阻（下拉电路：supplyVCC→NTC→ADC→R_FIXED→GND）
  // V_adc固定用3.3V参考换算，supplyVCC仅用于分压公式
  if (tempV_adc > 0 && tempV_adc < supplyVCC) {
    float R_ntc = R_FIXED * (supplyVCC - tempV_adc) / tempV_adc;
    float steinhart = log(R_ntc / NTC_R0);
    steinhart /= NTC_B;
    steinhart += 1.0 / T0_KELVIN;
    steinhart = 1.0 / steinhart;
    waterTemperature = steinhart - 273.15;
  } else {
    waterTemperature = 0;
  }
  
  DPRINT("[ADC] rawTemp:"); DPRINT(rawTemp);
  DPRINT(" V_adc:"); DPRINT(tempV_adc);
  DPRINT(" rawRef:"); DPRINT(rawRef);
  DPRINT(" V_ref:"); DPRINT(adcTempRefVoltage);
  DPRINT(" supply:"); DPRINT(supplyVCC);
  DPRINT(" R:"); DPRINT((int)(R_FIXED * (supplyVCC - tempV_adc) / tempV_adc));
  DPRINT(" waterTemp:"); DPRINTLN(waterTemperature);
}

int getMedianNum(int bArray[], int iFilterLen) {
  int bTab[iFilterLen];
  for (int i = 0; i < iFilterLen; i++)
    bTab[i] = bArray[i];
  int i, j, bTemp;
  for (j = 0; j < iFilterLen - 1; j++) {
    for (i = 0; i < iFilterLen - j - 1; i++) {
      if (bTab[i] > bTab[i + 1]) {
        bTemp = bTab[i];
        bTab[i] = bTab[i + 1];
        bTab[i + 1] = bTemp;
      }
    }
  }
  if ((iFilterLen & 1) > 0)
    bTemp = bTab[(iFilterLen - 1) / 2];
  else
    bTemp = (bTab[iFilterLen / 2] + bTab[iFilterLen / 2 - 1]) / 2;
  return bTemp;
}

// ==================== OLED显示 ====================
void updateOLED() {
  if (!systemPowered || !oledInitialized) return;
  
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  
  char line1[32];
  snprintf(line1, sizeof(line1), "M1:%d M2:%d LED:%d", pwm1Level, pwm2Level, pwm3Level);
  u8g2.drawStr(0, 10, line1);
  
  char line2[32];
  snprintf(line2, sizeof(line2), "UV:%s Air:%d Fan:%d", uvLightOn ? "ON" : "OFF", airPumpLevel, fanLevel);
  u8g2.drawStr(0, 22, line2);
  
  char line3[32];
  snprintf(line3, sizeof(line3), "T:%.1fC TDS:%.0fppm", waterTemperature, tdsValue);
  u8g2.drawStr(0, 34, line3);
  
  const char* wifiText = "WiFi:Off";
  if (wsConnected) {
    wifiText = "Svr:Online";
  } else if (wifiConnected) {
    wifiText = "WiFi:OK";
  } else if (wifiAPEnabled) {
    wifiText = "WiFi:AP";
  }
  u8g2.drawStr(0, 46, wifiText);
  
  char line5[32];
  snprintf(line5, sizeof(line5), "Key:%s", deviceKey.c_str());
  u8g2.drawStr(0, 58, line5);
  
  u8g2.sendBuffer();
}

// ==================== 开关机 ====================
void powerOnSystem() {
  if (systemPowered) return;
  
  digitalWrite(RELAY_PIN, HIGH);
  relay1State = true;
  systemPowered = true;
  
  delay(500);
  
  Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
  if (u8g2.begin()) {
    u8g2.setFont(u8g2_font_ncenB08_tr);
    oledInitialized = true;
  }
  
  servo.attach(SERVO_PIN);
  servo.write(SERVO_LEFT_LIMIT);
  
  ledcWrite(PWM1_PIN, 0);
  ledcWrite(PWM2_PIN, 0);
  ledcWrite(PWM3_PIN, 0);
  ledcWrite(PWM_AIR_PUMP_PIN, 0);
  ledcWrite(PWM_FAN_PIN, 0);
  digitalWrite(UV_PIN, LOW);
  digitalWrite(RELAY2_PIN, LOW);
  airPumpLevel = 0;
  fanLevel = 0;
  uvLightOn = false;
  relay2State = false;
  
  startWiFiAP();
  
  if (!homeWiFiSSID.isEmpty()) {
    connectToHomeWiFiBackground();
  }
  
  DPRINTLN("[POWER] 开机");
  playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
  scheduleStatusReport();
}

void powerOffSystem() {
  if (!systemPowered) return;
  
  pwm1Level = 0;
  pwm2Level = 0;
  pwm3Level = 0;
  airPumpLevel = 0;
  fanLevel = 0;
  uvLightOn = false;
  relay2State = false;
  servoMoving = false;
  
  ledcWrite(PWM1_PIN, 0);
  ledcWrite(PWM2_PIN, 0);
  ledcWrite(PWM3_PIN, 0);
  ledcWrite(PWM_AIR_PUMP_PIN, 0);
  ledcWrite(PWM_FAN_PIN, 0);
  digitalWrite(UV_PIN, LOW);
  digitalWrite(RELAY2_PIN, LOW);
  servo.detach();
  
  digitalWrite(RELAY_PIN, LOW);
  relay1State = false;
  
  u8g2.clear();
  u8g2.sendBuffer();
  
  Wire.end();
  pinMode(OLED_SDA_PIN, INPUT_PULLUP);
  pinMode(OLED_SCL_PIN, INPUT_PULLUP);
  oledInitialized = false;
  
  systemPowered = false;
  
  DPRINTLN("[POWER] 关机");
  playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_LONG);
  scheduleStatusReport();
}

// ==================== setup ====================
void setup() {
  #if SERIAL_DEBUG_ENABLE
  Serial.begin(115200);
  delay(100);
  #endif
  
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  
  ledcAttachChannel(PWM1_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP1);
  ledcAttachChannel(PWM2_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP2);
  ledcAttachChannel(PWM3_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_LIGHT);
  ledcAttachChannel(PWM_AIR_PUMP_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_AIR_PUMP);
  ledcAttachChannel(PWM_FAN_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_FAN);
  ledcWrite(PWM1_PIN, 0);
  ledcWrite(PWM2_PIN, 0);
  ledcWrite(PWM3_PIN, 0);
  ledcWrite(PWM_AIR_PUMP_PIN, 0);
  ledcWrite(PWM_FAN_PIN, 0);
  
  pinMode(UV_PIN, OUTPUT);
  digitalWrite(UV_PIN, LOW);
  pinMode(RELAY2_PIN, OUTPUT);
  digitalWrite(RELAY2_PIN, LOW);
  
  pinMode(BUTTON1_PIN, INPUT_PULLUP);
  pinMode(BUTTON2_PIN, INPUT_PULLUP);
  pinMode(BUTTON4_PIN, INPUT_PULLUP);
  pinMode(BUTTON5_PIN, INPUT_PULLUP);
  
  analogReadResolution(12);
  
  initDeviceID();
  
  EEPROM.begin(EEPROM_SIZE);
  
  homeWiFiSSID = "";
  homeWiFiPassword = "";
  int addr = EEPROM_WIFI_ADDR;
  for (int i = 0; i < 50; i++) {
    char c = EEPROM.read(addr++);
    if (c == 0) break;
    homeWiFiSSID += c;
  }
  for (int i = 0; i < 50; i++) {
    char c = EEPROM.read(addr++);
    if (c == 0) break;
    homeWiFiPassword += c;
  }
  
  EEPROM.end();
  
  if (systemPowered) {
    digitalWrite(RELAY_PIN, HIGH);
    relay1State = true;
    
    delay(500);
    Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
    if (u8g2.begin()) {
      u8g2.setFont(u8g2_font_ncenB08_tr);
      oledInitialized = true;
    }
    
    servo.attach(SERVO_PIN);
    servo.write(SERVO_LEFT_LIMIT);
    
    startWiFiAP();
    
    if (!homeWiFiSSID.isEmpty()) {
      connectToHomeWiFiBackground();
    }
  }
  
  DPRINTLN("系统就绪");
}

// ==================== loop ====================
void loop() {
  handleButtons();
  updateServo();
  
  static unsigned long lastADCRead = 0;
  if (millis() - lastADCRead > 1000) {
    lastADCRead = millis();
    readADC();
  }
  
  static unsigned long lastOLEDUpdate = 0;
  if (millis() - lastOLEDUpdate > 2000) {
    lastOLEDUpdate = millis();
    updateOLED();
  }
  
  handleWiFiAPTimeout();
  
  if (wifiAPEnabled) {
    dnsServer.processNextRequest();
    server.handleClient();
  }
  
  if (wifiConnected) {
    if (!wsInitialized) {
      initWebSocket();
    }
    webSocket.loop();
  }
  
  // WebSocket心跳
  if (wsConnected && millis() - lastHeartbeat > WS_HEARTBEAT_INTERVAL) {
    lastHeartbeat = millis();
    wsSendHeartbeat();
  }
  
  // 非阻塞辅助启动回落
  if (kickStartActive && millis() >= kickStartUntil) {
    kickStartActive = false;
    ledcWrite(kickStartPin, kickStartPwmVals[kickStartTargetLevel]);
  }
  
  // 防抖状态上报（触发操作后10秒内合并上报）
  if (wsConnected && statusReportPending && millis() - lastStatusTriggerTime > STATUS_DEBOUNCE_DELAY) {
    statusReportPending = false;
    wsSendStatus();
  }
  
  // 检查家庭WiFi连接状态
  if (!homeWiFiSSID.isEmpty() && WiFi.status() == WL_CONNECTED && !wifiConnected) {
    wifiConnected = true;
    DPRINTLN("[WiFi] 家庭WiFi连接成功");
    initWebSocket();
  }
  
  if (wifiConnected && WiFi.status() != WL_CONNECTED) {
    wifiConnected = false;
    wsConnected = false;
    wsInitialized = false;
    DPRINTLN("[WiFi] 家庭WiFi断开");
  }
  
  static unsigned long lastDebug = 0;
  #if SERIAL_DEBUG_ENABLE
  if (millis() - lastDebug > 10000) {
    lastDebug = millis();
    DPRINT("[STATUS] P1:"); DPRINT(pwm1Level);
    DPRINT(" P2:"); DPRINT(pwm2Level);
    DPRINT(" LED:"); DPRINT(pwm3Level);
    DPRINT(" WS:"); DPRINTLN(wsConnected ? "ON" : "OFF");
  }
  #endif
}
