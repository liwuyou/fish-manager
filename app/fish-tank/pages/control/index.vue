<template>
  <view class="control-page">
    <view class="status-header" :class="{ offline: !status.online }">
      <view class="status-indicator">
        <view class="indicator-dot"></view>
        <text>{{ status.online ? '在线' : '离线' }}</text>
      </view>
      <text class="device-key">{{ deviceKey }}</text>
    </view>
    
    <view class="control-section">
      <view class="section-title">水泵控制</view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('pump1', '水泵1')">{{ getCtrlName('pump1', '水泵1') }}</text>
          <text class="control-value">{{ pumpLevels[status.pwm1Level] }}</text>
        </view>
        <view class="pump-controls">
          <button 
            v-for="(level, index) in pumpLevels" 
            :key="index"
            class="level-btn"
            :class="{ active: status.pwm1Level === index }"
            @click="setPump(1, index)"
          >
            {{ level }}
          </button>
        </view>
      </view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('pump2', '水泵2')">{{ getCtrlName('pump2', '水泵2') }}</text>
          <text class="control-value">{{ pumpLevels[status.pwm2Level] }}</text>
        </view>
        <view class="pump-controls">
          <button 
            v-for="(level, index) in pumpLevels" 
            :key="index"
            class="level-btn"
            :class="{ active: status.pwm2Level === index }"
            @click="setPump(2, index)"
          >
            {{ level }}
          </button>
        </view>
      </view>
    </view>
    
    <view class="control-section">
      <view class="section-title">灯光控制</view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('light', '灯条')">{{ getCtrlName('light', '灯条') }}</text>
          <text class="control-value">{{ pumpLevels[status.pwm3Level] }}</text>
        </view>
        <view class="pump-controls">
          <button 
            v-for="(level, index) in pumpLevels" 
            :key="index"
            class="level-btn"
            :class="{ active: status.pwm3Level === index }"
            @click="setLight(index)"
          >
            {{ level }}
          </button>
        </view>
      </view>
    </view>
    
    <view class="control-section">
      <view class="section-title">气泵 &amp; 风扇</view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('airPump', '气泵')">{{ getCtrlName('airPump', '气泵') }}</text>
          <text class="control-value">{{ pumpLevels[status.airPumpLevel || 0] }}</text>
        </view>
        <view class="pump-controls">
          <button 
            v-for="(level, index) in pumpLevels" 
            :key="'air'+index"
            class="level-btn"
            :class="{ active: (status.airPumpLevel || 0) === index }"
            @click="setAirPump(index)"
          >
            {{ level }}
          </button>
        </view>
      </view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('fan', '风扇')">{{ getCtrlName('fan', '风扇') }}</text>
          <text class="control-value">{{ pumpLevels[status.fanLevel || 0] }}</text>
        </view>
        <view class="pump-controls">
          <button 
            v-for="(level, index) in pumpLevels" 
            :key="'fan'+index"
            class="level-btn"
            :class="{ active: (status.fanLevel || 0) === index }"
            @click="setFan(index)"
          >
            {{ level }}
          </button>
        </view>
      </view>
    </view>
    
    <view class="control-section">
      <view class="section-title">开关控制</view>
      
      <view class="switch-card">
        <text class="switch-label" @click="startRename('uv', 'UV灯')">{{ getCtrlName('uv', 'UV灯') }}</text>
        <switch :checked="status.uvLightOn || false" @change="setUV" color="#1a73e8" />
      </view>
      
      <view class="switch-card">
        <text class="switch-label" @click="startRename('relay2', '继电器2')">{{ getCtrlName('relay2', '继电器2') }}</text>
        <switch :checked="status.relay2State || false" @change="setRelay2" color="#1a73e8" />
      </view>
    </view>
    
    <view class="control-section">
      <view class="section-title">设备控制</view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('servo', '舵机')">{{ getCtrlName('servo', '舵机') }}</text>
          <text class="control-value">{{ status.servoMoving ? '运行中' : '空闲' }}</text>
        </view>
        <button 
          class="action-btn"
          :class="{ busy: status.servoMoving }"
          @click="triggerServo"
          :disabled="status.servoMoving"
        >
          {{ status.servoMoving ? '运行中...' : '启动舵机' }}
        </button>
      </view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name" @click="startRename('power', '系统电源')">{{ getCtrlName('power', '系统电源') }}</text>
          <text class="control-value">{{ status.systemPowered ? '开机' : '关机' }}</text>
        </view>
        <button 
          class="power-btn"
          :class="{ on: status.systemPowered }"
          @click="togglePower"
        >
          {{ status.systemPowered ? '关机' : '开机' }}
        </button>
      </view>
    </view>
    
    <view class="sensor-section">
      <view class="section-title">传感器数据</view>
      
      <view class="sensor-grid">
        <view class="sensor-item">
          <text class="sensor-icon">🌡️</text>
          <text class="sensor-label">水温</text>
          <text class="sensor-value">{{ status.waterTemperature.toFixed(1) }}°C</text>
        </view>
        <view class="sensor-item">
          <text class="sensor-icon">💧</text>
          <text class="sensor-label">TDS</text>
          <text class="sensor-value">{{ status.tdsValue }}ppm</text>
        </view>
      </view>
    </view>
    
    <view class="bottom-bar">
      <text class="refresh-time">更新于 {{ lastUpdateTime }}</text>
      <button class="refresh-btn" @click="refreshStatus">↻ 刷新</button>
    </view>

    <!-- 定时任务区域 -->
    <view class="control-section">
      <view class="section-title">定时任务</view>

      <view v-if="timers.length === 0" class="empty-tip">
        <text>暂无定时任务，点击下方按钮添加</text>
      </view>

      <view v-for="(timer, index) in timers" :key="timer.id" class="timer-card">
        <view class="timer-card-left">
          <view class="timer-card-top">
            <text class="timer-name">{{ timer.name }}</text>
            <text class="timer-time">{{ ('0' + timer.hour).slice(-2) }}:{{ ('0' + timer.minute).slice(-2) }}</text>
          </view>
          <text class="timer-desc">{{ getTaskTypeLabel(timer) }}</text>
          <text v-if="timer.duration > 0 && timer.cmd !== 'trigger_servo'" class="timer-duration">持续 {{ timer.duration / 60 }} 分钟后停止</text>
        </view>
        <view class="timer-card-right">
          <switch :checked="timer.enabled" @change="toggleTimer(timer)" color="#1a73e8" style="transform: scale(0.8);" />
          <view class="timer-actions">
            <text class="timer-edit" @click="openTimerDialog(timer)">编辑</text>
            <text class="timer-delete" @click="handleDeleteTimer(timer)">删除</text>
          </view>
        </view>
      </view>

      <button class="add-timer-btn" @click="openTimerDialog(null)">+ 添加任务</button>
    </view>

    <!-- 定时任务弹窗 -->
    <view v-if="timerDialogVisible" class="dialog-overlay" @click="closeTimerDialog">
      <view class="dialog-box timer-dialog" @click.stop>
        <text class="dialog-title">{{ editingTimer ? '编辑任务' : '添加任务' }}</text>

        <!-- 任务名称 -->
        <text class="timer-form-label">任务名称</text>
        <input
          class="dialog-input"
          v-model="timerForm.name"
          placeholder="输入任务名称"
          maxlength="20"
        />

        <!-- 时间选择 -->
        <text class="timer-form-label">执行时间</text>
        <view class="timer-picker-row">
          <picker mode="multiSelector" :range="[hours, minutes]" @change="onTimeChange">
            <view class="timer-picker">
              {{ ('0' + timerForm.hour).slice(-2) }} : {{ ('0' + timerForm.minute).slice(-2) }}
            </view>
          </picker>
        </view>

        <!-- 任务类型 -->
        <text class="timer-form-label">任务类型</text>
        <view class="timer-picker-row">
          <picker mode="selector" :range="taskTypeLabels" @change="onTaskTypeChange">
            <view class="timer-picker">
              {{ taskTypeLabels[timerForm.type] }}
            </view>
          </picker>
        </view>

        <!-- 持续时间 -->
        <text class="timer-form-label">持续时间</text>
        <view class="timer-picker-row" v-if="taskTypes[timerForm.type].cmd === 'trigger_servo'">
          <view class="timer-picker"><text style="color:#999">无</text></view>
        </view>
        <view class="timer-picker-row" v-else>
          <picker mode="selector" :range="durationLabels" @change="onDurationChange">
            <view class="timer-picker">
              {{ timerForm.durationLabel }}
            </view>
          </picker>
        </view>

        <view class="dialog-buttons" style="margin-top: 40rpx;">
          <button class="dialog-btn dialog-cancel" @click="closeTimerDialog">取消</button>
          <button class="dialog-btn dialog-confirm" @click="confirmTimer">确认</button>
        </view>
      </view>
    </view>

    <!-- 重命名弹窗 -->
    <view v-if="renameVisible" class="dialog-overlay" @click="cancelRename">
      <view class="dialog-box" @click.stop>
        <text class="dialog-title">重命名</text>
        <input 
          class="dialog-input" 
          v-model="renameValue" 
          placeholder="输入名称"
          maxlength="20"
          focus
        />
        <view class="dialog-buttons">
          <button class="dialog-btn dialog-cancel" @click="cancelRename">取消</button>
          <button class="dialog-btn dialog-confirm" @click="confirmRename">确认</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getDeviceStatus, sendControlCommand, getTimers, saveTimers, deleteTimer as deleteTimerApi } from '@/utils/api'
import { getPhoneNumber } from '@/utils/storage'

export default {
  data() {
    return {
      deviceKey: '',
      status: {
        online: false,
        pwm1Level: 0,
        pwm2Level: 0,
        pwm3Level: 0,
        airPumpLevel: 0,
        fanLevel: 0,
        uvLightOn: false,
        relay1State: false,
        relay2State: false,
        servoMoving: false,
        adcWQVoltage: 0,
        adcTempVoltage: 0,
        systemPowered: true
      },
      pumpLevels: ['关', '一档', '二档', '三档'],
      lastUpdateTime: '',
      timer: null,
      renameVisible: false,
      renameValue: '',
      renameTarget: '',
      renameDefault: '',
      ws: null,
      wsConnected: false,
      wsReconnectTimer: null,
      servoTimer: null,
      servoStartTime: 0,
      // 定时任务
      timers: [],
      timerDialogVisible: false,
      editingTimer: null,
      timerForm: {
        id: '',
        name: '',
        hour: 8,
        minute: 0,
        type: 0,
        cmd: 'trigger_servo',
        params: {},
        duration: 0,
        durationLabel: '不停止'
      },
      hours: Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2)),
      minutes: Array.from({ length: 60 }, (_, i) => ('0' + i).slice(-2)),
      taskTypes: [
        { label: '喂鱼（舵机）', cmd: 'trigger_servo', params: {} },
        { label: '换水1档（水泵1 level=1）', cmd: 'set_pump', params: { pump: 1, level: 1 } },
        { label: '换水2档（水泵1 level=2）', cmd: 'set_pump', params: { pump: 1, level: 2 } },
        { label: '换水3档（水泵1 level=3）', cmd: 'set_pump', params: { pump: 1, level: 3 } },
        { label: '加气1档（气泵 level=1）', cmd: 'set_air_pump', params: { level: 1 } },
        { label: '加气2档（气泵 level=2）', cmd: 'set_air_pump', params: { level: 2 } },
        { label: '加气3档（气泵 level=3）', cmd: 'set_air_pump', params: { level: 3 } },
        { label: '开灯1档（灯条 level=1）', cmd: 'set_light', params: { level: 1 } },
        { label: '开灯2档（level=2）', cmd: 'set_light', params: { level: 2 } },
        { label: '开灯3档（level=3）', cmd: 'set_light', params: { level: 3 } },
        { label: '风扇1档', cmd: 'set_fan', params: { level: 1 } },
        { label: '风扇2档', cmd: 'set_fan', params: { level: 2 } },
        { label: '风扇3档', cmd: 'set_fan', params: { level: 3 } }
      ],
      durationOptions: [
        { label: '不停止', value: 0 },
        { label: '1分钟', value: 1 },
        { label: '5分钟', value: 5 },
        { label: '10分钟', value: 10 },
        { label: '30分钟', value: 30 },
        { label: '60分钟', value: 60 }
      ]
    }
  },
  computed: {
    taskTypeLabels() {
      return this.taskTypes.map(t => t.label)
    },
    durationLabels() {
      return this.durationOptions.map(d => d.label)
    }
  },
  onLoad(options) {
    this.deviceKey = options.device_key || ''
    if (!this.deviceKey) {
      uni.showToast({ title: '设备参数错误', icon: 'none' })
      return
    }
    
    this.loadStatus()
    this.loadTimers()
    
    // 连接 WebSocket 接收实时推送
    this.connectWS()
    
    // 10秒轮询（不管WebSocket是否连接，确保数据更新）
    this.timer = setInterval(() => {
      this.loadStatus()
      this.checkServoTimeout()
    }, 10000)
    
    // 舵机超时检测（每2秒检查一次）
    this.servoTimer = setInterval(() => {
      this.checkServoTimeout()
    }, 2000)
  },
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    if (this.servoTimer) {
      clearInterval(this.servoTimer)
    }
    this.disconnectWS()
  },
  methods: {
    getCtrlName(target, defaultName) {
      const key = 'ctrl_name_' + this.deviceKey + '_' + target
      const name = uni.getStorageSync(key)
      return name || defaultName
    },
    
    startRename(target, defaultName) {
      this.renameTarget = target
      this.renameDefault = defaultName
      this.renameValue = this.getCtrlName(target, defaultName)
      if (this.renameValue === defaultName) {
        this.renameValue = ''
      }
      this.renameVisible = true
    },
    
    cancelRename() {
      this.renameVisible = false
      this.renameTarget = ''
      this.renameValue = ''
    },
    
    confirmRename() {
      if (!this.renameTarget) return
      const key = 'ctrl_name_' + this.deviceKey + '_' + this.renameTarget
      if (this.renameValue && this.renameValue.trim()) {
        uni.setStorageSync(key, this.renameValue.trim())
        uni.showToast({ title: '重命名成功', icon: 'success' })
      } else {
        uni.removeStorageSync(key)
        uni.showToast({ title: '已恢复默认名称', icon: 'none' })
      }
      this.cancelRename()
    },
    
    // ===== WebSocket 实时推送 =====
    getWSBaseURL() {
      // H5开发模式：使用当前页面地址
      // 原生App模式：使用配置的服务器地址
      try {
        if (window && window.location) {
          return `ws://${window.location.host}`
        }
      } catch (e) {}
      // 默认使用服务器地址
      return 'ws://192.168.2.11:7965'
    },
    
    connectWS() {
      if (this.ws) return
      const phone = getPhoneNumber()
      if (!phone) return
      
      try {
        const baseUrl = this.getWSBaseURL()
        this.ws = uni.connectSocket({
          url: `${baseUrl}/ws/client`,
          success: () => {}
        })
        
        this.ws.onOpen(() => {
          this.wsConnected = true
          // 发送认证
          uni.sendSocketMessage({
            data: JSON.stringify({ type: 'auth', phone })
          })
          // 订阅当前设备
          uni.sendSocketMessage({
            data: JSON.stringify({ type: 'subscribe', device_key: this.deviceKey })
          })
        })
        
        this.ws.onMessage((res) => {
          try {
            const msg = JSON.parse(res.data)
            if (msg.type === 'device_status' && msg.device_key === this.deviceKey) {
              this.updateStatusFromWS(msg)
            }
          } catch (e) {}
        })
        
        this.ws.onClose(() => {
          this.wsConnected = false
          this.ws = null
          // 3秒后自动重连
          if (!this.wsReconnectTimer) {
            this.wsReconnectTimer = setTimeout(() => {
              this.wsReconnectTimer = null
              this.connectWS()
            }, 3000)
          }
        })
        
        this.ws.onError(() => {
          this.wsConnected = false
        })
      } catch (e) {
        console.log('WebSocket连接失败，使用HTTP轮询', e)
      }
    },
    
    disconnectWS() {
      if (this.wsReconnectTimer) {
        clearTimeout(this.wsReconnectTimer)
        this.wsReconnectTimer = null
      }
      if (this.ws) {
        this.ws.close()
        this.ws = null
        this.wsConnected = false
      }
    },
    
    updateStatusFromWS(msg) {
      const s = msg.status || {}
      const moving = s.servoMoving || false
      if (moving && !this.servoStartTime) {
        this.servoStartTime = Date.now()
      }
      if (!moving) {
        this.servoStartTime = 0
      }
      this.status = {
        online: msg.online || false,
        pwm1Level: s.pwm1Level || 0,
        pwm2Level: s.pwm2Level || 0,
        pwm3Level: s.pwm3Level || 0,
        airPumpLevel: s.airPumpLevel || 0,
        fanLevel: s.fanLevel || 0,
        uvLightOn: s.uvLightOn || false,
        relay1State: s.relay1State || false,
        relay2State: s.relay2State || false,
        servoMoving: s.servoMoving || false,
        adcWQVoltage: s.adcWQVoltage || 0,
        adcTempVoltage: s.adcTempVoltage || 0,
        tdsValue: s.tdsValue || 0,
        waterTemperature: s.waterTemperature || 0,
        systemPowered: s.systemPowered !== false
      }
      this.lastUpdateTime = new Date().toLocaleTimeString()
    },
    
    async loadStatus() {
      try {
        const res = await getDeviceStatus(this.deviceKey)
        if (res.success) {
          const s = res.status || {}
          const moving = s.servoMoving || false
          if (moving && !this.servoStartTime) {
            this.servoStartTime = Date.now()
          }
          if (!moving) {
            this.servoStartTime = 0
          }
          this.status = {
            online: res.online || false,
            pwm1Level: s.pwm1Level || 0,
            pwm2Level: s.pwm2Level || 0,
            pwm3Level: s.pwm3Level || 0,
            airPumpLevel: s.airPumpLevel || 0,
            fanLevel: s.fanLevel || 0,
            uvLightOn: s.uvLightOn || false,
            relay1State: s.relay1State || false,
            relay2State: s.relay2State || false,
            servoMoving: s.servoMoving || false,
            adcWQVoltage: s.adcWQVoltage || 0,
            adcTempVoltage: s.adcTempVoltage || 0,
            tdsValue: s.tdsValue || 0,
            waterTemperature: s.waterTemperature || 0,
            systemPowered: s.systemPowered !== false
          }
          this.lastUpdateTime = new Date().toLocaleTimeString()
        }
      } catch (error) {
        this.status.online = false
      }
    },
    
    refreshStatus() {
      uni.showLoading({ title: '刷新中...' })
      this.loadStatus().then(() => {
        uni.hideLoading()
      })
    },
    
    async setPump(pump, level) {
      if (!this.status.online) {
        uni.showToast({ title: '设备离线', icon: 'none' })
        return
      }
      
      this.status[`pwm${pump}Level`] = level
      
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_pump', { pump, level })
        if (res.success) {
          setTimeout(() => this.loadStatus(), 800)
          uni.showToast({ title: '设置成功', icon: 'success' })
        } else {
          uni.showToast({ title: res.message || '设置失败', icon: 'none' })
        }
      } catch (error) {
        uni.showToast({ title: '设置失败', icon: 'none' })
      }
    },
    
    async setLight(level) {
      if (!this.status.online) {
        uni.showToast({ title: '设备离线', icon: 'none' })
        return
      }
      
      this.status.pwm3Level = level
      
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_light', { level })
        if (res.success) {
          setTimeout(() => this.loadStatus(), 800)
          uni.showToast({ title: '设置成功', icon: 'success' })
        } else {
          uni.showToast({ title: res.message || '设置失败', icon: 'none' })
        }
      } catch (error) {
        uni.showToast({ title: '设置失败', icon: 'none' })
      }
    },
    
    async setAirPump(level) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      this.status.airPumpLevel = level
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_air_pump', { level })
        if (res.success) { setTimeout(() => this.loadStatus(), 800); uni.showToast({ title: '设置成功', icon: 'success' }) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    
    async setFan(level) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      this.status.fanLevel = level
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_fan', { level })
        if (res.success) { setTimeout(() => this.loadStatus(), 800); uni.showToast({ title: '设置成功', icon: 'success' }) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    
    async setUV(e) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      const on = typeof e === 'object' ? e.detail.value : e
      this.status.uvLightOn = on
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_uv', { on })
        if (res.success) { setTimeout(() => this.loadStatus(), 800) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    
    async setRelay2(e) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      const on = typeof e === 'object' ? e.detail.value : e
      this.status.relay2State = on
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_relay2', { on })
        if (res.success) { setTimeout(() => this.loadStatus(), 800) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    
    async triggerServo() {
      if (!this.status.online || this.status.servoMoving) {
        uni.showToast({ title: '设备离线或舵机运行中', icon: 'none' })
        return
      }
      
      try {
        const res = await sendControlCommand(this.deviceKey, 'trigger_servo', {})
        if (res.success) {
          this.status.servoMoving = true
          this.servoStartTime = Date.now()  // 记录启动时间
          uni.showToast({ title: '舵机已启动', icon: 'success' })
        } else {
          uni.showToast({ title: res.message || '启动失败', icon: 'none' })
        }
      } catch (error) {
        uni.showToast({ title: '启动失败', icon: 'none' })
      }
    },
    
    checkServoTimeout() {
      // 舵机运行超15秒自动复位（舵机完整周期约8秒）
      if (this.status.servoMoving && this.servoStartTime > 0) {
        const elapsed = (Date.now() - this.servoStartTime) / 1000
        if (elapsed > 8) {
          this.status.servoMoving = false
          this.servoStartTime = 0
        }
      }
    },
    
    async togglePower() {
      if (!this.status.online) {
        uni.showToast({ title: '设备离线', icon: 'none' })
        return
      }
      
      const isPowered = this.status.systemPowered
      const cmd = isPowered ? 'power_off' : 'power_on'
      const confirmText = isPowered ? '确定要关机吗？\n关机后设备保持网络连接，可远程开机。' : '确定要开机吗？'
      
      uni.showModal({
        title: '确认操作',
        content: confirmText,
        success: (modalRes) => {
          if (!modalRes.confirm) return
          this.executePowerCmd(cmd)
        }
      })
    },
    
    async executePowerCmd(cmd) {
      try {
        const result = await sendControlCommand(this.deviceKey, cmd, {})
        if (result.success) {
          this.status.systemPowered = cmd === 'power_on'
          uni.showToast({ title: cmd === 'power_on' ? '开机成功' : '关机成功', icon: 'success' })
          setTimeout(() => this.loadStatus(), 1000)
        } else {
          uni.showToast({ title: result.message || '操作失败', icon: 'none' })
        }
      } catch (error) {
        uni.showToast({ title: '操作失败', icon: 'none' })
      }
    },

    // ===== 定时任务 =====
    getTaskTypeLabel(timer) {
      const type = this.taskTypes.find(t => t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params))
      return type ? type.label : '未知任务'
    },

    async loadTimers() {
      try {
        const res = await getTimers(this.deviceKey)
        if (res.success && res.timers) {
          this.timers = res.timers
        }
      } catch (error) {
        // 静默失败，使用空列表
        this.timers = []
      }
    },

    openTimerDialog(timer) {
      if (timer) {
        this.editingTimer = timer
        const typeIndex = this.taskTypes.findIndex(t => t.cmd === timer.cmd && JSON.stringify(t.params) === JSON.stringify(timer.params))
        const dur = this.durationOptions.find(d => d.value === (timer.duration / 60))
        this.timerForm = {
          id: timer.id,
          name: timer.name,
          hour: timer.hour,
          minute: timer.minute,
          type: typeIndex >= 0 ? typeIndex : 0,
          cmd: timer.cmd,
          params: timer.params,
          duration: timer.duration / 60, // 转为分钟
          durationLabel: dur ? dur.label : '不停止'
        }
      } else {
        this.editingTimer = null
        this.timerForm = {
          id: '',
          name: '',
          hour: 8,
          minute: 0,
          type: 0,
          cmd: 'trigger_servo',
          params: {},
          duration: 0,
          durationLabel: '不停止'
        }
      }
      this.timerDialogVisible = true
    },

    closeTimerDialog() {
      this.timerDialogVisible = false
      this.editingTimer = null
    },

    onTimeChange(e) {
      const vals = e.detail.value
      this.timerForm.hour = parseInt(vals[0])
      this.timerForm.minute = parseInt(vals[1])
    },

    onTaskTypeChange(e) {
      const idx = e.detail.value
      this.timerForm.type = idx
      const type = this.taskTypes[idx]
      this.timerForm.cmd = type.cmd
      this.timerForm.params = { ...type.params }
    },

    onDurationChange(e) {
      const idx = e.detail.value
      const opt = this.durationOptions[idx]
      this.timerForm.duration = opt.value
      this.timerForm.durationLabel = opt.label
    },

    confirmTimer() {
      if (!this.timerForm.name.trim()) {
        uni.showToast({ title: '请输入任务名称', icon: 'none' })
        return
      }

      const timerData = {
        id: this.timerForm.id || 'timer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        name: this.timerForm.name.trim(),
        hour: this.timerForm.hour,
        minute: this.timerForm.minute,
        type: this.timerForm.type,
        cmd: this.timerForm.cmd,
        params: this.timerForm.params,
        duration: this.timerForm.duration * 60, // 转为秒
        enabled: true
      }

      if (this.editingTimer) {
        const idx = this.timers.findIndex(t => t.id === this.editingTimer.id)
        if (idx >= 0) {
          this.timers[idx] = timerData
        }
      } else {
        this.timers.push(timerData)
      }

      this.closeTimerDialog()
      this.saveAllTimers()
    },

    async handleDeleteTimer(timer) {
      uni.showModal({
        title: '确认删除',
        content: '确定要删除定时任务"' + timer.name + '"吗？',
        success: async (res) => {
          if (res.confirm) {
            try {
              const result = await deleteTimerApi(this.deviceKey, timer.id)
              if (result.success) {
                this.timers = this.timers.filter(t => t.id !== timer.id)
                uni.showToast({ title: '删除成功', icon: 'success' })
              } else {
                uni.showToast({ title: result.message || '删除失败', icon: 'none' })
              }
            } catch (e) {
              uni.showToast({ title: '删除失败', icon: 'none' })
            }
          }
        }
      })
    },

    toggleTimer(timer) {
      timer.enabled = !timer.enabled
      this.saveAllTimers()
    },

    async saveAllTimers() {
      try {
        await saveTimers(this.deviceKey, this.timers)
      } catch (error) {
        uni.showToast({ title: '保存失败', icon: 'none' })
      }
    }
  }
}
</script>

<style lang="scss">
.control-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 120rpx;
}

.status-header {
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  padding: 40rpx;
  color: #fff;
  
  &.offline {
    background: linear-gradient(135deg, #666 0%, #333 100%);
  }
}

.status-indicator {
  display: flex;
  align-items: center;
  margin-bottom: 10rpx;
  
  .indicator-dot {
    width: 16rpx;
    height: 16rpx;
    background: #4caf50;
    border-radius: 50%;
    margin-right: 12rpx;
    
    .offline & {
      background: #f44336;
    }
  }
  
  text {
    font-size: 26rpx;
  }
}

.device-key {
  font-size: 36rpx;
  font-weight: bold;
}

.control-section, .sensor-section {
  padding: 20rpx 40rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
}

.control-card {
  background: #fff;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25rpx;
}

.control-name {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  padding: 6rpx 12rpx;
  border-radius: 8rpx;
  
  &:active {
    background: #f0f0f0;
  }
}

.control-value {
  font-size: 28rpx;
  color: #1a73e8;
  font-weight: bold;
}

.pump-controls {
  display: flex;
  justify-content: space-between;
}

.level-btn {
  flex: 1;
  height: 70rpx;
  margin: 0 10rpx;
  background: #f5f5f5;
  color: #666;
  font-size: 26rpx;
  border-radius: 10rpx;
  border: none;
  
  &.active {
    background: #1a73e8;
    color: #fff;
  }
}

.action-btn, .power-btn {
  width: 100%;
  height: 80rpx;
  background: #4caf50;
  color: #fff;
  font-size: 30rpx;
  border-radius: 10rpx;
  border: none;
  
  &.busy {
    background: #ff9800;
  }
  
  &.on {
    background: #f44336;
  }
}

.switch-card {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx 30rpx;
  margin-bottom: 16rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
}

.switch-label {
  font-size: 30rpx;
  color: #333;
  font-weight: 500;
  padding: 6rpx 12rpx;
  border-radius: 8rpx;
  
  &:active {
    background: #f0f0f0;
  }
}

.sensor-grid {
  display: flex;
  justify-content: space-between;
}

.sensor-item {
  flex: 1;
  background: #fff;
  border-radius: 20rpx;
  padding: 30rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10rpx;
}

.sensor-icon {
  font-size: 48rpx;
  margin-bottom: 15rpx;
}

.sensor-label {
  font-size: 26rpx;
  color: #999;
  margin-bottom: 10rpx;
}

.sensor-value {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 40rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
}

.refresh-time {
  font-size: 24rpx;
  color: #999;
}

.refresh-btn {
  font-size: 26rpx;
  color: #1a73e8;
  border: none;
  background: none;
}

/* 重命名弹窗 */
.dialog-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.dialog-box {
  width: 600rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 50rpx 40rpx 30rpx;
}

.dialog-title {
  font-size: 34rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
  display: block;
  margin-bottom: 40rpx;
}

.dialog-input {
  width: 100%;
  height: 80rpx;
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 30rpx;
  box-sizing: border-box;
  margin-bottom: 40rpx;
}

.dialog-buttons {
  display: flex;
  justify-content: space-between;
}

.dialog-btn {
  flex: 1;
  height: 80rpx;
  font-size: 30rpx;
  border-radius: 12rpx;
  border: none;
  margin: 0 10rpx;
}

.dialog-cancel {
  background: #f5f5f5;
  color: #666;
}

.dialog-confirm {
  background: #1a73e8;
  color: #fff;
}

/* 定时任务 */
.empty-tip {
  text-align: center;
  padding: 30rpx;
  color: #999;
  font-size: 26rpx;
}

.timer-card {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx 30rpx;
  margin-bottom: 16rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
}

.timer-card-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.timer-card-top {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.timer-name {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
}

.timer-time {
  font-size: 28rpx;
  color: #1a73e8;
  font-weight: bold;
}

.timer-desc {
  font-size: 26rpx;
  color: #666;
}

.timer-duration {
  font-size: 24rpx;
  color: #999;
}

.timer-card-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rpx;
}

.timer-actions {
  display: flex;
  gap: 8rpx;
}

.timer-edit {
  font-size: 24rpx;
  color: #1a73e8;
  padding: 4rpx 12rpx;
}

.timer-delete {
  font-size: 24rpx;
  color: #f44336;
  padding: 4rpx 12rpx;
}

.add-timer-btn {
  width: 100%;
  height: 80rpx;
  background: #fff;
  color: #1a73e8;
  font-size: 30rpx;
  border-radius: 16rpx;
  border: 2rpx dashed #1a73e8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rpx;
}

.timer-dialog {
  max-height: 80vh;
  overflow-y: auto;
}

.timer-form-label {
  font-size: 28rpx;
  color: #333;
  font-weight: 500;
  display: block;
  margin-bottom: 16rpx;
  margin-top: 20rpx;
}

.timer-form-label:first-of-type {
  margin-top: 0;
}

.timer-picker-row {
  margin-bottom: 20rpx;
}

.timer-picker {
  width: 100%;
  height: 80rpx;
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 30rpx;
  line-height: 80rpx;
  color: #333;
  box-sizing: border-box;
}
</style>
