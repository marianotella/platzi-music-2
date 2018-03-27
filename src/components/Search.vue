<template lang="pug">
  section.section
    .notification-content
      transition(name="opacity")
        pm-notification(v-show="showNotification", :type="{ 'is-success' :showTotal, 'is-danger' : !showTotal }")
          p(v-show="!showTotal", slot="body") No se encotraron resultados
          p(v-show="showTotal", slot="body") {{ searchMessage }}
    .container
      .field.is-grouped
        p.control.is-expanded.has-icons-left
          input.input.is-large(type="text", placeholder="Buscar canciones", v-model="searchQuery", @keyup.enter="search")
          span.icon.is-small.is-left
            i.fa.fa-music
        p.control
          a.button.is-info.is-large(@click="search") Buscar
        p.control
          a.button.is-danger.is-large(@click="clear") &times;

    .pm-content(v-show="!isLoading")
      .item(v-for="t in tracks")
        pm-track(
          v-blur="t.preview_url"
          :class="{ 'is-active': t.id == selectedTrack }",
          :track="t",
          @select='setSelectedTrack'
        )
    .container.results(v-show="isLoading")
      pm-loader
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'
import { mapState } from 'vuex'

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
    clear () {
      this.searchQuery = ''
      this.tracks = []
      this.$store.commit('setShowPlayer')
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    ...mapState(['setShowPlayer']),
    searchMessage () {
      return `Se encontraron: ${this.tracks.length} canciones`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 2000)
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
    margin-bottom: 150px;
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
    width: 300px;
    margin: 5px auto 10px;
    text-align: center;
  }
  .container.results{
    padding-top: 50px;
    min-height: 300px;
    text-align: center;
  }
</style>
