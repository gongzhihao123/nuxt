/*
 * 全局配置文件
 */

'use strict'

export default {
  // 端口配置
  PORT: 3001,
  // 站点信息
  SITE_INFO: {
    // logo图片url
    logo: 'https://cm.testin.cn/_nuxt/img/logo_sm.91659bf.png',
    // logo链接
    logoHref: '',
    // favicon
    favicon: 'https://cm.testin.cn/favicon.ico'
  },
  ITESTIN: {
    hostname: 'http://test.pro.testin.cn',
    // 返回项目列表链接
    href: 'http://monitor.pro.testin.cn:63078/project/'
  },
  // cookie获取约束，从请求中获取cookie时，只获取允许范围内的
  cookies: ['authtoken_pro', 'pid_pro'],
  CM_API: {
    hostname: 'http://monitorapi.pro.testin.cn'
  }
}
