<template>
  <div class="search">
    <div class="search-wrap">
      <SearchBar :searchHandler="searchHandler" />
    </div>
    <h3 v-if="movies.length === 0" class="text-4xl text-center p-20">
      抱歉！查無電影資料
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
  async asyncData({ app, store, query }) {
    try {
      store.commit('SET_LANG', app.localePath('index').split('/')[1] || 'zh')
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
    } catch (error) {
      console.log(error)
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
      let moviesResults = await this.$store.dispatch('getSearchMovie', {
        searchText: this.$route.query.searchText,
        page: this.moviePage + 1,
      })
      moviesResults = moviesResults.results.filter((itm) => itm.poster_path)
      this.moviePage += 1
      this.movies.push(...moviesResults)
      this.busy = false
    },

    async searchHandler(searchText) {
      if (!searchText) return
      const searchResult = await this.$store.dispatch('getSearchMovie', {
        searchText,
        page: 1,
      })
      this.$router.push(
        this.localePath({
          name: 'Search',
          query: { searchText },
        })
      )
      this.movies = searchResult.results.filter((itm) => itm.poster_path)
      this.moviePage = 1
      this.movieTotalPage = searchResult.total_pages
    },
  },
}
</script>

<style lang="scss" scoped>
@import './Search.scss';
</style>
