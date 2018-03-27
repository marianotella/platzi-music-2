import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    track: {},
    showPlayer: false
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${getAuthorName(state)}`
    },
    setTrackObject (state) {
      if (!state.track.name) {
        return {
          title: 'Titulo',
          author: 'Autor',
          url: '',
          pic: ''
        }
      }
      return {
        title: state.track.name,
        author: getAuthorName(state),
        url: state.track.preview_url,
        pic: state.track.album.images[0].url
      }
    }
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
      state.showPlayer = true
    },
    getAuthorName () {
      if (this.track.artists.length > 1) {
        return `${this.track.artists[0].name} y ${this.state.track.artists[1].name}`
      } else {
        return this.track.artists[0].name
      }
    }
  },
  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

function getAuthorName (state) {
  if (state.track.artists.length > 1) {
    return `${state.track.artists[0].name} y ${state.track.artists[1].name}`
  } else {
    return state.track.artists[0].name
  }
}
export default store
