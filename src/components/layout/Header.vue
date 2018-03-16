<template lang="pug">
  section.hero.is-primary
    .hero-head
      header.navbar
        .container.navbar-menu
          .navbar-strat
            .navbar-item
              strong Platzi Music
          .navbar-end
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan vue-nisimas!
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player'

export default {
  components: {
    PmPlayer
  }
}
</script>
