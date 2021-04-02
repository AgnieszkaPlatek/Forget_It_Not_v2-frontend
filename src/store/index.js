import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    state() {
        return {
            authUser: '',
            isAuthenticated: false,
            token: localStorage.getItem('token'),
            endpoints: {
                baseUrl: 'http://localhost:8000/api/'
            }
        }
    },
    mutations: {
        authenticate(state, {
            authUser,
            isAuthenticated
        }) {
            state.authUser = authUser
            state.isAuthenticated = isAuthenticated
        },
        updateToken(state, newToken) {
            localStorage.setItem('token', newToken)
            state.token = newToken
        },
        removeToken(state) {
            localStorage.removeItem('token');
            state.token = null
        }
    },
    plugins: [createPersistedState()]
})


export default store
