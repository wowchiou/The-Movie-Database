<template>
  <form class="search-bar" @submit.prevent="searchHandler(searchText)">
    <input type="text" v-model="searchText" />
    <button class="bg-gradient">搜尋</button>
  </form>
</template>

<script>
export default {
  props: {
    searchHandler: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      searchText: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './SearchBar.scss';
</style>
