<template lang="pug">
  .container
    .toast.on(:class="type")
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
  line-height: 1.5;
  margin-bottom: 1em;
  padding: 1.25em;
  position: absolute;
  top: 1em;
  right: -365px;
  transition: 0.15s ease-in-out;
}

.toast.on {
  transform: translateX(-365px);
}

.close {
  cursor: pointer;
  float: right;
  font-size: 1.25rem;
  line-height: 1;
  margin-left: 1em;
  opacity: .8;
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
