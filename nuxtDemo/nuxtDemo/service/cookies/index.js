/**
 * cookie处理
 */
import cookie from 'cookie'
import _ from 'lodash'
import cfg from '~/config'
/**
 * 过滤无关cookie
 * @param {String} allCookies 支持字符串、{}对象形式
 * @return {Object} 过滤后的cookie对象，类型错误时为 null
 */
export const cookieFilter = function (allCookies) {
  let cookies = {}
  if (_.isObject(allCookies)) {
    allCookies = Object.assign(allCookies)
  } else if (typeof allCookies === 'string') {
    allCookies = cookie.parse(allCookies || '')
  } else {
    console.error('cookieFilter参数类型错误：', allCookies)
    return null
  }
  if (allCookies) {
    cfg.cookies.map(item => {
      if (item in allCookies) {
        cookies[item] = allCookies[item]
      }
    })
  }
  return cookies
}

export default {
  cookieFilter
}
