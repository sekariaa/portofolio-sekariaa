<template>
  <v-col cols="12 cursor-default">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card v-bind="props" :color="isHovering ? blue : undefined" v-if="!loading">
          <v-card-text>
            <div class="flex items-center space-x-2">
              <v-avatar>
                <v-img :src="certification.thumb"></v-img>
              </v-avatar>
              <div>
                <p class="text-subtitle-2">{{ certification.start }} - {{ certification.end }}</p>
                <p class="text-h6 text-justify text-truncate" style="max-width: 200px">
                  {{ certification.title }}
                </p>
              </div>
            </div>
            <div class="space-x-1 mt-4 space-y-0.5">
              <v-chip
                v-for="(tag, index) in certification.tags"
                :key="index"
                class="text-caption"
                size="x-small"
              >
                {{ tag }}
              </v-chip>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :color="!isHovering ? blue : brown"
              text="Read"
              variant="text"
              @click="reveal = true"
            >
            </v-btn>
            <a
              v-show="certification.certificate !== ''"
              :href="certification.certificate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-btn :color="!isHovering ? blue : brown" text="Certificate" variant="text"> </v-btn>
            </a>
            <v-btn
              v-show="certification.certificate === ''"
              :color="!isHovering ? blue : brown"
              text="Certificate"
              variant="text"
              @click="checkData"
            >
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100 overflow-auto"
              height="100%"
              style="bottom: 0"
            >
              <v-card-text class="pb-0">
                <p class="text-justify text-body-2">{{ certification.desc }}</p>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-btn :color="blue" text="Close" variant="text" @click="reveal = false"></v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
        <v-skeleton-loader v-else width="100%" height="170"></v-skeleton-loader>
      </template>
    </v-hover>
  </v-col>
  <ShowAlert ref="showAlert" />
</template>

<script>
import { ref, onMounted } from 'vue'
import ShowAlert from './ShowAlert.vue'

export default {
  props: {
    certification: Object
  },
  components: {
    ShowAlert
  },
  setup(props) {
    const blue = ref('#153448')
    const brown = ref('#DFD0B8')
    const reveal = ref(false)
    const loading = ref(true)
    const showAlert = ref(null)

    const checkData = () => {
      if (props.certification.certificate === '') {
        showAlert.value.showWarning('Certificate is in process')
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
      reveal,
      loading,
      showAlert,
      checkData
    }
  }
}
</script>
