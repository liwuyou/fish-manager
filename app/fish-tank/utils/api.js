const BASE_URL = 'http://218.244.156.155:7965'

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        ...options.header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export function getDevices(phoneNumber) {
  return request({
    url: '/api/devices',
    data: { phone_number: phoneNumber }
  })
}

export function getDeviceStatus(deviceKey) {
  return request({
    url: '/api/status',
    data: { device_key: deviceKey }
  })
}

export function bindDevice(phoneNumber, deviceKey) {
  return request({
    url: '/api/bind',
    method: 'POST',
    data: { phone_number: phoneNumber, device_key: deviceKey }
  })
}

export function unbindDevice(phoneNumber, deviceKey) {
  return request({
    url: '/api/unbind',
    method: 'POST',
    data: { phone_number: phoneNumber, device_key: deviceKey }
  })
}

export function sendControlCommand(deviceKey, cmd, params) {
  return request({
    url: '/api/control',
    method: 'POST',
    data: { device_key: deviceKey, cmd, params }
  })
}