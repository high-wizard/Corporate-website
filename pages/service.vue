<template lang="pug">
  div
    HeroView(headingText='SERVICE' headingSubText='実績紹介' imgSrc='/image/service.jpg')
    .wrapper
      section.services
        Heading(type='secondary' text='Webサイト 開発・運用' centering='true')
        .serviceItemContainer
          ServiceItem(title='大手小売業ECサイト開発' introduction='200画面規模の大型サイトです。' client='小売業')
          ServiceItem(title='大手小売業ECサイト開発' introduction='200画面規模の大型サイトです。' client='小売業')
          ServiceItem(title='大手小売業ECサイト開発' introduction='200画面規模の大型サイトです。' client='小売業')
          ServiceItem(title='大手小売業ECサイト開発' introduction='200画面規模の大型サイトです。' client='小売業')
      section.services
        Heading(type='secondary' text='複合システム・その他' centering='true')
</template>

<script>
import HeroView from '@/components/organisms/HeroView'
import Heading from '@/components/molecules/Heading'
import ServiceItem from '@/components/organisms/ServiceItem'

export default {
  components: {
    HeroView,
    Heading,
    ServiceItem
  },
  data: () => ({
    webServiceList: [],
    otherServiceList: []
  })
}
</script>

<style lang="sass" scoped>
.wrapper
  padding: 0 20px
  color: #040E17
  max-width: 1040px
  width: calc(100% - 40px)
  margin: 0 auto

.services
  margin: 0 -20px
  &:not(:first-of-type)
    margin-top: 180px

.serviceItemContainer
  display: flex
  flex-wrap: wrap
  justify-content: flex-start
  margin: 0 auto
  width: 100%
  max-width: 1080px
  @media screen and (max-width: 1079px)
    max-width: 720px
  @media screen and (max-width: 719px)
    max-width: 320px
</style>
