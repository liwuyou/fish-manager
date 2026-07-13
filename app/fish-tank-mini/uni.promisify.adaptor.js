// uni-app promisify adaptor
// 将 uni 的异步回调 API 转为 Promise 风格
const UNI_APIS = [
  'request',
  'connectSocket',
  'sendSocketMessage',
  'closeSocket',
  'setStorage',
  'getStorage',
  'getStorageInfo',
  'removeStorage',
  'clearStorage',
  'showToast',
  'showLoading',
  'hideLoading',
  'showModal',
  'showActionSheet',
  'setNavigationBarTitle',
  'setNavigationBarColor',
  'navigateTo',
  'redirectTo',
  'reLaunch',
  'switchTab',
  'navigateBack',
  'getSystemInfo',
  'getSystemInfoSync'
]

UNI_APIS.forEach(name => {
  const origin = uni[name]
  if (typeof origin !== 'function') return
  uni[name + 'Promise'] = function(args) {
    args = args || {}
    return new Promise((resolve, reject) => {
      args.success = resolve
      args.fail = reject
      origin.call(uni, args)
    })
  }
})
