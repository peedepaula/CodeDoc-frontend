import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: "Dashboard",
      component: () => import('../views/Home.vue')
    },
      {
      path: '/configuracao',
      name: "Configuracao",
      component: () => import('../views/Configuracao.vue')
    },
    {
      path: '/perfil',
      name: "Perfil",
      component: () => import('../views/Perfil.vue')
    },
    {
      path: '/login',
      name: "Login",
      component: () => import('../views/Login.vue')
    },
    {
      path: '/registrar',
      name: "Registrar",
      component: () => import('../views/Registrar.vue')
    },
    {
      path: '/',
      name: "Landing Page",
      component: () => import('../views/LandingPage.vue')
    }
  ],
})


export default router
