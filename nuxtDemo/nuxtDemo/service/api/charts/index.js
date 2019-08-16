/**
 * 图表相关接口
 */
import {restful} from '~/service/restful'
import {msgBox} from '~/util/axios'
import INIT_DATA from '~/service/INIT_DATA'

// 图表下拉数据接口
const getChartsCondition = function (options) {
  let Default = {
    mpid: INIT_DATA.query && INIT_DATA.query.mpid
  }
  if (!Default.mpid && !process.server) {
    let msg = '参数无效：mpid参数值无效'
    msgBox(msg)
  }
  return restful('/relatedata/selectCondition', Object.assign({}, Default, options), {
    msg: '获取下拉选条件数据失败'
  })
}

export default {
  getChartsCondition
}
