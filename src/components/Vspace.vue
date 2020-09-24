<template>
  <span class="v-space" :class="['s' + size]" />
</template>

<script>
export default {
  name: 'Vspace',
  props: {
    size: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style scoped lang="scss">
span.v-space {
  height: 0;
  width: 100%;
  display: block;

  @for $i from 1 through 256 {
    &.s#{$i}{
      padding-top: #{$i}px;
    }
  }
}
</style>
