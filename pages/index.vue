<template>
  <div class="home">
    <HomeBanner :bannerPic="bannerPic">
      <div class="search-wrap">
        <p class="text-4xl font-bold">{{ $t('homeSearchText') }}</p>
        <SearchBar :searchHandler="searchHandler" />
      </div>
    </HomeBanner>
    <div class="mt-10">
      <div
        v-for="sliderData in movieSliders"
        :key="sliderData.label"
        data-test="movie-slider"
        class="mt-10"
      >
        <HomeSliderTitle
          :label="sliderData.label"
          :searchParam="sliderData.searchParam"
          class="mb-5"
        />
        <VideoSlider
          videoType="Movie"
          :movies="sliderData.movies"
          :imageURL="imagesURL.post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import HomeBanner from '@/components/HomeBanner'
import HomeSliderTitle from '@/components/HomeSliderTitle'
import VideoSlider from '@/components/VideoSlider'

export default {
  components: { HomeBanner, SearchBar, HomeSliderTitle, VideoSlider },
  head() {
    return { title: this.$t('metaTitleIndex') }
  },
  async asyncData({ app, store, error }) {
    const i18n = app.i18n
    store.commit('SET_LANG', i18n.locale)
    try {
      const [nowPlayingMovie, topMovie, popularMovie] = await store.dispatch(
        'getHomeMovieSliders'
      )
      return {
        movieSliders: [
          {
            label: 'navNowPlaying',
            searchParam: 'now',
            movies: nowPlayingMovie.results,
          },
          { label: 'navTop', searchParam: 'top', movies: topMovie.results },
          {
            label: 'navPopular',
            searchParam: 'popular',
            movies: popularMovie.results,
          },
        ],
      }
    } catch (err) {
      error({ statusCode: 500, message: i18n.t('500Text') })
    }
  },
  computed: {
    imagesURL() {
      return this.$store.state.images
    },
    bannerPic() {
      const [nowPlayingMovies] = this.movieSliders
      const [firstNowPayingMovie] = nowPlayingMovies.movies
      return this.imagesURL.screen + firstNowPayingMovie.backdrop_path
    },
  },
  methods: {
    searchHandler(searchText) {
      if (!searchText) return
      this.$router.push(
        this.localePath({
          name: 'Search',
          query: { searchText },
        })
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
