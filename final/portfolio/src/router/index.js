import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CaseView from '../views/CaseView.vue'
import MoreCases from '../views/MoreCases.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/project/:id',
      name: 'project',
      component: CaseView
    },
    {
      path: '/moreprojects/:id',
      name: 'moreprojects',
      component: MoreCases
    }
  ]
})

export default router
