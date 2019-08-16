/**
 * 项目列表信息
 * */
import {
  msgBox
} from '~/util/axios'
import {restful} from '~/service/restful'
import INIT_DATA from '~/service/INIT_DATA'

/**
 * 获取项目信息
 */
const getProjectInfo = function () {
  let Default = {
    mpid: INIT_DATA.query && INIT_DATA.query.mpid,
    appid: INIT_DATA.query && INIT_DATA.query.appid
  }
  if (!Default.mpid) {
    let errMsg = '参数无效：mpid参数值无效'
    console.error(errMsg)
    msgBox(errMsg)
  }
  if (!Default.appid) {
    let errMsg = '参数无效：appid参数值无效'
    console.error(errMsg)
    msgBox(errMsg)
  }
  return restful('/relatedata/relateOverview', Default, {
    msg: '获取项目信息失败'
  })
}

const getProjectList = function () {
  let Default = {}
  return restful('/user/getProjectList/1/1000', Default, {
    msg: '获取项目列表失败'
  })
}
const projectCut = function (location) {
  let Default = {}
  return restful('/user/modifyAccessTime/' + location, Default, {
    msg: '切换项目失败'
  })
}
export default {
  getProjectList,
  projectCut,
  getProjectInfo
}
