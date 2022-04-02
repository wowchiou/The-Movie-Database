<template>
  <div class="_id">
    <div
      class="banner"
      :style="{
        backgroundImage: `url(
          ${images.screen}${detail.backdrop_path}
        )`,
      }"
    ></div>

    <div class="main">
      <div class="info">
        <div class="video-post">
          <img
            :src="`${images.post}${detail.poster_path}`"
            :alt="detail.title"
          />
        </div>
        <div class="flex-1 text-3xl overflow-hidden">
          <div class="relative flex justify-start items-start pb-5">
            <div class="flex-1 mr-10">
              <h1 class="font-bold text-5xl">
                {{ detail.title }}
                <span class="text-3xl text-gray-300">
                  {{ detail.release_date.split('-')[0] }}
                </span>
              </h1>
              <GenresList class="mt-5" :genres="detail.genres" />
            </div>
            <div class="vote-average">
              <span class="vote-average">{{ tweenVoteAverage.toFixed(0) }}</span
              >%
            </div>
            <span
              class="vote-line"
              :style="{
                width: `${tweenVoteAverage.toFixed(0)}%`,
              }"
            ></span>
          </div>
          <p class="mt-5 leading-normal" v-html="detail.overview.trim()"></p>
          <CompaniesList
            v-if="detail.production_companies.length > 0"
            :companies="detail.production_companies"
            :componyPic="images.origin"
          />
          <CastSlider class="mt-5 w-full" :casts="casts" />
          <ReviewList :reviews="reviews" :profilePic="images.profile" />
        </div>
      </div>
    </div>

    <div v-if="detail.backdrop_path" class="pic-bar">
      <div
        :style="{
          backgroundImage: `url(
          ${images.screen}${detail.backdrop_path}
        )`,
        }"
      ></div>
    </div>

    <RecommendationsCard
      v-if="recommendations.length > 0"
      :recommendations="recommendations"
      :picURL="images.post"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import http from '@/services'
import gsap from 'gsap'
import GenresList from '@/components/GenresList'
import CompaniesList from '@/components/CompaniesList'
import CastSlider from '@/components/CastSlider'
import ReviewList from '@/components/ReviewList'
import RecommendationsCard from '@/components/RecommendationsCard'

export default {
  components: {
    GenresList,
    CompaniesList,
    CastSlider,
    ReviewList,
    RecommendationsCard,
  },
  head() {
    return {
      title: this.detail.title,
    }
  },
  async asyncData({ params }) {
    try {
      const movieID = params.id
      const detailResult = await http.getDetailMovie(movieID)
      const castResult = await http.getCastMovie(movieID)
      const reviewResult = await http.getReviewMovie(movieID, 1)
      const recommendations = await http.getRecommendations(movieID)

      return {
        detail: detailResult.data,
        casts: castResult.data.cast,
        reviews: reviewResult.data.results,
        recommendations: recommendations.data.results.filter(
          (itm) => itm.poster_path
        ),
      }
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      voteAverage: 0,
      tweenVoteAverage: 0,
    }
  },
  computed: {
    ...mapState(['images']),
  },
  watch: {
    voteAverage(newValue) {
      gsap.to(this.$data, {
        duration: 1,
        ease: 'circ.out',
        tweenVoteAverage: newValue,
      })
    },
  },
  mounted() {
    this.voteAverage = this.detail.vote_average * 10
  },
}
</script>

<style lang="scss" scoped>
@import './_id.scss';
</style>
