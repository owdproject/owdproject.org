import {defineDesktopConfig} from "@owdproject/core/runtime/utils/utilsDesktop"

export default defineDesktopConfig({
    apps: [
        "@owdproject/app-todo",
        "@owdproject/app-terminal",
        "@owdproject/app-about",
        "@owdproject/app-wasmboy",
        "@owdproject/app-debug",
    ],

    theme: "@owdproject/theme-gnome",

    workspaces: {
        enabled: false,
    }
})