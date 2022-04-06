<template>
  <div class="search">
    <div class="search-wrap">
      <SearchBar :searchHandler="searchHandler" />
    </div>
    <h3 v-if="!hasSearchMovies" class="text-4xl text-center p-20">
      {{ $t('noSearchMovie') }}
    </h3>
    <MoviesList
      v-else
      :movies="movies"
      :busy="busy"
      :loadMovies="loadMovies"
      :picUrl="$store.state.images.post"
    />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList'
import SearchBar from '@/components/SearchBar'

export default {
  components: { SearchBar, MoviesList },
  head() {
    return {
      title: `${this.$t('searchButtonText')}${this.$route.query.searchText}`,
    }
  },
  async asyncData({ app, store, query, error }) {
    const i18n = app.i18n
    try {
      store.commit('SET_LANG', i18n.locale)
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
    } catch (err) {
      error({ statusCode: 500, message: i18n.t('500Text') })
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
  computed: {
    hasSearchMovies() {
      return this.movies.length !== 0
    },
    showAllOfMovie() {
      return this.moviePage === this.movieTotalPage
    },
  },
  methods: {
    async loadMovies() {
      this.busy = true
      if (this.showAllOfMovie || !this.hasSearchMovies) {
        return (this.busy = false)
      }

      try {
        const moviesResults = await this.getSearchMovies({
          searchText: this.$route.query.searchText,
          page: this.moviePage + 1,
        })
        this.moviePage += 1
        this.movies.push(...moviesResults)
        this.busy = false
      } catch (err) {
        this.busy = false
        this.redirectErrorPage({ statusCode: 500, message: this.$t('500Text') })
      }
    },

    async searchHandler(searchText) {
      if (!searchText) return

      try {
        const searchResults = await this.getSearchMovies({
          searchText,
          page: 1,
        })
        this.movies = searchResults
        this.moviePage = 1
        this.movieTotalPage = searchResults.total_pages
        this.$router.push(
          this.localePath({
            name: 'Search',
            query: { searchText },
          })
        )
      } catch (error) {
        this.redirectErrorPage({ statusCode: 500, message: this.$t('500Text') })
      }
    },

    async getSearchMovies({ searchText, page }) {
      const moviesResults = await this.$store.dispatch('getSearchMovie', {
        searchText,
        page,
      })
      return moviesResults.results.filter((itm) => itm.poster_path)
    },

    redirectErrorPage({ statusCode, message }) {
      this.$router.push(
        this.localePath({
          name: 'error',
          params: { statusCode, message },
        })
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Search.scss';
</style>
