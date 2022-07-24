import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/Main'
import User from '../views/User'
import index from '../views/home/index.vue'
import Mall from '../views/mall/index.vue'
import PageOne from '../views/other/pageOne.vue'
import PageTwo from '../views/other/pageTwo.vue'
import Login from '../views/Login/Login.vue'
import store from '../store'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                // {
                //     path: '/home',
                //     name: 'home',
                //     component: index
                // },
                // {
                //     path: '/user',
                //     name: 'user',
                //     component: User
                // },
                // {
                //     path: '/mall',
                //     name: 'mall',
                //     component: Mall
                // },
                // {
                //     path: '/page1',
                //     name: 'page1',
                //     component: PageOne
                // },
                // {
                //     path: '/page2',
                //     name: 'page2',
                //     component: PageTwo
                // },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }

    ]
})
router.beforeEach((to, from, next) => {
    store.commit("user/GETTOKEN")
    const token = store.state.user.token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else {
        next()
    }
})
export default router