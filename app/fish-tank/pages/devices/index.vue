<template>
  <view class="devices-page">
    <view class="header">
      <view class="header-left">
        <text class="header-title">我的设备</text>
        <text class="phone-number">{{ phoneNumber }}</text>
      </view>
      <view class="header-right">
        <button class="logout-btn" @click="handleLogout">退出</button>
        <button v-if="!editMode" class="edit-btn" @click="enterEditMode">编辑</button>
        <button v-else class="cancel-btn" @click="exitEditMode">取消</button>
        <button class="add-btn" @click="goToBind">+ 添加</button>
      </view>
    </view>
    
    <view class="search-bar">
      <input 
        class="search-input" 
        v-model="searchKey" 
        placeholder="搜索设备"
      />
    </view>
    
    <scroll-view class="device-list" scroll-y>
      <view v-if="devices.length === 0" class="empty-state">
        <text class="empty-icon">📱</text>
        <text class="empty-text">暂无设备</text>
        <text class="empty-hint">点击右上角添加设备</text>
      </view>
      
      <view 
        v-for="device in filteredDevices" 
        :key="device.device_key"
        class="device-card"
      >
        <view class="device-content" @click="handleDeviceClick(device)">
          <view v-if="editMode" class="checkbox" :class="{ checked: selectedDevices.includes(device.device_key) }">
            <text v-if="selectedDevices.includes(device.device_key)">✓</text>
          </view>
          <view class="device-icon">
            <text>{{ device.online ? '✅' : '🔴' }}</text>
          </view>
          <view class="device-info">
            <text class="device-name">{{ getDeviceName(device) }}</text>
            <text class="device-key-label">{{ device.device_key }}</text>
            <text class="device-status">{{ device.online ? '在线' : '离线' }}</text>
          </view>
          <view v-if="editMode" class="device-rename" @click.stop="startRename(device)">
            <text>✏️</text>
          </view>
          <view v-else class="device-arrow">
            <text>›</text>
          </view>
        </view>
      </view>
    </scroll-view>
    
    <view v-if="editMode" class="edit-bottom-bar">
      <text class="selected-count">已选 {{ selectedDevices.length }} 个</text>
      <button class="batch-delete-btn" @click="batchDelete" :disabled="selectedDevices.length === 0">
        删除 ({{ selectedDevices.length }})
      </button>
    </view>
    
    <view v-else class="bottom-bar">
      <text class="refresh-time">更新于 {{ lastUpdateTime }}</text>
      <button class="refresh-btn" @click="refreshDevices">↻ 刷新</button>
    </view>

    <!-- 重命名弹窗 -->
    <view v-if="renameVisible" class="dialog-overlay" @click="cancelRename">
      <view class="dialog-box" @click.stop>
        <text class="dialog-title">重命名设备</text>
        <input 
          class="dialog-input" 
          v-model="renameValue" 
          placeholder="输入设备名称"
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
import { getPhoneNumber, clearPhoneNumber } from '@/utils/storage'
import { getDevices, unbindDevice } from '@/utils/api'

export default {
  data() {
    return {
      devices: [],
      searchKey: '',
      lastUpdateTime: '',
      timer: null,
      phoneNumber: '',
      editMode: false,
      selectedDevices: [],
      renameVisible: false,
      renameValue: '',
      renameDevice: null,
      ws: null,
      wsReconnectTimer: null
    }
  },
  computed: {
    filteredDevices() {
      if (!this.searchKey) return this.devices
      return this.devices.filter(d => {
        const name = this.getDeviceName(d)
        return d.device_key.includes(this.searchKey) || name.includes(this.searchKey)
      })
    }
  },
  onLoad() {
    this.phoneNumber = getPhoneNumber() || ''
    this.loadDevices()
    this.timer = setInterval(() => {
      this.loadDevices()
    }, 30000)  // 改为30秒轮询（WebSocket推送实时更新）
    
    this.connectWS()
  },
  onUnload() {
    if (this.timer) {
      clearInterval(this.timer)
    }
    this.disconnectWS()
  },
  methods: {
    getDeviceName(device) {
      const key = 'device_name_' + device.device_key
      const name = uni.getStorageSync(key)
      return name || device.device_key
    },
    
    startRename(device) {
      this.renameDevice = device
      this.renameValue = this.getDeviceName(device) === device.device_key ? '' : this.getDeviceName(device)
      this.renameVisible = true
    },
    
    cancelRename() {
      this.renameVisible = false
      this.renameDevice = null
      this.renameValue = ''
    },
    
    confirmRename() {
      if (!this.renameDevice) return
      const key = 'device_name_' + this.renameDevice.device_key
      if (this.renameValue && this.renameValue.trim()) {
        uni.setStorageSync(key, this.renameValue.trim())
        uni.showToast({ title: '重命名成功', icon: 'success' })
      } else {
        uni.removeStorageSync(key)
        uni.showToast({ title: '已恢复默认名称', icon: 'none' })
      }
      this.$forceUpdate()
      this.cancelRename()
    },
    
    // ===== WebSocket 实时推送 =====
    getWSBaseURL() {
      try {
        if (window && window.location) {
          return `ws://${window.location.host}`
        }
      } catch (e) {}
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
          uni.sendSocketMessage({
            data: JSON.stringify({ type: 'auth', phone })
          })
        })
        
        this.ws.onMessage((res) => {
          try {
            const msg = JSON.parse(res.data)
            if (msg.type === 'device_status') {
              // 设备状态变化，实时更新列表
              const idx = this.devices.findIndex(d => d.device_key === msg.device_key)
              if (idx > -1) {
                this.devices[idx].online = msg.online
                // 更新状态数据
                if (msg.status) {
                  this.devices[idx].status = msg.status
                }
                this.lastUpdateTime = new Date().toLocaleTimeString()
                this.$forceUpdate()
              }
            }
          } catch (e) {}
        })
        
        this.ws.onClose(() => {
          this.ws = null
          if (!this.wsReconnectTimer) {
            this.wsReconnectTimer = setTimeout(() => {
              this.wsReconnectTimer = null
              this.connectWS()
            }, 5000)
          }
        })
        
        this.ws.onError(() => {})
      } catch (e) {
        console.log('WebSocket连接失败', e)
      }
    },
    
    disconnectWS() {
      if (this.wsReconnectTimer) {
        clearTimeout(this.wsReconnectTimer)
        this.wsReconnectTimer = null
      }
      if (this.ws) {
        try { this.ws.close() } catch (e) {}
        this.ws = null
      }
    },
    
    async loadDevices() {
      const phone = getPhoneNumber()
      if (!phone) return
      
      try {
        const res = await getDevices(phone)
        if (res.success) {
          this.devices = res.devices || []
          this.lastUpdateTime = new Date().toLocaleTimeString()
        }
      } catch (error) {
        console.error('加载设备失败', error)
      }
    },
    
    refreshDevices() {
      uni.showLoading({ title: '刷新中...' })
      this.loadDevices().then(() => {
        uni.hideLoading()
      })
    },
    
    handleLogout() {
      uni.showModal({
        title: '确认退出',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            clearPhoneNumber()
            uni.redirectTo({ url: '/pages/login/index' })
          }
        }
      })
    },
    
    goToBind() {
      uni.navigateTo({ url: '/pages/bind/index' })
    },
    
    handleDeviceClick(device) {
      if (this.editMode) {
        const index = this.selectedDevices.indexOf(device.device_key)
        if (index > -1) {
          this.selectedDevices.splice(index, 1)
        } else {
          this.selectedDevices.push(device.device_key)
        }
      } else {
        // 根据型号跳转不同控制页
        let page = '/pages/control/index'
        if (device.model === 'fish_one') {
          page = '/pages/control/fish-one'
        } else if (device.model === 'fish_mini') {
          page = '/pages/control/fish-mini'
        }
        uni.navigateTo({ 
          url: `${page}?device_key=${device.device_key}`
        })
      }
    },
    
    enterEditMode() {
      this.editMode = true
      this.selectedDevices = []
    },
    
    exitEditMode() {
      this.editMode = false
      this.selectedDevices = []
    },
    
    async batchDelete() {
      if (this.selectedDevices.length === 0) return
      
      uni.showModal({
        title: '确认删除',
        content: `确定要删除选中的 ${this.selectedDevices.length} 个设备吗？`,
        success: async (res) => {
          if (!res.confirm) return
          
          const phone = getPhoneNumber()
          let successCount = 0
          
          for (const key of this.selectedDevices) {
            try {
              const result = await unbindDevice(phone, key)
              if (result.success) successCount++
              uni.removeStorageSync('device_name_' + key)
            } catch (e) {}
          }
          
          uni.showToast({ 
            title: `删除成功 ${successCount} 个`, 
            icon: 'success' 
          })
          
          this.exitEditMode()
          this.loadDevices()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.devices-page {
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 120rpx;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40rpx;
  background: #fff;
}

.header-left {
  display: flex;
  flex-direction: column;
}

.header-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.phone-number {
  font-size: 24rpx;
  color: #999;
  margin-top: 8rpx;
}

.header-right {
  display: flex;
  align-items: center;
}

.logout-btn {
  font-size: 26rpx;
  color: #f44336;
  border: none;
  background: none;
  margin-right: 20rpx;
}

.edit-btn {
  font-size: 28rpx;
  color: #1a73e8;
  border: none;
  background: none;
  margin-right: 20rpx;
}

.cancel-btn {
  font-size: 28rpx;
  color: #666;
  border: none;
  background: none;
  margin-right: 20rpx;
}

.add-btn {
  background: #1a73e8;
  color: #fff;
  font-size: 28rpx;
  padding: 16rpx 32rpx;
  border-radius: 40rpx;
  border: none;
}

.search-bar {
  padding: 20rpx 40rpx;
  background: #fff;
  border-top: 1rpx solid #eee;
}

.search-input {
  width: 100%;
  height: 70rpx;
  background: #f5f5f5;
  border-radius: 35rpx;
  padding: 0 30rpx;
  font-size: 28rpx;
}

.device-list {
  height: calc(100vh - 380rpx);
  padding: 20rpx 40rpx;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
}

.empty-icon {
  font-size: 80rpx;
  margin-bottom: 30rpx;
}

.empty-text {
  font-size: 32rpx;
  color: #666;
  margin-bottom: 16rpx;
}

.empty-hint {
  font-size: 26rpx;
  color: #999;
}

.device-card {
  background: #fff;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);
}

.device-content {
  display: flex;
  align-items: center;
}

.checkbox {
  width: 48rpx;
  height: 48rpx;
  border: 2rpx solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20rpx;
  font-size: 28rpx;
  color: #fff;
  
  &.checked {
    background: #1a73e8;
    border-color: #1a73e8;
  }
}

.device-icon {
  width: 60rpx;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  margin-right: 20rpx;
}

.device-info {
  flex: 1;
}

.device-name {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  display: block;
}

.device-key-label {
  font-size: 22rpx;
  color: #bbb;
  display: block;
}

.device-status {
  font-size: 26rpx;
  color: #999;
}

.device-arrow {
  font-size: 40rpx;
  color: #ccc;
  padding: 10rpx;
}

.device-rename {
  font-size: 36rpx;
  padding: 10rpx;
  margin-left: 10rpx;
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

.edit-bottom-bar {
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

.selected-count {
  font-size: 28rpx;
  color: #666;
}

.batch-delete-btn {
  background: #f44336;
  color: #fff;
  font-size: 28rpx;
  padding: 16rpx 32rpx;
  border-radius: 40rpx;
  border: none;
  
  &[disabled] {
    background: #ccc;
  }
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
</style>
