<template lang="pug">
  table.companyOverviewTable
    tbody
      tr.tr
        th.th 会社名
        td.td 株式会社ハイウィザード
      tr.tr
        th.th 所在地
        td.td 〒060-0041<br>
          | 北海道札幌市中央区大通東4丁目4-53
          span.building ヒューガ大通スイート401
      tr.tr
        th.th 設立日
        td.td 2019年5月24日
      tr.tr
        th.th 資本金
        td.td 2,000,000円
      tr.tr
        th.th 代表取締役
        td.td 草間 大輔
      tr.tr
        th.th 事業内容
        td.td ホームページ制作、WEBシステム作成、運用・保守管理<br>
          | ネットショップ制作
</template>

<style lang="sass" scoped>
.companyOverviewTable
  font-size: 14px
  color: #040e17
  @media screen and (max-width: 539px)
    .tr
      display: flex
      flex-direction: column
      .td
        margin-top: 10px
  .tr:not(:first-of-type) .th
    padding-top: 20px
  .th
    text-align: left
    font-weight: bold
    padding-right: 20px
  td
    line-height: 1.5
  .building
    display: inline-block
</style>
