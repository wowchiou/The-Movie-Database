<template>
  <nuxt-link :to="{ name: 'Overview-search', params: { search: type } }">
    <h2 class="pl-8 text-4xl font-bold">{{ label }}</h2>
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
