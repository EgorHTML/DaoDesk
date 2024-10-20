import { createWebHistory, createRouter } from 'vue-router'

import MainView from '../views/MainView.vue'
import TrialView from '../views/TrialView.vue'
import AboutView from '../views/AboutView.vue'
import RealTmeMessaging from '../views/RealTmeMessaging.vue'
import AIandAutomationView from '../views/AIandAutomationView.vue'
import TicketingView from '../views/TicketingView.vue'

const routes = [
    { path: '/', component: MainView },
    { path: '/trial', component: TrialView },
    { path: '/about', component: AboutView },
    { path: '/realTimeMessaging', component: RealTmeMessaging },
    { path: '/ai', component: AIandAutomationView },
    { path: '/tiketing', component: TicketingView },
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