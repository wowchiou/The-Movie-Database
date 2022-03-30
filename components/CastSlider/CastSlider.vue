<template>
  <div class="slider" v-swiper:mySwiper="swiperOption">
    <ul class="cast-list swiper-wrapper">
      <li
        v-for="cast in profiles"
        :key="cast.id"
        class="cast-item swiper-slide"
      >
        <div class="cast-image">
          <img
            class="swiper-lazy"
            :data-src="`https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`"
            :alt="cast.name"
          />
          <div class="swiper-lazy-preloader"></div>
        </div>
        <div class="text-2xl mt-2 text-left">
          <p class="text-gray-100">{{ cast.name }}</p>
          <p class="text-gray-400">
            <span v-for="role in cast.roles" :key="role.credit_id">
              {{ role.character }}
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    casts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
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
  computed: {
    profiles() {
      return this.casts.filter((cast) => cast.profile_path)
    },
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './CastSlider.scss';
</style>
