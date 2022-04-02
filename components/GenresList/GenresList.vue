<template>
  <ul class="type">
    <li v-for="genre in genres" :key="genre.id" class="type-list">
      {{ genre.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './GenresList.scss';
</style>
