<template lang="pug">
div.top
  h1.heading 企業ブログ、開設しました！
  p はじめまして！株式会社ハイウィザードのかんちゃんです。エンジニアと広報（自称）を担当しています。
  p 日常業務では開発を担当していますが、広報としては弊社公式サイトの「ブログ更新」を担当します。

  p
    span 現時点では新型肺炎の影響で実現できていませんが、
    span.bold 勉強会の開催
    span も行う予定です。

  p 弊社はできたばかりの会社です。勉強会も会社の技術ブログもなかったので、提案してみたところGOサインが出ました。少しずつ実現して前例を作っていこうと思います！
  p 他にも「社食の導入」とか少しずつイケてる会社に近づけていきたいですね！
  p
    span 私は採用担当ではありませんが、求人も出してるみたいです。興味のある方は
    n-link.link(to='/recruit') コチラ
    span をご覧ください。


  h2.heading ブログについて
  p このハイウィザード公式サイトブログでは、技術的な内容と会社での出来事を書いていく予定です。
  p 記事のタイトルだけで技術トピックかそれ以外かがタイトルで分かるようにします。
  p C#、PHP、JavaScript等を扱う機会があるので、業務で役立った知識とか公開していければと思います！
  p 個人的にQiitaのトレンドを読むのが習慣としてあるので、オススメしたいなと思った記事も紹介します。

  h3.heading Qiita記事紹介
  p 
    span 早速記事紹介なのですが、最近読んでていいなと思った記事は
    a.link(href='https://qiita.com/otchy/items/11a2ce054339c3e1a62d') 完全にクラウドで完結する無料の Web 開発環境 2020 年春
    span です。
  p 以前はCloud9というサービスを利用していましたが、AWS Cloud9になってからは使っていませんでした。
  p 記事のVS Onlineが気になりますね。そのうち試してみたいです。
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
font-weight: 700

<style lang="sass" scoped>
@import './article.sass'
</style>
