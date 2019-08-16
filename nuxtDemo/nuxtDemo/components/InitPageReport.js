/**
 * 初始化页面信息，处理设置cookies存储
 */
import s from '~/service'

export default {
  middleware: 'reportAuth',
  asyncData ({route, req}) {
    let cookies = {}
    let query = {}
    if (req && req.headers && req.headers.cookie) {
      cookies = s.cookieFilter(req.headers.cookie)
    }
    if (route.query) {
      query = route.query
      query.mpid = parseInt(query.mpid)
      query.appid = parseInt(query.appid)
    }
    return {
      cookies: cookies,
      query: query
    }
  },
  beforeMount () {
    let hasOauthAndMpid = true
    if (this.cookies && this.cookies.authtoken_pro) {
      this.$store.commit('SET_COOKIES', this.cookies)
    } else {
      hasOauthAndMpid = false
    }
    if (this.query && this.query.appid) {
      this.$store.commit('SET_APP_ID', this.query.appid)
    }
    if (this.query && this.query.mpid) {
      this.$store.commit('SET_QUERY', this.query)
    } else {
      hasOauthAndMpid = false
    }
    if (hasOauthAndMpid) {
      this.$store.dispatch('SET_SELECT_OPTIONS')
    }
  }
}
