<template>
  <div></div>
</template>

<script>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  methods: {
    showWarning(message) {
      toast(message, {
        theme: 'colored',
        type: 'warning',
        position: 'bottom-right',
        transition: 'slide',
        dangerouslyHTMLString: true
      })
    }
  }
}
</script>
