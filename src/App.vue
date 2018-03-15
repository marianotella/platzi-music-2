<template lang="pug">
  #app
    pm-header
    pm-notification(v-show="showNotification", :danger="true")
      p(slot="body") No se encotraron resultados
    pm-notification(v-show="showSuccess", :danger="false")
      p(slot="body") {{ searchMessage }}
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              :class="{ 'is-active': t.id == selectedTrack }",
              :track="t",
              @select='setSelectedTrack'
            )
    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'
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
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader,
    PmNotification
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
.results{
  margin-top: 50px;
}
.is-active{
  border: 3px solid #23d160;
}
</style>
