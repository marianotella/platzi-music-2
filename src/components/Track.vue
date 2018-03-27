<template lang="pug">
  .track(v-if="track && track.album")
    figure.image.is-1by1
      img(:src="track.album.images[0].url")
      figcaption.track-detail
        p {{ track.name | truncate }}
        p {{ trackArtists(track) | truncate }}
      .buttons(v-if="track.preview_url")
        i.fa.fa-play-circle.fa-2x(@click="selectTrack")
        i.fa.fa-info-circle.fa-2x(@click="goToTrack(track.id)")
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
    },
    trackArtists (track) {
      if (!track.name) {
        return ''
      } else if (track.artists.length > 1) {
        return `${track.artists[0].name} y ${track.artists[1].name}`
      } else {
        return track.artists[0].name
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .track {
    position: relative;
  }
  figure{
    position: relative;
  }
  .track-detail {
    background-color: rgba(0,0,0,.8);
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0px 5px 0 5px;
  }
  .track-detail p:nth-of-type(1){
    font-weight: 700;
  }
  .track-detail p:nth-of-type(2){
    font-weight: 400;
  }
  .hidden{
    display: none;
  }
  .content{
    height: 110px;
  }
  .buttons{
    background: rgba(0, 0, 0, 0.6);
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 8px;
    right: 0;
    justify-content: center;
  }
  .buttons i{
    color: white;
    cursor: pointer;
    margin: 0 5px;
  }
  .track:hover .buttons{
    display: flex;
  }
</style>
