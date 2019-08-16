export default {
  middleware: 'nuxtAuth',
  asyncData ({route, req}) {
    let cookies = {}
    let query = {}
    if (req && req.headers && req.headers.cookie) {
      cookies = s.cookiesFilter(req.headers.cookies)
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
      this.$query.commit('SET_QUERY', this.query)
    }
  }
}
