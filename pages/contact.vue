<template lang="pug">
  div
    HeroView(headingText='CONTACT' headingSubText='お問い合わせ' imgSrc='/image/contact.jpg')
    .wrapper
      p.greeting 株式会社ハイウィザードについてのご質問などがございましたら、下記の窓口よりお問い合わせ下さい。
      .contactItem
        Heading(type='tertiary' text='TEL')
        p.contactAddress 011-600-2455
      .contactItem
        Heading(type='tertiary' text='MAIL')
        p.contactAddress info@high-wizard.com
</template>

<script>
import HeroView from '@/components/organisms/HeroView'
import Heading from '@/components/molecules/Heading'

export default {
  components: {
    HeroView,
    Heading
  },
  head() {
    const pageTitle = 'お問い合わせ | 株式会社ハイウィザード'
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
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  padding: 0 20px
  text-align: center
  color: #040E17

.greeting
  font-size: 14px
  line-height: 1.5

.contactItem
  margin-top: 60px

.contactAddress
  font-size: 24px
  font-weight: bold
  color: #144877
  margin-top: 20px
  @media screen and (max-width: 330px)
    font-size: 20px
</style>
