<template>
  <div class="recommendations">
    <h2 class="text-4xl font-bold">{{ $t('recommendedTitle') }}</h2>
    <ul class="flex justify-start items-start flex-wrap mt-10">
      <li v-for="recommendation in recommendations" :key="recommendation.id">
        <nuxt-link
          :to="
            localePath({ name: 'Movie-id', params: { id: recommendation.id } })
          "
        >
          <div class="video-post">
            <img
              :src="`${picURL}${recommendation.poster_path}`"
              :alt="recommendation.title"
            />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommendations: {
      type: Array,
      required: true,
    },
    picURL: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './RecommendationsCard.scss';
</style>
