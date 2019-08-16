import axios from 'axios'

// 页面初始化
export function init (data) {
  return axios.get('/common/initPage', {params: data}).then((res) => res.data)
}
// 获取头像流
export function getUserFace (data) {
  return axios.get('/common/getUserFace', { params: data, responseType: 'blob' }).then((res) => res.data)
}
// 获取学生信息
export function getStudent (data) {
  return axios.get('health/common/getStudent', { params: data }).then(res => res.data)
}
