import {owdConfig} from "./owd.config";

export default defineNuxtConfig({
  ssr: false,

  modules: [
      '@owdproject/docs',
      '@owdproject/core',
  ],

  extends: [

      // import layers: owd theme
      // @ts-ignore
      owdConfig.theme,

      // import layers: owd apps
      ...owdConfig.apps,

  ],

  i18n: {
      strategy: 'no_prefix',
  },

  imports: {
      presets: [
          {
              from: '@owdproject/core',
              imports: [
                  'defineDesktopApp'
              ]
          }
      ]
  },

  future: {
      compatibilityVersion: 4,
  },

  devtools: {
      enabled: false,
  },

  compatibilityDate: '2025-04-19'
})