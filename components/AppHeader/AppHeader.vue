<template>
  <header class="header">
    <div class="header-left">
      <nuxt-link to="/" class="logo">
        <div class="wrap"></div>
      </nuxt-link>
      <ul class="menu">
        <li v-for="list in menu" :key="list.name">
          <nuxt-link :to="{ name: list.name }" class="px-3 text-3xl">
            <span>{{ list.label }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import MENU_LIST from '@/data/menu-list.json'

export default {
  data() {
    return {
      menu: MENU_LIST.menu,
    }
  },
}
</script>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
