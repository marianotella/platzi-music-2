<template lang="pug">
  .content
    p
      img(v-if="track && track.id", :src="track.album.images[0].url")
      img(v-else, src="https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2017/05/18/pepo.jpg")
    p(v-if="track && track.id")
      strong {{ track.name }}
      small  [ {{ track.duration_ms | ms-to-mm }} ]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="css" scoped>
img {
  border-radius: 50%;
  width: 124px;
}
</style>
