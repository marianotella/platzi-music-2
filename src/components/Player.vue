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
    padding-bottom: 10px;
    border-radius: 0 !important;
    background: #333;
  }
  .aplayer .aplayer-body .aplayer-info{
  }
</style>
