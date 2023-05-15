import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'
import '@/assets/dopstyle.css'

createApp(App).use(router).mount('#app')