#include <ESP32Servo.h>
#include <EEPROM.h>
#include <U8g2lib.h>
#include <Wire.h>

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

// OLED引脚定义 (I2C)
#define OLED_SDA_PIN  21   // OLED SDA - GPIO21
#define OLED_SCL_PIN  22   // OLED SCL - GPIO22

// ADC引脚定义
#define ADC_PIN_WATER_QUALITY  34   // 水质检测 - ADC1_CH6 (输入-only引脚)
#define ADC_PIN_WATER_TEMP     35   // 水温检测 - ADC1_CH7 (输入-only引脚)

// LEDC配置 - 适用于ESP32 Arduino Core 3.x版本
#define LEDC_FREQ     1000    // 1kHz
#define LEDC_RES      8       // 8位分辨率 (0-255)

// LEDC通道分配 (避开舵机使用的定时器0)
#define LEDC_CH_PUMP1  4  // 水泵1 - 通道4
#define LEDC_CH_PUMP2  5  // 水泵2 - 通道5
#define LEDC_CH_LIGHT  6  // 灯条 - 通道6

// EEPROM存储地址
#define EEPROM_SIZE   512
#define SERVO_MIN_ADDR 0
#define SERVO_MAX_ADDR 1

// ==================== 全局对象 ====================
Servo myServo;  // SG90舵机
U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);

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

// ADC传感器值
int adcWQRaw = 0;             // 水质ADC原始值 (0-4095)
int adcTempRaw = 0;           // 水温ADC原始值 (0-4095)
float adcWQVoltage = 0.0;     // 水质电压值 (V)
float adcTempVoltage = 0.0;   // 水温电压值 (V)

// 按钮状态
bool lastButton1 = HIGH;
bool lastButton2 = HIGH;
bool lastButton3 = HIGH;
bool lastButton4 = HIGH;

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

// ==================== 函数声明 ====================
void handleButtons();
void printStatus();
void updateOLED();
void saveServoLimits();
void loadServoLimits();
void readADC();

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

// ==================== 串口打印状态 ====================
void printStatus() {
  Serial.println("=== 系统状态 ===");
  Serial.println("水泵1: 档位" + String(pwm1Level) + " (PWM:" + String(pwmValues[pwm1Level]) + ")");
  Serial.println("水泵2: 档位" + String(pwm2Level) + " (PWM:" + String(pwmValues[pwm2Level]) + ")");
  Serial.println("灯条: 档位" + String(pwm3Level) + " (PWM:" + String(pwmValues[pwm3Level]) + ")");
  Serial.println("继电器: " + String(relayState ? "ON" : "OFF"));
  String servoModeStr = (servoMode == 0) ? "左限位" : (servoMode == 1) ? "右限位" : "回正";
  Serial.println("舵机: " + String(servoAngle) + "° (模式:" + servoModeStr + ", 限位: " + String(servoMinAngle) + "°-" + String(servoMaxAngle) + "°)");
  Serial.println("水质电压: " + String(adcWQVoltage, 2) + "V");
  Serial.println("温度电压: " + String(adcTempVoltage, 2) + "V");
  Serial.println("空闲内存: " + String(ESP.getFreeHeap()/1024) + " KB");
  Serial.println("=================");
}

// ==================== OLED显示更新 ====================
void updateOLED() {
  u8g2.clearBuffer();
  
  u8g2.setFont(u8g2_font_ncenB08_tr);
  
  u8g2.setCursor(0, 10);
  u8g2.print("P1:");
  u8g2.print(pwm1Level);
  u8g2.print(" P2:");
  u8g2.print(pwm2Level);
  u8g2.print(" LED:");
  u8g2.print(pwm3Level);
  
  u8g2.setCursor(0, 22);
  u8g2.print("Servo:");
  u8g2.print(servoAngle);
  u8g2.print("deg");
  
  u8g2.setCursor(0, 34);
  u8g2.print("Relay:");
  u8g2.print(relayState ? "ON" : "OFF");
  
  u8g2.setCursor(0, 46);
  u8g2.print("WQ:");
  u8g2.print(adcWQVoltage, 1);
  u8g2.print("V");
  
  u8g2.setCursor(0, 58);
  u8g2.print("TEMP:");
  u8g2.print(adcTempVoltage, 1);
  u8g2.print("V");
  
  u8g2.sendBuffer();
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

// ==================== ADC读取 ====================
void readADC() {
  adcWQRaw = analogRead(ADC_PIN_WATER_QUALITY);
  adcTempRaw = analogRead(ADC_PIN_WATER_TEMP);
  adcWQVoltage = adcWQRaw * 3.3 / 4095.0;
  adcTempVoltage = adcTempRaw * 3.3 / 4095.0;
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
  
  // ========== OLED初始化 ==========
  Wire.begin(OLED_SDA_PIN, OLED_SCL_PIN);
  u8g2.begin();
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.setCursor(0, 20);
  u8g2.print("Fish Manager");
  u8g2.setCursor(0, 40);
  u8g2.print("Starting...");
  u8g2.sendBuffer();
  Serial.println("OLED初始化完成");
  
  // ========== 为舵机库分配独立的定时器 ==========
  ESP32PWM::allocateTimer(0);
  Serial.println("已为舵机分配定时器0");

  // ========== PWM引脚初始化 (ESP32 Arduino Core 3.x API) ==========
  ledcAttachChannel(PWM1_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP1);
  ledcAttachChannel(PWM2_PIN, LEDC_FREQ, LEDC_RES, LEDC_CH_PUMP2);
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
  myServo.setPeriodHertz(50);
  myServo.attach(SERVO_PIN, 500, 2500);
  delay(100);
  
  servoAngle = constrain(servoAngle, servoMinAngle, servoMaxAngle);
  myServo.write(servoAngle);
  delay(500);
  
  Serial.println("SG90舵机初始化完成，当前角度: " + String(servoAngle) + "°");
  
  printStatus();
  
  Serial.println("\n==========================================");
  Serial.println("✅ 系统初始化完成!");
  Serial.println("🔄 SG90舵机已就绪 (0°-180°)");
  Serial.println("🛠️ LEDC通道分配 (ESP32 Arduino Core 3.x):");
  Serial.println("   舵机: 定时器0 (独立)");
  Serial.println("   水泵1: 通道4 (独立)");
  Serial.println("   水泵2: 通道5 (独立)");
  Serial.println("   灯条: 通道6 (独立)");
  Serial.println("💡 所有水泵和灯条默认关闭");
  Serial.println("📊 通过按键控制设备，串口查看状态");
  Serial.println("==========================================");
}

// ==================== 主循环 ====================
void loop() {
  handleButtons();
  
  static unsigned long lastStatusPrint = 0;
  static unsigned long lastOledUpdate = 0;
  static unsigned long lastADCRead = 0;
  
  if (millis() - lastStatusPrint > 30000) {
    lastStatusPrint = millis();
    printStatus();
  }
  
  if (millis() - lastOledUpdate > 2000) {
    lastOledUpdate = millis();
    updateOLED();
  }
  
  if (millis() - lastADCRead > 1000) {
    lastADCRead = millis();
    readADC();
  }
}