/**
 * 云监控报告公共数据
 */
import s from '~/service'
// import _ from 'lodash'
import Event from '~/util/browser/event'
// import { api } from '~/service'
// import {convertOptions} from '~/util/selectData'

export const state = () => ({
  cookies: null,
  query: null,
  userInfo: {},
  monitorProjectInfo: {},
  currentMPInfo: {},
  selectData: {},
  menuWidth: 64,
  alarmTotal: 0,
  downAlarmShow: false,
  jumpType: '',
  //  最优和最差排名 点击事件参数
  obj: {},
  // 项目创建时间
  createTime: '',
  // 业务统计跳转到报表
  toReport: {},
  appid: ''
})
export const getters = {
  getCookies: state => state.cookies,
  getQuery: state => state.query,
  getUserInfo: state => state.userInfo,
  getMonitorProjectInfo: state => state.monitorProjectInfo,
  getCurrentMPInfo: state => state.currentMPInfo,
  getSelectData: state => state.selectData,
  getMenuWidth: state => state.menuWidth,
  getObj: state => state.obj,
  getCreateTime: state => state.createTime,
  getToReport: state => state.toReport,
  getAppId: state => state.appid
}

export const mutations = {
  SET_COOKIES (state, cookies) {
    state.cookies = cookies
    s.INIT_DATA.cookies = cookies
  },
  SET_QUERY (state, query) {
    state.query = query
    s.INIT_DATA.query = query
  },
  SET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
    s.INIT_DATA.userInfo = userInfo
    Event.trigger('userInfo.loaded', userInfo)
  },
  SET_MONITOR_PROJECT_INFO (state, monitorProjectInfo) {
    state.monitorProjectInfo = monitorProjectInfo
  },
  SET_CURRENT_MP_INFO (state, currentMPInfo) {
    state.currentMPInfo = currentMPInfo
  },
  GET_SELECT_OPTIONS (state, data) {
    state.selectData = data
  },
  SET_SELECT_OPTIONS (state, data) {
    state.selectData = data
  },
  SET_MENU_WIDTH (state, menuWidth) {
    state.menuWidth = menuWidth
  },
  GET_ALARM_TOTAL (state, data) {
    state.alarmTotal = data
  },
  SET_DOWN_ALARM_SHOW (state, data) {
    state.downAlarmShow = data
  },
  SET_RANK_LINK (state, data) {
    state.obj = data
  },
  SET_CREATE_TIME (state, data) {
    state.createTime = data
  },
  SET_TO_REPORT (state, data) {
    state.toReport = data
  },
  SET_APP_ID (state, data) {
    state.appid = data
  }
}

export const actions = {
  // 获取图表下拉选框条件数据
  // SET_SELECT_OPTIONS ({commit}) {
  //   api.charts.getChartsCondition().then(res => {
  //     if (!_.isEmpty(res)) {
  //       let data = convertOptions(res.data)
  //       s.INIT_DATA.selectOptions = data
  //       commit('GET_SELECT_OPTIONS', data)
  //     }
  //   })
  // },
  // //  设置左侧导航告警数量
  // SET_ALARM_TOTAL ({commit}, options) {
  //   api.alarm.getAlarmTotal(options).then(res => {
  //     if (!_.isEmpty(res.result)) {
  //       commit('GET_ALARM_TOTAL', res.result.total)
  //     }
  //   })
  // }
}
