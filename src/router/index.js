import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperiencesView from '../views/ExperiencesView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'projects',
          component: ProjectsView
        },
        {
          path: '/experiences',
          name: 'experiences',
          component: ExperiencesView
        }
      ]
    }
  ]
})

export default router
