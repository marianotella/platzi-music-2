<template lang="pug">
  aplayer#player(autoplay, :music="setTrackObject")
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Aplayer from 'vue-aplayer'

export default {
  computed: {
    ...mapState(['track']),
    ...mapGetters(['setTrackObject'])
  },
  components: { Aplayer }
}
</script>
<style>
  .aplayer{
    margin: 0 !important;
    position: fixed !important;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0 !important;
    box-shadow: 0 -3px 3px -3px #333 !important;
  }
  .aplayer-pic{
    height: 150px !important;
    width: 150px !important;
  }
  .aplayer .aplayer-body .aplayer-info{
    font-style: 20px;
    height: 150px !important;
    padding-bottom: 30px !important;
  }
  .aplayer-title{
    font-size: 1.5em !important;
  }
  .aplayer-author{
    font-size: 1em !important;
  }
  .aplayer-time-inner{
    font-size: 1.5em;
  }
</style>
