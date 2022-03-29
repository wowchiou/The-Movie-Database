<template>
  <div class="_id">
    <h1>{{ movieID }} Page</h1>
  </div>
</template>

<script>
export default {
  components: {},
  asyncData({ params }) {
    return {
      movieID: params.id,
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
