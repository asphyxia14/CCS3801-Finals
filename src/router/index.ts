import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/',
    name: 'about',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/',
    name: 'menu',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/',
    name: 'reviews',
    component: () => import('../views/ReviewsView.vue'),
  },
  {
    path: '/',
    name: 'contact',
    component: () => import('../views/ReviewsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
