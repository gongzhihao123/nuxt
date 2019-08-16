import s from '~/service'
import _ from 'lodash'

export default function ({req, query, redirect}) {
  let cookies = {}
  let env = process.env.APP_ENV.replace(/[a-zA-Z]+:/, '')
  if (req && req.headers && req.headers.cookie) {
    cookies = s.cookieFilter(req.headers.cookie)
  }
  if (process.env.APP_ENV.indexOf('env') === 0) {
    console.warn('WARNING (reportAuth.js): closed auth for dev model')
    return
  }
  if (process.server) {
    if (_.isEmpty(cookies)) {
      // cookie或者mpid不存在
      console.error(`cookies中authtoken_pro信息缺失: ${cookies}或者query中mpid信息缺失：${query}`)
      switch (env) {
        case 'production':
          redirect('http://meetyuu.com/health/login.htm')
          break
        case 'gray':
          redirect('http://meetyuu.com/health/login.htm')
          break
        default:
          redirect('http://meetyuu.com/health/login.htm')
      }
    }
  }
}
