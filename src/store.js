import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/track'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    track: {}
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    },
    setTrackObject (state) {
      if (!state.track.name) {
        return {
          title: 'Titulo',
          author: 'Autor',
          url: '',
          pic: 'https://pbs.twimg.com/profile_images/542713221325799424/NNgT2t45.jpeg'
        }
      }
      return {
        title: state.track.name,
        author: state.track.artists[0].name,
        url: state.track.preview_url,
        pic: state.track.album.images[0].url
      }
    }
  },
  mutations: {
    setTrack (state, track) {
      state.track = track
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

export default store
