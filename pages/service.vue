<template lang="pug">
  div
    HeroView(headingText='SERVICE' headingSubText='実績紹介' imgSrc='/image/service.jpg')
    .wrapper
      section.services
        Heading(type='secondary' text='Webサイト 開発・運用' centering='true')
      section.services
        Heading(type='secondary' text='複合システム・その他' centering='true')
</template>

<script>
import HeroView from '@/components/organisms/HeroView'
import Heading from '@/components/molecules/Heading'

export default {
  components: {
    HeroView,
    Heading
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  padding: 0 20px
  color: #040E17

.services:not(:first-of-type)
  margin-top: 180px
</style>
