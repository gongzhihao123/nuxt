/**
 * 初始化页面信息，处理设置cookies存储
 */
import s from '~/service'

export default {
  middleware: 'nuxtAuth',
  asyncData ({route, req}) {
    let cookies = {}
    let query = {}
    if (req && req.headers && req.headers.cookie) {
      cookies = s.cookieFilter(req.headers.cookie)
    }
    if (route.query) {
      query = route.query
    }
    return {
      cookies: cookies,
      query: query
    }
  },
  beforeMount () {
    if (this.cookies && this.cookies.authtoken_pro) {
      this.$store.commit('SET_COOKIES', this.cookies)
    }

    if (this.query) {
      this.$store.commit('SET_QUERY', this.query)
    }
  }
}
