<template>
  <ul class="tabs">
    <li v-for="tab in tabs" :key="tab.search">
      <nuxt-link
        :to="{
          name: tab.name,
          params: { search: tab.search },
        }"
      >
        <span>{{ tab.label }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './OverviewSearchTabs.scss';
</style>
