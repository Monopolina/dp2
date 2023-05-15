import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/nas',
    name: 'nas',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/ProdajaView',
    name: 'ProdajaView',
    component: () => import('../views/prodaja/ProdajaView.vue'),
  
  },
  {
    path: '/CreateView',
    name: 'CreateView',
    component: () => import('../views/prodaja/CreateView.vue'),
    
  },
  {
    path: '/DetelsView/:id',
    name: 'DetelsView',
    component: () => import('../views/prodaja/DetelsView.vue'),
    
  },
  {
    path: '/EditView/:id',
    name: 'EditView',
    component: () => import('../views/prodaja/EditView.vue'),
    
  },
  {
    path: '/RemontView',
    name: 'RemontView',
    component: () => import('../views/remont/RemontView.vue'),
  
  },
  {
    path: '/Create2View',
    name: 'Create2View',
    component: () => import('../views/remont/Create2View.vue'),
  },
  {
    path: '/Detels2View/:id',
    name: 'Detels2View',
    component: () => import('../views/remont/Detels2View.vue'),
    
  },
  {
    path: '/Edit2View/:id',
    name: 'Edit2View',
    component: () => import('../views/remont/Edit2View.vue'),
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
