<template>
  <div class="app-container">
    <AppHeader />
    <div class="app-content">
      <transition name="fadeIn">
        <Nuxt />
      </transition>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: { AppHeader, AppFooter },
  head() {
    return {
      titleTemplate: '%s - TMDB',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('metaGlobalDescription'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.app-container {
  max-width: 2000px;
  width: 100%;
  margin: auto;
  @apply flex justify-start items-start flex-col min-h-screen;
}
.app-content {
  width: 100%;
  @apply flex-1;
}
</style>
