<template>
  <div
    class="banner"
    :style="{
      backgroundImage: `url(${bannerPic})`,
    }"
  >
    <div class="relative z-10 w-full flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerPic: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HomeBanner.scss';
</style>
