<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? blue : undefined"
        class="mb-5 mx-3 cursor-default"
        max-width="300"
        v-if="!loading"
      >
        <v-img width="550px" v-if="projects.thumb" :src="projects.thumb" cover></v-img>
        <div class="px-3 mt-1">
          <p class="text-subtitle-2 text-lg-subtitle-1">{{ projects.periode }}</p>
          <p class="text-h6 text-justify text-truncate" style="max-width: 260px">
            {{ projects.title }}
          </p>
          <div class="space-x-1 mb-5">
            <v-chip
              v-for="(tag, index) in projects.tags"
              :key="index"
              class="text-caption"
              size="x-small"
            >
              {{ tag }}
            </v-chip>
          </div>
          <p class="text-justify text-body-2">{{ projects.desc }}</p>
        </div>
        <v-card-actions>
          <a
            v-show="projects.documentation !== ''"
            :href="projects.documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-btn :color="!isHovering ? blue : brown" text="Docs" variant="text"> </v-btn>
          </a>
          <v-btn
            v-show="projects.documentation === ''"
            :color="!isHovering ? blue : brown"
            text="Docs"
            variant="text"
            @click="checkData"
          >
          </v-btn>
          <a :href="projects.website" target="_blank" rel="noopener noreferrer">
            <v-btn :color="!isHovering ? blue : brown" text="Website" variant="text"></v-btn>
          </a>
        </v-card-actions>
      </v-card>
      <v-skeleton-loader v-else width="300" height="305" class="mb-4 mx-3"></v-skeleton-loader>
    </template>
  </v-hover>
  <ShowAlert ref="showAlert" />
</template>

<script>
import { ref, onMounted } from 'vue'
import ShowAlert from './ShowAlert.vue'

export default {
  props: {
    projects: Object
  },
  components: {
    ShowAlert
  },
  setup(props) {
    const blue = ref('#153448')
    const brown = ref('#DFD0B8')
    const loading = ref(true)
    const showAlert = ref(null)

    const checkData = () => {
      if (props.projects.documentation === '') {
        showAlert.value.showWarning('Project in development stage')
      }
    }

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1500)
    })

    return {
      blue,
      brown,
      loading,
      showAlert,
      checkData
    }
  }
}
</script>
