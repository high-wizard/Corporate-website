<template lang="pug">
  div
    HeroView(headingText='ARTICLE' headingSubText='ブログ' imgSrc='/image/contact.jpg')
    .wrapper
      ArticleItem(v-for='(s, key, index) in articleItemList' :date='s[0]' :title='s[1]' :key='index')
</template>

<script>
import HeroView from '@/components/organisms/HeroView'
import ArticleItem from '@/components/organisms/ArticleItem'
import Heading from '@/components/molecules/Heading'

export default {
  components: {
    HeroView,
    Heading,
    ArticleItem
  },
  head() {
    const pageTitle = 'ブログ | 株式会社ハイウィザード'
    return {
      title: pageTitle,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: pageTitle
        }
      ]
    }
  },
  data: () => ({
    // 投稿日,記事名 の順で記載
    articleItemList: [['20200401', '企業ブログを開設しました！']]
  })
}
</script>

<style lang="sass" scoped>
.wrapper
  padding: 0 20px
  text-align: center
  color: #040E17
</style>
