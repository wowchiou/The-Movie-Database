<template>
  <div class="app-container">
    <AppHeader />
    <div class="app-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: { AppHeader },
}
</script>

<style lang="scss">
.app-container {
  max-width: 2000px;
  margin: auto;
}
</style>
