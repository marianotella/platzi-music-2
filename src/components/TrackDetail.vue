<template lang="pug">
  .container
    .columns.is-mobile.is-centered
      .column.is-4.is-centered
        pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'

export default {
  components: { PmTrack },

  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .column {
    margin: 20px;
  }
</style>
