<template>
  <v-col cols="12 cursor-default">
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <v-card v-bind="props" :color="isHovering ? blue : undefined" v-if="!loading">
          <v-card-text>
            <p class="text-subtitle-2 text-lg-subtitle-1">
              {{ internship.start }} - {{ internship.end }}
            </p>
            <p class="text-h6">{{ internship.title }}</p>
            <div class="space-x-1 py-1">
              <v-chip
                v-for="(tag, index) in internship.tags.split(',')"
                :key="index"
                class="text-caption"
                size="x-small"
              >
                {{ tag.trim() }}
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
            </v-btn
            ><a :href="internship.web" target="_blank" rel="noopener noreferrer">
              <v-btn :color="!isHovering ? blue : brown" text="Website" variant="text"> </v-btn>
            </a>
          </v-card-actions>
          <v-expand-transition>
            <v-card
              v-if="reveal"
              class="position-absolute w-100 overflow-auto"
              height="100%"
              style="bottom: 0"
            >
              <v-card-text class="pb-0">
                <p class="text-justify text-body-2 text-lg-body-1">{{ internship.desc }}</p>
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
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    internship: Object
  },
  setup() {
    const blue = ref('#153448')
    const brown = ref('#DFD0B8')
    const reveal = ref(false)
    const loading = ref(true)

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 1500)
    })

    return {
      blue,
      brown,
      reveal,
      loading
    }
  }
}
</script>
