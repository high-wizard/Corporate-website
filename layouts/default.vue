<template lang="pug">
  .wrapper
    Header
    main.main
      nuxt
    Footer
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="sass">
.wrapper
  font-family: 'Montserrat', 'Noto Sans JP', san-serif
.main
  margin-top: 80px
</style>
