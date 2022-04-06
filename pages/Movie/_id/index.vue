<template>
  <div class="_id">
    <MovieBackGroundBanner class="banner" :backGroundImage="bannerBGImage" />

    <div class="main">
      <div class="info">
        <MoviePoster :postURL="postURL" :postAlt="detail.title" />
        <div class="flex-1 text-3xl overflow-hidden">
          <div class="relative flex justify-start items-start pb-5">
            <div class="flex-1 mr-10">
              <h1 class="font-bold text-5xl">
                {{ detail.title }}
                <span class="text-3xl text-gray-300">
                  {{ movieYear }}
                </span>
              </h1>
              <GenresList class="mt-5" :genres="detail.genres" />
            </div>
            <div class="vote-average">
              <span>{{ tweenVoteAverage.toFixed(0) }}</span
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
      <MovieBackGroundBanner :backGroundImage="bannerBGImage" />
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
import MovieBackGroundBanner from '@/components/MovieBackGroundBanner'
import MoviePoster from '@/components/MoviePoster'
import GenresList from '@/components/GenresList'
import CompaniesList from '@/components/CompaniesList'
import CastSlider from '@/components/CastSlider'
import ReviewList from '@/components/ReviewList'
import RecommendationsCard from '@/components/RecommendationsCard'

export default {
  components: {
    MovieBackGroundBanner,
    MoviePoster,
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
  async asyncData({ app, store, params, error }) {
    const i18n = app.i18n
    const lang = i18n.locale
    const movieID = params.id
    store.commit('SET_LANG', lang)
    try {
      const [detailResult, castResult, reviewResult, recommendations] =
        await Promise.all([
          http.getDetailMovie(movieID, lang),
          http.getCastMovie(movieID, lang),
          http.getReviewMovie(movieID, 1, lang),
          http.getRecommendations(movieID, lang),
        ])
      return {
        detail: detailResult.data,
        casts: castResult.data.cast,
        reviews: reviewResult.data.results,
        recommendations: recommendations.data.results.filter(
          (itm) => itm.poster_path
        ),
      }
    } catch (err) {
      error({
        statusCode: 503,
        message: `${i18n.t('503movieText1')} ${movieID} ${i18n.t(
          '503movieText2'
        )}`,
      })
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
    bannerBGImage() {
      return `${this.images.screen}${this.detail.backdrop_path}`
    },
    postURL() {
      return `${this.images.post}${this.detail.poster_path}`
    },
    movieYear() {
      return this.detail.release_date.split('-')[0]
    },
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
