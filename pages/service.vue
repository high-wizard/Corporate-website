<template lang="pug">
  div
    HeroView(headingText='SERVICE' headingSubText='実績紹介' imgSrc='/image/service.jpg')
    .wrapper
      section.services
        Heading(type='secondary' text='Webサイト 開発・運用' :centering='true')
        .serviceItemContainer
          ServiceItem(v-for='(s, key, index) in webServiceList' :title='s[0]' :introduction='s[1]' :client='s[2]' :key='index')
      section.services
        Heading(type='secondary' text='複合システム' :centering='true')
        .serviceItemContainer
          ServiceItem(v-for='(s, key, index) in combinedSystemList' :title='s[0]' :introduction='s[1]' :client='s[2]' :key='index')
      section.services
        Heading(type='secondary' text='その他' :centering='true')
        .serviceItemContainer
          ServiceItem(v-for='(s, key, index) in otherList' :title='s[0]' :introduction='s[1]' :client='s[2]' :key='index')
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
  head() {
    const pageTitle = '実績紹介 | 株式会社ハイウィザード'
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
    // タイトル, 説明, 取引先 の順で配列を記載
    webServiceList: [
      ['大手小売業ECサイト開発', '200画面規模の大型サイトです。', '小売業'],
      [
        '健康用品ECサイト リニューアル',
        '高齢者向け健康食品、石鹸、シャンプー等のヘルスケア用品を販売する ECサイトのリニューアルです。',
        '小売業'
      ],
      [
        'ホームページ制作',
        '5〜8ページ規模の静的サイトです。',
        '飲食, 医療, 宗教法人など'
      ]
    ],
    combinedSystemList: [
      [
        '大手小売業 管理システム開発',
        'ECサイトと連動する商品・注文・店舗管理システムです。',
        '小売業'
      ],
      [
        '写真加工・プリント注文アプリ 開発',
        'スマホで撮影した写真を選択して加工、アルバム化しプリントサービスに オーダーできるアプリです。',
        'フォトサービス業'
      ],
      [
        'スマホアプリ用 注文管理 Web システム',
        'アプリユーザのプリントオーダーに対応した商品・顧客管理を行うシステムです。',
        'プリントデザイン会社'
      ],
      [
        '電力使用量表示 Web アプリ',
        '充電電力(ソーラ3系統まで)、消費電力(各家電ごと)、電気料金 の表示や充電モードの切替等ができるWebアプリです。',
        '電力会社'
      ],
      [
        '電力需要家 Web 管理システム',
        '契約需要家(電力量・電気料金)の情報を管理するシステムです。',
        '電力会社'
      ],
      [
        '大容量ログ解析案件',
        '数百万行単位のログデータからIoTデバイスの位置情報等の解析・可視化するシステムの処理実装です。',
        '運送業'
      ]
    ],
    otherList: [['開発講師派遣', '企業の新人研修のための講師をご案内します。']]
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
    max-width: 100%
</style>
