<template lang="pug">
  div
    HeroView(headingText='RECRUIT' headingSubText='採用情報' imgSrc='/image/recruit.jpg')
    .wrapper
      .greeting
        p 事業拡大につき、エンジニアの募集を行っています。
        p 弊社は元エンジニアでもある社長の意向により、エンジニアが働きやすく、のびのびと成長できる会社を目指しています。
        p 昨年出来たばかりの企業であり、新しい会社で働きたいという方にはピッタリの会社だと考えております。ぜひお気軽にご相談下さい。
        //- TODO: 2021年になったら上記の文章を変更する
      .recruitInfomation
        .item
          Heading(type='tertiary' text='募集業種')
          p.text システムエンジニア・プログラマー
        .item
          Heading(type='tertiary' text='仕事内容')
          p.text Webシステムや業務系システムの設計・コーディング・テスト等、システム開発に関わる作業全般を行って頂きます。<br>
            | 経験やスキル、興味や希望に応じて、最適な案件にアサインします。
        .item
          Heading(type='tertiary' text='雇用形態')
          p.text 有期雇用契約社員（1年。契約更新の場合あり）<br>
            | 社内規程により、入社半年後から正社員昇格試験を受ける事が出来ます（面接試験）
        .item
          Heading(type='tertiary' text='応募資格')
          p.text プログラマーとしての実務経験1年以上（言語・フレームワーク・領域は不問です）
        .item
          Heading(type='tertiary' text='給与')
          p.text 月給 19〜35万円（職能手当込み）<br>
            | 前職給与・希望・経験・スキル等を勘案して決定させて頂きます
        .item
          Heading(type='tertiary' text='勤務地')
          p.text 弊社事務所（北海道札幌市中央区大通東4丁目4-53 ヒューガ大通スイート 401）<br>
            | 業務の都合により、札幌市内のお客様先にて作業する場合がございます。
        .item
          Heading(type='tertiary' text='勤務時間')
          p.text 9時〜18時（プロジェクトにより異なる場合がございます）<br>
            | 月平均時間外労働時間：5.6時間
        .item
          Heading(type='tertiary' text='休日等')
          p.text 完全週休2日制（土日+祝日）<br>
            | 夏季休暇・年末年始休暇
        .item
          Heading(type='tertiary' text='手当')
          p.text 通勤手当（上限規程なし）<br>
            | 職能手当（スキルに応じて支給）
        .item
          Heading(type='tertiary' text='福利厚生')
          p.text 各種社会保険、定期健康診断<br>
            | 出張手当<br>
            | 副業自由。独立支援も要相談<br>
            | 従業員貸付金制度（10万円程度を限度）<br>
            | 書籍購入・有料カンファレンス等参加費補助（月1万円程度を限度）<br>
            | 他に欲しい物があればぜひご相談下さい
        .item
          Heading(type='tertiary' text='採用フロー')
          ol.text.list
            li エントリー
            li 書類選考
            li カジュアル面談（社長又は採用担当者）
            li 面接（社長）
            li 採用
        .contactUs
          Heading(type='secondary' text='エントリー方法')
          p.text 以下の3つのうちどれか1つにてご連絡下さい。<br>
            | 質問やエントリー前のカジュアル面談等も歓迎しております。お気軽にご相談下さい。
          Heading(type='tertiary' text='TEL').heading
          p.text 011-600-2455<br>
            | 担当：経営管理部
          Heading(type='tertiary' text='MAIL').heading
          p.text recruit@high-wizard.com<br>
            | 【履歴書及び職務経歴書】若しくは【ポートフォリオ等実績の分かる印刷物又はURL】をお送り下さい。
          Heading(type='tertiary' text='直接書類送付').heading
          p.text 本社住所：北海道札幌市手稲区前田8条17丁目3-30
            | 【履歴書及び職務経歴書】若しくは【ポートフォリオ等実績の分かる印刷物又はURL】をお送り下さい。
        .item
          Heading(type='tertiary' text='業務委託契約でのお仕事をお探しの方へ')
          p.text 弊社ではフリーランスエンジニアの方も募集しております。<br>
            | 上記の内容とは条件が異なりますので、詳しくは採用担当者へお問い合わせ下さい。
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
    const pageTitle = '採用情報 | 株式会社ハイウィザード'
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
  color: #040E17
  line-height: 1.5

.greeting
  text-align: center
  font-size: 14px
  p:not(:first-of-type)
    margin-top: 10px

.recruitInfomation
  width: fit-content
  margin: 120px auto 0

.item,
  margin-top: 60px
  .text
    margin-top: 20px
    font-size: 14px
    &.list
      list-style-type: decimal
      padding-left: 1.1em

.contactUs
  margin-top: 60px
  .heading
    margin-top: 20px
  .text
    font-size: 14px
</style>
