<template>
  <div class="home">
    <div
      class="banner"
      :style="{
        backgroundImage: `url(${imagesURL}${nowPlayingMovie[0].poster_path})`,
      }"
    >
      <HomeSearchBar class="relative z-10" />
    </div>
    <div class="mt-10">
      <VideoSlider
        label="現正熱映電影"
        videoType="Movie"
        :video="nowPlayingMovie"
      />
      <VideoSlider
        class="mt-10"
        label="最高評分電影"
        videoType="Movie"
        :video="topMovie"
      />
      <!-- <VideoSlider
        class="mt-10"
        label="現正熱映影劇"
        videoType="Tv"
        :video="topTV"
      /> -->
      <VideoSlider
        class="mt-10"
        label="最高評分影劇"
        videoType="Tv"
        :video="topTV"
      />
    </div>
  </div>
</template>

<script>
import http from '@/services'
import IMAGES from '@/data/images-src.json'
import HomeSearchBar from '@/components/HomeSearchBar'
import VideoSlider from '@/components/VideoSlider'

export default {
  components: { HomeSearchBar, VideoSlider },
  async asyncData() {
    const nowPlayingMovie = await http.getNowPlayingMovie(1)
    const topMovie = await http.getTopMovie(1)
    // const nowPlayingTV = await http.getNowPlayingTV(1)
    const topTV = await http.getTopTV(1)
    return {
      nowPlayingMovie: nowPlayingMovie.data.results,
      topMovie: topMovie.data.results,
      // nowPlayingTV: nowPlayingTV.data.results,
      topTV: topTV.data.results,
    }
  },
  data() {
    return {
      imagesURL: IMAGES.screen,
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
