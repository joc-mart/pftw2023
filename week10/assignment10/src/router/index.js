import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/ProjectDetail.vue'
import Details from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/projects/:id',
      name: 'project',
      component: Project
    },
    {
      // path: '/project/:id',
      // name: 'details',
      // component: DetailsView
    }
  ]
})

export default router
