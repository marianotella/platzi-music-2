<template lang="pug">
  .content
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small  [{{ track.duration_ms }}]
    p
      audio(controls, autoplay, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }
}
</script>

<style lang="css" scoped>
img {
  border-radius: 50%;
  width: 124px;
}
</style>
