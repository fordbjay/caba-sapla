import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '',
        name: 'home',
        component: () => import('./views/Home.vue'),
        meta: {
            title: "Home"
          }
    },
    { 
        path: '/about',
        name: 'about',
        component: () => import('./views/About.vue'),
        meta: {
            title: "About"
          }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router