import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue icon
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  MdEmail,
  CoGithub,
  BiLinkedin,
  FaUser,
  RiCloseFill,
  FaFile
} from 'oh-vue-icons/icons'
addIcons(MdEmail, CoGithub, BiLinkedin, FaUser, RiCloseFill, FaFile)

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(router)
app.component('v-icon', OhVueIcon)
app.use(vuetify)
app.mount('#app')
