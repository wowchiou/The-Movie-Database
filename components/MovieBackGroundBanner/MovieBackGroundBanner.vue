<template>
  <div
    :style="{
      backgroundImage: `url(
          ${backGroundImage}
        )`,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    backGroundImage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './MovieBackGroundBanner.scss';
</style>
