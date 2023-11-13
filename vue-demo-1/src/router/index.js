import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 组件
import HomeView from '../views/HomeView.vue'

// 配置
const routes = [
  { path: '/', component: HomeView },
  { path: '/book', component: () => import('../views/BookView.vue') },
  // 动态路由
  { path: '/user/:id', component: () => import('../views/UserView.vue') },

  { path: '/elementUI', component: () => import('../views/ElementUIView.vue') },

  // 捕获所有路由或 404 Not found 路由
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundView.vue') },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: '/user-:afterUser(.*)', component: () => import('../views/UserView.vue') },
];

// 路由实例
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
