<template>
  <div class="text-white">
    <h2 class="pl-8 text-4xl font-bold">{{ label }}</h2>
    <div class="slider" v-swiper:mySwiper="swiperOption">
      <ul class="mt-5 swiper-wrapper">
        <li
          v-for="list in video"
          :key="list.id"
          class="video-list swiper-slide"
        >
          <nuxt-link :to="{ name: `${videoType}-id`, params: { id: list.id } }">
            <div class="overflow-hidden rounded-md">
              <img
                :src="`${imagesURL}${list.backdrop_path}`"
                :alt="list.title"
              />
            </div>
            <div class="flex justify-start items-start px-2 py-3">
              <div class="mt-1 mr-5">
                <div class="vote-average bg-gradient">
                  {{ list.vote_average }}
                </div>
              </div>
              <div class="flex-1">
                <p class="text-2xl text-gray-300">{{ list.release_date }}</p>
                <p class="video-title">{{ list.title }}</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IMAGES from '@/data/images-src.json'

export default {
  components: {},
  props: {
    videoType: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    video: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      imagesURL: IMAGES.card,
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './VideoSlider.scss';
</style>
