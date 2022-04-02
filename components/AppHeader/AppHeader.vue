<template>
  <header class="header" :class="{ active: headerActive }">
    <div class="header-left">
      <nuxt-link :to="localePath({ name: 'index' })" class="logo">
        <div class="wrap"></div>
      </nuxt-link>
      <OverviewSearchTabs :tabs="overviewTabs" />
    </div>
    <div class="header-right">
      <LocaleSwitcher />
    </div>
  </header>
</template>

<script>
import OVERVIEW_TABS from '@/data/overview-search-tabs.json'
import OverviewSearchTabs from '@/components/OverviewSearchTabs'
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default {
  components: { OverviewSearchTabs, LocaleSwitcher },
  data() {
    return {
      overviewTabs: OVERVIEW_TABS,
      headerActive: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        this.headerActive = true
      } else {
        this.headerActive = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
