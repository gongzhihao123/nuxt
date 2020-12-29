// import { resolve } from "core-js/fn/promise"

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxtProject1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'auth',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  loading: '~/components/loading.vue',
  /*
  ** 需要全局引入的css样式
  */
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/assets/css/index.scss' },
    { src: 'element-ui/lib/theme-chalk/index.css' }
  ],
  /*
  ** 需要全局引用的js插件等，ssr:true则服务端渲染是返回
  */
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/seamless-scroll', ssr: false },
    { src: '@/plugins/request', ssr: true }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'cookie-universal-nuxt'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
  },

  proxy: {
    '/api/': {
      target: 'https://h5api.zhefengle.cn',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
