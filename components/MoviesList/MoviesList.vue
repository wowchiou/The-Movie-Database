<template>
  <div>
    <transition-group
      tag="ul"
      name="slideLeft"
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
    </transition-group>
    <div v-if="busy" class="my-20 flex justify-self-center items-center">
      <div class="m-auto w-20">
        <img
          class="movie-loader"
          src="~@/assets/images/logo-primary-full.svg"
          alt="logo"
        />
      </div>
    </div>
  </div>
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
