<template lang="pug">
  div
    HeroView(headingText='COMPANY' headingSubText='会社案内' imgSrc='/image/company.jpg')
    section.companyPhilosophy
      Heading(type='secondary' text='企業理念')
      p.english by good person<br>
        | more develop<br>
        | motto tanoshiku
      p.japanese 弊社のよき開発者による事業活動によって<br>
        | もっと社会が発展し、もっと楽しくなるように、<br>
        | 我々は努めてまいります。
    section.companyOverview
      Heading(type='secondary' text='会社概要' :centering='true')
      CompanyOverview.companyOverviewTable
    section.access
      Heading(type='secondary' text='アクセス' :centering='true')

</template>

<script>
import HeroView from '@/components/organisms/HeroView'
import Heading from '@/components/molecules/Heading'
import CompanyOverview from '@/components/organisms/CompanyOverview'

export default {
  components: {
    HeroView,
    Heading,
    CompanyOverview
  }
}
</script>

<style lang="sass" scoped>
.companyPhilosophy
  padding: 0 20px
  max-width: 1040px
  width: calc(100% - 40px)
  margin: 0 auto
  .english
    margin-top: 60px
    font-weight: bold
    color: #144877
    font-size: 18px
    line-height: 1.6
  .japanese
    margin-top: 30px
    color: #686e73
    font-size: 14px
    line-height: 1.7
    @media screen and (max-width: 349px)
      font-size: 12px

.companyOverview
  margin-top: 120px
  padding: 0 20px
  .companyOverviewTable
    margin: 60px auto 0

.access
  margin-top: 120px
</style>
