<template>
  <view class="login-page">
    <view class="header">
      <view class="logo">🐠</view>
      <text class="title">鱼箱管理</text>
      <text class="subtitle">远程控制您的养鱼生态箱</text>
    </view>
    
    <view class="form">
      <view class="input-group">
        <text class="input-label">手机号码</text>
        <input 
          class="input" 
          v-model="phoneNumber" 
          type="number" 
          placeholder="请输入手机号"
          maxlength="11"
        />
      </view>
      
      <button class="login-btn" @click="handleLogin" :disabled="!phoneNumber">
        登录
      </button>
      
      <view class="tips">
        <text>首次登录将自动注册</text>
      </view>
    </view>
    
    <view class="footer">
      <text class="version">v1.0.0</text>
    </view>
  </view>
</template>

<script>
import { savePhoneNumber, getPhoneNumber } from '@/utils/storage'
import { getDevices } from '@/utils/api'

export default {
  data() {
    return {
      phoneNumber: ''
    }
  },
  onLoad() {
    const savedPhone = getPhoneNumber()
    if (savedPhone) {
      this.phoneNumber = savedPhone
      this.handleLogin()
    }
  },
  methods: {
    async handleLogin() {
      if (!this.phoneNumber || this.phoneNumber.length !== 11) {
        uni.showToast({ title: '请输入正确的手机号', icon: 'none' })
        return
      }
      
      uni.showLoading({ title: '登录中...' })
      
      try {
        savePhoneNumber(this.phoneNumber)
        await getDevices(this.phoneNumber)
        uni.hideLoading()
        uni.redirectTo({ url: '/pages/devices/index' })
      } catch (error) {
        uni.hideLoading()
        uni.showToast({ title: '登录失败', icon: 'none' })
      }
    }
  }
}
</script>

<style lang="scss">
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  padding: 60rpx 40rpx;
  box-sizing: border-box;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120rpx;
  margin-bottom: 80rpx;
}

.logo {
  font-size: 120rpx;
  margin-bottom: 30rpx;
}

.title {
  font-size: 48rpx;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16rpx;
}

.subtitle {
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.8);
}

.form {
  background: #fff;
  border-radius: 24rpx;
  padding: 50rpx 40rpx;
  box-shadow: 0 10rpx 40rpx rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 40rpx;
}

.input-label {
  font-size: 28rpx;
  color: #333;
  margin-bottom: 16rpx;
  display: block;
}

.input {
  width: 100%;
  height: 80rpx;
  border: 2rpx solid #e0e0e0;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 32rpx;
  box-sizing: border-box;
}

.login-btn {
  width: 100%;
  height: 90rpx;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
  border-radius: 12rpx;
  border: none;
  margin-top: 20rpx;
}

.login-btn[disabled] {
  background: #ccc;
}

.tips {
  text-align: center;
  margin-top: 30rpx;
}

.tips text {
  font-size: 24rpx;
  color: #999;
}

.footer {
  text-align: center;
  margin-top: 100rpx;
}

.version {
  font-size: 24rpx;
  color: rgba(255, 255, 255, 0.6);
}
</style>