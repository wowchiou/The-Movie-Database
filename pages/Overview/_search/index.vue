<template>
  <div class="_search">
    <MoviesList
      :movies="movies"
      :busy="busy"
      :loadMovies="loadMovies"
      :picUrl="$store.state.images.post"
    />
  </div>
</template>

<script>
import OVERVIEW_SEARCH_TABS from '@/data/overview-search-tabs.json'
import MoviesList from '@/components/MoviesList'

export default {
  components: { MoviesList },
  head() {
    const page = OVERVIEW_SEARCH_TABS.find(
      (itm) => this.$route.params.search === itm.search
    )
    return {
      title: `${page.label}電影`,
    }
  },
<<<<<<< HEAD
  async asyncData({ params, store }) {
    const searchType = params.search
    let movies = await store.dispatch('getMovies', { searchType, page: 1 })
    return {
      moviePage: 1,
      movieTotalPage: movies.total_pages,
      movies: movies.results,
=======
  async asyncData({ params, store, error }) {
    try {
      const searchType = params.search
      let movies = await store.dispatch('getMovies', { searchType, page: 1 })
      return {
        moviePage: 1,
        movieTotalPage: movies.total_pages,
        movies: movies.results,
      }
    } catch (err) {
      error({ statusCode: 404 })
>>>>>>> 896e952e1abd935e08c9b370d49e30d47209d422
    }
  },
  data() {
    return {
      movieTotalPage: 0,
      moviePage: 0,
      movies: [],
      busy: false,
    }
  },
  methods: {
    async loadMovies() {
      this.busy = true
      if (this.moviePage === this.movieTotalPage) {
        return (this.busy = false)
      }
      let moviesResults = await this.$store.dispatch('getMovies', {
        searchType: this.$route.params.search,
        page: this.moviePage + 1,
      })
      moviesResults = moviesResults.results.filter((itm) => itm.poster_path)
      this.moviePage += 1
      this.movies.push(...moviesResults)
      this.busy = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './_search.scss';
</style>
