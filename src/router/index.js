import { createWebHistory, createRouter } from 'vue-router'

import MainView from '../views/MainView.vue'
import TrialView from '../views/TrialView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '/trial', component: TrialView },
    { path: '/about', component: AboutView },

]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
    history: createWebHistory(),
    routes,
})

export default router