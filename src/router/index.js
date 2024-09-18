import { createWebHistory, createRouter } from 'vue-router'

import MainView from '../views/MainView.vue'
import TrialView from '../views/TrialView.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '/trial', component: TrialView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router