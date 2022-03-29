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
