import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import "@/assets/icons/bootstrap-icons-1.11.3/bootstrap-icons-1.11.3/font/bootstrap-icons.css"



const app = createApp(App)
app.use(MotionPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')
