import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import sass from "sass";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/site.scss",
                "resources/js/site.js",

                // Control Panel assets.
                // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
                // 'resources/css/cp.css',
                // 'resources/js/cp.js',
            ],
            refresh: true,
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
});
