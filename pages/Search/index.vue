<template>
  <div class="search">
    <HomeSearchBar />
    <MoviesList
      :movies="movies"
      :busy="busy"
      :loadMovies="loadMovies"
      :picUrl="$store.state.images.post"
    />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList'
import HomeSearchBar from '@/components/HomeSearchBar'

export default {
  components: { HomeSearchBar, MoviesList },
  async asyncData({ store, query }) {
    const searchText = encodeURIComponent(query.searchText)
    const searchResult = await store.dispatch('getSearchMovie', {
      searchText,
      page: 1,
    })
    return {
      movies: searchResult.results.filter((itm) => itm.poster_path),
      moviePage: 1,
      movieTotalPage: searchResult.total_pages,
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
      if (this.moviePage === this.movieTotalPage || this.movies.length === 0) {
        return (this.busy = false)
      }
      console.log(this.$route.query.searchText)
      let moviesResults = await this.$store.dispatch('getSearchMovie', {
        searchText: this.$route.query.searchText,
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
@import './Search.scss';
</style>
