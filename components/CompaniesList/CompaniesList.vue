<template>
  <ul class="companies">
    <li v-for="company in companies" :key="company.id" class="logo-list">
      <img
        v-if="company.logo_path"
        :src="`${componyPic}${company.logo_path}`"
        :alt="company.name"
      />
      <span v-else>{{ company.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array,
      required: true,
    },
    componyPic: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './CompaniesList.scss';
</style>
