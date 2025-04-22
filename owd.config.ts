import {defineDesktopConfig} from "@owdproject/core/runtime/utils/utilsDesktop"

export default defineDesktopConfig({
    apps: [
        '@owdproject/app-about',
        '@owdproject/app-debug',
        '@owdproject/app-todo',
        '@owdproject/app-wasmboy',
    ],
})