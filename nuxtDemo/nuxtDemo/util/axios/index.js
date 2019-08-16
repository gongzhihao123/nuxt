/*
 * axios 公共方法
 */
import _ from 'lodash'
import {
  MessageBox
} from 'element-ui'
import cfg from '~/config'

// 处理返回数据
export const handleResponse = function (response, errMsg) {
  let data = response.data
  if (data && data.code === 0) {
    response.data = data.data
  } else if (data && data.code === -200) {
    msgBox(data.msg, data.code)
  } else {
    let message = errMsg.msg + '：' + data.msg
    if (_.isUndefined(errMsg.msgShow) || errMsg.msgShow) {
      msgBox(message, data.code)
    }
    response.data = {}
  }
  return response.data
}

// 错误信息弹窗
export const msgBox = function (message, errorCode, type) {
  type = _.isEmpty(type) ? 'error' : type
  let box = MessageBox.confirm(message, '提示', {
    confirmButtonText: '确定',
    showCancelButton: false,
    cancelButtonText: '',
    type: type,
    closeOnClickModal: false
  })
  if (box && typeof box.then === 'function') {
    box.then(() => {
      if (errorCode === -100) {
        // location.reload()
        window.location.replace(`${cfg.ITESTIN.hostname}/account/login.htm`)
      } else if (errorCode === -200) {
        window.location.replace(`${cfg.ITESTIN.hostname}/project/index.htm`)
      } else if (errorCode === 1000) {
        window.location.replace(`${cfg.ITESTIN.href}`)
      }
    }).catch(() => {
      if (errorCode === -100) {
        window.location.replace(`${cfg.ITESTIN.hostname}/account/login.htm`)
      } else if (errorCode === -200) {
        window.location.replace(`${cfg.ITESTIN.hostname}/project/index.htm`)
      } else if (errorCode === 1000) {
        window.location.replace(`${cfg.ITESTIN.href}`)
      }
    })
  }
}
