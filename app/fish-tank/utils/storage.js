const PHONE_KEY = 'fish_tank_phone'
const DEVICES_KEY = 'fish_tank_devices'

export function savePhoneNumber(phone) {
  uni.setStorageSync(PHONE_KEY, phone)
}

export function getPhoneNumber() {
  return uni.getStorageSync(PHONE_KEY) || ''
}

export function clearPhoneNumber() {
  uni.removeStorageSync(PHONE_KEY)
}

export function saveDevices(devices) {
  uni.setStorageSync(DEVICES_KEY, JSON.stringify(devices))
}

export function getDevices() {
  const data = uni.getStorageSync(DEVICES_KEY) || '[]'
  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}