import { Message } from 'element-ui'
export default ({ redirect, $axios, route, store }) => {
  // 基本配置
  $axios.defaults.timeout = 1000

  $axios.onRequest((config) => {
    config.headers.token = 'token'

    return config
  })

  $axios.onResponse((res) => {
    // 返回数据逻辑处理
    // if (res.data.code === 2)
    return res
  })

  $axios.onError((error) => {
    Message({
      //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: 'error.data.error.message'
    })
    // eslint-disable-next-line no-console
    console.log('Making request to ' + error.response.config.url)
    // switch (error.response.status) {
    //   case 403:
    //     // 重定向到 403 页
    //     redirect('/error/403')
    //     break
    //   case 404:
    //     // 重定向到 404 页
    //     redirect('/error/404')
    //     break
    //   case 500:
    //     // 重定向到 500 页
    //     redirect('/error/500')
    //     break
    //   default:
    //     break
    // }
  })
}
