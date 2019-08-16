/**
 * 获取当前列表显示范围
 * @param {Number} page 当前页数
 * @param {Number} pageSize 每页条数
 * @param {Number} tolSize 总条数
 * @param {String} splitStr 分割字符，默认：-
 */
export const getCurrentRange = function (page, pageSize, tolSize, splitStr = '-') {
  let errMsg = []
  let start = 0
  let end = 0
  if (isNaN(page) || isNaN(pageSize) || isNaN(tolSize)) {
    if (isNaN(page)) {
      errMsg.push(page)
    }
    if (isNaN(pageSize)) {
      errMsg.push(pageSize)
    }
    if (isNaN(tolSize)) {
      errMsg.push(tolSize)
    }
    console.warn(`getCurrentRange：${errMsg.join('、')} is NaN`)
    return '0-0'
  } else {
    start = page * pageSize
    end = start + (page >= parseInt(tolSize / pageSize) ? tolSize % pageSize : pageSize)
    return (end === 0 ? 0 : start + 1) + splitStr + end
  }
}

export default {
  getCurrentRange
}
