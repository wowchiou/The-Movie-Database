<template>
  <div class="error">
    <div class="bg-gray-300/[.5] max-w-screen-md m-auto rounded-md p-10">
      <h1 class="text-5xl font-bold">Oops! Something went wrong!</h1>
      <div class="mt-5 text-3xl text-gray-300">
        <p v-if="statusCode === 404">此頁面不存在</p>
        <p v-else>{{ message }}</p>
      </div>
      <nuxt-link :to="{ name: 'index' }" class="back-home">返回首頁</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'error',
    }
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/index.scss';

.error {
  margin-top: 10rem;
}
.back-home {
  @extend %text-gradient;
  @apply mt-5 text-3xl;
}
</style>
