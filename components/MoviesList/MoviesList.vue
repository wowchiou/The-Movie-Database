<template>
  <ul
    v-infinite-scroll="loadMovies"
    infinite-scroll-disabled="busy"
    :infinite-scroll-distance="getInfinityScrollHeight()"
    class="movie-list"
  >
    <li
      v-for="(movie, movieIndex) in movies"
      :key="`${movie.id}${movieIndex}`"
      class="movie-item"
    >
      <nuxt-link :to="{ name: 'Movie-id', params: { id: movie.id } }">
        <img :src="`${picUrl}${movie.poster_path}`" :alt="movie.title" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
    picUrl: {
      type: String,
      required: true,
    },
    loadMovies: {
      type: Function,
      required: true,
    },
    busy: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    getInfinityScrollHeight() {
      if (process.browser) {
        return window.innerHeight * 0.5
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './MoviesList.scss';
</style>
