<template>
  <div class="locale-switcher" :class="{ active: localeActive }">
    <div class="locale-current" @click="setLocaleActive(true)">
      {{ lang }}
    </div>
    <div class="locale-list text-right">
      <div class="pr-5 inline-block" @click="setLocaleActive(false)">
        <AppIcon icon="highlight_off" class="cursor-pointer" />
      </div>
      <nuxt-link
        v-for="locale in locales"
        :key="locale.name"
        :to="switchLocalePath(locale.value)"
        class="w-full"
      >
        <div class="py-5 text-center" @click="changeLocale(locale.value)">
          {{ locale.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import locales from '@/locales'
import AppIcon from '@/components/AppIcon'

export default {
  components: { AppIcon },
  data() {
    return {
      locales,
      localeActive: false,
    }
  },
  computed: {
    ...mapState(['lang']),
  },
  methods: {
    setLocaleActive(active) {
      this.localeActive = active
    },

    changeLocale(locale) {
      this.$store.commit('SET_LANG', locale)
      this.setLocaleActive(false)
      // localStorage.setItem(LOCALE_LANGUAGE, JSON.stringify(locale))
    },
  },
}
</script>

<style lang="scss" scoped>
@import './LocaleSwitcher.scss';
</style>
