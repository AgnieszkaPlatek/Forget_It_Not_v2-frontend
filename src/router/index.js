import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue'
import AppWelcome from '../views/AppWelcome.vue'
import SetList from '../views/SetList.vue'
import SetDelete from '../views/SetDelete.vue'
import FlashcardDetail from '../views/flashcards/FlashcardDetail.vue'
import FlashcardEdit from '../views/flashcards/FlashcardEdit.vue'
import FlashcardAdd from '../views/flashcards/FlashcardAdd.vue'
import FlashcardList from '../views/flashcards/FlashcardList.vue'
import FlashcardFilter from '../views/flashcards/FlashcardFilter.vue'
import LearnList from '../views/learn/LearnList.vue'
import LearnSession from '../views/learn/LearnSession.vue'
import LearnIntro from '../views/learn/LearnIntro.vue'
import UserRegister from '../views/users/UserRegister.vue'
import UserLogin from '../views/users/UserLogin.vue'
import UserLogout from '../views/users/UserLogout.vue'
import UserActivate from '../views/users/UserActivate.vue'
import UserProfile from '../views/users/UserProfile.vue'
import UserProfileDelete from '../views/users/UserProfileDelete.vue'
import PasswordResetRequest from '../views/users/PasswordResetRequest.vue'
import PasswordResetConfirm from '../views/users/PasswordResetConfirm.vue'
import PasswordResetComplete from '../views/users/PasswordResetComplete.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: AppHome,
        meta: { requiresAuth: true }
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: AppWelcome,
        meta: { requiresAuth: false }
    },
    {
        path: '/sets',
        name: 'SetList',
        component: SetList
    },
    {
        path: '/flashcard/:id',
        name: 'FlashcardDetail',
        component: FlashcardDetail,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/flashcard/edit/:id',
        name: 'FlashcardEdit',
        component: FlashcardEdit,
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
        path: '/set/:id',
        name: 'FlashcardList',
        component: FlashcardList,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/set/filter/:id',
        name: 'FlashcardFilter',
        component: FlashcardFilter,
        props: true,
        beforeEnter(to, from, next) {
            next(Number.isInteger(Number(to.params.id)))
        }
    },
    {
        path: '/set/:id/delete',
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
    {
        path: '/learn-intro',
        name: 'LearnIntro',
        component: LearnIntro,
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
        path: '/activate/:uid/:token',
        name: 'UserActivate',
        component: UserActivate,
        props: true
    },
    {
        path: '/password/reset/request',
        name: 'PasswordResetRequest',
        component: PasswordResetRequest
    },
    {
        path: '/password/reset/confirm/:uid/:token',
        name: 'PasswordResetConfirm',
        component: PasswordResetConfirm,
        props: true
    },
    {
        path: '/password/reset/complete',
        name: 'PasswordResetComplete',
        component: PasswordResetComplete
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '',
        redirect: 'welcome'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})


// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       // this route requires auth, check if logged in
//       // if not, redirect to login page.
//       if (!auth.loggedIn()) {
//         next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//         })
//       } else {
//         next()
//       }
//     } else {
//       next() // make sure to always call next()!
//     }
//   })

export default router
