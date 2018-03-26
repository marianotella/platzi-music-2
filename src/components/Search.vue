<template lang="pug">
  section.section
    nav.navbar
      .container
        .field.has-addons
          .control.is-large.is-loading(v-show="isLoading")
            input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
          .control.is-large(v-show="!isLoading")
            input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery", @keyup.enter="search")
          .control
            a.button.is-info.is-large(@click="search") Buscar
          .control
            a.button.is-danger.is-large &times;

    transition(name="move")
      pm-notification(v-show="showNotification", :type="{ 'success' :showTotal, 'error' : !showTotal }")
        p(v-show="!showTotal", slot="body") No se encotraron resultados
        p(v-show="showTotal", slot="body") {{ searchMessage }}

    .pm-content(v-show="!isLoading")
      .item(v-for="t in tracks")
        pm-track(
          v-blur="t.preview_url"
          :class="{ 'is-active': t.id == selectedTrack }",
          :track="t",
          @select='setSelectedTrack'
        )
    .container.results(v-show="isLoading")
      h2 No hay resultados para mostrar
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
    padding-top: 1em;
  }
  .navbar{
    margin-bottom: 50px;
  }
</style>
