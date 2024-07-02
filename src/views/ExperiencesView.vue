<template>
  <h1 class="px-3 font-semibold text-2xl">Work Experiences</h1>
  <CardInternship
    v-for="(intern, index) in internship"
    :key="index"
    :internship="intern"
  ></CardInternship>
  <h1 class="px-3 font-semibold text-2xl">Certifications</h1>
  <div v-if="certification && certification.length > 0">
    <CardCertification v-for="(cert, index) in certification" :key="index" :certification="cert">
    </CardCertification>
  </div>
</template>

<script>
import CardInternship from '../components/CardInternship.vue'
import CardCertification from '../components/CardCertification.vue'
import { internshipData } from '@/utils/internships.js'
import { certicicationData } from '@/utils/certifications.js'

export default {
  components: {
    CardInternship,
    CardCertification
  },
  data() {
    return { internship: [], certification: [] }
  },
  mounted() {
    this.fetchDataInternships()
    this.fetchDataCertifications()
  },
  methods: {
    async fetchDataInternships() {
      try {
        const data = await Promise.resolve(internshipData)
        this.internship = data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    async fetchDataCertifications() {
      try {
        const data = await Promise.resolve(certicicationData)
        this.certification = data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
