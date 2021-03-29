import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/main.css'
import router from './router'
import store from './store'
import Vuex from 'vuex'


createApp(App)
    .use(router).use(store).use(VueAxios, Vuex, axios)
    .mount('#app')


axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// if (localStorage.getItem("token")) {
//     axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem("token")
// }


// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers["Authorization"] = 'Token ' + token;
//     }
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });


// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
// });
