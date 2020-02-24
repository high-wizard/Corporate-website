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
      iframe.gmap(src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5829.947560754659!2d141.362791!3d43.063019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2979fd36bd67%3A0xd3fc5c3dd6d8da9!2z44CSMDYwLTAwNDEg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65aSn6YCa5p2x77yU5LiB55uuIO-8qO-8te-8p--8oSDvvK_vvKTvvK_vvLLvvKkg77yz77y177yp77y077yl!5e0!3m2!1sja!2sjp!4v1582535864154!5m2!1sja!2sjp' height='400' frameborder='0' style='border:0;' allowfullscreen='')
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
  },
  head() {
    return {
      title: '会社案内 | 株式会社ハイウィザード'
    }
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
  .gmap
    margin-top: 60px
    width: 100%
</style>
