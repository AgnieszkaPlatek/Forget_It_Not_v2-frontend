import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import router from './router'

createApp(App)
    .use(router, VueAxios, axios)
    .mount('#app')
