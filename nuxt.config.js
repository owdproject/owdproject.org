import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Open Web Desktop',
    title: 'Open Web Desktop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'pNA8X3Mj_Fyx_dxU3i0NXhr3ZHuiujvNAshlCNCqWKg' },
      { hid: 'description', name: 'description', content: 'Open Web Desktop is a fully modular project made with Vue.js that aims to provide a simple environment to create your own web desktop' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  env: {
    BASE_URL: 'https://owdproject.com',
    SOCIAL_LINK_GITHUB: 'https://github.com/owdproject/owd-client',
    SOCIAL_LINK_TWITTER: 'https://twitter.com/owdproject',
    SOCIAL_LINK_PATREON: 'https://patreon.com/hacklover',
    SOCIAL_LINK_NPM: 'https://npmjs.com/package/@owd-client/core',
    SOCIAL_LINK_DISCORD: 'http://discord.gg/3KFVP8b',
    OWD_LINK_MODULES: 'https://github.com/topics/owd-modules',
    OWD_LINK_THEMES: 'https://github.com/topics/owd-themes',
    OWD_LINK_DEMO: 'https://hacklover.net/boot'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  meta: {
    name: 'Open Web Desktop',
    description: 'A fully modular open-source web desktop made with Vue.js',
    theme_color: '#2775a7',
    lang: 'en',
    ogHost: process.env.BASE_URL,
    ogImage: '/logo-large.jpg',
    nativeUI: true,
    twitterCard: 'summary_large_image',
    twitterSite: '@owdproject',
  },

  manifest: {
    lang: 'en',
    name: 'Open Web Desktop',
    short_name: 'Open Web Desktop',
    start_url: process.env.BASE_URL,
    description: 'A fully modular open-source web desktop made with Vue.js',
    display: 'standalone',
    theme_color: '#272727',
    background_color: '#121212',
    orientation: 'any',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/dist/',
    transpile: ['lodash-es', 'vuetify/lib'],
    extractCSS: true,
  },

  generate: {
    routes: ['/']
  }
}
