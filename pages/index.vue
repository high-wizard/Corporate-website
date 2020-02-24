<template lang="pug">
  div
    HeroView(topText='株式会社ハイウィザードは札幌市でWeb制作を行うクリエイティブ集団です。<br>ホームページ制作を軸に、システム開発、各種コンテンツ制作などを行っています。' imgSrc='/image/contact.jpg')
    section.companyOverview
      Heading(type='secondary' text='COMPANY' subText='会社概要' :centering='true')
      CompanyOverview.companyOverviewTable
</template>

<script>
import CompanyOverview from '@/components/organisms/CompanyOverview'
import Heading from '@/components/molecules/Heading'
import HeroView from '@/components/organisms/HeroView'

export default {
  components: {
    CompanyOverview,
    Heading,
    HeroView
  }
}
</script>

<style lang="sass" scoped>
.companyOverview
  margin-top: 120px
  .companyOverviewTable
    margin: 60px auto 0
</style>
