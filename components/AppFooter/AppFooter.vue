<template>
  <div class="appFooter">
    <p class="text-center text-2xl">
      {{ $t('footerText1')
      }}<a href="https://www.themoviedb.org/?language=zh-TW" target="_blank"
        >The Movie Database</a
      >{{ $t('footerText2') }}
    </p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import './AppFooter.scss';
</style>
