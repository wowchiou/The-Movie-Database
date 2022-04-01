<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-1/2">
      <p class="text-4xl font-bold">從這裡開始尋找電影吧...</p>
      <form class="search-bar" @submit.prevent="searchMovie">
        <input type="text" v-model="searchText" />
        <button class="bg-gradient">搜尋</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    searchMovie() {
      if (!this.searchText) return

      if (this.$route.name === 'Search') {
      }

      this.$router.push({
        name: 'Search',
        query: { searchText: this.searchText },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import './HomeSearchBar.scss';
</style>
