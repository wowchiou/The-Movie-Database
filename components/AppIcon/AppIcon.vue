<template>
  <span class="material-icons" data-test="icon">{{ icon }}</span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './AppIcon.scss';
</style>
