import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { TOKEN_KEY } from "@/services/api"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: "Dashboard",
      component: () => import('../views/Home.vue'),
      meta: { requiresAuth: true }
    },
      {
      path: '/configuracao',
      name: "Configuracao",
      component: () => import('../views/Configuracao.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/perfil',
      name: "Perfil",
      component: () => import('../views/Perfil.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: "Login",
      component: () => import('../views/Login.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/registrar',
      name: "Registrar",
      component: () => import('../views/Registrar.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/',
      name: "Landing Page",
      component: () => import('../views/LandingPage.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/esqueceu-senha',
      name: "Esqueceu a senha",
      component: () => import('../views/ResetDeSenha.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/politica-de-uso',
      name: "Política de uso",
      component: () => import('../views/PoliticaDeUso.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/politica-de-privacidade',
      name: "Política de privacidade",
      component: () => import('../views/PoliticaDePrivacidade.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/email-trocado/:token',
      name: "E-mail trocado",
      component: () => import('../views/EmailTrocado.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/nova-senha/:token',
      name: "Senha trocada",
      component: () => import('../views/SenhaTrocada.vue'),
      meta: {esconderHistorico: true}
    },
    {
      path: '/:pathMatch(.*)',
      name: "Pagina não encontrada",
      component: () => import('../views/PaginaNaoEncontrada.vue'),
      meta: {esconderHistorico: true}
    }
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem(TOKEN_KEY)
  // rota precisa de login
  if (to.meta.requiresAuth && !token) {
    next("/login")
  } 
  else {
    next()
  }

})

export default router
