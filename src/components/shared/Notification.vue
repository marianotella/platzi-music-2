<template lang="pug">
  .notification(:class="type")
    slot(name="body") Algo anduvo mal
</template>

<script>
export default {
  props: {
    type: {
      type: Object, required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  color: #000;
  font-size: .8em;
  margin: auto;
  text-align: center;
  padding: 1em;
  width: 200px;
}

.success {
  background-color: #00D1B4;
  color: #fff;
}

.error {
  background-color: #FF3560;
  color: #fff;
}

</style>
