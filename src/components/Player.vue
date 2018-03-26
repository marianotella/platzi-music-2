<template lang="pug">
  aplayer#player(autoplay, :music="setTrackObject", :fixed="true")
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
    position: fixed !important;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>
