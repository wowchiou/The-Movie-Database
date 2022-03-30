<template>
  <div class="_id">
    <div
      class="banner"
      :style="{
        backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}
        )`,
      }"
    ></div>
    <div class="main">
      <div class="info">
        <div class="video-post">
          <img
            :src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail.poster_path}`"
            alt="detail.name"
          />
        </div>
        <div class="flex-1 text-3xl pt-5 overflow-hidden">
          <h1 class="font-bold text-5xl">
            {{ detail.name }}
            <span class="text-3xl text-gray-300">
              {{ detail.first_air_date.split('-')[0] }}
            </span>
          </h1>
          <div class="mt-5 flex justify-start items-center flex-wrap">
            <ul class="type">
              <li
                v-for="genre in detail.genres"
                :key="genre.id"
                class="type-list"
              >
                {{ genre.name }}
              </li>
              <li>
                <p class="text-2xl text-gray-300">
                  <span>{{ detail.number_of_seasons }} seasons</span>．<span
                    >{{ detail.number_of_episodes }} episodes</span
                  >．<span>{{ detail.episode_run_time[0] }}m</span>
                </p>
              </li>
            </ul>
          </div>
          <p class="mt-5 leading-normal" v-html="detail.overview.trim()"></p>

          <ul class="networks">
            <li
              v-for="network in detail.networks"
              :key="network.id"
              class="logo-list"
            >
              <img
                :src="`https://www.themoviedb.org/t/p/original/${network.logo_path}`"
                :alt="network.name"
              />
            </li>
          </ul>

          <CastSlider class="mt-5 w-full" :casts="casts" />
        </div>
      </div>
    </div>
    <div class="season">
      <SeasonSlider class="relative z-10" :seasons="detail.seasons" />
      <span
        :style="{
          backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}
        )`,
        }"
      ></span>
    </div>
    <div>
      <div v-if="reviews.length === 0" class="text-center text-4xl font-bold">
        無留言評論
      </div>
      <div v-else>
        <ul class="m-auto max-w-screen-lg">
          <li v-for="review in reviews" :key="review.id">
            <div class="flex justify-start items-center">
              <div class="avatar">
                <img
                  v-if="review.author_details.avatar_path"
                  :src="`https://www.themoviedb.org/t/p/w45_and_h45_face/${review.author_details.avatar_path}`"
                  :alt="review.author"
                />
                <img
                  v-else
                  src="~@/assets/images/logo-primary-short.svg"
                  alt="logo"
                />
              </div>
              <p>{{ review.author }}</p>
            </div>
            <p>{{ review.author_details.rating * 10 }}%</p>
            <p>{{ review.created_at }}</p>
            <p>{{ review.updated_at }}</p>
            <p>{{ review.content }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-screen"></div>
  </div>
</template>

<script>
import http from '@/services'
import CastSlider from '@/components/CastSlider'
import SeasonSlider from '@/components/SeasonSlider'

export default {
  components: { CastSlider, SeasonSlider },
  async asyncData({ route, params }) {
    const detailResult = await http.getDetailTV(params.id)
    const castResult = await http.getCastTV(params.id)
    const reviewResult = await http.getReviewTV(params.id, 1)
    // const review = await http.getReview(params.id)
    // console.log(review.data)
    // console.log(detailResult.data)
    // console.log(castResult.data)
    console.log(reviewResult.data)
    return {
      movieID: params.id,
      detail: detailResult.data,
      casts: castResult.data.cast,
      reviews: reviewResult.data.results,
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './_id.scss';
</style>
