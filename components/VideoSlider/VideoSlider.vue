<template>
  <div>
    <h2 class="pl-8 text-4xl font-bold">{{ label }}</h2>
    <div class="slider" v-swiper:mySwiper="swiperOption">
      <ul class="swiper-wrapper">
        <li
          v-for="list in video"
          :key="list.id"
          class="video-list swiper-slide"
        >
          <nuxt-link :to="{ name: `${videoType}-id`, params: { id: list.id } }">
            <div class="video-image">
              <img
                :data-src="`${imagesURL}${list.poster_path}`"
                :alt="list.title"
                class="swiper-lazy"
              />
              <div class="swiper-lazy-preloader"></div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <div class="swiper-button-prev">
        <AppIcon icon="chevron_left" />
      </div>
      <div class="swiper-button-next">
        <AppIcon icon="chevron_right" />
      </div>
    </div>
  </div>
</template>

<script>
import IMAGES from '@/data/images-src.json'
import AppIcon from '@/components/AppIcon'

export default {
  components: { AppIcon },
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
      imagesURL: IMAGES.post,
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        },
        preloadImages: true,
        lazy: {
          loadOnTransitionStart: true,
          checkInView: true,
          loadPrevNextAmount: 7,
          loadPrevNext: true,
        },
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
