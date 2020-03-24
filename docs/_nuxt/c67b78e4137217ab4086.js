;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    167: function(t, e, n) {
      var content = n(169)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('74d50ca8', content, !0, { sourceMap: !1 })
    },
    168: function(t, e, n) {
      'use strict'
      var r = n(167)
      n.n(r).a
    },
    169: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.heroView[data-v-1b9f73e8]{position:relative;height:400px;display:flex;flex-direction:column;margin-bottom:120px}@media screen and (max-width:719px){.heroView[data-v-1b9f73e8]{height:250px}}.heroView[data-v-1b9f73e8]:before{left:0;top:0;height:100%;z-index:-1;background:linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(104.04deg,rgba(21,75,120,.4),rgba(160,213,198,.4)),linear-gradient(1turn,rgba(0,0,0,.4),hsla(0,0%,100%,0)),var(--img-url);background-size:cover;background-position:50%}.heroView[data-v-1b9f73e8]:after,.heroView[data-v-1b9f73e8]:before{position:absolute;width:90%;content:"";display:block}.heroView[data-v-1b9f73e8]:after{right:0;bottom:-20px;height:100px;z-index:-2;background:#f0f3f6}.wrapper[data-v-1b9f73e8]{max-width:1040px;width:calc(100% - 40px);margin:auto auto 20px;padding:0 20px}.heroHeading[data-v-1b9f73e8]{color:#fff;margin-bottom:20px}.topText[data-v-1b9f73e8]{color:#fff;line-height:1.5;font-size:14px;letter-spacing:.1em;max-width:90%}',
        ''
      ]),
        (t.exports = e)
    },
    170: function(t, e, n) {
      'use strict'
      var r = {
          components: { Heading: n(73).a },
          computed: {
            setBgImageUrl: function() {
              return '--img-url: url('.concat(this.imgSrc, ');')
            }
          },
          props: {
            headingText: String,
            headingSubText: String,
            imgSrc: String,
            topText: String
          }
        },
        c = (n(168), n(6)),
        component = Object(c.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'section',
              { staticClass: 'heroView', style: t.setBgImageUrl },
              [
                n(
                  'div',
                  { staticClass: 'wrapper' },
                  [
                    t.headingText && t.headingSubText
                      ? n('Heading', {
                          staticClass: 'heroHeading',
                          attrs: {
                            type: 'main',
                            text: t.headingText,
                            subText: t.headingSubText,
                            color: '#ffffff'
                          }
                        })
                      : t._e(),
                    t.topText
                      ? n('p', {
                          staticClass: 'topText',
                          domProps: { innerHTML: t._s(t.topText) }
                        })
                      : t._e()
                  ],
                  1
                )
              ]
            )
          },
          [],
          !1,
          null,
          '1b9f73e8',
          null
        )
      e.a = component.exports
    },
    177: function(t, e, n) {
      var content = n(189)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('12954bd0', content, !0, { sourceMap: !1 })
    },
    178: function(t, e, n) {
      var content = n(191)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('7f64729f', content, !0, { sourceMap: !1 })
    },
    188: function(t, e, n) {
      'use strict'
      var r = n(177)
      n.n(r).a
    },
    189: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.serviceItem[data-v-751d46cc]{width:100%;max-width:320px;margin:60px 20px 0}.serviceItem[data-v-751d46cc]:only-child{margin:60px auto 0}@media screen and (max-width:719px){.serviceItem[data-v-751d46cc]{max-width:unset}.serviceItem[data-v-751d46cc]:only-child{margin:60px 20px 0}}.introduction[data-v-751d46cc]{color:#040e17;font-size:14px;line-height:1.7;margin-top:10px;padding-top:16px;border-top:2px solid #d6d8dc}.client[data-v-751d46cc]{color:#686e73;font-size:12px;margin-top:6px}',
        ''
      ]),
        (t.exports = e)
    },
    190: function(t, e, n) {
      'use strict'
      var r = n(178)
      n.n(r).a
    },
    191: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.wrapper[data-v-93cafe7c]{padding:0 20px;color:#040e17;max-width:1040px;width:calc(100% - 40px);margin:0 auto}.services[data-v-93cafe7c]{margin:0 -20px}.services[data-v-93cafe7c]:not(:first-of-type){margin-top:180px}.serviceItemContainer[data-v-93cafe7c]{display:flex;flex-wrap:wrap;justify-content:flex-start;margin:0 auto;width:100%;max-width:1080px}@media screen and (max-width:1079px){.serviceItemContainer[data-v-93cafe7c]{max-width:720px}}@media screen and (max-width:719px){.serviceItemContainer[data-v-93cafe7c]{max-width:100%}}',
        ''
      ]),
        (t.exports = e)
    },
    197: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(170),
        c = n(73),
        o = {
          components: { Heading: c.a },
          props: { title: String, introduction: String, client: String }
        },
        d = (n(188), n(6)),
        l = Object(d.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              { staticClass: 'serviceItem' },
              [
                n('Heading', { attrs: { type: 'tertiary', text: t.title } }),
                n('p', { staticClass: 'introduction' }, [
                  t._v(t._s(t.introduction))
                ]),
                t.client
                  ? n('p', { staticClass: 'client' }, [
                      t._v('取引先：' + t._s(t.client))
                    ])
                  : t._e()
              ],
              1
            )
          },
          [],
          !1,
          null,
          '751d46cc',
          null
        ).exports,
        x = {
          components: { HeroView: r.a, Heading: c.a, ServiceItem: l },
          head: function() {
            return {
              title: '実績紹介 | 株式会社ハイウィザード',
              meta: [
                {
                  hid: 'og:title',
                  property: 'og:title',
                  content: '実績紹介 | 株式会社ハイウィザード'
                }
              ]
            }
          },
          data: function() {
            return {
              webServiceList: [
                [
                  '大手小売業ECサイト開発',
                  '200画面規模の大型サイトです。',
                  '小売業'
                ],
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
              otherList: [
                ['開発講師派遣', '企業の新人研修のための講師をご案内します。']
              ]
            }
          }
        },
        f =
          (n(190),
          Object(d.a)(
            x,
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e(
                'div',
                [
                  e('HeroView', {
                    attrs: {
                      headingText: 'SERVICE',
                      headingSubText: '実績紹介',
                      imgSrc: '/image/service.jpg'
                    }
                  }),
                  e('div', { staticClass: 'wrapper' }, [
                    e(
                      'section',
                      { staticClass: 'services' },
                      [
                        e('Heading', {
                          attrs: {
                            type: 'secondary',
                            text: 'Webサイト 開発・運用',
                            centering: !0
                          }
                        }),
                        e(
                          'div',
                          { staticClass: 'serviceItemContainer' },
                          this._l(this.webServiceList, function(s, t, n) {
                            return e('ServiceItem', {
                              key: n,
                              attrs: {
                                title: s[0],
                                introduction: s[1],
                                client: s[2]
                              }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    e(
                      'section',
                      { staticClass: 'services' },
                      [
                        e('Heading', {
                          attrs: {
                            type: 'secondary',
                            text: '複合システム',
                            centering: !0
                          }
                        }),
                        e(
                          'div',
                          { staticClass: 'serviceItemContainer' },
                          this._l(this.combinedSystemList, function(s, t, n) {
                            return e('ServiceItem', {
                              key: n,
                              attrs: {
                                title: s[0],
                                introduction: s[1],
                                client: s[2]
                              }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    e(
                      'section',
                      { staticClass: 'services' },
                      [
                        e('Heading', {
                          attrs: {
                            type: 'secondary',
                            text: 'その他',
                            centering: !0
                          }
                        }),
                        e(
                          'div',
                          { staticClass: 'serviceItemContainer' },
                          this._l(this.otherList, function(s, t, n) {
                            return e('ServiceItem', {
                              key: n,
                              attrs: {
                                title: s[0],
                                introduction: s[1],
                                client: s[2]
                              }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            },
            [],
            !1,
            null,
            '93cafe7c',
            null
          ))
      e.default = f.exports
    }
  }
])
