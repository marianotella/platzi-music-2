<template lang="pug">
  section.section
    .notification-content
      transition(name="opacity")
        pm-notification(v-show="showNotification", :type="{ 'is-success' :showTotal, 'is-danger' : !showTotal }")
          p(v-show="!showTotal", slot="body") No se encotraron resultados
          p(v-show="showTotal", slot="body") {{ searchMessage }}
    .container
      .field.has-addons
        .control.is-large.is-loading(v-show="isLoading")
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
        .control.is-large(v-show="!isLoading")
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery", @keyup.enter="search")
        .control
          a.button.is-info.is-large(@click="search") Buscar

    .pm-content(v-show="!isLoading")
      .item(v-for="t in tracks")
        pm-track(
          v-blur="t.preview_url"
          :class="{ 'is-active': t.id == selectedTrack }",
          :track="t",
          @select='setSelectedTrack'
        )
    .container.results(v-show="isLoading")
      p el pepo
      .item
        pm-track
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      showTotal: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.showTotal = res.tracks.total > 0

          if (this.showNotification || this.showTotal) {
            this.showNotification = true
          }

          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Se encontraron: ${this.tracks.length} canciones`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    },
    showSuccess () {
      if (this.showSuccess) {
        setTimeout(() => {
          this.showSuccess = false
        }, 2000)
      }
    }
  },
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  }
}
</script>

<style scoped>
  section {
    overflow: auto;
  }
  .section{
    padding-top: 0em;
  }
  .navbar{
    margin-bottom: 50px;
  }
  .pm-content{
    margin-top: 50px;
  }
  .field{
    justify-content: center;
  }
  .notification-content{
    height: 60px;
    margin-bottom: 10px;
  }
</style>
