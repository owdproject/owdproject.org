import AppAbout from 'owd-app-about/owd.config'
import AppDebug from 'owd-app-debug/owd.config'
import AppTodo from 'owd-app-todo/owd.config'
import AppWasmboy from 'owd-app-wasmboy/owd.config'
import AppXterm from 'owd-app-xterm/owd.config'

export const owdConfig = {
    theme: ['github:owdproject/theme-win95', { install: true }],

    apps: [
        './node_modules/owd-app-about',
        './node_modules/owd-app-debug',
        './node_modules/owd-app-todo',
        './node_modules/owd-app-wasmboy',
        './node_modules/owd-app-xterm',
    ],

    loader: async () => {
        await defineDesktopApp(AppAbout)
        await defineDesktopApp(AppDebug)
        await defineDesktopApp(AppTodo)
        await defineDesktopApp(AppWasmboy)
        await defineDesktopApp(AppXterm)
    }
}