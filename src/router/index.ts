import { useAppStore } from './../stores/appStore';
import { createRouter, createWebHistory } from "vue-router"

// Import our components
import Index from '../pages/Index.vue'
import Login from '../pages/Login.vue'

// The routes mapping URLs to components
const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Index, meta: { auth: true } }
]

// Create our router instance and export it to use in main.ts
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// The routing rules for authenticated routes
router.beforeEach((to) => {
  const app = useAppStore()

  if (to.meta.auth && !app.loggedIn) {
      return { path: '/login' }
  }
})