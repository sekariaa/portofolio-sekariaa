<template>
  <div class="flex flex-wrap justify-center">
    <CardProject
      v-for="(project, index) in projects"
      :key="index"
      :projects="project"
    ></CardProject>
  </div>
</template>

<script>
import CardProject from '../components/CardProject.vue'
import { projectsData } from '@/utils/projects.js'

export default {
  components: {
    CardProject
  },
  data() {
    return { projects: [] }
  },
  mounted() {
    this.fetchDataProjects()
  },
  methods: {
    async fetchDataProjects() {
      try {
        const data = await Promise.resolve(projectsData)
        this.projects = data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
