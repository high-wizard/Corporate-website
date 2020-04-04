;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    167: function(t, e, r) {
      var content = r(169)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(15).default)('74d50ca8', content, !0, { sourceMap: !1 })
    },
    168: function(t, e, r) {
      'use strict'
      var n = r(167)
      r.n(n).a
    },
    169: function(t, e, r) {
      ;(e = r(14)(!1)).push([
        t.i,
        '.heroView[data-v-1b9f73e8]{position:relative;height:400px;display:flex;flex-direction:column;margin-bottom:120px}@media screen and (max-width:719px){.heroView[data-v-1b9f73e8]{height:250px}}.heroView[data-v-1b9f73e8]:before{left:0;top:0;height:100%;z-index:-1;background:linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(104.04deg,rgba(21,75,120,.4),rgba(160,213,198,.4)),linear-gradient(1turn,rgba(0,0,0,.4),hsla(0,0%,100%,0)),var(--img-url);background-size:cover;background-position:50%}.heroView[data-v-1b9f73e8]:after,.heroView[data-v-1b9f73e8]:before{position:absolute;width:90%;content:"";display:block}.heroView[data-v-1b9f73e8]:after{right:0;bottom:-20px;height:100px;z-index:-2;background:#f0f3f6}.wrapper[data-v-1b9f73e8]{max-width:1040px;width:calc(100% - 40px);margin:auto auto 20px;padding:0 20px}.heroHeading[data-v-1b9f73e8]{color:#fff;margin-bottom:20px}.topText[data-v-1b9f73e8]{color:#fff;line-height:1.5;font-size:14px;letter-spacing:.1em;max-width:90%}',
        ''
      ]),
        (t.exports = e)
    },
    170: function(t, e, r) {
      'use strict'
      var n = {
          components: { Heading: r(73).a },
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
        o = (r(168), r(6)),
        component = Object(o.a)(
          n,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r(
              'section',
              { staticClass: 'heroView', style: t.setBgImageUrl },
              [
                r(
                  'div',
                  { staticClass: 'wrapper' },
                  [
                    t.headingText && t.headingSubText
                      ? r('Heading', {
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
                      ? r('p', {
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
    172: function(t, e, r) {
      var content = r(188)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(15).default)('727b0e72', content, !0, { sourceMap: !1 })
    },
    173: function(t, e, r) {
      var content = r(190)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(15).default)('2fd9ccbb', content, !0, { sourceMap: !1 })
    },
    187: function(t, e, r) {
      'use strict'
      var n = r(172)
      r.n(n).a
    },
    188: function(t, e, r) {
      ;(e = r(14)(!1)).push([
        t.i,
        '.frame[data-v-01dbc482]{padding-top:14px}.title[data-v-01dbc482]{font-size:20px;color:#144877;text-decoration:none;line-height:1.7}.title[data-v-01dbc482]:hover{text-decoration:underline}',
        ''
      ]),
        (t.exports = e)
    },
    189: function(t, e, r) {
      'use strict'
      var n = r(173)
      r.n(n).a
    },
    190: function(t, e, r) {
      ;(e = r(14)(!1)).push([
        t.i,
        '.wrapper[data-v-22b67367]{padding:0 20px;text-align:center;color:#040e17}',
        ''
      ]),
        (t.exports = e)
    },
    212: function(t, e, r) {
      'use strict'
      r.r(e)
      var n = r(170),
        o = { props: { date: String, title: String } },
        c = (r(187), r(6)),
        l = Object(c.a)(
          o,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'div',
              { staticClass: 'frame' },
              [
                e(
                  'n-link',
                  {
                    staticClass: 'title',
                    attrs: { to: this.date, append: '' }
                  },
                  [this._v(this._s(this.title))]
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          '01dbc482',
          null
        ).exports,
        d = r(73),
        f = {
          components: { HeroView: n.a, Heading: d.a, ArticleItem: l },
          head: function() {
            return {
              title: 'ブログ | 株式会社ハイウィザード',
              meta: [
                {
                  hid: 'og:title',
                  property: 'og:title',
                  content: 'ブログ | 株式会社ハイウィザード'
                }
              ]
            }
          },
          data: function() {
            return {
              articleItemList: [
                ['20200403', 'C#について'],
                ['20200402', '勉強会について'],
                ['20200401', '企業ブログを開設しました！']
              ]
            }
          }
        },
        h =
          (r(189),
          Object(c.a)(
            f,
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e(
                'div',
                [
                  e('HeroView', {
                    attrs: {
                      headingText: 'ARTICLE',
                      headingSubText: 'ブログ',
                      imgSrc: '/image/contact.jpg'
                    }
                  }),
                  e(
                    'div',
                    { staticClass: 'wrapper' },
                    this._l(this.articleItemList, function(s, t, r) {
                      return e('ArticleItem', {
                        key: r,
                        attrs: { date: s[0], title: s[1] }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            },
            [],
            !1,
            null,
            '22b67367',
            null
          ))
      e.default = h.exports
    }
  }
])
