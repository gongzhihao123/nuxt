/***
 * /relatedata/selectCondition 接口的数据处理
 * 转换为下拉框 option 的 {label,value}形式
 */
import _ from 'lodash'

// 如果结果不为空，对数据进行组合
// 转换前：
// data: {
//   "relateAttr": [
//       {
//           "mpid": 11,
//           "monitorType": "1",
//           "monitorPoint": "埋点"
//       }
//   ],
//   "relateDevice": [
//       {
//           "mpid": 11,
//           "location": "北京"
//       }
//   ],
//   "releaseVers": [
//       {
//           "mpid": 11,
//           "releaseVer": "8.1.0"
//       }
//   ]
// }
// 转换后：
// data: {
//   "relateAttr": {
//       "monitorType": [
//           {
//               "label": "1",
//               "value": "1"
//           }
//       ],
//       "monitorPoint": [
//           {
//               "label": "埋点",
//               "value": "埋点"
//           }
//       ]
//   },
//   "relateDevice": {
//       "location": [
//           {
//               "label": "北京",
//               "value": "北京"
//           }
//       ]
//   },
//   "releaseVers": {
//       "releaseVer": [
//           {
//               "label": "8.1.0",
//               "value": "8.1.0"
//           }
//       ]
//   }
// }

export const convertOptions = function (data) {
  let result = {}
  if (!_.isEmpty(data)) {
    for (let key in data) {
      // appInfo单独处理
      if (key !== 'appInfos' && data[key] && data[key].length) {
        result[key] = {}
        data[key].map(item => {
          for (let _key in item) {
            // 目前排除 mpid 属性
            if (_key !== 'mpid') {
              if (!result[key][_key]) {
                result[key][_key] = []
              }
              result[key][_key].push({
                label: item[_key],
                value: item[_key]
              })
            }
          }
        })
      } else if (key === 'appInfos') {
        // appInfo处理
        result[key] = data[key]
      }
    }
  }
  return result
}
export default { convertOptions }
