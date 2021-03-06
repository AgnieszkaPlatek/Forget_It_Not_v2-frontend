import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppWelcome from '../views/AppWelcome.vue'
import SetList from '../views/SetList.vue'
import SetDelete from '../views/SetDelete.vue'
import FlashcardDetail from '../views/flashcards/FlashcardDetail.vue'
import FlashcardAdd from '../views/flashcards/FlashcardAdd.vue'
import FlashcardList from '../views/flashcards/FlashcardList.vue'
import FlashcardFilter from '../views/flashcards/FlashcardFilter.vue'
import LearnList from '../views/learn/LearnList.vue'
import LearnSession from '../views/learn/LearnSession.vue'
import UserRegister from '../views/users/UserRegister.vue'
import UserLogin from '../views/users/UserLogin.vue'
import UserLogout from '../views/users/UserLogout.vue'
import UserProfile from '../views/users/UserProfile.vue'
import UserProfileDelete from '../views/users/UserProfileDelete.vue'
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
        path: '/flashcards/:id',
        name: 'FlashcardDetail',
        component: FlashcardDetail,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/sets/:id/add',
        name: 'FlashcardAdd',
        component: FlashcardAdd,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/sets/:id',
        name: 'FlashcardList',
        component: FlashcardList,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/sets/filter/:id',
        name: 'FlashcardFilter',
        component: FlashcardFilter,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/sets/:id/delete',
        name: 'SetDelete',
        component: SetDelete,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/learn-list',
        name: 'LearnList',
        component: LearnList,
        props: true
    },
    {
        path: '/learn',
        name: 'LearnSession',
        component: LearnSession,
        props: true
    },
    // {
    //     path: '/learn/all',
    //     name: 'LearnAll',
    //     component: LearnSession,
    //     props: true
    // },
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
        path: '/logout',
        name: 'UserLogout',
        component: UserLogout
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/profile/delete',
        name: 'UserProfileDelete',
        component: UserProfileDelete
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '',
        redirect: 'sets'
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
