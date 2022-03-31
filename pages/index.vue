<template>
  <div class="home">
    <div
      class="banner"
      :style="{
        backgroundImage: `url(${$store.state.images.screen}${nowPlayingMovie[0].poster_path})`,
      }"
    >
      <HomeSearchBar class="relative z-10" />
    </div>
    <div class="mt-10">
      <div>
        <HomeSliderTitle label="現正熱映電影" type="now" class="mb-5" />
        <VideoSlider videoType="Movie" :video="nowPlayingMovie" />
      </div>
      <div class="mt-10">
        <HomeSliderTitle label="高好評電影" type="top" class="mb-5" />
        <VideoSlider videoType="Movie" :video="topMovie" />
      </div>
      <div class="mt-10">
        <HomeSliderTitle label="高人氣電影" type="popular" class="mb-5" />
        <VideoSlider videoType="Movie" :video="popularMovie" />
      </div>
    </div>
  </div>
</template>

<script>
import IMAGES from '@/data/images-src.json'
import HomeSearchBar from '@/components/HomeSearchBar'
import HomeSliderTitle from '@/components/HomeSliderTitle'
import VideoSlider from '@/components/VideoSlider'

export default {
  components: { HomeSearchBar, HomeSliderTitle, VideoSlider },
  async asyncData({ store }) {
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
}
</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
