<template lang="pug">
  #app.pm-container
    pm-header
    router-view
    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader },
  created () {
    let fontAwesome = document.createElement('script')
    fontAwesome.setAttribute('src', 'https://use.fontawesome.com/cd79d6bf05.js')
    document.head.appendChild(fontAwesome)
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
