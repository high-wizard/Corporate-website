export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: '株式会社ハイウィザード',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '株式会社ハイウィザードは札幌市でWeb制作を行うクリエイティブ集団です。ホームページ制作を軸に、システム開発、各種コンテンツ制作などを行っています。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: './OGP.png'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '株式会社ハイウィザードは札幌市でWeb制作を行うクリエイティブ集団です。ホームページ制作を軸に、システム開発、各種コンテンツ制作などを行っています。'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://high-wizard.com/'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '株式会社ハイウィザード'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#144877'
  },
  /*
   ** Global CSS
   */
  css: ['reset-css'],
  webfontloader: {
    google: {
      families: ['Montserrat:400,700', 'Noto+Sans+JP:400,700']
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'docs'
  }
}
