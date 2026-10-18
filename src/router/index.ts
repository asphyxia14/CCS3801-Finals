import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue'),
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ReviewsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
