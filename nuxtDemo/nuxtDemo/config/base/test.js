/**
 * 测试环境配置
 */
import global from '../global'
export default Object.assign({}, global, {
  PORT: 3001,
  CM_API: {
    hostname: 'http://monitorapi.pro.testin.cn',
    host: 'http://monitor.pro.testin.cn:63078/project/edit',
    imgUrl: 'https://inside.testin.cn'
  }
})
