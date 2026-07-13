<template>
  <view class="mini-page">
    <!-- 顶部：设备标识 + 在线状态 -->
    <view class="status-header" :class="{ offline: !status.online }">
      <view class="status-row">
        <view class="status-indicator">
          <view class="indicator-dot" :class="{ online: status.online }"></view>
          <text>{{ status.online ? '在线' : '离线' }}</text>
        </view>
        <text class="device-key">{{ deviceKey }}</text>
      </view>
    </view>

    <!-- 传感器数据 -->
    <view class="sensor-row">
      <view class="sensor-card">
        <text class="sensor-label">温度</text>
        <text class="sensor-value">{{ (status.waterTemperature || 0).toFixed(1) }}°C</text>
      </view>
      <view class="sensor-card">
        <text class="sensor-label">TDS</text>
        <text class="sensor-value">{{ status.tdsValue || 0 }}ppm</text>
      </view>
    </view>

    <!-- 操作按钮 -->
    <view class="action-row">
      <button class="action-btn power-btn" :class="{ on: status.systemPowered }" @click="togglePower">
        <text class="action-icon">⏻</text>
        <text>{{ status.systemPowered ? '关机' : '开机' }}</text>
      </button>
      <button class="action-btn feed-btn" :class="{ busy: status.servoMoving }" :disabled="status.servoMoving" @click="triggerServo">
        <text class="action-icon">🍚</text>
        <text>{{ status.servoMoving ? '运行中...' : '喂食' }}</text>
      </button>
    </view>

    <!-- 水泵 -->
    <view class="ctrl-section">
      <view class="ctrl-card">
        <view class="ctrl-header">
          <text class="ctrl-name" @click="startRename('pump', '水泵')">{{ getCtrlName('pump', '水泵') }}</text>
        </view>
        <view class="level-group">
          <button v-for="(lbl, idx) in levels" :key="'p'+idx" class="level-btn"
            :class="{ active: (status.pumpLevel || 0) === idx }"
            @click="setPumpLevel(idx)">
            {{ lbl }}
          </button>
        </view>
      </view>
    </view>

    <!-- 灯条 -->
    <view class="ctrl-section">
      <view class="ctrl-card">
        <view class="ctrl-header">
          <text class="ctrl-name" @click="startRename('light', '灯条')">{{ getCtrlName('light', '灯条') }}</text>
        </view>
        <view class="level-group">
          <button v-for="(lbl, idx) in levels" :key="'l'+idx" class="level-btn"
            :class="{ active: (status.lightLevel || 0) === idx }"
            @click="setLightLevel(idx)">
            {{ lbl }}
          </button>
        </view>
      </view>
    </view>

    <!-- 氧气泵 -->
    <view class="ctrl-section">
      <view class="ctrl-card">
        <view class="ctrl-header">
          <text class="ctrl-name" @click="startRename('airPump', '氧气泵')">{{ getCtrlName('airPump', '氧气泵') }}</text>
        </view>
        <view class="level-group">
          <button v-for="(lbl, idx) in levels" :key="'a'+idx" class="level-btn"
            :class="{ active: (status.airPumpLevel || 0) === idx }"
            @click="setAirPumpLevel(idx)">
            {{ lbl }}
          </button>
        </view>
      </view>
    </view>

    <!-- 备用开关 -->
    <view class="ctrl-section">
      <view class="switch-row">
        <view class="switch-card">
          <text class="ctrl-name" @click="startRename('switch1', '备用开关1')">{{ getCtrlName('switch1', '备用开关1') }}</text>
          <view class="custom-switch" :class="status.switch1On ? 'on' : 'off'" @click="setSwitch1(!status.switch1On)">
            <view class="custom-switch-knob"></view>
          </view>
        </view>
        <view class="switch-card">
          <text class="ctrl-name" @click="startRename('switch2', '备用开关2')">{{ getCtrlName('switch2', '备用开关2') }}</text>
          <view class="custom-switch" :class="status.switch2On ? 'on' : 'off'" @click="setSwitch2(!status.switch2On)">
            <view class="custom-switch-knob"></view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部刷新 -->
    <view class="bottom-bar">
      <text class="refresh-time">更新于 {{ lastUpdateTime }}</text>
      <button class="refresh-btn" @click="refreshStatus">↻ 刷新</button>
    </view>

    <!-- 重命名弹窗 -->
    <view v-if="renameVisible" class="dialog-overlay" @click="cancelRename">
      <view class="dialog-box" @click.stop>
        <text class="dialog-title">重命名</text>
        <input class="dialog-input" v-model="renameValue" placeholder="输入名称" maxlength="20" focus />
        <view class="dialog-buttons">
          <button class="dialog-btn dialog-cancel" @click="cancelRename">取消</button>
          <button class="dialog-btn dialog-confirm" @click="confirmRename">确认</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getDeviceStatus, sendControlCommand } from '@/utils/api'

export default {
  data() {
    return {
      deviceKey: '',
      status: {
        online: false,
        waterTemperature: 0,
        tdsValue: 0,
        pumpLevel: 0,
        lightLevel: 0,
        airPumpLevel: 0,
        switch1On: false,
        switch2On: false,
        servoMoving: false,
        systemPowered: true
      },
      levels: ['关', '一档', '二档', '三档'],
      lastUpdateTime: '',
      pollTimer: null,
      renameVisible: false,
      renameValue: '',
      renameTarget: '',
      renameDefault: '',
      ws: null,
      wsConnected: false,
      wsReconnectTimer: null,
      lastClickTime: 0,
      servoStartTime: 0
    }
  },
  onLoad(options) {
    this.deviceKey = options.device_key || ''
    if (!this.deviceKey) {
      uni.showToast({ title: '设备参数错误', icon: 'none' })
      return
    }
    this.loadStatus()
    this.connectWS()
    // 10秒轮询备份
    this.pollTimer = setInterval(() => {
      this.loadStatus()
      this.checkServoTimeout()
    }, 10000)
  },
  onUnload() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer)
      this.pollTimer = null
    }
    this.disconnectWS()
  },
  methods: {
    getCtrlName(target, defaultName) {
      const key = 'ctrl_name_' + this.deviceKey + '_' + target
      return uni.getStorageSync(key) || defaultName
    },
    checkRateLimit() {
      const now = Date.now()
      if (now - this.lastClickTime < 1000) {
        uni.showToast({ title: '操作过快', icon: 'none' })
        return false
      }
      this.lastClickTime = now
      return true
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

    // WebSocket
    getWSBaseURL() {
      try {
        if (window && window.location) {
          return 'ws://' + window.location.host
        }
      } catch (e) {}
      return 'ws://112.124.107.159:7965'
    },
    connectWS() {
      if (this.ws) return
      try {
        const baseUrl = this.getWSBaseURL()
        this.ws = uni.connectSocket({
          url: baseUrl + '/ws/client',
          success: () => {}
        })
        this.ws.onOpen(() => {
          this.wsConnected = true
          uni.sendSocketMessage({
            data: JSON.stringify({ type: 'subscribe', device_key: this.deviceKey })
          })
        })
        this.ws.onMessage((res) => {
          try {
            const msg = JSON.parse(res.data)
            if (msg.type === 'device_status' && msg.device_key === this.deviceKey) {
              this.updateFromWS(msg)
            }
          } catch (e) {}
        })
        this.ws.onClose(() => {
          this.wsConnected = false
          this.ws = null
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
    updateFromWS(msg) {
      const s = msg.status || {}
      const moving = s.servoMoving || false
      if (moving && !this.servoStartTime) this.servoStartTime = Date.now()
      if (!moving) this.servoStartTime = 0
      this.status = {
        online: msg.online || false,
        waterTemperature: s.waterTemperature || 0,
        tdsValue: s.tdsValue || 0,
        pumpLevel: s.pumpLevel || 0,
        lightLevel: s.lightLevel || 0,
        airPumpLevel: s.airPumpLevel || 0,
        switch1On: s.switch1On || false,
        switch2On: s.switch2On || false,
        servoMoving: s.servoMoving || false,
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
          if (moving && !this.servoStartTime) this.servoStartTime = Date.now()
          if (!moving) this.servoStartTime = 0
          this.status = {
            online: res.online || false,
            waterTemperature: s.waterTemperature || 0,
            tdsValue: s.tdsValue || 0,
            pumpLevel: s.pumpLevel || 0,
            lightLevel: s.lightLevel || 0,
            airPumpLevel: s.airPumpLevel || 0,
            switch1On: s.switch1On || false,
            switch2On: s.switch2On || false,
            servoMoving: s.servoMoving || false,
            systemPowered: s.systemPowered !== false
          }
          this.lastUpdateTime = new Date().toLocaleTimeString()
        }
      } catch (error) {
        this.status.online = false
      }
    },

    async refreshStatus() {
      uni.showLoading({ title: '刷新中...' })
      try {
        await this.loadStatus()
      } catch (e) {}
      uni.hideLoading()
    },

    checkServoTimeout() {
      if (this.status.servoMoving && this.servoStartTime > 0) {
        if ((Date.now() - this.servoStartTime) / 1000 > 8) {
          this.status.servoMoving = false
          this.servoStartTime = 0
        }
      }
    },

    // 控制方法
    async setPumpLevel(level) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      if (!this.checkRateLimit()) return
      this.status.pumpLevel = level
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_pump', { level })
        if (res.success) { setTimeout(() => this.loadStatus(), 800); uni.showToast({ title: '设置成功', icon: 'success' }) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    async setLightLevel(level) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      if (!this.checkRateLimit()) return
      this.status.lightLevel = level
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_light', { level })
        if (res.success) { setTimeout(() => this.loadStatus(), 800); uni.showToast({ title: '设置成功', icon: 'success' }) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    async setAirPumpLevel(level) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      if (!this.checkRateLimit()) return
      this.status.airPumpLevel = level
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_air_pump', { level })
        if (res.success) { setTimeout(() => this.loadStatus(), 800); uni.showToast({ title: '设置成功', icon: 'success' }) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    async setSwitch1(on) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      if (!this.checkRateLimit()) return
      this.status.switch1On = on
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_switch1', { on })
        if (res.success) { setTimeout(() => this.loadStatus(), 800) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    async setSwitch2(on) {
      if (!this.status.online) { uni.showToast({ title: '设备离线', icon: 'none' }); return }
      if (!this.checkRateLimit()) return
      this.status.switch2On = on
      try {
        const res = await sendControlCommand(this.deviceKey, 'set_switch2', { on })
        if (res.success) { setTimeout(() => this.loadStatus(), 800) }
        else { uni.showToast({ title: res.message || '设置失败', icon: 'none' }) }
      } catch (e) { uni.showToast({ title: '设置失败', icon: 'none' }) }
    },
    async triggerServo() {
      if (!this.status.online || this.status.servoMoving) {
        uni.showToast({ title: '设备离线或运行中', icon: 'none' })
        return
      }
      if (!this.checkRateLimit()) return
      try {
        const res = await sendControlCommand(this.deviceKey, 'trigger_servo', {})
        if (res.success) {
          this.status.servoMoving = true
          this.servoStartTime = Date.now()
          uni.showToast({ title: '喂食已启动', icon: 'success' })
        } else {
          uni.showToast({ title: res.message || '启动失败', icon: 'none' })
        }
      } catch (e) {
        uni.showToast({ title: '启动失败', icon: 'none' })
      }
    },
    async togglePower() {
      if (!this.status.online) {
        uni.showToast({ title: '设备离线', icon: 'none' })
        return
      }
      const isPowered = this.status.systemPowered
      const cmd = isPowered ? 'power_off' : 'power_on'
      uni.showModal({
        title: '确认操作',
        content: isPowered ? '确定要关机吗？' : '确定要开机吗？',
        success: (modalRes) => {
          if (modalRes.confirm) this.executePowerCmd(cmd)
        }
      })
    },
    async executePowerCmd(cmd) {
      if (!this.checkRateLimit()) return
      try {
        const res = await sendControlCommand(this.deviceKey, cmd, {})
        if (res.success) {
          this.status.systemPowered = cmd === 'power_on'
          uni.showToast({ title: cmd === 'power_on' ? '开机成功' : '关机成功', icon: 'success' })
          setTimeout(() => this.loadStatus(), 1000)
        } else {
          uni.showToast({ title: res.message || '操作失败', icon: 'none' })
        }
      } catch (e) {
        uni.showToast({ title: '操作失败', icon: 'none' })
      }
    }
  }
}
</script>

<style>
.mini-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 120rpx;
}

/* 状态头部 */
.status-header {
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  padding: 30rpx 40rpx;
  color: #fff;
}
.status-header.offline {
  background: linear-gradient(135deg, #666 0%, #333 100%);
}
.status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.status-indicator {
  display: flex;
  align-items: center;
}
.indicator-dot {
  width: 16rpx;
  height: 16rpx;
  background: #f44336;
  border-radius: 50%;
  margin-right: 10rpx;
}
.indicator-dot.online {
  background: #4caf50;
}
.status-indicator text {
  font-size: 26rpx;
}
.device-key {
  font-size: 32rpx;
  font-weight: bold;
}

/* 传感器 */
.sensor-row {
  display: flex;
  padding: 20rpx 30rpx;
  gap: 20rpx;
}
.sensor-card {
  flex: 1;
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}
.sensor-label {
  font-size: 24rpx;
  color: #999;
  margin-bottom: 8rpx;
}
.sensor-value {
  font-size: 40rpx;
  font-weight: bold;
  color: #333;
}

/* 操作按钮 */
.action-row {
  display: flex;
  padding: 0 30rpx 20rpx;
  gap: 20rpx;
}
.action-btn {
  flex: 1;
  height: 100rpx;
  border-radius: 16rpx;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
  color: #fff;
}
.action-icon {
  font-size: 40rpx;
  margin-bottom: 4rpx;
}
.power-btn {
  background: #4caf50;
}
.power-btn.on {
  background: #f44336;
}
.feed-btn {
  background: #ff9800;
}
.feed-btn.busy {
  background: #999;
}

/* 控制卡片 */
.ctrl-section {
  padding: 0 30rpx 16rpx;
}
.ctrl-card {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}
.ctrl-header {
  margin-bottom: 20rpx;
}
.ctrl-name {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  padding: 4rpx 10rpx;
  border-radius: 6rpx;
}
.ctrl-name:active {
  background: #f0f0f0;
}
.level-group {
  display: flex;
  gap: 12rpx;
}
.level-btn {
  flex: 1;
  height: 64rpx;
  background: #f5f5f5;
  color: #666;
  font-size: 24rpx;
  border-radius: 10rpx;
  border: none;
  margin: 0;
}
.level-btn.active {
  background: #1a73e8;
  color: #fff;
}

/* 开关 */
.switch-row {
  display: flex;
  gap: 20rpx;
}
.switch-card {
  flex: 1;
  background: #fff;
  border-radius: 16rpx;
  padding: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05);
}
.switch-card .ctrl-name {
  font-size: 26rpx;
}

.custom-switch {
  width: 88rpx;
  height: 48rpx;
  border-radius: 24rpx;
  padding: 4rpx;
  transition: background 0.2s;
  position: relative;
}
.custom-switch.off { background: #ddd; }
.custom-switch.on { background: #1a73e8; }
.custom-switch .custom-switch-knob {
  width: 40rpx;
  height: 40rpx;
  border-radius: 20rpx;
  background: #fff;
  box-shadow: 0 2rpx 6rpx rgba(0,0,0,0.2);
  transition: transform 0.2s;
}
.custom-switch.on .custom-switch-knob {
  transform: translateX(40rpx);
}

/* 底部 */
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
}
.refresh-time {
  font-size: 22rpx;
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
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.dialog-box {
  width: 560rpx;
  background: #fff;
  border-radius: 20rpx;
  padding: 40rpx 36rpx 30rpx;
}
.dialog-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  text-align: center;
  display: block;
  margin-bottom: 36rpx;
}
.dialog-input {
  width: 100%;
  height: 76rpx;
  background: #f5f5f5;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  box-sizing: border-box;
  margin-bottom: 36rpx;
}
.dialog-buttons {
  display: flex;
  gap: 20rpx;
}
.dialog-btn {
  flex: 1;
  height: 76rpx;
  font-size: 28rpx;
  border-radius: 12rpx;
  border: none;
  margin: 0;
}
.dialog-cancel {
  background: #f5f5f5;
  color: #666;
}
.dialog-confirm {
  background: #1a73e8;
  color: #fff;
}
</style>
