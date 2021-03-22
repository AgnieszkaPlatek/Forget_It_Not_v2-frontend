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
import { createStore } from 'vuex'


axios.defaults.baseURL = "http://localhost:8000/api/";

const store = createStore({
    state() {
        return {
            title: 'The title of vuex store'
        }
    }
})

createApp(App)
    .use(router, VueAxios, axios, store)
    .mount('#app')