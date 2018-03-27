<template lang="pug">
  .pm-header
    nav.navbar.is-info
      .navbar-brand
        .navbar-item
          p Platzi Music
        .navbar-burger.burger(data-target="navbar")
          span
          span
          span
      #navbar.navbar-menu
        .navbar-end
          .navbar-item
            .field.is-grouped
              p.control
                router-link.button(:to="{ name: 'search' }")
                  span.icon
                    i.fa.fa-search
                  span Buscar
              p.control
                router-link.button.is-primary(:to="{ name: 'about' }")
                  span.icon
                    i.fa.fa-users
                  span Nosotros
</template>
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
</script>
