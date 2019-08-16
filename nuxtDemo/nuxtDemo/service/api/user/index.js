/**
 * 用户相关接口
 */
import {restful} from '~/service/restful'

const getUserInfo = function () {
  return restful('/user/userInfo', {}, {
    msg: '获取用户信息失败'
  })
}

export default {
  getUserInfo
}
