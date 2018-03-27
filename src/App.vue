<template lang="pug">
  #app.pm-container
    .item
      pm-header
    .item
      router-view
    .item
      pm-footer(v-show="showPlayer")
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { PmFooter, PmHeader },
  created () {
    let fontAwesome = document.createElement('script')
    fontAwesome.setAttribute('src', 'https://use.fontawesome.com/cd79d6bf05.js')
    document.head.appendChild(fontAwesome)
  },
  computed: {
    ...mapState(['showPlayer'])
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
