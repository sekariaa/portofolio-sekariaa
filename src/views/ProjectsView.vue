<template>
  <div class="flex justify-center mb-4">
    <v-chip-group v-model="selectedType" selected-class="text-primary" mandatory>
      <v-chip value="all" variant="outlined">All</v-chip>
      <v-chip value="uiux" variant="outlined">UI/UX Design</v-chip>
      <v-chip value="dev" variant="outlined">Website Developer</v-chip>
    </v-chip-group>
  </div>
  <div class="flex flex-wrap justify-center">
    <CardProject
      v-for="(project, index) in filteredProjects"
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
    return { projects: [], selectedType: 'all' }
  },
  computed: {
    filteredProjects() {
      if (this.selectedType === 'all') return this.projects
      return this.projects.filter((p) => p.type === this.selectedType)
    }
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
