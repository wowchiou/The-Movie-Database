<template>
  <div class="home">
    <div
      class="banner"
      :style="{
        backgroundImage: `url(${$store.state.images.screen}${nowPlayingMovie[0].poster_path})`,
      }"
    >
      <div class="relative z-10 w-full flex justify-center items-center">
        <div class="search-wrap">
          <p class="text-4xl font-bold">{{ $t('homeSearchText') }}</p>
          <SearchBar :searchHandler="searchHandler" />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div>
        <HomeSliderTitle label="navNowPlaying" type="now" class="mb-5" />
        <VideoSlider videoType="Movie" :video="nowPlayingMovie" />
      </div>
      <div class="mt-10">
        <HomeSliderTitle label="navTop" type="top" class="mb-5" />
        <VideoSlider videoType="Movie" :video="topMovie" />
      </div>
      <div class="mt-10">
        <HomeSliderTitle label="navPopular" type="popular" class="mb-5" />
        <VideoSlider videoType="Movie" :video="popularMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import HomeSliderTitle from '@/components/HomeSliderTitle'
import VideoSlider from '@/components/VideoSlider'

export default {
  components: { SearchBar, HomeSliderTitle, VideoSlider },
  head() {
    return { title: this.$t('metaTitleIndex') }
  },
  async asyncData({ app, store }) {
    store.commit('SET_LANG', app.localePath('index').split('/')[1] || 'zh')
    try {
      const nowPlayingMovie = await store.dispatch('fetchNowPlayingMovie', 1)
      const topMovie = await store.dispatch('fetchTopMovie', 1)
      const popularMovie = await store.dispatch('fetchPopularMovie', 1)

      return {
        nowPlayingMovie: nowPlayingMovie.results,
        topMovie: topMovie.results,
        popularMovie: popularMovie.results,
      }
    } catch (error) {
      console.log(error)
    }
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
@import './Home.scss';
</style>
