;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
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
        o = (n(168), n(6)),
        component = Object(o.a)(
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
    171: function(t, e, n) {
      var content = n(173)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('72f91ded', content, !0, { sourceMap: !1 })
    },
    172: function(t, e, n) {
      'use strict'
      var r = n(171)
      n.n(r).a
    },
    173: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.companyOverviewTable[data-v-65acd344]{font-size:14px;color:#040e17}@media screen and (max-width:539px){.companyOverviewTable .tr[data-v-65acd344]{display:flex;flex-direction:column}.companyOverviewTable .tr .td[data-v-65acd344]{margin-top:10px}}.companyOverviewTable .tr:not(:first-of-type) .th[data-v-65acd344]{padding-top:20px}.companyOverviewTable .th[data-v-65acd344]{text-align:left;font-weight:700;padding-right:20px}.companyOverviewTable td[data-v-65acd344]{line-height:1.5}.companyOverviewTable .building[data-v-65acd344]{display:inline-block}',
        ''
      ]),
        (t.exports = e)
    },
    174: function(t, e, n) {
      var content = n(183)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('b022fd1e', content, !0, { sourceMap: !1 })
    },
    181: function(t, e, n) {
      'use strict'
      n(172)
      var r = n(6),
        component = Object(r.a)(
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
    182: function(t, e, n) {
      'use strict'
      var r = n(174)
      n.n(r).a
    },
    183: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.companyPhilosophy[data-v-0aa73c7a]{padding:0 20px;max-width:1040px;width:calc(100% - 40px);margin:0 auto}.companyPhilosophy .english[data-v-0aa73c7a]{margin-top:60px;font-weight:700;color:#144877;font-size:18px;line-height:1.6}.companyPhilosophy .japanese[data-v-0aa73c7a]{margin-top:30px;color:#686e73;font-size:14px;line-height:1.7}@media screen and (max-width:349px){.companyPhilosophy .japanese[data-v-0aa73c7a]{font-size:12px}}.companyOverview[data-v-0aa73c7a]{margin-top:120px;padding:0 20px}.companyOverview .companyOverviewTable[data-v-0aa73c7a]{margin:60px auto 0}.access[data-v-0aa73c7a]{margin-top:120px}.access .gmap[data-v-0aa73c7a]{margin-top:60px;width:100%}',
        ''
      ]),
        (t.exports = e)
    },
    199: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(170),
        o = n(73),
        c = n(181),
        l = {
          components: { HeroView: r.a, Heading: o.a, CompanyOverview: c.a },
          head: function() {
            return {
              title: '会社案内 | 株式会社ハイウィザード',
              meta: [
                {
                  hid: 'og:title',
                  property: 'og:title',
                  content: '会社案内 | 株式会社ハイウィザード'
                }
              ]
            }
          }
        },
        d = (n(182), n(6)),
        component = Object(d.a)(
          l,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'div',
              [
                e('HeroView', {
                  attrs: {
                    headingText: 'COMPANY',
                    headingSubText: '会社案内',
                    imgSrc: '/image/company.jpg'
                  }
                }),
                e(
                  'section',
                  { staticClass: 'companyPhilosophy' },
                  [
                    e('Heading', {
                      attrs: { type: 'secondary', text: '企業理念' }
                    }),
                    this._m(0),
                    this._m(1)
                  ],
                  1
                ),
                e(
                  'section',
                  { staticClass: 'companyOverview' },
                  [
                    e('Heading', {
                      attrs: {
                        type: 'secondary',
                        text: '会社概要',
                        centering: !0
                      }
                    }),
                    e('CompanyOverview', {
                      staticClass: 'companyOverviewTable'
                    })
                  ],
                  1
                ),
                e(
                  'section',
                  { staticClass: 'access' },
                  [
                    e('Heading', {
                      attrs: {
                        type: 'secondary',
                        text: 'アクセス',
                        centering: !0
                      }
                    }),
                    e('iframe', {
                      staticClass: 'gmap',
                      staticStyle: { border: '0' },
                      attrs: {
                        src:
                          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5829.947560754659!2d141.362791!3d43.063019!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2979fd36bd67%3A0xd3fc5c3dd6d8da9!2z44CSMDYwLTAwNDEg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65aSn6YCa5p2x77yU5LiB55uuIO-8qO-8te-8p--8oSDvvK_vvKTvvK_vvLLvvKkg77yz77y177yp77y077yl!5e0!3m2!1sja!2sjp!4v1582535864154!5m2!1sja!2sjp',
                        height: '400',
                        frameborder: '0',
                        allowfullscreen: ''
                      }
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
              return e('p', { staticClass: 'english' }, [
                this._v('by good person'),
                e('br'),
                this._v('more develop'),
                e('br'),
                this._v('\nmotto tanoshiku')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'japanese' }, [
                this._v('弊社のよき開発者による事業活動によって'),
                e('br'),
                this._v('もっと社会が発展し、もっと楽しくなるように、'),
                e('br'),
                this._v('\n我々は努めてまいります。')
              ])
            }
          ],
          !1,
          null,
          '0aa73c7a',
          null
        )
      e.default = component.exports
    }
  }
])
