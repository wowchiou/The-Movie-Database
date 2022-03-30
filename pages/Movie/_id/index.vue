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
            alt="detail.title"
          />
        </div>

        <div class="flex-1 text-3xl overflow-hidden">
          <div class="flex justify-start items-start">
            <div class="flex-1 mr-10">
              <h1 class="font-bold text-5xl">
                {{ detail.title }}
                <span class="text-3xl text-gray-300">
                  {{ detail.release_date.split('-')[0] }}
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
                </ul>
              </div>
            </div>
            <div class="text-5xl font-bold">
              <span class="vote-average">{{ detail.vote_average * 10 }}</span
              >%
            </div>
          </div>

          <p class="mt-5 leading-normal" v-html="detail.overview.trim()"></p>
          <ul class="companies">
            <li
              v-for="company in detail.production_companies"
              :key="company.id"
              class="logo-list"
            >
              <img
                v-if="company.logo_path"
                :src="`https://www.themoviedb.org/t/p/original/${company.logo_path}`"
                :alt="company.name"
              />
              <span v-else>{{ company.name }}</span>
            </li>
          </ul>

          <CastSlider class="mt-5 w-full" :casts="casts" />
        </div>
      </div>
    </div>

    <div class="reviews">
      <div v-if="reviews.length === 0" class="text-center text-4xl font-bold">
        無留言評論
      </div>
      <div v-else>
        <ul class="m-auto max-w-screen-md">
          <li v-for="review in reviews" :key="review.id">
            <div class="flex justify-between items-center">
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
                <div class="ml-5">
                  <p class="text-4xl font-bold text-gray-100">
                    {{ review.author }}
                  </p>
                  <p class="text-2xl text-gray-400">{{ review.created_at }}</p>
                </div>
              </div>
              <div class="vote-ball bg-gradient">
                <p class="text-4xl">{{ review.author_details.rating * 10 }}</p>
              </div>
            </div>
            <p class="text-3xl leading-normal mt-5" v-html="review.content"></p>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="pic-bar"
      :style="{
        backgroundImage: `url(
          https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detail.backdrop_path}
        )`,
      }"
    ></div>
  </div>
</template>

<script>
import http from '@/services'
import CastSlider from '@/components/CastSlider'

export default {
  components: { CastSlider },
  async asyncData({ params }) {
    const detailResult = await http.getDetailMovie(params.id)
    const castResult = await http.getCastMovie(params.id)
    const reviewResult = await http.getReviewMovie(params.id, 1)
    // const review = await http.getReview(params.id)
    // console.log(review.data)
    console.log(detailResult.data)
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
