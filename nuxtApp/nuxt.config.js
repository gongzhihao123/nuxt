module.exports = {
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {
    proxy: true, // 表示开启代理
    // baseURL: 'http://meetyuu.com',
    // 线上环境关闭反向代理， 使用baseURL
    prefix: '/health', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/health': {
      target: 'http://meetyuu.com/health/#', // 目标接口域名
      pathRewrite: {
        '^/health': '', // 把 /api 替换成
        changeOrigin: true // 表示是否跨域
      }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: ['~components/loading.vue'],
  plugins: [
    {src: '~plugins/element-ui', ssr: true},
    {src: '~plugins/axios', ssr: true}
  ],
  env: {baseUrl: process.env.BASE_URL},
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', { src: '~/assets/scss/index.scss', lang: 'scss' }],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', '~plugins/elementUI.js'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.Client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ]
}
