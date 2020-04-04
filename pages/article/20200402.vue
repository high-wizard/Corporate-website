<template lang="pug">
div.top
  h1.heading 勉強会について
  p お疲れ様です！株式会社ハイウィザードのかんちゃんです。

  p 本日は勉強会についてです。下記の勉強会を計画しています。
  li.list 自由に読書をする
    ruby.bold 「HW読書会」
      rt ハイウィザードどくしょかい
  li.list LaravelとVueについて学ぶ
    ruby.bold 「HWLV」
      rt ハイウィザード ララベル ビュー

  p 基本的には土曜日（または日曜日）で検討しています。
  p ※他の勉強会や大きいイベントと重複した場合は開催しません（例：OSC北海道、ゆるWeb札幌がある等）

  h2.heading HW読書会
  p 毎週土曜の午前中に開催したいと考えています。
  p 昼までの2~3時間、読書をするだけの会です。
  p 何らかの形で読書したことについて共有する機会を設けたいと思います（読書した内容についてLTをする機会を設ける等）
  p 本のジャンルは自由です。写経（本のコードを書く行為）する等の作業も可です。
  p オススメしたい方：土曜の朝活をしたい方、積んでいる本や読みたい本がある方

  h3.heading HWLV
  p 隔週土曜の午後に開催したいと考えています。
  p 特定の書籍をもとにLaravel Vueについて学んでいく形式の勉強会です。
  p 講義者は事前に書籍の内容について予習しておき、受講者に説明する形式で勉強をする会です。
  p 講義者側を希望して参加して頂くことも可能です。また、希望者が多ければ懇親会も実施したいと思います。
  p オススメしたい方：LaravelとVueに興味関心のあるエンジニア

  p いずれも
    a.link(href='https://connpass.com/') connpass
    span から申し込みが可能です。気軽にお申込みください。
  p 電源、インターネット、ホワイトボード、机、椅子の用意があります。


</template>

<script>
export default {
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
  }
}
</script>

<style lang="sass" scoped>
@import './article.sass'
</style>
