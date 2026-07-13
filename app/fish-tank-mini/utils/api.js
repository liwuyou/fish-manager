// 服务器地址
const BASE_URL = 'http://112.124.107.159:7965'

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

export function getDeviceStatus(deviceKey) {
  return request({
    url: '/api/status',
    data: { device_key: deviceKey }
  })
}

export function sendControlCommand(deviceKey, cmd, params) {
  return request({
    url: '/api/control',
    method: 'POST',
    data: { device_key: deviceKey, cmd, params }
  })
}
