<template lang="pug">
  #app.pm-container
    pm-header
    .pm-player
      pm-player
    router-view
    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import PmPlayer from '@/components/Player'

export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmPlayer }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
