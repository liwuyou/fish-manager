#include <WiFi.h>
#include <WebServer.h>
#include <DNSServer.h>
#include <ESP32Servo.h>
#include <EEPROM.h>

// ==================== 配置常量 ====================
// 引脚定义
#define RELAY_PIN     4    // 继电器引脚
#define PWM1_PIN      12   // 水泵1 - GPIO12
#define PWM2_PIN      14   // 水泵2 - GPIO14
#define PWM3_PIN      27   // 灯条 - GPIO27
#define SERVO_PIN     13   // 舵机 - GPIO13 (SG90)
#define BUTTON1_PIN   15   // 按钮1 - GPIO15
#define BUTTON2_PIN   2    // 按钮2 - GPIO2
#define BUTTON3_PIN   0    // 按钮3 - GPIO0
#define BUTTON4_PIN   5    // 按钮4 - GPIO5

// LEDC配置 - 适用于ESP32 Arduino Core 3.x版本
#define LEDC_FREQ     1000    // 1kHz
#define LEDC_RES      8       // 8位分辨率 (0-255)

// LEDC通道分配 (避开舵机使用的定时器0)
// 注意:ESP32 Arduino Core 3.x使用ledcAttachChannel()显式分配通道
#define LEDC_CH_PUMP1  4  // 水泵1 - 通道4 (避开舵机的通道)
#define LEDC_CH_PUMP2  5  // 水泵2 - 通道5
#define LEDC_CH_LIGHT  6  // 灯条 - 通道6

// WiFi配置
const char* AP_SSID = "fish-manager";
const char* AP_PASSWORD = "12345678";

// DNS端口
const byte DNS_PORT = 53;

// EEPROM存储地址
#define EEPROM_SIZE   512
#define WIFI_SSID_ADDR 0
#define WIFI_PASS_ADDR 64
#define SERVO_MIN_ADDR 128
#define SERVO_MAX_ADDR 130

// ==================== 全局对象 ====================
WebServer server(80);
DNSServer dnsServer;
Servo myServo;  // SG90舵机

// ==================== 全局变量 ====================
// PWM档位 (0-3) - 默认0档(关闭)
int pwm1Level = 0;
int pwm2Level = 0;
int pwm3Level = 0;
const int pwmValues[4] = {0, 85, 170, 255};

bool relayState = false;
int servoAngle = 90;
int servoMinAngle = 0;
int servoMaxAngle = 180;
int servoHomeAngle = 90;

bool wifiConnected = false;
unsigned long lastWifiCheck = 0;

// 按钮状态
bool lastButton1 = HIGH;
bool lastButton2 = HIGH;
bool lastButton3 = HIGH;
bool lastButton4 = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

// 长按检测变量
unsigned long button1PressTime = 0;
unsigned long button2PressTime = 0;
unsigned long button3PressTime = 0;
unsigned long button4PressTime = 0;
const unsigned long longPressDelay = 1000;

bool button1LongPressed = false;
bool button2LongPressed = false;
bool button3LongPressed = false;
bool button4LongPressed = false;

// 舵机模式（0:左限位, 1:右限位, 2:回正）
int servoMode = 2;

struct WiFiConfig {
  String ssid;
  String password;
  bool configured;
};

WiFiConfig wifiConfig;

// ==================== 函数声明 ====================
void handleRoot();
void handleSetPWM();
void handleSetRelay();
void handleSetServo();
void handleSetServoLimits();
void handleServoHome();
void handleWiFiConfig();
void handleWiFiScan();
void handleSaveWiFi();
void handleStatus();
void handleRestart();
void handleNotFound();
void connectToWiFi();
void checkWiFiConnection();
void handleButtons();
void printStatus();
void saveServoLimits();
void loadServoLimits();

// ==================== HTML页面 ====================
String getMainPage() {
  String html = "<!DOCTYPE html><html>";
  html += "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>";
  html += "<title>🐟 鱼缸管理系统</title>";
  html += "<style>";
  html += "body{font-family:Arial;max-width:800px;margin:0 auto;padding:20px;background:#f0f8ff;}";
  html += "h1{color:#2c3e50;text-align:center;border-bottom:3px solid #3498db;padding-bottom:10px;}";
  html += ".card{background:white;border-radius:10px;padding:20px;margin:15px 0;box-shadow:0 2px 5px rgba(0,0,0,0.1);}";
  html += ".card h3{color:#2c3e50;margin-top:0;}";
  html += "button{background:#3498db;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;margin:5px;}";
  html += "button:hover{background:#2980b9;}";
  html += ".btn-on{background:#2ecc71;}";
  html += ".btn-off{background:#e74c3c;}";
  html += ".btn-danger{background:#e74c3c;}";
  html += ".btn-danger:hover{background:#c0392b;}";
  html += ".btn-success{background:#2ecc71;}";
  html += ".btn-success:hover{background:#27ae60;}";
  html += ".btn-warning{background:#f39c12;}";
  html += ".btn-warning:hover{background:#e67e22;}";
  html += ".status{display:inline-block;padding:5px 15px;border-radius:20px;margin:5px;}";
  html += ".status-on{background:#2ecc71;color:white;}";
  html += ".status-off{background:#e74c3c;color:white;}";
  html += ".pwm-btn{width:60px;padding:8px;margin:3px;}";
  html += ".pwm-btn.active{background:#3498db;color:white;border:2px solid #2980b9;}";
  html += ".level-indicator{display:inline-block;padding:5px 15px;border-radius:10px;background:#ecf0f1;margin:5px;}";
  html += ".servo-limits{display:flex;gap:15px;flex-wrap:nowrap;margin:10px 0;}";
  html += ".servo-limits div{display:flex;align-items:center;gap:5px;}";
  html += ".servo-limits input{width:70px;padding:6px;border:1px solid #ddd;border-radius:5px;}";
  html += ".servo-control-group{display:flex;gap:10px;flex-wrap:wrap;margin:10px 0;}";
  html += "input[type='text'],input[type='password']{width:100%;padding:10px;margin:5px 0;border:1px solid #ddd;border-radius:5px;}";
  html += "select{width:100%;padding:10px;margin:5px 0;border:1px solid #ddd;border-radius:5px;}";
  html += ".note{font-size:12px;color:#666;margin-top:10px;}";
  html += "</style>";
  html += "</head><body>";
  
  html += "<h1>🐟 鱼缸管理系统</h1>";
  
  html += "<div class='card'>";
  html += "<h3>📶 网络状态</h3>";
  if (wifiConnected) {
    html += "<span class='status status-on'>已连接到互联网</span>";
    html += "<br>IP: " + WiFi.localIP().toString();
  } else {
    html += "<span class='status status-off'>未连接到互联网</span>";
    html += "<br><a href='/wifi'><button>配置WiFi</button></a>";
  }
  html += "</div>";
  
  html += "<div class='card'>";
  html += "<h3>💧 水泵和灯光控制</h3>";
  
  html += "<div style='margin:10px 0;'>";
  html += "<b>水泵1:</b> <span class='level-indicator'>档位: " + String(pwm1Level) + "</span>";
  html += "<div>";
  for (int i = 0; i < 4; i++) {
    String label = (i == 0) ? "关" : String(i) + "档";
    String active = (pwm1Level == i) ? "active" : "";
    html += "<button class='pwm-btn " + active + "' onclick='setPWM(1," + String(i) + ")'>" + label + "</button>";
  }
  html += "</div></div>";
  
  html += "<div style='margin:10px 0;'>";
  html += "<b>水泵2:</b> <span class='level-indicator'>档位: " + String(pwm2Level) + "</span>";
  html += "<div>";
  for (int i = 0; i < 4; i++) {
    String label = (i == 0) ? "关" : String(i) + "档";
    String active = (pwm2Level == i) ? "active" : "";
    html += "<button class='pwm-btn " + active + "' onclick='setPWM(2," + String(i) + ")'>" + label + "</button>";
  }
  html += "</div></div>";
  
  html += "<div style='margin:10px 0;'>";
  html += "<b>灯条:</b> <span class='level-indicator'>档位: " + String(pwm3Level) + "</span>";
  html += "<div>";
  for (int i = 0; i < 4; i++) {
    String label = (i == 0) ? "关" : String(i) + "档";
    String active = (pwm3Level == i) ? "active" : "";
    html += "<button class='pwm-btn " + active + "' onclick='setPWM(3," + String(i) + ")'>" + label + "</button>";
  }
  html += "</div></div>";
  html += "</div>";
  
  html += "<div class='card'>";
  html += "<h3>🔌 继电器控制</h3>";
  html += "<button class='" + String(relayState ? "btn-on" : "btn-off") + "' onclick='toggleRelay()'>";
  html += relayState ? "关闭" : "开启";
  html += "</button>";
  html += "<span class='status " + String(relayState ? "status-on" : "status-off") + "'>";
  html += relayState ? "已开启" : "已关闭";
  html += "</span>";
  html += "</div>";
  
  html += "<div class='card'>";
  html += "<h3>🔄 舵机控制 (SG90)</h3>";
  html += "<div style='margin:10px 0;'>";
  html += "<b>当前角度: <span id='servoAngleDisplay'>" + String(servoAngle) + "</span>°</b>";
  html += "</div>";
  
  html += "<div class='servo-control-group'>";
  html += "<button class='btn-success' onclick='moveServo(" + String(servoMinAngle) + ")'>左限位</button>";
  html += "<button class='btn-warning' onclick='moveServo(" + String(servoHomeAngle) + ")'>回中</button>";
  html += "<button class='btn-danger' onclick='moveServo(" + String(servoMaxAngle) + ")'>右限位</button>";
  html += "</div>";
  
  html += "<div style='margin:10px 0;'>";
  html += "<input type='range' min='" + String(servoMinAngle) + "' max='" + String(servoMaxAngle) + "' value='" + String(servoAngle) + "' oninput='updateServoDisplay(this.value)' onchange='sendServoAngle(this.value)' style='width:100%;'>";
  html += "</div>";
  
  html += "<div style='margin-top:15px;padding-top:15px;border-top:1px solid #ddd;'>";
  html += "<h4>⚙️ 限位设置</h4>";
  html += "<div class='servo-limits'>";
  html += "<div><label>左限位: </label><input type='number' id='minAngle' value='" + String(servoMinAngle) + "' min='0' max='180'></div>";
  html += "<div><label>右限位: </label><input type='number' id='maxAngle' value='" + String(servoMaxAngle) + "' min='0' max='180'></div>";
  html += "</div>";
  html += "<button onclick='setLimits()'>保存限位</button>";
  html += "<button onclick='setCurrentAsLeft()'>设左限位</button>";
  html += "<button onclick='setCurrentAsRight()'>设右限位</button>";
  html += "</div>";
  html += "<div class='note'>💡 SG90舵机角度范围: 0°-180°</div>";
  html += "</div>";
  
  html += "<div class='card'>";
  html += "<h3>📊 系统信息</h3>";
  html += "运行时间: " + String(millis()/1000/60) + " 分钟<br>";
  html += "空闲内存: " + String(ESP.getFreeHeap()/1024) + " KB<br>";
  html += "<button onclick='location.reload()'>刷新</button>";
  html += "<button onclick='restartESP()' style='background:#e74c3c;'>重启设备</button>";
  html += "</div>";
  
  html += "<script>";
  html += "function setPWM(pin, level){";
  html += "  fetch('/setpwm?pin='+pin+'&level='+level);";
  html += "  setTimeout(()=>location.reload(),300);";
  html += "}";
  html += "function toggleRelay(){";
  html += "  fetch('/setrelay');";
  html += "  setTimeout(()=>location.reload(),500);";
  html += "}";
  html += "function moveServo(angle){";
  html += "  fetch('/setservo?angle='+angle);";
  html += "  setTimeout(()=>location.reload(),300);";
  html += "}";
  html += "function updateServoDisplay(value){";
  html += "  document.getElementById('servoAngleDisplay').innerText=value;";
  html += "}";
  html += "function sendServoAngle(value){";
  html += "  fetch('/setservo?angle='+value);";
  html += "  setTimeout(()=>location.reload(),300);";
  html += "}";
  html += "function setLimits(){";
  html += "  var min = document.getElementById('minAngle').value;";
  html += "  var max = document.getElementById('maxAngle').value;";
  html += "  if(parseInt(min) >= parseInt(max)){";
  html += "    alert('左限位必须小于右限位！');";
  html += "    return;";
  html += "  }";
  html += "  fetch('/setlimits?min='+min+'&max='+max);";
  html += "  setTimeout(()=>location.reload(),500);";
  html += "}";
  html += "function setCurrentAsLeft(){";
  html += "  var current = document.getElementById('servoAngleDisplay').innerText;";
  html += "  document.getElementById('minAngle').value = current;";
  html += "}";
  html += "function setCurrentAsRight(){";
  html += "  var current = document.getElementById('servoAngleDisplay').innerText;";
  html += "  document.getElementById('maxAngle').value = current;";
  html += "}";
  html += "function restartESP(){";
  html += "  if(confirm('确定要重启设备吗？')){";
  html += "    fetch('/restart');";
  html += "    alert('设备正在重启...');";
  html += "  }";
  html += "}";
  html += "</script>";
  
  html += "</body></html>";
  return html;
}

String getWiFiConfigPage() {
  String html = "<!DOCTYPE html><html>";
  html += "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>";
  html += "<title>WiFi配置</title>";
  html += "<style>";
  html += "body{font-family:Arial;max-width:600px;margin:0 auto;padding:20px;background:#f0f8ff;}";
  html += "h1{color:#2c3e50;text-align:center;}";
  html += ".card{background:white;border-radius:10px;padding:20px;margin:15px 0;box-shadow:0 2px 5px rgba(0,0,0,0.1);}";
  html += "input[type='text'],input[type='password']{width:100%;padding:10px;margin:5px 0;border:1px solid #ddd;border-radius:5px;}";
  html += "button{background:#3498db;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;margin:5px;}";
  html += "button:hover{background:#2980b9;}";
  html += "select{width:100%;padding:10px;margin:5px 0;border:1px solid #ddd;border-radius:5px;}";
  html += "</style>";
  html += "</head><body>";
  
  html += "<h1>📶 WiFi配置</h1>";
  html += "<div class='card'>";
  html += "<form action='/savewifi' method='POST'>";
  html += "<label>选择WiFi网络:</label><br>";
  html += "<select name='ssid'>";
  
  int n = WiFi.scanComplete();
  if (n == -2) {
    WiFi.scanNetworks(true);
    html += "<option>正在扫描...</option>";
  } else if (n > 0) {
    for (int i = 0; i < n; i++) {
      html += "<option value='" + WiFi.SSID(i) + "'>" + WiFi.SSID(i) + " (" + String(WiFi.RSSI(i)) + " dBm)</option>";
    }
  } else {
    html += "<option>未找到网络</option>";
  }
  
  html += "</select><br><br>";
  html += "<label>密码:</label><br>";
  html += "<input type='password' name='password' placeholder='请输入WiFi密码'>";
  html += "<br><br>";
  html += "<button type='submit'>连接</button>";
  html += "<a href='/'><button type='button'>返回</button></a>";
  html += "</form>";
  html += "</div>";
  
  html += "</body></html>";
  return html;
}

// ==================== 处理函数 ====================
void handleRoot() {
  server.send(200, "text/html", getMainPage());
}

void handleNotFound() {
  server.sendHeader("Location", "/", true);
  server.send(302, "text/plain", "Redirecting to main page...");
}

void handleSetPWM() {
  if (server.hasArg("pin") && server.hasArg("level")) {
    int pin = server.arg("pin").toInt();
    int level = server.arg("level").toInt();
    level = constrain(level, 0, 3);
    
    int value = pwmValues[level];
    
    switch(pin) {
      case 1:
        pwm1Level = level;
        ledcWrite(PWM1_PIN, value);
        Serial.println("水泵1: 档位" + String(level) + " (PWM:" + String(value) + ")");
        break;
      case 2:
        pwm2Level = level;
        ledcWrite(PWM2_PIN, value);
        Serial.println("水泵2: 档位" + String(level) + " (PWM:" + String(value) + ")");
        break;
      case 3:
        pwm3Level = level;
        ledcWrite(PWM3_PIN, value);
        Serial.println("灯条: 档位" + String(level) + " (PWM:" + String(value) + ")");
        break;
    }
    server.send(200, "text/plain", "OK");
  }
}

void handleSetRelay() {
  relayState = !relayState;
  digitalWrite(RELAY_PIN, relayState ? HIGH : LOW);
  Serial.println("继电器: " + String(relayState ? "ON" : "OFF"));
  server.send(200, "text/plain", "OK");
}

void handleSetServo() {
  if (server.hasArg("angle")) {
    int angle = server.arg("angle").toInt();
    angle = constrain(angle, servoMinAngle, servoMaxAngle);
    servoAngle = angle;
    myServo.write(angle);
    Serial.println("舵机角度: " + String(angle));
    server.send(200, "text/plain", "OK");
  }
}

void handleSetServoLimits() {
  if (server.hasArg("min") && server.hasArg("max")) {
    int min = server.arg("min").toInt();
    int max = server.arg("max").toInt();
    
    if (min >= max) {
      server.send(400, "text/plain", "左限位必须小于右限位");
      return;
    }
    
    min = constrain(min, 0, 180);
    max = constrain(max, 0, 180);
    
    servoMinAngle = min;
    servoMaxAngle = max;
    
    if (servoAngle < servoMinAngle) {
      servoAngle = servoMinAngle;
      myServo.write(servoAngle);
    } else if (servoAngle > servoMaxAngle) {
      servoAngle = servoMaxAngle;
      myServo.write(servoAngle);
    }
    
    saveServoLimits();
    
    Serial.println("舵机限位已更新: 左=" + String(servoMinAngle) + "°, 右=" + String(servoMaxAngle) + "°");
    server.send(200, "text/plain", "OK");
  }
}

void handleServoHome() {
  servoAngle = servoHomeAngle;
  servoAngle = constrain(servoAngle, servoMinAngle, servoMaxAngle);
  myServo.write(servoAngle);
  Serial.println("舵机回中: " + String(servoAngle) + "°");
  server.send(200, "text/plain", "OK");
}

void handleWiFiConfig() {
  server.send(200, "text/html", getWiFiConfigPage());
}

void handleWiFiScan() {
  WiFi.scanNetworks(true);
  server.send(200, "text/plain", "Scanning...");
}

void handleSaveWiFi() {
  if (server.hasArg("ssid") && server.hasArg("password")) {
    String ssid = server.arg("ssid");
    String password = server.arg("password");
    
    EEPROM.begin(EEPROM_SIZE);
    for (int i = 0; i < ssid.length() && i < 63; i++) {
      EEPROM.write(WIFI_SSID_ADDR + i, ssid[i]);
    }
    EEPROM.write(WIFI_SSID_ADDR + 63, '\0');
    
    for (int i = 0; i < password.length() && i < 63; i++) {
      EEPROM.write(WIFI_PASS_ADDR + i, password[i]);
    }
    EEPROM.write(WIFI_PASS_ADDR + 63, '\0');
    EEPROM.commit();
    EEPROM.end();
    
    wifiConfig.ssid = ssid;
    wifiConfig.password = password;
    wifiConfig.configured = true;
    
    server.send(200, "text/html", "<html><body><h1>WiFi配置已保存</h1><p>正在连接到 " + ssid + " ...</p><a href='/'><button>返回首页</button></a></body></html>");
    
    delay(2000);
    connectToWiFi();
  }
}

void handleStatus() {
  String json = "{";
  json += "\"pwm1Level\":" + String(pwm1Level) + ",";
  json += "\"pwm2Level\":" + String(pwm2Level) + ",";
  json += "\"pwm3Level\":" + String(pwm3Level) + ",";
  json += "\"relay\":" + String(relayState ? 1 : 0) + ",";
  json += "\"servo\":" + String(servoAngle) + ",";
  json += "\"servoMin\":" + String(servoMinAngle) + ",";
  json += "\"servoMax\":" + String(servoMaxAngle) + ",";
  json += "\"wifi\":" + String(wifiConnected ? 1 : 0) + ",";
  json += "\"freeHeap\":" + String(ESP.getFreeHeap());
  json += "}";
  server.send(200, "application/json", json);
}

void handleRestart() {
  server.send(200, "text/plain", "Restarting...");
  delay(1000);
  ESP.restart();
}

// ==================== 舵机限位存储 ====================
void saveServoLimits() {
  EEPROM.begin(EEPROM_SIZE);
  EEPROM.write(SERVO_MIN_ADDR, servoMinAngle);
  EEPROM.write(SERVO_MAX_ADDR, servoMaxAngle);
  EEPROM.commit();
  EEPROM.end();
}

void loadServoLimits() {
  EEPROM.begin(EEPROM_SIZE);
  servoMinAngle = EEPROM.read(SERVO_MIN_ADDR);
  servoMaxAngle = EEPROM.read(SERVO_MAX_ADDR);
  EEPROM.end();
  
  if (servoMinAngle < 0 || servoMinAngle > 180 || servoMaxAngle < 0 || servoMaxAngle > 180) {
    servoMinAngle = 0;
    servoMaxAngle = 180;
  }
  
  if (servoMinAngle >= servoMaxAngle) {
    servoMinAngle = 0;
    servoMaxAngle = 180;
  }
}

// ==================== WiFi功能 ====================
void connectToWiFi() {
  if (wifiConfig.configured && wifiConfig.ssid.length() > 0) {
    Serial.println("连接到WiFi: " + wifiConfig.ssid);
    WiFi.mode(WIFI_AP_STA);
    WiFi.begin(wifiConfig.ssid.c_str(), wifiConfig.password.c_str());
    
    int attempts = 0;
    while (WiFi.status() != WL_CONNECTED && attempts < 20) {
      delay(500);
      Serial.print(".");
      attempts++;
    }
    
    if (WiFi.status() == WL_CONNECTED) {
      wifiConnected = true;
      Serial.println("\nWiFi连接成功!");
      Serial.println("IP地址: " + WiFi.localIP().toString());
    } else {
      wifiConnected = false;
      Serial.println("\nWiFi连接失败");
    }
  }
}

void checkWiFiConnection() {
  if (wifiConfig.configured) {
    if (WiFi.status() != WL_CONNECTED) {
      wifiConnected = false;
      if (millis() - lastWifiCheck > 30000) {
        lastWifiCheck = millis();
        WiFi.reconnect();
      }
    } else {
      wifiConnected = true;
    }
  }
}

// ==================== 串口打印状态 ====================
void printStatus() {
  Serial.println("=== 系统状态 ===");
  Serial.println("水泵1: 档位" + String(pwm1Level) + " (PWM:" + String(pwmValues[pwm1Level]) + ")");
  Serial.println("水泵2: 档位" + String(pwm2Level) + " (PWM:" + String(pwmValues[pwm2Level]) + ")");
  Serial.println("灯条: 档位" + String(pwm3Level) + " (PWM:" + String(pwmValues[pwm3Level]) + ")");
  Serial.println("继电器: " + String(relayState ? "ON" : "OFF"));
  String servoModeStr = (servoMode == 0) ? "左限位" : (servoMode == 1) ? "右限位" : "回正";
  Serial.println("舵机: " + String(servoAngle) + "° (模式:" + servoModeStr + ", 限位: " + String(servoMinAngle) + "°-" + String(servoMaxAngle) + "°)");
  Serial.println("WiFi: " + String(wifiConnected ? "已连接" : "未连接"));
  Serial.println("AP客户端: " + String(WiFi.softAPgetStationNum()));
  Serial.println("=================");
}

// ==================== 按钮处理 ====================
void handleButtons() {
  unsigned long currentTime = millis();
  
  int button1 = digitalRead(BUTTON1_PIN);
  int button2 = digitalRead(BUTTON2_PIN);
  int button3 = digitalRead(BUTTON3_PIN);
  int button4 = digitalRead(BUTTON4_PIN);

  // 按键1: 水泵1 - 短按加1档，长按归零
  if (button1 == LOW && lastButton1 == HIGH) {
    button1PressTime = currentTime;
    button1LongPressed = false;
  } else if (button1 == LOW && !button1LongPressed) {
    if (currentTime - button1PressTime >= longPressDelay) {
      pwm1Level = 0;
      ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
      Serial.println("【按钮】水泵1: 长按归零");
      button1LongPressed = true;
    }
  } else if (button1 == HIGH && lastButton1 == LOW && !button1LongPressed) {
    pwm1Level = (pwm1Level + 1) % 4;
    ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
    Serial.println("【按钮】水泵1: 档位" + String(pwm1Level));
  }

  // 按键2: 水泵2 - 短按加1档，长按归零
  if (button2 == LOW && lastButton2 == HIGH) {
    button2PressTime = currentTime;
    button2LongPressed = false;
  } else if (button2 == LOW && !button2LongPressed) {
    if (currentTime - button2PressTime >= longPressDelay) {
      pwm2Level = 0;
      ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
      Serial.println("【按钮】水泵2: 长按归零");
      button2LongPressed = true;
    }
  } else if (button2 == HIGH && lastButton2 == LOW && !button2LongPressed) {
    pwm2Level = (pwm2Level + 1) % 4;
    ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
    Serial.println("【按钮】水泵2: 档位" + String(pwm2Level));
  }

  // 按键3: 灯光 - 短按加1档，长按归零
  if (button3 == LOW && lastButton3 == HIGH) {
    button3PressTime = currentTime;
    button3LongPressed = false;
  } else if (button3 == LOW && !button3LongPressed) {
    if (currentTime - button3PressTime >= longPressDelay) {
      pwm3Level = 0;
      ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
      Serial.println("【按钮】灯光: 长按归零");
      button3LongPressed = true;
    }
  } else if (button3 == HIGH && lastButton3 == LOW && !button3LongPressed) {
    pwm3Level = (pwm3Level + 1) % 4;
    ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);
    Serial.println("【按钮】灯光: 档位" + String(pwm3Level));
  }

  // 按键4: 舵机 - 短按循环(左限位,右限位,回正)，长按回中
  if (button4 == LOW && lastButton4 == HIGH) {
    button4PressTime = currentTime;
    button4LongPressed = false;
  } else if (button4 == LOW && !button4LongPressed) {
    if (currentTime - button4PressTime >= longPressDelay) {
      servoAngle = servoHomeAngle;
      servoAngle = constrain(servoAngle, servoMinAngle, servoMaxAngle);
      myServo.write(servoAngle);
      servoMode = 2;
      Serial.println("【按钮】舵机: 长按回中");
      button4LongPressed = true;
    }
  } else if (button4 == HIGH && lastButton4 == LOW && !button4LongPressed) {
    servoMode = (servoMode + 1) % 3;
    switch(servoMode) {
      case 0:
        servoAngle = servoMinAngle;
        Serial.println("【按钮】舵机: 左限位");
        break;
      case 1:
        servoAngle = servoMaxAngle;
        Serial.println("【按钮】舵机: 右限位");
        break;
      case 2:
        servoAngle = servoHomeAngle;
        Serial.println("【按钮】舵机: 回正");
        break;
    }
    servoAngle = constrain(servoAngle, servoMinAngle, servoMaxAngle);
    myServo.write(servoAngle);
  }
  
  lastButton1 = button1;
  lastButton2 = button2;
  lastButton3 = button3;
  lastButton4 = button4;
}

// ==================== 初始化 ====================
void setup() {
  Serial.begin(115200);
  Serial.println("\n\n=== 鱼缸管理系统启动 ===");
  
  // 初始化引脚
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);
  
  pinMode(BUTTON1_PIN, INPUT_PULLUP);
  pinMode(BUTTON2_PIN, INPUT_PULLUP);
  pinMode(BUTTON3_PIN, INPUT_PULLUP);
  pinMode(BUTTON4_PIN, INPUT_PULLUP);
  
  // ========== 关键：为舵机库分配独立的定时器 ==========
  // 在初始化舵机之前，为ESP32Servo库分配一个专用的定时器（定时器0）
  ESP32PWM::allocateTimer(0);
  Serial.println("已为舵机分配定时器0");

  // ========== PWM引脚初始化 (ESP32 Arduino Core 3.x API) ==========
  // 使用ledcAttachChannel()显式分配通道，避免与舵机冲突
  // 舵机使用通道0-3，我们使用通道4-6

  // 水泵1 - 通道4
  ledcAttachChannel(PWM1_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP1);

  // 水泵2 - 通道5
  ledcAttachChannel(PWM2_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP2);

  // 灯条 - 通道6
  ledcAttachChannel(PWM3_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_LIGHT);

  // 设置初始占空比 (默认关闭)
  ledcWrite(PWM1_PIN, pwmValues[pwm1Level]);
  ledcWrite(PWM2_PIN, pwmValues[pwm2Level]);
  ledcWrite(PWM3_PIN, pwmValues[pwm3Level]);

  Serial.println("PWM初始化完成 (ESP32 Arduino Core 3.x API)");
  Serial.println("  水泵1: 通道4");
  Serial.println("  水泵2: 通道5");
  Serial.println("  灯条: 通道6");
  Serial.println("  舵机: 定时器0 (独立)");
  Serial.println("所有PWM默认关闭");
  
  // 加载舵机限位
  loadServoLimits();
  
  // ========== 初始化舵机 (SG90) ==========
  // 设置舵机标准频率 (50Hz)
  myServo.setPeriodHertz(50);
  // 连接舵机到指定引脚，并设置脉冲宽度范围 (SG90典型值: 500-2500us)
  myServo.attach(SERVO_PIN, 500, 2500);
  delay(100);
  
  servoAngle = constrain(servoAngle, servoMinAngle, servoMaxAngle);
  myServo.write(servoAngle);
  delay(500);
  
  Serial.println("SG90舵机初始化完成，当前角度: " + String(servoAngle) + "°");
  
  // 读取EEPROM WiFi配置
  EEPROM.begin(EEPROM_SIZE);
  char ssid[64] = {0};
  char pass[64] = {0};
  
  for (int i = 0; i < 63; i++) {
    ssid[i] = EEPROM.read(WIFI_SSID_ADDR + i);
    pass[i] = EEPROM.read(WIFI_PASS_ADDR + i);
  }
  EEPROM.end();
  
  if (strlen(ssid) > 0) {
    wifiConfig.ssid = String(ssid);
    wifiConfig.password = String(pass);
    wifiConfig.configured = true;
    Serial.println("读取到保存的WiFi配置: " + wifiConfig.ssid);
  }
  
  // ========== 启动AP模式 ==========
  WiFi.mode(WIFI_AP_STA);
  WiFi.softAP(AP_SSID, AP_PASSWORD);
  IPAddress apIP = WiFi.softAPIP();
  
  Serial.println("AP模式已启动: " + String(AP_SSID));
  Serial.println("AP IP地址: " + apIP.toString());
  Serial.println("密码: " + String(AP_PASSWORD));
  
  // 启动DNS服务器
  dnsServer.start(DNS_PORT, "*", apIP);
  Serial.println("DNS服务器已启动 - 连接WiFi后将自动跳转到控制页面");
  
  if (wifiConfig.configured) {
    connectToWiFi();
  }
  
  // ========== 启动Web服务器 ==========
  server.on("/", handleRoot);
  server.on("/setpwm", handleSetPWM);
  server.on("/setrelay", handleSetRelay);
  server.on("/setservo", handleSetServo);
  server.on("/setlimits", handleSetServoLimits);
  server.on("/servohome", handleServoHome);
  server.on("/wifi", handleWiFiConfig);
  server.on("/scanwifi", handleWiFiScan);
  server.on("/savewifi", HTTP_POST, handleSaveWiFi);
  server.on("/status", handleStatus);
  server.on("/restart", handleRestart);
  server.onNotFound(handleNotFound);
  
  server.begin();
  Serial.println("Web服务器已启动");
  
  printStatus();
  
  Serial.println("\n==========================================");
  Serial.println("✅ 系统初始化完成!");
  Serial.println("📶 WiFi名称: " + String(AP_SSID));
  Serial.println("🔑 密码: " + String(AP_PASSWORD));
  Serial.println("🌐 连接WiFi后会自动跳转到控制页面");
  Serial.println("📱 如果未自动跳转，请访问: http://192.168.4.1");
  Serial.println("🔄 SG90舵机已就绪 (0°-180°)");
  Serial.println("🛠️ LEDC通道分配 (ESP32 Arduino Core 3.x):");
  Serial.println("   舵机: 定时器0 (独立)");
  Serial.println("   水泵1: 通道4 (独立)");
  Serial.println("   水泵2: 通道5 (独立)");
  Serial.println("   灯条: 通道6 (独立)");
  Serial.println("💡 所有水泵和灯条默认关闭");
  Serial.println("==========================================");
}

// ==================== 主循环 ====================
void loop() {
  dnsServer.processNextRequest();
  server.handleClient();
  handleButtons();
  checkWiFiConnection();
  
  static unsigned long lastStatusPrint = 0;
  
  if (millis() - lastStatusPrint > 30000) {
    lastStatusPrint = millis();
    printStatus();
  }
  
  if (wifiConfig.configured && !wifiConnected && WiFi.status() != WL_CONNECTED) {
    static unsigned long lastReconnect = 0;
    if (millis() - lastReconnect > 60000) {
      lastReconnect = millis();
      Serial.println("尝试重新连接WiFi...");
      WiFi.reconnect();
    }
  }
}