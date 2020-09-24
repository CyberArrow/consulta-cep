<template>
  <span :class="[font]" @click="handler"><slot /></span>
</template>

<script>
export default {
  name: 'Typo',
  props: {
    font: {
      type: String,
      default: 'source'
    }
  },
  methods: {
    handler (e) {
      this.$emit(e.type, e)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
span {
  line-height: 1rem;
  @each $fontName, $fontFamily in $fonts {
    &.#{$fontName} {
      font-family: $fontFamily;
      color: map_get($pallete, black)
    }
  }
  @each $fontSize in $fontSizes {
    &.s#{$fontSize} {
      font-size: #{$fontSize}px;
      line-height: #{$fontSize + 5}px;
      &.no-line-height {
        line-height: #{$fontSize}px;
      }
    }
  }
  @each $colorName, $color in $pallete {
    &.text-#{$colorName} {
      color: $color;
    }
  }

  &.w{
    &100{font-weight: 100}
    &300{font-weight: 300}
    &400{font-weight: 400}
    &500{font-weight: 500}
    &600{font-weight: 600}
    &700{font-weight: 700}
    &900{font-weight: 900}
  }

  &.text-center{
    text-align: center;
  }

  &.dont-break {
    white-space: nowrap;
  }

  &.ellipsis {
    padding: 1px 0;
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
  }
}
</style>
