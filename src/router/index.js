import { createWebHistory, createRouter } from 'vue-router'

const MainView = () => import('../views/MainView.vue')
const TrialView = () => import('../views/TrialView.vue')
const AboutView = () => import('../views/AboutView.vue')
const RealTmeMessaging = () => import('../views/RealTmeMessaging.vue')
const AIandAutomationView = () => import('../views/AIandAutomationView.vue')
const TicketingView = () => import('../views/TicketingView.vue')
const ContactsView = () => import('../views/ContactsView.vue')
const Offerta = () => import('../views/PublicOfferView.vue')

const routes = [
    { path: '/', component: MainView },
    { path: '/trial', component: TrialView },
    { path: '/about', component: AboutView },
    { path: '/realTimeMessaging', component: RealTmeMessaging },
    { path: '/ai', component: AIandAutomationView },
    { path: '/tiketing', component: TicketingView },
    { path: '/contacts', component: ContactsView },
    { path: '/public-offer', component: Offerta },
]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 100,
                behavior: 'smooth',
            }
        }else{
            return {top:0}
        }
    },
    history: createWebHistory(),
    routes,
})

export default router