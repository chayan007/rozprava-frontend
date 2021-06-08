import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

createApp(App).use(store).use(router).mount('#app')

Sentry.init({
    Vue: App,
    dsn: "https://08a2752781a44fdcbb07c297f382b0ec@o647115.ingest.sentry.io/5807040",
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});
