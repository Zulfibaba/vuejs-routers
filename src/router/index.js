import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import jobs from '../views/jobs/jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'

import { compile } from 'vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component : AboutView
  },
  {
    path : '/jobs',
    name : 'jobs',
    component : jobs
  },
  {
    path: '/jobs/:id',
    name : 'JobsDetails',
    component : JobsDetails,
    props :true
  },
  {
    path : '/:catchAll(.*)',
    name : 'NotFound',
    component: NotFound
  },
  
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
