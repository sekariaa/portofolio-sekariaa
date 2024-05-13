<v-card class="mb-5 mx-3" max-width="300">
    <v-img width="550px" v-if="projects.thumb" :src="projects.thumb" cover></v-img>
    <div class="px-3 mt-1">
      <p class="text-subtitle-2">{{ projects.periode }}</p>
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
      <div class="my-1">
        <a :href="projects.documentation" target="_blank" rel="noopener noreferrer">
          <button
            class="hover:rounded-md hover:bg-blue-primary hover:text-brown-primary text-blue-primary px-1 py-0.5 w-1/2 outline outline-2"
          >
            Docs
          </button>
        </a>
        <a :href="projects.website" target="_blank" rel="noopener noreferrer">
          <button
            class="hover:rounded-md hover:bg-blue-primary hover:text-brown-primary text-blue-primary px-1 py-0.5 w-1/2"
          >
            Website
          </button>
        </a>
      </div>
</div>
    <v-card-actions>
      <v-btn :color="!isHovering ? blue : brown" text="Docs" variant="text"> </v-btn>
      <a :href="projects.certificate" target="_blank" rel="noopener noreferrer">
        <v-btn :color="!isHovering ? blue : brown" text="Website" variant="text"></v-btn>
      </a>
    </v-card-actions>
  </v-card>
