<template>
  <div class="reviews">
    <h3 v-if="reviews.length === 0" class="text-4xl text-center font-bold">
      尚無留言評論
    </h3>
    <ul v-else>
      <li v-for="review in reviews" :key="review.id">
        <div class="flex justify-between items-center">
          <div class="flex justify-start items-center">
            <div class="avatar">
              <img
                v-if="review.author_details.avatar_path"
                :src="getAvatarImage(review.author_details.avatar_path)"
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
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
  },
  methods: {
    getAvatarImage(path) {
      if (path.startsWith('/http') || path.startsWith('http'))
        return `https:${path.split(':')[1]}`
      return `${this.profilePic}${path}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import './ReviewList.scss';
</style>
