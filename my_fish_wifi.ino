#include <ESP32Servo.h>
#include <EEPROM.h>
#include <U8g2lib.h>
#include <Wire.h>
#include <WiFi.h>
#include <WebServer.h>
#include <DNSServer.h>

// ==================== 前置信息 ====================
// ESP32-wroom, 128MB flash, 4MB psram, 用于控制养鱼生态箱
// 作者: 李无忧
// 版本: 2.0.0
// 日期: 2026-6-29
// 描述: 无WiFi版本的养鱼生态箱控制代码

// ==================== 引脚定义 ====================
// 继电器引脚定义 (使用普通GPIO，避开特殊引脚)
#define RELAY_PIN     25   // 继电器1引脚，控制12V电源（5V共用EN）
#define RELAY2_PIN    26   // 继电器2引脚，目前未使用
// PWM引脚定义
#define PWM1_PIN      18   // 水泵1 - GPIO18, LEDC通道4
#define PWM2_PIN      19   // 水泵2 - GPIO19, LEDC通道5
#define PWM3_PIN      23   // 灯条 - GPIO23, LEDC通道6
#define SERVO_PIN     13   // 舵机 - GPIO13 (SG90), 定时器0
// 按钮引脚定义 (避开BOOT/GPIO0，使用普通GPIO)
#define BUTTON1_PIN   15   // 按钮1 - GPIO15 (开关机控制)
#define BUTTON2_PIN   14   // 按钮2 - GPIO14 (水泵1控制) - 原GPIO2连接板载LED
#define BUTTON3_PIN   4    // 按钮3 - GPIO4 (水泵2控制)
#define BUTTON4_PIN   5    // 按钮4 - GPIO5 (灯条控制)
#define BUTTON5_PIN   12   // 按钮5 - GPIO12 (舵机控制)
// OLED引脚定义 (I2C) - ESP32默认硬件I2C引脚
#define OLED_SDA_PIN  21   // OLED SDA - GPIO21
#define OLED_SCL_PIN  22   // OLED SCL - GPIO22
// ADC引脚定义 (仅使用ADC1)
#define ADC_PIN_WATER_QUALITY  34   // 水质检测 - ADC1_CH6
#define ADC_PIN_WATER_TEMP     35   // 水温检测 - ADC1_CH7
#define ADC_PIN_WATER_TEMP_REF 32   // 水温检测参考电压 - ADC1_CH4
// 蜂鸣器引脚定义 (使用LEDC通道产生音调)
#define BUZZER_PIN    33   // 蜂鸣器 - GPIO33, LEDC通道7

// ==================== LEDC通道分配 (ESP32 Arduino Core 3.x) ====================
#define LEDC_FREQ     1000    // PWM频率 1kHz
#define LEDC_RES      8       // 8位分辨率 (0-255)
#define LEDC_CH_PUMP1  4      // 水泵1 - 通道4
#define LEDC_CH_PUMP2  5      // 水泵2 - 通道5
#define LEDC_CH_LIGHT  6      // 灯条 - 通道6
#define LEDC_CH_BUZZER 7      // 蜂鸣器 - 通道7

// ==================== 系统参数 ====================
#define POWER_ON_DELAY 2000    // 开机长按时间 (ms)
#define POWER_OFF_DELAY 2000   // 关机长按时间 (ms)
#define PUMP_START_DELAY 1500 // 水泵长按启动时间 (ms)
#define PUMP_OFF_DELAY 1500   // 水泵长按关闭时间 (ms)

// ==================== 蜂鸣器音调定义 ====================
#define BUZZER_TONE_SHORT   1000  // 短提示音频率 (Hz)
#define BUZZER_TONE_SUCCESS 1500  // 成功提示音频率 (Hz)
#define BUZZER_TONE_ERROR   800   // 错误提示音频率 (Hz)
#define BUZZER_TONE_ALARM   2000  // 报警提示音频率 (Hz)
#define BUZZER_DURATION_SHORT  100  // 短提示音时长 (ms)
#define BUZZER_DURATION_LONG   500  // 长提示音时长 (ms)

// ==================== 舵机控制参数 ====================
#define SERVO_LEFT_LIMIT  0      // 左限位角度 (0-180)
#define SERVO_RIGHT_LIMIT 180    // 右限位角度 (0-180)
#define SERVO_RIGHT_STOP_TIME 1000 // 右限位停顿时间 (ms)
#define SERVO_MOVE_SPEED 50       // 舵机移动速度 (度/秒)

// ==================== 水温ADC参数 ====================
#define ADC_TEMP_RESISTANCE 10000 // 热敏电阻阻值 (欧姆)
#define ADC_TEMP_REF 25          // 参考温度 (摄氏度)
#define ADC_TEMP_REF_RESISTANCE 10000 // 参考电阻阻值 (欧姆)
#define ADC_TEMP_B_VALUE 3950    // 热敏电阻B值 (K)
#define ADC_TEMP_CORRECT_ENABLE false // 是否开启水温校准(默认关闭)

// ==================== 串口调试参数 ====================
#define SERIAL_BAUDRATE 115200   // 串口波特率
#define SERIAL_DEBUG_ENABLE true // 是否开启串口调试

// ==================== WiFi参数 ====================
#define AP_TIMEOUT 60000         // AP无连接超时时间 (ms)，1分钟
#define AP_CHANNEL 6             // AP信道
#define MAX_CONNECTIONS 1        // 最大连接数
#define DNS_PORT 53              // DNS端口
#define EEPROM_PHONE_ADDR 0      // 手机号存储地址
#define EEPROM_WIFI_ADDR 50      // WiFi配置存储地址

// ==================== 全局变量 ====================
bool systemPowered = true;        // 系统开关状态（默认开机）
bool relay1State = false;        // 继电器状态（12V/5V共用EN）

// PWM档位 (0-3)
int pwm1Level = 0;
int pwm2Level = 0;
int pwm3Level = 0;
const int pwmValues[4] = {0, 85, 170, 255};

// 舵机状态
int servoAngle = 90;
bool servoMoving = false;
bool servoReturning = false;
unsigned long servoMoveStartTime = 0;
int servoTargetAngle = 90;

// 按钮状态
bool lastButton1 = HIGH;
bool lastButton2 = HIGH;
bool lastButton3 = HIGH;
bool lastButton4 = HIGH;
bool lastButton5 = HIGH;
unsigned long button1PressTime = 0;
unsigned long button2PressTime = 0;
unsigned long button3PressTime = 0;
unsigned long button4PressTime = 0;
unsigned long button5PressTime = 0;
bool button1LongPressed = false;
bool button2LongPressed = false;
bool button3LongPressed = false;
bool button4LongPressed = false;
bool button5LongPressed = false;

// ADC传感器值
int adcWQRaw = 0;
int adcTempRaw = 0;
int adcTempRefRaw = 0;
float adcWQVoltage = 0.0;
float adcTempVoltage = 0.0;
float adcTempRefVoltage = 0.0;
float adcCorrectedVoltage = 0.0;

// OLED状态
bool oledInitialized = false;

// WiFi状态
bool wifiAPEnabled = false;       // AP模式是否开启
bool wifiConnected = false;       // 是否已连接家庭WiFi
unsigned long apStartTime = 0;    // AP开启时间
unsigned long apLastConnectedTime = 0; // 最后有设备连接的时间
String deviceMAC = "";            // 设备MAC地址
String deviceKey = "";            // 设备密钥（MAC后8位）
String phoneNumber = "";          // 用户手机号
String homeWiFiSSID = "";         // 家庭WiFi名称
String homeWiFiPassword = "";     // 家庭WiFi密码

// 全局对象
Servo myServo;
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);
WebServer server(80);
DNSServer dnsServer;

// ==================== 宏定义 ====================
#if SERIAL_DEBUG_ENABLE
  #define SerialPrint(x) Serial.print(x)
  #define SerialPrintln(x) Serial.println(x)
#else
  #define SerialPrint(x)
  #define SerialPrintln(x)
#endif

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

// ==================== 蜂鸣器控制 ====================
void playBuzzerTone(int freq, int duration) {
  #if SERIAL_DEBUG_ENABLE
  ledcAttachChannel(BUZZER_PIN, freq, LEDC_RES, LEDC_CH_BUZZER);
  ledcWrite(BUZZER_PIN, 128);
  delay(duration);
  ledcWrite(BUZZER_PIN, 0);
  #endif
}

// ==================== 系统开关控制 ====================
void powerOnSystem() {
  systemPowered = true;
  
  if (!relay1State) {
    relay1State = true;
    digitalWrite(RELAY_PIN, HIGH);
    SerialPrintln("[POWER] 继电器开启 (12V/5V电源)");
    
    // 等待电源稳定
    delay(500);
    
    // 重新初始化OLED
    Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
    if (!u8g2.begin()) {
      SerialPrintln("[OLED] 初始化失败!");
      oledInitialized = false;
    } else {
      u8g2.setFont(u8g2_font_ncenB08_tr);
      oledInitialized = true;
      SerialPrintln("[OLED] 初始化成功");
    }
  }
  playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
  SerialPrintln("[POWER] 系统开机");
}

void powerOffSystem() {
  // 关闭所有输出
  pwm1Level = 0;
  pwm2Level = 0;
  pwm3Level = 0;
  ledcWrite(PWM1_PIN, 0);
  ledcWrite(PWM2_PIN, 0);
  ledcWrite(PWM3_PIN, 0);
  
  // 关闭WiFi
  stopWiFiAP();
  WiFi.disconnect();
  
  // 释放I2C总线（避免OLED断电后干扰ESP32）
  Wire.end();
  pinMode(OLED_SDA_PIN, INPUT_PULLUP);
  pinMode(OLED_SCL_PIN, INPUT_PULLUP);
  
  relay1State = false;
  digitalWrite(RELAY_PIN, LOW);
  
  oledInitialized = false;
  systemPowered = false;
  
  playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
  SerialPrintln("[POWER] 系统关机");
}

// ==================== 设备ID初始化 ====================
void initDeviceID() {
  // 先设置WiFi为AP模式，才能获取真实的MAC地址
  WiFi.mode(WIFI_AP_STA);
  delay(100);
  deviceMAC = WiFi.macAddress();
  
  String macWithoutColons = deviceMAC;
  macWithoutColons.replace(":", "");
  
  if (macWithoutColons.length() >= 8) {
    deviceKey = macWithoutColons.substring(macWithoutColons.length() - 8);
  } else {
    deviceKey = "00000000";
  }
  
  SerialPrint("[DEVICE] MAC地址: ");
  SerialPrintln(deviceMAC);
  SerialPrint("[DEVICE] 设备密钥: ");
  SerialPrintln(deviceKey);
}

// ==================== WiFi AP控制 ====================
void startWiFiAP() {
  if (wifiAPEnabled) return;
  
  String apSSID = "fish-manager-" + deviceKey;
  
  WiFi.mode(WIFI_AP_STA);
  // 设置WiFi密码为12345678
  WiFi.softAP(apSSID.c_str(), "12345678");
  
  delay(500);
  
  // DNS所有域名都解析到AP IP
  IPAddress apIP = WiFi.softAPIP();
  dnsServer.start(DNS_PORT, "*", apIP);
  
  initWebServer();
  server.begin();
  
  wifiAPEnabled = true;
  apStartTime = millis();
  apLastConnectedTime = millis();
  
  SerialPrint("[WiFi] AP启动: ");
  SerialPrintln(apSSID);
  SerialPrint("[WiFi] AP密码: 12345678");
  SerialPrint("[WiFi] AP地址: ");
  SerialPrintln(apIP.toString());
}

void stopWiFiAP() {
  if (!wifiAPEnabled) return;
  
  dnsServer.stop();
  server.stop();
  
  // 关闭AP模式
  WiFi.softAPdisconnect(true);
  
  // 如果已连接家庭WiFi，切换到STA模式；否则完全关闭WiFi
  if (wifiConnected && WiFi.status() == WL_CONNECTED) {
    WiFi.mode(WIFI_STA);
  } else {
    WiFi.mode(WIFI_OFF);
    wifiConnected = false;
  }
  
  wifiAPEnabled = false;
  
  SerialPrintln("[WiFi] AP已关闭");
}

void handleWiFiAPTimeout() {
  if (!wifiAPEnabled) return;
  
  int stationCount = WiFi.softAPgetStationNum();
  
  if (stationCount > 0) {
    apLastConnectedTime = millis();
    return;
  }
  
  unsigned long timeoutReference = (apStartTime == apLastConnectedTime) ? apStartTime : apLastConnectedTime;
  
  if (millis() - timeoutReference >= AP_TIMEOUT) {
    stopWiFiAP();
    SerialPrintln("[WiFi] AP超时关闭");
  }
}

void connectToHomeWiFiBackground() {
  if (homeWiFiSSID.isEmpty()) return;
  if (WiFi.status() == WL_CONNECTED) return;
  
  SerialPrint("[WiFi] 后台连接家庭WiFi: ");
  SerialPrintln(homeWiFiSSID);
  WiFi.begin(homeWiFiSSID.c_str(), homeWiFiPassword.c_str());
}

void connectToHomeWiFi() {
  if (homeWiFiSSID.isEmpty()) return;
  
  SerialPrint("[WiFi] 连接家庭WiFi: ");
  SerialPrintln(homeWiFiSSID);
  
  WiFi.begin(homeWiFiSSID.c_str(), homeWiFiPassword.c_str());
  
  unsigned long startTime = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - startTime < 10000) {
    delay(500);
    SerialPrint(".");
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    wifiConnected = true;
    SerialPrintln("");
    SerialPrint("[WiFi] 连接成功, IP: ");
    SerialPrintln(WiFi.localIP().toString());
    playBuzzerTone(BUZZER_TONE_SUCCESS, BUZZER_DURATION_SHORT);
    // 注意：这里不再关闭AP，AP会保持开启直到超时
  } else {
    wifiConnected = false;
    SerialPrintln("");
    SerialPrintln("[WiFi] 连接失败");
    playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
  }
}

// ==================== Web服务器 ====================
void initWebServer() {
  server.on("/", HTTP_GET, handleRoot);
  server.on("/save", HTTP_POST, handleSaveConfig);
  server.on("/status", HTTP_GET, handleStatus);
  server.on("/scan", HTTP_GET, handleWiFiScan);
  
  // Captive Portal常见验证URL
  server.on("/generate_204", HTTP_GET, handleCaptivePortal);
  server.on("/gen_204", HTTP_GET, handleCaptivePortal);
  server.on("/hotspot-detect.html", HTTP_GET, handleCaptivePortal);
  server.on("/ncsi.txt", HTTP_GET, handleCaptivePortal);
  server.on("/connectivitycheck.gstatic.com", HTTP_GET, handleCaptivePortal);
  server.on("/captive.apple.com", HTTP_GET, handleCaptivePortal);
  
  // Captive Portal: 捕获所有其他请求，重定向到首页
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
  html += "button:hover{background:#45a049;}.info{color:#666;font-size:14px;margin-bottom:15px;}";
  html += ".code{font-family:monospace;color:#e74c3c;background:#f9f9f9;padding:5px;border-radius:3px;}";
  html += ".success{background:#d4edda;color:#155724;padding:10px;border-radius:4px;margin:10px 0;}";
  html += ".loading{color:#666;text-align:center;padding:20px;}";
  html += "</style></head><body>";
  
  html += "<div class='card'><h2>🔐 设备信息</h2>";
  html += "<div class='info'><b>设备唯一码:</b><br><span class='code'>" + deviceMAC + "</span></div>";
  html += "<div class='info'><b>设备密钥:</b><br><span class='code'>" + deviceKey + "</span></div>";
  html += "</div>";
  
  html += "<div class='card'><h2>📱 用户配置</h2>";
  html += "<form id='configForm' action='/save' method='POST'>";
  html += "<label>手机号:</label><input type='tel' name='phone' placeholder='请输入手机号' value='" + phoneNumber + "' maxlength='11' required><br>";
  html += "<label>选择家庭WiFi:</label>";
  html += "<select name='ssid' id='wifiSelect' onchange='onSSIDChange()'>";
  html += "<option value=''>-- 请选择WiFi --</option>";
  html += "</select>";
  html += "<div id='selectedSSID' style='margin:10px 0;color:#666;'></div>";
  html += "<label>WiFi密码:</label><input type='password' name='password' id='password' placeholder='请输入WiFi密码' required><br>";
  html += "<button type='submit' id='submitBtn'>保存配置</button>";
  html += "</form>";
  html += "<div id='loadingMsg' class='loading' style='display:none;'>正在扫描WiFi...</div>";
  html += "</div>";
  
  html += "<div id='successMsg' class='card success' style='display:none;'>";
  html += "<h2>✅ 配置已保存</h2>";
  html += "<div id='successDetail'></div>";
  html += "</div>";
  
  if (wifiConnected) {
    html += "<div class='card' style='background:#d4edda;color:#155724;'><h2>✅ WiFi已连接</h2>";
    html += "<div class='info'>IP地址: " + WiFi.localIP().toString() + "</div>";
    html += "</div>";
  }
  
  html += "<script>";
  html += "function scanWiFi(){fetch('/scan').then(r=>r.json()).then(d=>{";
  html += "var s=document.getElementById('wifiSelect');";
  html += "d.forEach(function(w){var o=document.createElement('option');o.value=w.ssid;o.text=w.ssid+(w.rssi>-70?' (弱)':w.rssi>-50?' (中)':' (强)');if(w.ssid=='" + homeWiFiSSID + "')o.selected=true;s.appendChild(o);});";
  html += "document.getElementById('loadingMsg').style.display='none';";
  html += "if('" + homeWiFiSSID + "'){document.getElementById('selectedSSID').innerHTML='已选: <b>" + homeWiFiSSID + "</b>';document.getElementById('password').value='" + homeWiFiPassword + "';}";
  html += "});}";
  html += "function onSSIDChange(){var s=document.getElementById('wifiSelect');document.getElementById('selectedSSID').innerHTML='已选: <b>'+s.value+'</b>';}";
  html += "document.getElementById('configForm').onsubmit=function(){document.getElementById('submitBtn').disabled=true;document.getElementById('submitBtn').innerText='保存中...';return true;};";
  html += "scanWiFi();";
  html += "</script></body></html>";
  
  server.send(200, "text/html; charset=UTF-8", html);
}

void handleSaveConfig() {
  if (server.hasArg("phone")) {
    phoneNumber = server.arg("phone");
    EEPROM.begin(256);
    for (int i = 0; i < 20; i++) {
      EEPROM.write(EEPROM_PHONE_ADDR + i, 0);
    }
    for (int i = 0; i < phoneNumber.length() && i < 20; i++) {
      EEPROM.write(EEPROM_PHONE_ADDR + i, phoneNumber[i]);
    }
    EEPROM.commit();
    EEPROM.end();
    SerialPrint("[CONFIG] 手机号已保存: ");
    SerialPrintln(phoneNumber);
  }
  
  if (server.hasArg("ssid")) {
    homeWiFiSSID = server.arg("ssid");
  }
  
  if (server.hasArg("password")) {
    homeWiFiPassword = server.arg("password");
  }
  
  if (!homeWiFiSSID.isEmpty()) {
    EEPROM.begin(256);
    for (int i = 0; i < 100; i++) {
      EEPROM.write(EEPROM_WIFI_ADDR + i, 0);
    }
    int addr = EEPROM_WIFI_ADDR;
    for (int i = 0; i < homeWiFiSSID.length() && i < 50; i++) {
      EEPROM.write(addr++, homeWiFiSSID[i]);
    }
    EEPROM.write(addr++, 0);
    for (int i = 0; i < homeWiFiPassword.length() && i < 50; i++) {
      EEPROM.write(addr++, homeWiFiPassword[i]);
    }
    EEPROM.commit();
    EEPROM.end();
    SerialPrint("[CONFIG] WiFi配置已保存");
  }
  
  // 显示成功页面
  String html = "<!DOCTYPE html><html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1.0'>";
  html += "<title>配置完成</title><style>";
  html += "body{font-family:sans-serif;margin:20px;background:#f0f0f0;display:flex;justify-content:center;align-items:center;min-height:100vh;}";
  html += ".card{background:white;border-radius:8px;padding:30px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.1);max-width:400px;}";
  html += "h2{color:#27ae60;margin-top:0;}p{color:#666;line-height:1.6;}";
  html += ".info{background:#f8f9fa;padding:10px;border-radius:4px;margin:15px 0;}";
  html += ".btn{background:#4CAF50;color:white;padding:12px 24px;border:none;border-radius:4px;cursor:pointer;font-size:16px;text-decoration:none;display:inline-block;margin-top:10px;}";
  html += ".btn:hover{background:#45a049;}";
  html += "</style></head><body>";
  html += "<div class='card'>";
  html += "<h2>✅ 配置已保存</h2>";
  html += "<div class='info'>";
  html += "<p>手机号: <b>" + phoneNumber + "</b></p>";
  html += "<p>WiFi: <b>" + homeWiFiSSID + "</b></p>";
  html += "</div>";
  html += "<p>ESP32正在尝试连接家庭WiFi...</p>";
  html += "<p style='font-size:12px;color:#999;'>如果连接成功，OLED将显示 Connected</p>";
  html += "<a href='/' class='btn'>返回配置页</a>";
  html += "</div></body></html>";
  
  server.send(200, "text/html; charset=UTF-8", html);
  
  // 延迟连接WiFi，让用户先看到成功消息
  delay(500);
  connectToHomeWiFi();
}

void handleStatus() {
  char json[200];
  snprintf(json, sizeof(json), "{\"wifiAPEnabled\":%s,\"wifiConnected\":%s,\"deviceKey\":\"%s\"}", 
           wifiAPEnabled ? "true" : "false", 
           wifiConnected ? "true" : "false",
           deviceKey.c_str());
  server.send(200, "application/json", json);
}

// ==================== ADC采样 ====================
void readADC() {
  // 读取水质ADC
  adcWQRaw = analogRead(ADC_PIN_WATER_QUALITY);
  adcWQVoltage = adcWQRaw * 3.3 / 4095.0;
  
  // 读取水温ADC
  adcTempRaw = analogRead(ADC_PIN_WATER_TEMP);
  adcTempVoltage = adcTempRaw * 3.3 / 4095.0;
  
  // 读取参考电压ADC
  adcTempRefRaw = analogRead(ADC_PIN_WATER_TEMP_REF);
  adcTempRefVoltage = adcTempRefRaw * 3.3 / 4095.0;
  
  // 如果开启校准，使用参考电压计算实际电压
  #if ADC_TEMP_CORRECT_ENABLE
    // 参考电压 * 2 = 实际供电电压
    adcCorrectedVoltage = adcTempRefVoltage * 2.0;
    // 使用实际电压重新计算水温ADC电压
    adcTempVoltage = adcTempRaw * adcCorrectedVoltage / 4095.0;
    SerialPrint("[ADC] 参考电压: ");
    SerialPrint(adcCorrectedVoltage);
    SerialPrintln("V (已校准)");
  #endif
}

// ==================== 舵机控制 ====================
void updateServo() {
  if (!systemPowered) return;
  
  if (servoMoving) {
    unsigned long elapsed = millis() - servoMoveStartTime;
    
    if (!servoReturning) {
      // 从当前位置移动到右限位
      int totalDistance = SERVO_RIGHT_LIMIT - servoTargetAngle;
      int distancePerInterval = (SERVO_MOVE_SPEED * 50) / 1000; // 50ms内移动的距离
      servoTargetAngle += min(distancePerInterval, SERVO_RIGHT_LIMIT - servoTargetAngle);
      
      if (servoTargetAngle >= SERVO_RIGHT_LIMIT) {
        servoTargetAngle = SERVO_RIGHT_LIMIT;
        servoReturning = true;
        servoMoveStartTime = millis();
        SerialPrintln("[SERVO] 到达右限位，停顿中...");
        delay(SERVO_RIGHT_STOP_TIME);
      }
    } else {
      // 从右限位返回左限位
      int distancePerInterval = (SERVO_MOVE_SPEED * 50) / 1000;
      servoTargetAngle -= min(distancePerInterval, servoTargetAngle - SERVO_LEFT_LIMIT);
      
      if (servoTargetAngle <= SERVO_LEFT_LIMIT) {
        servoTargetAngle = SERVO_LEFT_LIMIT;
        servoMoving = false;
        servoReturning = false;
        SerialPrintln("[SERVO] 返回左限位完成");
      }
    }
    
    myServo.write(servoTargetAngle);
    servoAngle = servoTargetAngle;
  }
}

void startServoMovement() {
  if (!systemPowered || servoMoving) return;
  
  servoMoving = true;
  servoReturning = false;
  servoTargetAngle = servoAngle;
  servoMoveStartTime = millis();
  SerialPrintln("[SERVO] 开始往返运动");
  playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
}

// ==================== 按钮处理 ====================
void handleButtons() {
  unsigned long currentTime = millis();
  
  int button1 = digitalRead(BUTTON1_PIN);
  int button2 = digitalRead(BUTTON2_PIN);
  int button3 = digitalRead(BUTTON3_PIN);
  int button4 = digitalRead(BUTTON4_PIN);
  int button5 = digitalRead(BUTTON5_PIN);
  
  // ========== 按键1: 开关机控制 ==========
  if (button1 == LOW && lastButton1 == HIGH) {
    button1PressTime = currentTime;
    button1LongPressed = false;
  } else if (button1 == LOW && !button1LongPressed) {
    if (currentTime - button1PressTime >= POWER_ON_DELAY && !systemPowered) {
      powerOnSystem();
      button1LongPressed = true;
    } else if (currentTime - button1PressTime >= POWER_OFF_DELAY && systemPowered) {
      powerOffSystem();
      button1LongPressed = true;
    }
  } else if (button1 == HIGH && lastButton1 == LOW && !button1LongPressed) {
    // 短按释放，不做处理
  }
  
  // 如果系统关机，不响应其他按键
  if (!systemPowered) {
    lastButton1 = button1;
    lastButton2 = button2;
    lastButton3 = button3;
    lastButton4 = button4;
    lastButton5 = button5;
    return;
  }
  
  // ========== 按键2: 水泵1控制 ==========
  if (button2 == LOW && lastButton2 == HIGH) {
    button2PressTime = currentTime;
    button2LongPressed = false;
  } else if (button2 == LOW && !button2LongPressed) {
    if (currentTime - button2PressTime >= PUMP_START_DELAY && pwm1Level == 0) {
      // 长按启动水泵1
      pwm1Level = 1;
      ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
      SerialPrint("[PUMP1] 长按启动, 档位: ");
      SerialPrintln(pwm1Level);
      button2LongPressed = true;
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    } else if (currentTime - button2PressTime >= PUMP_OFF_DELAY && pwm1Level > 0) {
      // 长按关闭水泵1
      pwm1Level = 0;
      ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
      SerialPrintln("[PUMP1] 长按关闭");
      button2LongPressed = true;
      playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
    }
  } else if (button2 == HIGH && lastButton2 == LOW && !button2LongPressed) {
    if (currentTime - button2PressTime < PUMP_START_DELAY && pwm1Level > 0) {
      // 短按切换档位
      pwm1Level = (pwm1Level % 3) + 1;
      ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
      SerialPrint("[PUMP1] 短按切换, 档位: ");
      SerialPrintln(pwm1Level);
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    }
  }
  
  // ========== 按键3: 水泵2控制 ==========
  if (button3 == LOW && lastButton3 == HIGH) {
    button3PressTime = currentTime;
    button3LongPressed = false;
  } else if (button3 == LOW && !button3LongPressed) {
    if (currentTime - button3PressTime >= PUMP_START_DELAY && pwm2Level == 0) {
      pwm2Level = 1;
      ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
      SerialPrint("[PUMP2] 长按启动, 档位: ");
      SerialPrintln(pwm2Level);
      button3LongPressed = true;
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    } else if (currentTime - button3PressTime >= PUMP_OFF_DELAY && pwm2Level > 0) {
      pwm2Level = 0;
      ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
      SerialPrintln("[PUMP2] 长按关闭");
      button3LongPressed = true;
      playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
    }
  } else if (button3 == HIGH && lastButton3 == LOW && !button3LongPressed) {
    if (currentTime - button3PressTime < PUMP_START_DELAY && pwm2Level > 0) {
      pwm2Level = (pwm2Level % 3) + 1;
      ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
      SerialPrint("[PUMP2] 短按切换, 档位: ");
      SerialPrintln(pwm2Level);
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    }
  }
  
  // ========== 按键4: 灯条控制 ==========
  if (button4 == LOW && lastButton4 == HIGH) {
    button4PressTime = currentTime;
    button4LongPressed = false;
  } else if (button4 == LOW && !button4LongPressed) {
    if (currentTime - button4PressTime >= PUMP_START_DELAY && pwm3Level == 0) {
      pwm3Level = 1;
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      SerialPrint("[LIGHT] 长按启动, 档位: ");
      SerialPrintln(pwm3Level);
      button4LongPressed = true;
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    } else if (currentTime - button4PressTime >= PUMP_OFF_DELAY && pwm3Level > 0) {
      pwm3Level = 0;
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      SerialPrintln("[LIGHT] 长按关闭");
      button4LongPressed = true;
      playBuzzerTone(BUZZER_TONE_ERROR, BUZZER_DURATION_SHORT);
    }
  } else if (button4 == HIGH && lastButton4 == LOW && !button4LongPressed) {
    if (currentTime - button4PressTime < PUMP_START_DELAY && pwm3Level > 0) {
      pwm3Level = (pwm3Level % 3) + 1;
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      SerialPrint("[LIGHT] 短按切换, 档位: ");
      SerialPrintln(pwm3Level);
      playBuzzerTone(BUZZER_TONE_SHORT, BUZZER_DURATION_SHORT);
    }
  }
  
  // ========== 按键5: 舵机控制 ==========
  if (button5 == LOW && lastButton5 == HIGH) {
    button5PressTime = currentTime;
    button5LongPressed = false;
  } else if (button5 == HIGH && lastButton5 == LOW && !button5LongPressed) {
    if (currentTime - button5PressTime < 500) {
      // 短按启动舵机往返运动
      startServoMovement();
    }
  }
  
  lastButton1 = button1;
  lastButton2 = button2;
  lastButton3 = button3;
  lastButton4 = button4;
  lastButton5 = button5;
}

// ==================== OLED显示更新 ====================
void updateOLED() {
  // 如果系统关机或OLED未初始化，不更新显示
  if (!systemPowered || !oledInitialized) return;
  
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  
  // 第一行: M1, M2, LED状态
  u8g2.setCursor(0, 10);
  u8g2.print("M1:");
  u8g2.print(pwm1Level);
  u8g2.print("  M2:");
  u8g2.print(pwm2Level);
  u8g2.print("  LED:");
  u8g2.print(pwm3Level);
  
  // 第二行: 舵机状态
  u8g2.setCursor(0, 22);
  u8g2.print("Servo:");
  u8g2.print(servoMoving ? "busy" : "free");
  
  // 第三行: 温度和水质电压（同一行）
  u8g2.setCursor(0, 34);
  u8g2.print("Temp:");
  u8g2.print(adcTempVoltage, 1);
  u8g2.print("V");
  u8g2.print("  WQ:");
  u8g2.print(adcWQVoltage, 1);
  u8g2.print("V");
  
  // 第四行: WiFi状态
  u8g2.setCursor(0, 46);
  u8g2.print("WiFi:");
  if (wifiConnected) {
    u8g2.print("Connected");
  } else if (wifiAPEnabled) {
    u8g2.print("AP:");
    u8g2.print(deviceKey.substring(0, 4));
  } else {
    u8g2.print("Off");
  }
  
  u8g2.sendBuffer();
}

// ==================== 初始化 ====================
void setup() {
  Serial.begin(SERIAL_BAUDRATE);
  SerialPrintln("\n==========================================");
  SerialPrintln("  鱼缸生态系统控制器 v2.0");
  SerialPrintln("==========================================");
  
  // 初始化继电器引脚（默认关闭，12V和5V共用EN）
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  
  // 初始化按钮引脚
  pinMode(BUTTON1_PIN, INPUT_PULLUP);
  pinMode(BUTTON2_PIN, INPUT_PULLUP);
  pinMode(BUTTON3_PIN, INPUT_PULLUP);
  pinMode(BUTTON4_PIN, INPUT_PULLUP);
  pinMode(BUTTON5_PIN, INPUT_PULLUP);
  
  // 初始化PWM (ESP32 Arduino Core 3.x API)
  ledcAttachChannel(PWM1_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP1);
  ledcAttachChannel(PWM2_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP2);
  ledcAttachChannel(PWM3_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_LIGHT);
  ledcAttachChannel(BUZZER_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_BUZZER);
  
  // 设置初始PWM（关闭）
  ledcWrite(PWM1_PIN, 0);
  ledcWrite(PWM2_PIN, 0);
  ledcWrite(PWM3_PIN, 0);
  
  // 初始化舵机
  ESP32PWM::allocateTimer(0);
  myServo.setPeriodHertz(50);
  myServo.attach(SERVO_PIN, 500, 2500);
  myServo.write(servoAngle);
  
  // 初始化蜂鸣器
  ledcWrite(BUZZER_PIN, 0);
  
  SerialPrintln("[INIT] PWM和舵机初始化完成");
  
  // 初始化ADC
  analogReadResolution(12);  // 12位ADC分辨率
  
  SerialPrintln("[INIT] ADC初始化完成");
  
  // 初始化I2C和OLED
  Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
  if (!u8g2.begin()) {
    SerialPrintln("[OLED] 初始化失败!");
    oledInitialized = false;
  } else {
    u8g2.setFont(u8g2_font_ncenB08_tr);
    oledInitialized = true;
    SerialPrintln("[OLED] 初始化成功");
  }
  
  // 初始化设备ID（无论开机与否都执行）
  initDeviceID();
  
  // 读取EEPROM配置
  EEPROM.begin(256);
  
  // 读取手机号
  phoneNumber = "";
  for (int i = 0; i < 20; i++) {
    char c = EEPROM.read(EEPROM_PHONE_ADDR + i);
    if (c == 0) break;
    phoneNumber += c;
  }
  if (phoneNumber.length() > 0) {
    SerialPrint("[CONFIG] 读取手机号: ");
    SerialPrintln(phoneNumber);
  }
  
  // 读取WiFi配置
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
  if (homeWiFiSSID.length() > 0) {
    SerialPrint("[CONFIG] 读取WiFi: ");
    SerialPrintln(homeWiFiSSID);
  }
  
  EEPROM.end();
  
  SerialPrintln("\n==========================================");
  SerialPrintln("  系统就绪");
  SerialPrintln("  默认处于开机状态");
  SerialPrintln("==========================================\n");
  
  // 根据systemPowered状态决定是否开机
  if (systemPowered) {
    digitalWrite(RELAY_PIN, HIGH);
    relay1State = true;
    SerialPrintln("[POWER] 系统已开机，继电器已开启");
    
    delay(500);
    Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
    if (!u8g2.begin()) {
      SerialPrintln("[OLED] 开机后初始化失败!");
      oledInitialized = false;
    } else {
      u8g2.setFont(u8g2_font_ncenB08_tr);
      oledInitialized = true;
      SerialPrintln("[OLED] 开机后初始化成功");
    }
    
    // 总是先启动AP（让用户可以随时切换网络）
    // 如果已有WiFi配置，ESP32也会同时尝试连接家庭WiFi
    startWiFiAP();
    
    // 如果已有家庭WiFi配置，同时尝试后台连接（不阻塞）
    if (!homeWiFiSSID.isEmpty()) {
      SerialPrintln("[WiFi] 已保存WiFi配置，正在后台连接...");
      connectToHomeWiFiBackground();
    }
  } else {
    digitalWrite(RELAY_PIN, LOW);
    relay1State = false;
    SerialPrintln("[POWER] 系统关机状态");
  }
}

// ==================== 主循环 ====================
void loop() {
  // 处理按钮
  handleButtons();
  
  // 更新舵机位置
  updateServo();
  
  // ADC采样（每100ms）
  static unsigned long lastADCRead = 0;
  if (millis() - lastADCRead > 100) {
    lastADCRead = millis();
    readADC();
  }
  
  // OLED显示更新（每500ms）
  static unsigned long lastOLEDUpdate = 0;
  if (millis() - lastOLEDUpdate > 500) {
    lastOLEDUpdate = millis();
    updateOLED();
  }
  
  // WiFi AP超时检测
  handleWiFiAPTimeout();
  
  // 检查家庭WiFi连接状态
  if (!homeWiFiSSID.isEmpty() && WiFi.status() == WL_CONNECTED && !wifiConnected) {
    wifiConnected = true;
    SerialPrintln("[WiFi] 家庭WiFi连接成功");
  }
  
  // DNS和Web服务器处理（只要AP开启就一直处理）
  if (wifiAPEnabled) {
    dnsServer.processNextRequest();
    server.handleClient();
  }
  
  // 调试信息输出（每5秒）
  static unsigned long lastDebugPrint = 0;
  if (SERIAL_DEBUG_ENABLE && millis() - lastDebugPrint > 5000) {
    lastDebugPrint = millis();
    SerialPrintln("\n--- 系统状态 ---");
    SerialPrint("电源状态: ");
    SerialPrintln(systemPowered ? "开机" : "关机");
    SerialPrint("水泵1档位: ");
    SerialPrintln(pwm1Level);
    SerialPrint("水泵2档位: ");
    SerialPrintln(pwm2Level);
    SerialPrint("灯条档位: ");
    SerialPrintln(pwm3Level);
    SerialPrint("舵机状态: ");
    SerialPrintln(servoMoving ? "busy" : "free");
    SerialPrint("水温电压: ");
    SerialPrint(adcTempVoltage);
    SerialPrintln("V");
    SerialPrint("水质电压: ");
    SerialPrint(adcWQVoltage);
    SerialPrintln("V");
    SerialPrint("WiFi AP: ");
    SerialPrintln(wifiAPEnabled ? "开启" : "关闭");
    SerialPrint("WiFi连接: ");
    SerialPrintln(wifiConnected ? "已连接" : "未连接");
    SerialPrint("空闲内存: ");
    SerialPrint(ESP.getFreeHeap() / 1024);
    SerialPrintln(" KB");
    SerialPrintln("-------------------\n");
  }
}