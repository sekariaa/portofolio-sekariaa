<template>
  <div class="max-w-[1640px] mx-auto relative flex min-h-screen font-Montserrat">
    <div
      :class="sidebarVisible ? 'block' : 'hidden'"
      class="text-black w-64 md:w-96 z-20 p-3 shadow-xl space-y-2 min-h-full fixed overflow-auto bg-white"
      style="top: 0; bottom: 0"
    >
      <div class="sticky">
        <div class="flex items-start">
          <img src="../../photo.png" alt="" srcset="" class="w-40 mx-auto" />
          <button @click="toggleSidebar" class="text-blue-primary md:hidden right-0">
            <v-icon name="ri-close-fill" scale="1.25" />
          </button>
        </div>
        <h1 class="text-center font-semibold text-2xl">{{ profile.name }}</h1>
        <h2 class="text-center text-gray-500 mt-0">Website Developer</h2>
        <p class="text-justify text-sm">{{ profile.aboutMe }}</p>
        <div class="flex flex-col text-sm">
          <div
            class="flex items-center text-sm text-blue-primary hover:text-brown-primary hover:bg-blue-primary hover:rounded-full w-48 px-2 py-1"
          >
            <v-icon name="fa-file" scale="1.25" />
            <a class="pl-1" :href="profile.cv" target="_blank">Curriculum Vitae </a>
          </div>
          <div
            class="flex items-center text-sm text-blue-primary hover:text-brown-primary hover:bg-blue-primary hover:rounded-full w-48 px-2 py-1"
          >
            <v-icon name="co-github" scale="1.25" />
            <a class="pl-1" :href="profile.github" target="_blank">github.com/sekaria</a>
          </div>
          <div
            class="flex items-center text-sm text-blue-primary hover:text-brown-primary hover:bg-blue-primary hover:rounded-full w-48 px-2 py-1"
          >
            <v-icon name="bi-linkedin" scale="1.25" />
            <a class="pl-1" :href="profile.linkedin" target="_blank">Sekar Ria</a>
          </div>
          <div
            class="flex items-center text-sm text-blue-primary hover:text-brown-primary hover:bg-blue-primary hover:rounded-full w-48 px-2 py-1"
          >
            <v-icon name="md-email" scale="1.25" />
            <a class="pl-1" :href="'mailto:' + profile.email" target="_blank">sekariaa@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div
        class="max-w-[1640px] mx-auto flex justify-between items-center fixed w-full bg-white z-10"
      >
        <div>
          <button
            :class="!sidebarVisible ? 'block' : 'hidden'"
            @click="toggleSidebar"
            class="text-blue-primary md:hidden p-3"
          >
            <v-icon name="fa-user" scale="1.5" />
          </button>
        </div>
        <div class="p-3 space-x-3">
          <router-link :to="{ path: '/' }">
            <button
              :class="{ 'bg-blue-primary text-brown-primary': isRouteActive('/') }"
              class="rounded-full px-2 py-1 outline outline-2 outline-blue-primary text-blue-primary text-xs"
            >
              Projects
            </button>
          </router-link>
          <router-link :to="{ path: '/experiences' }">
            <button
              :class="{ 'bg-blue-primary text-brown-primary': isRouteActive('/experiences') }"
              class="rounded-full px-2 py-1 outline outline-2 outline-blue-primary text-blue-primary text-xs"
            >
              Experiences
            </button>
          </router-link>
        </div>
      </div>
      <div :class="sidebarVisible ? 'md:ml-96' : ''" class="flex-1 h-full mt-14">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { data } from '@/utils/profile.js'

export default {
  data() {
    return {
      profile: 0,
      sidebarVisible: window.innerWidth >= 768
    }
  },
  mounted() {
    this.fetchData()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    async fetchData() {
      try {
        const profileData = await Promise.resolve(data)
        this.profile = profileData[0]
      } catch (error) {
        console.error('Error fetching data:', error)
        this.profile = null
      }
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    },
    handleResize() {
      if (window.innerWidth >= 768) {
        this.sidebarVisible = true
      }
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize)
    },
    isRouteActive(route) {
      return this.$route.path === route
    }
  }
}
</script>
