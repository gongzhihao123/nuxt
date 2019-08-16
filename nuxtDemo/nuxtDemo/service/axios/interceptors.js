import _ from 'lodash'
import s from '~/service'
import axiosError from '~/service/axios/httpError'

export const restful = {
  req: [config => {
    if (config.method === 'get') {
      handleCfg(config, 'params')
    } else if (config.method === 'post') {
      handleCfg(config, 'data')
    }
    return config
  },
  err => {
    console.warn(err)
    return Promise.reject(err)
  }
  ],
  res: [response => {
    return response
  }, err => {
    axiosError(err)
    return Promise.reject(err)
  }
  ]
}

// 对参数进行格式化
function handleCfg (config, type) {
  let condition = {}
  if (_.isEmpty(config[type])) {
    config[type] = {}
    config[type].oauth = s.INIT_DATA.cookies.authtoken_pro
  } else {
    condition = config[type]
    config[type] = {}
    config[type].condition = condition
    config[type].oauth = s.INIT_DATA.cookies.authtoken_pro
  }
}

export default {
  restful
}
