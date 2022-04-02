<template>
  <div class="slider w-full" v-swiper:mySwiper="swiperOption">
    <ul class="swiper-wrapper">
      <li v-for="season in seasons" :key="season.id" class="swiper-slide">
        <div class="slider-image">
          <img
            v-if="!season.poster_path"
            class="logo-image"
            src="~@/assets/images/logo-primary-full.svg"
            alt="logo"
          />
          <img
            v-else
            :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${season.poster_path}`"
            :alt="season.name"
          />
        </div>
        <p class="text-3xl text-gray-400 text-center mt-2">
          {{ season.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    seasons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
      },
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './SeasonSlider.scss';
</style>
