import cookie from 'cookie'
import _ from 'lodash'
import cfg from '~/config'

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
