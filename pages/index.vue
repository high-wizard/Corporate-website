<template lang="pug">
  div
    HeroView(topText='株式会社ハイウィザードは札幌市でWeb制作を行うクリエイティブ集団です。<br>ホームページ制作を軸に、システム開発、各種コンテンツ制作などを行っています。' imgSrc='/image/contact.jpg')
    section.news
      Heading(type='secondary' text='NEWS')
      .container
        HomeNewsItem(title='ホームページ制作受付のお知らせ' introduction='WEBサイト、HP制作業務の請負を開始しております。' link='ご用命の方はこちら' linkTo='/contact')
        HomeNewsItem(title='弊社Webサイトをリニューアル致しました' introduction='株式会社ハイウィザード ホームページにアクセスいただき誠にありがとうございます。皆様がより情報を探しやすくなるようホームページをリニューアル致しました。これからもよろしくお願い申し上げます。' date='2020.2.29')
    section.aboutUs
      .img.--pc
      .contents
        .wroks
          Heading(type='secondary' text='WORKS' subText='私たちにできること')
          .img.--sp
          p.text 弊社は、各分野（フロントエンド、バックエンド、インフラ）に通じた各開発スタッフを擁しており、ホームページ制作をはじめとするWebの分野に大きな強みを持っております。単純なホームページ作成から複雑なWebシステムの構築まで対応可能です。フロントエンド側でアプリの開発に従事した経験者もいるため、スマートフォン向けの、業務用アプリ、ゲームの開発も可能です。
          n-link(to='/service').link 詳しくはこちら
        .developMember
          Heading(type='secondary' text='DEVELOP MEMBER' subText='開発チーム')
          p.text 弊社の開発スタッフは全員がReact又はVueを用いたSPAの実装の経験があります。各自言語は違えど、バックエンドの開発の経験もありますので、小規模〜中規模のWebシステムの開発を効率よく行えます。<br>
            | 開発チームは、マネジメントを行う者と実装を行う者のバランスが良く、最適な技術等の提案を行う事もできますので、案件に適した新しい技術を使ってスピィーディーに開発を進められます。<br>
            | 納品後の保守や追加開発にもしっかりと応じます！
          n-link(to='/contact').link ご依頼はこちら
    section.companyOverview
      Heading(type='secondary' text='COMPANY' subText='会社概要' :centering='true')
      CompanyOverview.companyOverviewTable
</template>

<script>
import CompanyOverview from '@/components/organisms/CompanyOverview'
import Heading from '@/components/molecules/Heading'
import HeroView from '@/components/organisms/HeroView'
import HomeNewsItem from '@/components/organisms/HomeNewsItem'

export default {
  components: {
    CompanyOverview,
    Heading,
    HeroView,
    HomeNewsItem
  }
}
</script>

<style lang="sass" scoped>
.news
  margin: 0 auto
  max-width: 1040px
  padding: 0 20px
  .container
    @media screen and (min-width: 720px)
      display: grid
      grid-gap: 40px
      grid-template-columns: 1fr 1fr


.aboutUs
  margin: 120px auto 0
  max-width: 1040px
  padding: 0 20px
  display: flex
  @media screen and (max-width: 719px)
    display: block
  .img
    background: url('/image/topDecoration.jpg')
    flex-shrink: 0
    margin-right: 60px
    background-size: cover
    background-position: center
    display: none
    @media screen and (min-width: 720px)
      width: 30%
      max-width: 330px
      &.--pc
        display: block
    @media screen and (max-width: 719px)
      width: 100%
      height: 150px
      max-width: unset
      margin-top: 40px
      &.--sp
        display: block
  .text
    margin-top: 40px
    font-size: 14px
    line-height: 1.7
    color: #040e17
  .link
    margin-top: 20px
    display: block
    color: #144877
    text-decoration: none
    font-size: 14px
  .developMember
    margin-top: 120px

.companyOverview
  margin-top: 120px
  .companyOverviewTable
    margin: 60px auto 0
</style>
