/**
 * 面包屑相关接口
 */
import {restful} from '~/service/restful'

/**
 * 菜单结构
 */

const getBread = function () {
  let Default = {}
  return restful('/permission/getStatus', Object.assign({}, Default),{
    msg: '获取目录结构失败'
  })
}

export default {
  getBread
}
