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
