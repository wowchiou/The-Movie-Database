<template>
  <nuxt-link
    class="homeSliderTitle"
    :to="{ name: 'Overview-search', params: { search: type } }"
  >
    <h2>{{ label }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HomeSliderTitle.scss';
</style>
