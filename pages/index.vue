<template>
  <div class="home">
    <VideoSlider label="現正熱映" videoType="Movie" :video="video" />
  </div>
</template>

<script>
import http from '@/services'
import VideoSlider from '@/components/VideoSlider'

export default {
  components: { VideoSlider },
  asyncData() {
    return http.getNowPlayingMovie(1).then((res) => {
      console.log(res.data)
      return {
        video: res.data.results,
      }
    })
  },
  data() {
    return {
      video: [],
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
