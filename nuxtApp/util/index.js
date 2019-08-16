import {
  handleResponse,
  msgBox
} from './axios'
import pagination from './pagination'

export default {
  handleResponse,
  msgBox,
  pagination,
  getDeepVal: (() => {
    let getVal = (val, attrs) => {
      if (!val) {
        return val
      }
      let attr = attrs.shift()
      return val[attr] && attrs.length ? getVal(val[attr], attrs) : val[attr]
    }
    return function (obj, attrNames) {
      return getVal(obj, attrNames.split('.'))
    }
  })()
}
