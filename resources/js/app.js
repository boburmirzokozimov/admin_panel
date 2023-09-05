import '../css/app.css';
import './bootstrap.js'
import '../assets/css/codebase.min.css'

import {createApp, h} from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "@/Shared/Layout.vue";
import Toaster from '@meforma/vue-toaster';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );
        page.then((module) => {
            if (module.default.layout === undefined) {
                module.default.layout = Layout;
            }
        });
        return page;
    },
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .component('Head', Head)
            .component('Link', Link)
            .use(ZiggyVue)
            .use(Toaster)
            .mount(el);
    },
    title: (title) => `${title}`,
    progress: {
        color: '#4B5563',
    },
});

InertiaProgress.init()
