export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'School of Smykov Vladimir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/elements/imports.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "@/plugins/vClickOutside", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy'
  ],

  // Auth module configuration (https://auth.nuxt.org/)
  auth: {
    token: {
      required: false,
    },
    redirect: {
      login: '/auth/login',
      logout: false,
      callback: '/auth/login',
      home: false
    },
    strategies: {
      primary: {
        _scheme: "local",
        endpoints: {
          login: { url: '/oauth/token', method: 'post', propertyName: 'access_token' },
          logout: false,
          user: { url: '/api/user', method: 'get', propertyName: 'data' }
        }
      },
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    //baseURL: 'http://smykov-v.co',
  },

  // Proxy module configuration
  proxy: {
    '/oauth': {
      target: 'http://smykov-v.co/oauth',
      changeOrigin: true,
      pathRewrite: {
        '^/oauth' : '/'
      }
    },
    '/api': {
      target: 'http://smykov-v.co/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/'
      }
    },
  },

  // Router configuration
  router: {
    //
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
