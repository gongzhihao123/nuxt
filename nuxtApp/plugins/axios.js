import querystring from 'querystring'
// import axios from 'axios'
// // const service = axios.create({
// //   // baseURL: '/health',
// //   timeout: 1000 * 60
// // })
// // 拦截器
// axios.interceptors.request.use(config => {
//   if (
//     config.method === 'post' ||
//     config.method === 'put' ||
//     config.method === 'delete'
//   ) {
//     config.data = querystring.stringify(config.data)
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// })
// axios.interceptors.response.use(response => {
//   if (response.data.code === -2) {
//     console.log(response)
//   }
//   return response
// }, error => {
//   return Promise.reject(error)
// })
// export default axios

export default function ({$axios}) {
  $axios.defaults.timeout = 3 * 1000
  $axios.onRequest(config => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete'
    ) {
      console.log('config', config)
      config.data = querystring.stringify(config.data)
    }
    console.log(config)
    return config
  })

  $axios.onResponse(response => {
    console.log(response)
    if (response.data.code === -2) {
      console.log(response)
    }
    return response
  })

  $axios.onError(error => {
    console.log(error)
    return error
  })
}
