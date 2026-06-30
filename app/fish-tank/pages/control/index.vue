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
          <text class="control-name">水泵1</text>
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
          <text class="control-name">水泵2</text>
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
          <text class="control-name">灯条</text>
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
      <view class="section-title">设备控制</view>
      
      <view class="control-card">
        <view class="control-header">
          <text class="control-name">舵机</text>
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
          <text class="control-name">系统电源</text>
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
          <text class="sensor-label">温度电压</text>
          <text class="sensor-value">{{ status.adcTempVoltage.toFixed(2) }}V</text>
        </view>
        <view class="sensor-item">
          <text class="sensor-icon">💧</text>
          <text class="sensor-label">水质电压</text>
          <text class="sensor-value">{{ status.adcWQVoltage.toFixed(2) }}V</text>
        </view>
      </view>
    </view>
    
    <view class="bottom-bar">
      <text class="refresh-time">更新于 {{ lastUpdateTime }}</text>
      <button class="refresh-btn" @click="refreshStatus">↻ 刷新</button>
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
        pwm1Level: 0,
        pwm2Level: 0,
        pwm3Level: 0,
        servoMoving: false,
        adcWQVoltage: 0,
        adcTempVoltage: 0,
        systemPowered: true
      },
      pumpLevels: ['关', '一档', '二档', '三档'],
      lastUpdateTime: '',
      timer: null
    }
  },
  onLoad(options) {
    this.deviceKey = options.device_key || ''
    if (!this.deviceKey) {
      uni.showToast({ title: '设备参数错误', icon: 'none' })
      return
    }
    
    this.loadStatus()
    this.timer = setInterval(() => {
      this.loadStatus()
    }, 5000)
  },
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    async loadStatus() {
      try {
        const res = await getDeviceStatus(this.deviceKey)
        if (res.success) {
          const s = res.status || {}
          this.status = {
            online: res.online || false,
            pwm1Level: s.pwm1Level || 0,
            pwm2Level: s.pwm2Level || 0,
            pwm3Level: s.pwm3Level || 0,
            servoMoving: s.servoMoving || false,
            adcWQVoltage: s.adcWQVoltage || 0,
            adcTempVoltage: s.adcTempVoltage || 0,
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
      
      // 乐观更新
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
      
      // 乐观更新
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
    
    async triggerServo() {
      if (!this.status.online || this.status.servoMoving) {
        uni.showToast({ title: '设备离线或舵机运行中', icon: 'none' })
        return
      }
      
      try {
        const res = await sendControlCommand(this.deviceKey, 'trigger_servo', {})
        if (res.success) {
          this.status.servoMoving = true
          uni.showToast({ title: '舵机已启动', icon: 'success' })
        } else {
          uni.showToast({ title: res.message || '启动失败', icon: 'none' })
        }
      } catch (error) {
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
</style>