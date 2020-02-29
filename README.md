# HighWizardCorporateSite

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 編集方法

### 使用技術と影響領域

複雑な編集をする際には以下の技術を参照してください。

- ファイル構成、meta などの設定など： Nuxt
- 個別コンポーネントファイル: Vue
  - meta HTML: Pug
  - meta CSS: Sass/SASS
    - 一般的な CSS 設計と異なり Vue による scoped CSS を採用しているので、特定のクラス名はそれを記述している Vue ファイル内でのみ適用されることに注意してください。
  - JavaScript 周り： Vue

### ページと編集ファイル一覧

表示項目の追加や変更程度の編集をする際には以下を参照してください。
基本的には既存のコードの書き方を流用すれば理想的に編集できるようにしてあります。

- 共通部

  - フォント指定など: `layouts/default.vue`
  - meta タグ関連: `./nuxt.config.js`
  - Header: `components/organisms/Header.vue`
  - Footer: `components/organisms/Footer.vue`

- HOME: `pages/index.vue`
  - (COMPANY と共通) 会社情報の表: `components/organisms/CompanyOverview.vue`
- COMPANY: `pages/company.vue`
  - (HOME と共通) 会社情報の表: `components/organisms/CompanyOverview.vue`
- SERVICE: `pages/service.vue`
  - サービス項目の追加・編集する際は、ファイル内の**以下の Array を既存コードに併せて編集してください**。
    - Web サイト 開発・運用: `webServiceList[]`
    - 複合システム: `combinedSystemList[]`
    - その他: `otherList`
- CONTACT: `pages/contact.vue`
- RECRUIT: `pages/recruit.vue`

## GitHub Settings

- Branch protection rules
  - master: require PR with build-test

## Cording Rule

### Function vs Arrow

methods,mounted 内では Function(`function () {}`)、data では Arrow(`() => {}`)を用いる
