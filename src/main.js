import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

import "@/assets/icons/bootstrap-icons-1.11.3/bootstrap-icons-1.11.3/font/bootstrap-icons.css"
import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'


const app = createApp(App)

app.use(AOS.init({duration: 700,delay:100}))
app.use(createPinia())
app.use(router)
app.mount('#app')
