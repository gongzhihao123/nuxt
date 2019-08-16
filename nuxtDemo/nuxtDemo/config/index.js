import config from './base'
import _ from 'lodash'
/**
 * 解析配置字符串属性中的变量(以变量形式访问当前配置的属性)，仅当值(value)为字符串支持
 * 匹配 ${a} 中的 a ，以及以 ~ 开头的字符串
 * 其中，~ 固定解析为 /_nuxt
 * 例：
 * before --->  config = {a: '${b} ---- ${ c }', b: 'b的值', c: 'c的值', d: '~/assets/images/xx.png'}
 * after --->  config = {a: 'b的值 ---- c的值', b: 'b的值', c: 'c的值', d: '/_nuxt/assets/images/xx.png'}
 */
const recursion = function (obj) {
  for (let key in obj) {
    let item = obj[key]
    if (typeof item === 'string' && item) {
      obj[key] = item.replace(/^~/, '/_nuxt').replace(/\$\{\s*(\S+)\s*}/g, (a, b) => {
        let fn = new Function('data', 'return data.' + b)
        return b ? fn(config) : ''
      })
    } else if (_.isObject(item)) {
      obj[key] = recursion(item)
    }
  }
  return obj
}

export default recursion(config)
