<template lang="pug">
  .track(v-if="track && track.album")
    figure.image.is-1by1
      img(:src="track.album.images[0].url")
      figcaption.track-detail
        p {{ track.name }}
        p {{ track.artists[0].name }}
        small {{ track.duration_ms | ms-to-mm }}
        button
          span.icon.is-small(@click="selectTrack") ▶️
        button
          span.icon.is-small(@click="goToTrack(track.id)") 🔴
</template>

<script>
import trackMixin from '@/mixins/track'
export default {
  mixins: [ trackMixin ],
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    goToTrack (id) {
      if (!this.track.preview_url) { return }
      this.$router.push({ name: 'track', params: { id } })
    }
  }
}
</script>

<style lang="css" scoped>
  .track {
    position: relative;
  }
  .level-left p:nth-of-type(1) {
    font-weight: 700;
  }
  .level-left p:nth-of-type(2) {
    font-weight: 300;
  }
  .track-detail {
    background-color: rgba(0,0,0,.4);
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
  }
  .hidden{
    display: none;
  }
  .content{
    height: 110px;
  }
</style>
