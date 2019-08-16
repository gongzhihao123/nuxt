import axios from 'axios'
import cfg from '~/config'
import interceptors from './axios/interceptors'
import _ from 'lodash'
import u from '~/util'

const instance = (() => {
  let instance = axios.create({
    baseURL: cfg.CM_API.hostname,
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    }
  })
  instance.interceptors.request.use.apply(instance.interceptors.request, interceptors.restful.req)
  instance.interceptors.response.use.apply(instance.interceptors.request, interceptors.restful.res)
  return instance
})()

export const restful = function (url, params, errMsg, method) {
  if (method === 'post' || _.isEmpty(method)) {
    return instance({
      method: method || 'post',
      url: url,
      data: params
    })
      .then(res => {
        return u.handleResponse(res, errMsg)
      })
      .catch(err => {
        let message = errMsg.msg + ':' + err.message
        if (_.isUndefined(errMsg.msgShow) || errMsg.msgShow) {
          u.msgBox(message)
        }
        console.warn(err)
        throw err
      })
  } else if (method === 'get') {
    return instance({
      method: method,
      url: url,
      params: params
    }).then(res => {
      u.handleResponse(res, errMsg)
    }).catch(err => {
      let message = errMsg.msg + ':' + err.message
      if (_.isUndefined(errMsg.msgShow) || errMsg.msgShow) {
        u.msgBox(message)
      }
      console.warn(err)
      throw err
    })
  }
}

export default {
  restful
}
