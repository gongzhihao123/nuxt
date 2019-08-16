/**
 * 告警相关接口
 */
import {restful} from '~/service/restful'
import INIT_DATA from '~/service/INIT_DATA'

/**
 * 告警数量
 * @param {Object} options 请求参数
 */

const getAlarmTotal = function (options) {
  let Default = {
    mpid: INIT_DATA.query && INIT_DATA.query.mpid
  }
  return restful('/alarmflow/alarmTotal', Object.assign({}, Default, options),{
    msg: '获取告警数量失败'
  })
}

export default {
  getAlarmTotal
}
