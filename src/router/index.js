import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/Main'
import User from '../views/User'
import index from '../views/home/index.vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: index
                },
                {
                    path: '/user',
                    name: 'user',
                    component: User
                }
            ]
        },

    ]
})