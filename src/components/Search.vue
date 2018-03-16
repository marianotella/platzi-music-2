<template lang="pug">
  main
    pm-notification(v-show="showNotification", :danger="true")
      p(slot="body") No se encotraron resultados
    pm-notification(v-show="showSuccess", :danger="false")
      p(slot="body") {{ searchMessage }}
    section.section
      nav.navbar-menu
        .container
          .field.has-addons
            .control.is-large.is-loading(v-show="isLoading")
              input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
            .control.is-large(v-show="!isLoading")
              input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;

      .container.results(v-show="!isLoading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              :class="{ 'is-active': t.id == selectedTrack }",
              :track="t",
              @select='setSelectedTrack'
            )
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
      showSuccess: false
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.showSuccess = res.tracks.total !== 0
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
        }, 3000)
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

<style lang="scss">
.results{
  margin-top: 50px;
}
.is-active{
  border: 3px solid #23d160;
}
</style>
