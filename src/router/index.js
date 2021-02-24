import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppWelcome from '../views/AppWelcome.vue'
import SetList from '../views/SetList.vue'
import SetDelete from '../views/SetDelete.vue'
import LearnList from '../views/learn/LearnList.vue'
import FlashcardDetail from '../views/flashcards/FlashcardDetail.vue'
import FlashcardAdd from '../views/flashcards/FlashcardAdd.vue'
import FlashcardList from '../views/flashcards/FlashcardList.vue'
import UserRegister from '../views/users/UserRegister.vue'
import UserLogin from '../views/users/UserLogin.vue'
import UserProfile from '../views/users/UserProfile.vue'
import NotFound from '../views/NotFound.vue'


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
        path: '/flashcards/:id',
        name: 'FlashcardDetail',
        component: FlashcardDetail,
        props: true
    },
    {
        path: '/sets/:id/add',
        name: 'FlashcardAdd',
        component: FlashcardAdd,
        props: true
    },
    {
        path: '/sets/:id',
        name: 'FlashcardList',
        component: FlashcardList,
        props: true
    },
    {
        path: '/sets/:id/delete',
        name: 'SetDelete',
        component: SetDelete,
        props: true
    },
    {
        path: '/register',
        name: 'UserRegister',
        component: UserRegister
    },
    {
        path: '/login',
        name: 'UserLogin',
        component: UserLogin
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router
