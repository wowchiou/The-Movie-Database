<template>
  <div class="video-post">
    <img :src="postURL" :alt="postAlt" />
  </div>
</template>

<script>
export default {
  props: {
    postURL: { type: String, required: true },
    postAlt: { type: String },
  },
}
</script>

<style lang="scss" scoped>
@import './MoviePoster.scss';
</style>
