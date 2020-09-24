import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './views/About'
import Search from './views/Search'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '', component: Search },
        { path: '/about', component: About }
    ]
})