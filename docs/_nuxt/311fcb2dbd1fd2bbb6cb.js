;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    167: function(t, e, n) {
      var content = n(169)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('74d50ca8', content, !0, { sourceMap: !1 })
    },
    168: function(t, e, n) {
      'use strict'
      var o = n(167)
      n.n(o).a
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
      var o = {
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
        r = (n(168), n(6)),
        component = Object(r.a)(
          o,
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
    171: function(t, e, n) {
      var content = n(175)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('72f91ded', content, !0, { sourceMap: !1 })
    },
    174: function(t, e, n) {
      'use strict'
      var o = n(171)
      n.n(o).a
    },
    175: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.companyOverviewTable[data-v-65acd344]{font-size:14px;color:#040e17}@media screen and (max-width:539px){.companyOverviewTable .tr[data-v-65acd344]{display:flex;flex-direction:column}.companyOverviewTable .tr .td[data-v-65acd344]{margin-top:10px}}.companyOverviewTable .tr:not(:first-of-type) .th[data-v-65acd344]{padding-top:20px}.companyOverviewTable .th[data-v-65acd344]{text-align:left;font-weight:700;padding-right:20px}.companyOverviewTable td[data-v-65acd344]{line-height:1.5}.companyOverviewTable .building[data-v-65acd344]{display:inline-block}',
        ''
      ]),
        (t.exports = e)
    },
    184: function(t, e, n) {
      var content = n(208)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('e0ad8294', content, !0, { sourceMap: !1 })
    },
    185: function(t, e, n) {
      var content = n(210)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('3dd3bbfe', content, !0, { sourceMap: !1 })
    },
    186: function(t, e, n) {
      'use strict'
      n(174)
      var o = n(6),
        component = Object(o.a)(
          {},
          function() {
            var t = this.$createElement
            this._self._c
            return this._m(0)
          },
          [
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e
              return n('table', { staticClass: 'companyOverviewTable' }, [
                n('tbody', [
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('会社名')]),
                    n('td', { staticClass: 'td' }, [
                      t._v('株式会社ハイウィザード')
                    ])
                  ]),
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('所在地')]),
                    n('td', { staticClass: 'td' }, [
                      t._v('〒060-0041'),
                      n('br'),
                      t._v('北海道札幌市中央区大通東4丁目4-53'),
                      n('span', { staticClass: 'building' }, [
                        t._v('ヒューガ大通スイート401')
                      ])
                    ])
                  ]),
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('設立日')]),
                    n('td', { staticClass: 'td' }, [t._v('2019年5月24日')])
                  ]),
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('資本金')]),
                    n('td', { staticClass: 'td' }, [t._v('2,000,000円')])
                  ]),
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('代表取締役')]),
                    n('td', { staticClass: 'td' }, [t._v('草間 大輔')])
                  ]),
                  n('tr', { staticClass: 'tr' }, [
                    n('th', { staticClass: 'th' }, [t._v('事業内容')]),
                    n('td', { staticClass: 'td' }, [
                      t._v('ホームページ制作、WEBシステム作成、運用・保守管理'),
                      n('br'),
                      t._v('ネットショップ制作')
                    ])
                  ])
                ])
              ])
            }
          ],
          !1,
          null,
          '65acd344',
          null
        )
      e.a = component.exports
    },
    207: function(t, e, n) {
      'use strict'
      var o = n(184)
      n.n(o).a
    },
    208: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.newsItem[data-v-3ba6f496]{margin:40px 0 0}.newsItem[data-v-3ba6f496]:only-child{margin:40px auto 0}.newsItem .heading[data-v-3ba6f496]{padding-bottom:10px;border-bottom:2px solid #d6d8dc}.introduction[data-v-3ba6f496]{color:#040e17;font-size:14px;line-height:1.7;padding-top:16px}.link[data-v-3ba6f496]{display:inline-block;color:#144877;text-decoration:none}.date[data-v-3ba6f496],.link[data-v-3ba6f496]{font-size:14px;margin-top:10px}.date[data-v-3ba6f496]{text-align:right;color:#686e73}',
        ''
      ]),
        (t.exports = e)
    },
    209: function(t, e, n) {
      'use strict'
      var o = n(185)
      n.n(o).a
    },
    210: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.news[data-v-4b471a41]{margin:0 auto;max-width:1040px;padding:0 20px}@media screen and (min-width:720px){.news .container[data-v-4b471a41]{display:grid;grid-gap:40px;grid-template-columns:1fr 1fr}}.aboutUs[data-v-4b471a41]{margin:120px auto 0;max-width:1040px;padding:0 20px;display:flex}@media screen and (max-width:719px){.aboutUs[data-v-4b471a41]{display:block}}.aboutUs .img[data-v-4b471a41]{background:url(/image/topDecoration.jpg);flex-shrink:0;margin-right:60px;background-size:cover;background-position:50%;display:none}@media screen and (min-width:720px){.aboutUs .img[data-v-4b471a41]{width:30%;max-width:330px}.aboutUs .img.--pc[data-v-4b471a41]{display:block}}@media screen and (max-width:719px){.aboutUs .img[data-v-4b471a41]{width:100%;height:150px;max-width:unset;margin-top:40px}.aboutUs .img.--sp[data-v-4b471a41]{display:block}}.aboutUs .text[data-v-4b471a41]{margin-top:40px;font-size:14px;line-height:1.7;color:#040e17}.aboutUs .link[data-v-4b471a41]{margin-top:20px;display:block;color:#144877;text-decoration:none;font-size:14px}.aboutUs .developMember[data-v-4b471a41]{margin-top:120px}.companyOverview[data-v-4b471a41]{margin-top:120px;padding:0 20px}.companyOverview .companyOverviewTable[data-v-4b471a41]{margin:60px auto 0}',
        ''
      ]),
        (t.exports = e)
    },
    215: function(t, e, n) {
      'use strict'
      n.r(e)
      var o = n(186),
        r = n(73),
        d = n(170),
        c = {
          components: { Heading: r.a },
          props: {
            title: String,
            introduction: String,
            date: String,
            link: String,
            linkTo: String
          }
        },
        l = (n(207), n(6)),
        v = Object(l.a)(
          c,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              { staticClass: 'newsItem' },
              [
                n('Heading', {
                  staticClass: 'heading',
                  attrs: { type: 'tertiary', text: t.title }
                }),
                t.date
                  ? n('p', { staticClass: 'date' }, [t._v(t._s(t.date))])
                  : t._e(),
                n('p', { staticClass: 'introduction' }, [
                  t._v(t._s(t.introduction))
                ]),
                t.link && t.linkTo
                  ? n(
                      'n-link',
                      { staticClass: 'link', attrs: { to: t.linkTo } },
                      [t._v(t._s(t.link))]
                    )
                  : t._e()
              ],
              1
            )
          },
          [],
          !1,
          null,
          '3ba6f496',
          null
        ).exports,
        x = {
          components: {
            CompanyOverview: o.a,
            Heading: r.a,
            HeroView: d.a,
            HomeNewsItem: v
          }
        },
        m =
          (n(209),
          Object(l.a)(
            x,
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e(
                'div',
                [
                  e('HeroView', {
                    attrs: {
                      topText:
                        '株式会社ハイウィザードは札幌市でWeb制作を行うクリエイティブ集団です。<br>ホームページ制作を軸に、システム開発、各種コンテンツ制作などを行っています。',
                      imgSrc: '/image/top.jpg'
                    }
                  }),
                  e(
                    'section',
                    { staticClass: 'news' },
                    [
                      e('Heading', {
                        attrs: { type: 'secondary', text: 'NEWS' }
                      }),
                      e(
                        'div',
                        { staticClass: 'container' },
                        [
                          e('HomeNewsItem', {
                            attrs: {
                              title: 'ホームページ制作受付のお知らせ',
                              introduction:
                                'WEBサイト、HP制作業務の請負を開始しております。',
                              link: 'ご用命の方はこちら',
                              linkTo: '/contact'
                            }
                          }),
                          e('HomeNewsItem', {
                            attrs: {
                              title: '弊社Webサイトをリニューアル致しました',
                              introduction:
                                '株式会社ハイウィザード ホームページにアクセスいただき誠にありがとうございます。皆様がより情報を探しやすくなるようホームページをリニューアル致しました。これからもよろしくお願い申し上げます。',
                              date: '2020.2.29'
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  e('section', { staticClass: 'aboutUs' }, [
                    e('div', { staticClass: 'img --pc' }),
                    e('div', { staticClass: 'contents' }, [
                      e(
                        'div',
                        { staticClass: 'wroks' },
                        [
                          e('Heading', {
                            attrs: {
                              type: 'secondary',
                              text: 'WORKS',
                              subText: '私たちにできること'
                            }
                          }),
                          e('div', { staticClass: 'img --sp' }),
                          e('p', { staticClass: 'text' }, [
                            this._v(
                              '弊社は、各分野（フロントエンド、バックエンド、インフラ）に通じた各開発スタッフを擁しており、ホームページ制作をはじめとするWebの分野に大きな強みを持っております。単純なホームページ作成から複雑なWebシステムの構築まで対応可能です。フロントエンド側でアプリの開発に従事した経験者もいるため、スマートフォン向けの、業務用アプリ、ゲームの開発も可能です。'
                            )
                          ]),
                          e(
                            'n-link',
                            { staticClass: 'link', attrs: { to: '/service' } },
                            [this._v('詳しくはこちら')]
                          )
                        ],
                        1
                      ),
                      e(
                        'div',
                        { staticClass: 'developMember' },
                        [
                          e('Heading', {
                            attrs: {
                              type: 'secondary',
                              text: 'DEVELOP MEMBER',
                              subText: '開発チーム'
                            }
                          }),
                          this._m(0),
                          e(
                            'n-link',
                            { staticClass: 'link', attrs: { to: '/contact' } },
                            [this._v('ご依頼はこちら')]
                          )
                        ],
                        1
                      )
                    ])
                  ]),
                  e(
                    'section',
                    { staticClass: 'companyOverview' },
                    [
                      e('Heading', {
                        attrs: {
                          type: 'secondary',
                          text: 'COMPANY',
                          subText: '会社概要',
                          centering: !0
                        }
                      }),
                      e('CompanyOverview', {
                        staticClass: 'companyOverviewTable'
                      })
                    ],
                    1
                  )
                ],
                1
              )
            },
            [
              function() {
                var t = this.$createElement,
                  e = this._self._c || t
                return e('p', { staticClass: 'text' }, [
                  this._v(
                    '弊社の開発スタッフは全員がReact又はVueを用いたSPAの実装の経験があります。各自言語は違えど、バックエンドの開発の経験もありますので、小規模〜中規模のWebシステムの開発を効率よく行えます。'
                  ),
                  e('br'),
                  this._v(
                    '開発チームは、マネジメントを行う者と実装を行う者のバランスが良く、最適な技術等の提案を行う事もできますので、案件に適した新しい技術を使ってスピィーディーに開発を進められます。'
                  ),
                  e('br'),
                  this._v('\n納品後の保守や追加開発にもしっかりと応じます！')
                ])
              }
            ],
            !1,
            null,
            '4b471a41',
            null
          ))
      e.default = m.exports
    }
  }
])
