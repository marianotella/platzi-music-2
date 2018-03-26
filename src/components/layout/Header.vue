<template lang="pug">
  .pm-header
    nav.navbar.is-info
      .navbar-brand
        .navbar-item
          p Plazi Music
        .navbar-burger.burger
          span
          span
          span
      #navbarExampleTransparentExample.navbar-menu
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                router-link.bd-tw-button.button(:to="{ name: 'search' }")
                  span.icon
                    i.fa.fa-search
                  span Buscar
              p.control
                router-link.button.is-primary(:to="{ name: 'nosotros' }")
                  span.icon
                    i.fa.fa-users
                  span Nosotros
</template>
