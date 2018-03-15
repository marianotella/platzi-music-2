<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4.has-text-centered
        .notification.is-danger(v-if="danger")
          slot(name="body") Algo anduvo mal
        .notification.is-success(v-else)
          slot(name="body") Algo anduvo bien
</template>

<script>
export default {
  name: 'danger',
  props: ['danger']
}
</script>
<style lang="scss">
  .notification {
    margin: 10px;
  }
</style>
