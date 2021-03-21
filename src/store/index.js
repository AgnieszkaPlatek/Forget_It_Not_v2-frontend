import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            title: 'The title of vuex store'
        }
    }
})

export default store
