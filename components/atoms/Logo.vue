<template lang="pug">
  n-link(to='/').logo
    img(v-if='mode === "color"' src='@/assets/Logo.svg')
    img(v-if='mode === "white"' src='@/assets/Logo--white.svg')
</template>

<script>
export default {
  props: {
    mode: {
      type: 'color' | 'white',
      default: 'color',
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  margin: 20px 0
</style>
