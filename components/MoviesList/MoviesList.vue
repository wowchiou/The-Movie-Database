<template>
  <div>
    <transition-group
      tag="ul"
      name="slideUp"
      v-infinite-scroll="loadMovies"
      infinite-scroll-disabled="busy"
      :infinite-scroll-distance="getInfinityScrollHeight()"
      class="movie-list"
    >
      <li
        v-for="(movie, movieIndex) in movies"
        :key="`${movie.id}${movieIndex}`"
        class="movie-item"
        data-test="movie-item"
      >
        <nuxt-link
          :to="localePath({ name: 'Movie-id', params: { id: movie.id } })"
          data-test="movie-link"
        >
          <img
            data-test="movie-poster"
            :src="`${picUrl}${movie.poster_path}`"
            :alt="movie.title"
          />
        </nuxt-link>
      </li>
    </transition-group>
    <MoviesListLoader v-if="busy" />
  </div>
</template>

<script>
import MoviesListLoader from '@/components/MoviesListLoader'

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
  components: { MoviesListLoader },
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
