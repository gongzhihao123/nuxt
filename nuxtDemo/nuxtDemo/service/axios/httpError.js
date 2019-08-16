/**
 * 请求错误处理
 */
'use strict'
/**
 * http ajax错误处理
 * @param {*} err 错误err
 */
export const axiosError = function (err) {
  let code = parseInt(err.response && err.response.status)
  if (err.response && err.response.status) {
    switch (code) {
    case 400:
      err.message = '请求错误(400)'
      break
    case 401:
      err.message = '未授权，请重新登录(401)'
      break
    case 403:
      err.message = '拒绝访问(403)'
      break
    case 404:
      err.message = '请求出错(404)'
      break
    case 408:
      err.message = '请求超时(408)'
      break
    case 500:
      err.message = '服务器错误(500)'
      break
    case 501:
      err.message = '服务未实现(501)'
      break
    case 502:
      err.message = '网络错误(502)'
      break
    case 503:
      err.message = '服务不可用(503)'
      break
    case 504:
      err.message = '网络超时(504)'
      break
    case 505:
      err.message = 'HTTP版本不受支持(505)'
      break
    default:
      err.message = `连接出错!(${code})`
    }
  } else {
    err.message = '连接服务器失败'
  }
}
export default {
  axiosError
}
