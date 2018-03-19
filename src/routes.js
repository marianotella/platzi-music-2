import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  { path: '/vue/', component: Search, name: 'search' },
  { path: '/vue/about', component: About, name: 'about' },
  { path: '/vue/track/:id', component: TrackDetail, name: 'track' }
]

export default routes
