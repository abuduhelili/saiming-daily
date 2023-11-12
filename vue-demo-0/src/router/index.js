import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/eldemo',
      name: 'eldemo',
      component: () => import('@/views/ElDemoView.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('@/views/BookView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/day72',
      name: 'day72',
      component: () => import('@/views/Day72View.vue')
    }
  ]
})

export default router
