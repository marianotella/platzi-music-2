<template lang="pug">
  .item.pm-header
    section.is-primary
      header.navbar
        .navbar-menu
          .navbar-start
            .navbar-item
              strong Platzi Music
          .navbar-end
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros
</template>
