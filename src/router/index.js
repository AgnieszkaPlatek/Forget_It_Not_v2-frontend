import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import SetList from '../views/SetList.vue'
import LearnList from '../views/LearnList.vue'
import AppWelcome from '../views/AppWelcome.vue'
import FlashcardDetail from '../views/FlashcardDetail.vue'
import FlashcardList from '../views/FlashcardList.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: AppHome
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: AppWelcome
    },
    {
        path: '/sets',
        name: 'SetList',
        component: SetList
    },
    {
        path: '/learn',
        name: 'LearnList',
        component: LearnList
    },
    {
        path: '/flashcard',
        name: 'FlashcardDetail',
        component: FlashcardDetail
    },
    {
        path: '/flashcards',
        name: 'FlashcardList',
        component: FlashcardList
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
