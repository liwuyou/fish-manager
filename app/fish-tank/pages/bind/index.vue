<template>
  <view class="bind-page">
    <view class="header">
      <text class="header-title">绑定设备</text>
    </view>
    
    <view class="bind-card">
      <view class="bind-icon">🔑</view>
      <text class="bind-title">输入设备密钥</text>
      <text class="bind-hint">设备密钥可在OLED屏幕上查看</text>
      
      <view class="input-group">
        <input 
          class="key-input" 
          v-model="deviceKey" 
          type="text" 
          placeholder="请输入8位密钥"
          maxlength="8"
        />
      </view>
      
      <button class="bind-btn" @click="handleBind" :disabled="!deviceKey || deviceKey.length !== 8">
        绑定设备
      </button>
      
      <view class="tips">
        <text>首次使用请先连接设备WiFi进行配置</text>
      </view>
    </view>
    
    <view class="guide-section">
      <text class="guide-title">配置步骤</text>
      <view class="guide-list">
        <view class="guide-item">
          <view class="guide-number">1</view>
          <text class="guide-text">连接设备WiFi (fish-manager-xxxx)</text>
        </view>
        <view class="guide-item">
          <view class="guide-number">2</view>
          <text class="guide-text">打开浏览器访问配置页面</text>
        </view>
        <view class="guide-item">
          <view class="guide-number">3</view>
          <text class="guide-text">输入手机号和家庭WiFi信息</text>
        </view>
        <view class="guide-item">
          <view class="guide-number">4</view>
          <text class="guide-text">保存后设备自动连接WiFi</text>
        </view>
        <view class="guide-item">
          <view class="guide-number">5</view>
          <text class="guide-text">在APP中输入密钥完成绑定</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getPhoneNumber } from '@/utils/storage'
import { bindDevice } from '@/utils/api'

export default {
  data() {
    return {
      deviceKey: ''
    }
  },
  methods: {
    async handleBind() {
      if (this.deviceKey.length !== 8) {
        uni.showToast({ title: '请输入8位密钥', icon: 'none' })
        return
      }
      
      const phone = getPhoneNumber()
      if (!phone) {
        uni.showToast({ title: '请先登录', icon: 'none' })
        uni.navigateTo({ url: '/pages/login/index' })
        return
      }
      
      uni.showLoading({ title: '绑定中...' })
      
      try {
        const res = await bindDevice(phone, this.deviceKey)
        uni.hideLoading()
        
        if (res.success) {
          uni.showToast({ title: '绑定成功', icon: 'success' })
          setTimeout(() => {
            uni.navigateBack()
          }, 1500)
        } else {
          uni.showToast({ title: res.message || '绑定失败', icon: 'none' })
        }
      } catch (error) {
        uni.hideLoading()
        uni.showToast({ title: '绑定失败', icon: 'none' })
      }
    }
  }
}
</script>

<style lang="scss">
.bind-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.header {
  background: #fff;
  padding: 40rpx;
  border-bottom: 1rpx solid #eee;
}

.header-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
}

.bind-card {
  margin: 40rpx;
  background: #fff;
  border-radius: 24rpx;
  padding: 50rpx 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bind-icon {
  font-size: 80rpx;
  margin-bottom: 30rpx;
}

.bind-title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 16rpx;
}

.bind-hint {
  font-size: 26rpx;
  color: #999;
  margin-bottom: 40rpx;
}

.key-input {
  width: 100%;
  height: 80rpx;
  border: 2rpx solid #e0e0e0;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 32rpx;
  text-align: center;
  letter-spacing: 8rpx;
}

.bind-btn {
  width: 100%;
  height: 90rpx;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
  border-radius: 12rpx;
  border: none;
  margin-top: 40rpx;
}

.bind-btn[disabled] {
  background: #ccc;
}

.tips {
  margin-top: 30rpx;
  text-align: center;
  
  text {
    font-size: 24rpx;
    color: #ff9800;
  }
}

.guide-section {
  padding: 0 40rpx;
}

.guide-title {
  font-size: 30rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  display: block;
}

.guide-list {
  background: #fff;
  border-radius: 20rpx;
  padding: 20rpx;
}

.guide-item {
  display: flex;
  align-items: center;
  padding: 20rpx 0;
  border-bottom: 1rpx solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
}

.guide-number {
  width: 50rpx;
  height: 50rpx;
  background: #1a73e8;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26rpx;
  font-weight: bold;
  margin-right: 20rpx;
}

.guide-text {
  font-size: 28rpx;
  color: #666;
}
</style>