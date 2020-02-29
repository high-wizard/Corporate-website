;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
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
    175: function(t, e, n) {
      var content = n(185)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(15).default)('4b6b7654', content, !0, { sourceMap: !1 })
    },
    184: function(t, e, n) {
      'use strict'
      var r = n(175)
      n.n(r).a
    },
    185: function(t, e, n) {
      ;(e = n(14)(!1)).push([
        t.i,
        '.wrapper[data-v-1c64c865]{padding:0 20px;text-align:center;color:#040e17}.greeting[data-v-1c64c865]{font-size:14px;line-height:1.5}.contactItem[data-v-1c64c865]{margin-top:60px}.contactAddress[data-v-1c64c865]{font-size:24px;font-weight:700;color:#144877;margin-top:20px}@media screen and (max-width:330px){.contactAddress[data-v-1c64c865]{font-size:20px}}',
        ''
      ]),
        (t.exports = e)
    },
    200: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = n(170),
        o = n(73),
        c = {
          components: { HeroView: r.a, Heading: o.a },
          head: function() {
            return {
              title: 'お問い合わせ | 株式会社ハイウィザード',
              meta: [
                {
                  hid: 'og:title',
                  property: 'og:title',
                  content: 'お問い合わせ | 株式会社ハイウィザード'
                }
              ]
            }
          }
        },
        d = (n(184), n(6)),
        component = Object(d.a)(
          c,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'div',
              [
                e('HeroView', {
                  attrs: {
                    headingText: 'CONTACT',
                    headingSubText: 'お問い合わせ',
                    imgSrc: '/image/contact.jpg'
                  }
                }),
                e('div', { staticClass: 'wrapper' }, [
                  e('p', { staticClass: 'greeting' }, [
                    this._v(
                      '株式会社ハイウィザードについてのご質問などがございましたら、下記の窓口よりお問い合わせ下さい。'
                    )
                  ]),
                  e(
                    'div',
                    { staticClass: 'contactItem' },
                    [
                      e('Heading', {
                        attrs: { type: 'tertiary', text: 'TEL' }
                      }),
                      e('p', { staticClass: 'contactAddress' }, [
                        this._v('011-600-2455')
                      ])
                    ],
                    1
                  ),
                  e(
                    'div',
                    { staticClass: 'contactItem' },
                    [
                      e('Heading', {
                        attrs: { type: 'tertiary', text: 'MAIL' }
                      }),
                      e('p', { staticClass: 'contactAddress' }, [
                        this._v('info@high-wizard.com')
                      ])
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
          '1c64c865',
          null
        )
      e.default = component.exports
    }
  }
])
