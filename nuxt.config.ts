export default defineNuxtConfig({
    ssr: false,

    modules: [
        '@owdproject/docs',
        '@owdproject/core',
    ],

    extends: [
        [
            'github:owdproject/theme-gnome',
            {install: true}
        ]
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