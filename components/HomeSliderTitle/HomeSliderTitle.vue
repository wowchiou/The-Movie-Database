<template>
  <nuxt-link
    class="homeSliderTitle"
    :to="
      localePath({ name: 'Overview-search', params: { search: searchParam } })
    "
  >
    <h2>{{ $t(label) }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    searchParam: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HomeSliderTitle.scss';
</style>
