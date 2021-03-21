import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import router from './router'
// import store from './store'
// import Vuex from 'vuex'

createApp(App)
    .use(router, VueAxios, axios)
    .mount('#app')


axios.defaults.baseURL = "http://localhost:8000/api/";
