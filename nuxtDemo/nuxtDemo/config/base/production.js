/**
 * 生产环境配置
 */
import global from '../global'

export default Object.assign({}, global, {
  PORT: 3001,
  TESTIN: {
    hostname: 'https://www.testin.cn',
    href: 'https://cm.testin.cn/project'
  },
  CM_API: {
    hostname: 'http://monitorapi.pro.testin.cn',
    host: 'http://monitor.pro.testin.cn:63078/project/edit',
    imgUrl: 'https://inside.testin.cn'
  },
  SITE_INFO: {
    // logo图片url
    logo: 'https://cm.testin.cn/_nuxt/img/logo_sm.91659bf.png',
    // logo链接
    logoHref: '',
    // favicon
    favicon: 'https://cm.testin.cn/favicon.ico'
  }
})
