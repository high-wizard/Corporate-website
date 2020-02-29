;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
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
        c = (r(168), r(6)),
        component = Object(c.a)(
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
    176: function(t, e, r) {
      var content = r(187)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(15).default)('3283d29e', content, !0, { sourceMap: !1 })
    },
    186: function(t, e, r) {
      'use strict'
      var n = r(176)
      r.n(n).a
    },
    187: function(t, e, r) {
      ;(e = r(14)(!1)).push([
        t.i,
        '.wrapper[data-v-08af8372]{padding:0 20px;color:#040e17;line-height:1.5}.greeting[data-v-08af8372]{text-align:center;font-size:14px}.greeting p[data-v-08af8372]:not(:first-of-type){margin-top:10px}.recruitInfomation[data-v-08af8372]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:120px auto 0}.item[data-v-08af8372]{margin-top:60px}.item .text[data-v-08af8372]{margin-top:20px;font-size:14px}.contactUs[data-v-08af8372]{margin-top:60px}.contactUs .heading[data-v-08af8372]{margin-top:20px}.contactUs .text[data-v-08af8372]{font-size:14px}',
        ''
      ]),
        (t.exports = e)
    },
    201: function(t, e, r) {
      'use strict'
      r.r(e)
      var n = r(170),
        c = r(73),
        o = {
          components: { HeroView: n.a, Heading: c.a },
          head: function() {
            return {
              title: '採用情報 | 株式会社ハイウィザード',
              meta: [
                {
                  hid: 'og:title',
                  property: 'og:title',
                  content: '採用情報 | 株式会社ハイウィザード'
                }
              ]
            }
          }
        },
        l = (r(186), r(6)),
        component = Object(l.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e
            return r(
              'div',
              [
                r('HeroView', {
                  attrs: {
                    headingText: 'RECRUIT',
                    headingSubText: '採用情報',
                    imgSrc: '/image/recruit.jpg'
                  }
                }),
                r('div', { staticClass: 'wrapper' }, [
                  t._m(0),
                  r('div', { staticClass: 'recruitInfomation' }, [
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '募集業種' }
                        }),
                        r('p', { staticClass: 'text' }, [
                          t._v('システムエンジニア・プログラマー')
                        ])
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '仕事内容' }
                        }),
                        t._m(1)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '雇用形態' }
                        }),
                        t._m(2)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '応募資格' }
                        }),
                        r('p', { staticClass: 'text' }, [
                          t._v(
                            'プログラマーとしての実務経験1年以上（言語・フレームワーク・領域は不問です）'
                          )
                        ])
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '給与' }
                        }),
                        t._m(3)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '勤務地' }
                        }),
                        t._m(4)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '勤務時間' }
                        }),
                        r('p', { staticClass: 'text' }, [
                          t._v(
                            '9時〜18時（プロジェクトにより異なる場合がございます）月平均時間外労働時間：5.6時間'
                          )
                        ])
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '休日等' }
                        }),
                        r('p', { staticClass: 'text' }, [
                          t._v(
                            '通勤手当（上限規程なし）職能手当（スキルに応じて支給）'
                          )
                        ])
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '福利厚生' }
                        }),
                        t._m(5)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: { type: 'tertiary', text: '採用フロー' }
                        }),
                        t._m(6)
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'contactUs' },
                      [
                        r('Heading', {
                          attrs: { type: 'secondary', text: 'エントリー方法' }
                        }),
                        t._m(7),
                        r('Heading', {
                          staticClass: 'heading',
                          attrs: { type: 'tertiary', text: 'TEL' }
                        }),
                        t._m(8),
                        r('Heading', {
                          staticClass: 'heading',
                          attrs: { type: 'tertiary', text: 'MAIL' }
                        }),
                        r('p', { staticClass: 'text' }, [
                          t._v(
                            'recruit at high-wizard.com【履歴書及び職務経歴書】若しくは【ポートフォリオ等実績の分かる印刷物又はURL】をお送り下さい。'
                          )
                        ]),
                        r('Heading', {
                          staticClass: 'heading',
                          attrs: { type: 'tertiary', text: 'TEL' }
                        }),
                        r('p', { staticClass: 'text' }, [t._v('011-600-2455')])
                      ],
                      1
                    ),
                    r(
                      'div',
                      { staticClass: 'item' },
                      [
                        r('Heading', {
                          attrs: {
                            type: 'tertiary',
                            text: '業務委託契約でのお仕事をお探しの方へ'
                          }
                        }),
                        t._m(9)
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'greeting' }, [
                e('p', [
                  this._v('事業拡大につき、エンジニアの募集を行っています。')
                ]),
                e('p', [
                  this._v(
                    '弊社は元エンジニアでもある社長の意向により、エンジニアが働きやすく、のびのびと成長できる会社を目指しています。'
                  )
                ]),
                e('p', [
                  this._v(
                    '昨年出来たばかりの企業であり、新しい会社で働きたいという方にはピッタリの会社だと考えております。ぜひお気軽にご相談下さい。'
                  )
                ])
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v(
                  'Webシステムや業務系システムの設計・コーディング・テスト等、システム開発に関わる作業全般を行って頂きます。'
                ),
                e('br'),
                this._v(
                  '経験やスキル、興味や希望に応じて、最適な案件にアサインします。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('有期雇用契約社員（1年。契約更新の場合あり）'),
                e('br'),
                this._v(
                  '社内規程により、入社半年後から正社員昇格試験を受ける事が出来ます（面接試験）'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('月給 19〜35万円（職能手当込み）'),
                e('br'),
                this._v(
                  '前職給与・希望・経験・スキル等を勘案して決定させて頂きます'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v(
                  '弊社事務所（北海道札幌市中央区大通東4丁目4-53 ヒューガ大通スイート 401）'
                ),
                e('br'),
                this._v(
                  '業務の都合により、札幌市内のお客様先にて作業する場合がございます。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('各種社会保険、定期健康診断'),
                e('br'),
                this._v('出張手当'),
                e('br'),
                this._v('\n副業自由。独立支援も要相談'),
                e('br'),
                this._v('\n従業員貸付金制度（10万円程度を限度）'),
                e('br'),
                this._v(
                  '\n書籍購入・有料カンファレンス等参加費補助（月1万円程度を限度）'
                ),
                e('br'),
                this._v('\n他に欲しい物があればぜひご相談下さい')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('エントリー'),
                e('br'),
                this._v('書類選考'),
                e('br'),
                this._v('\nカジュアル面談（社長又は採用担当者）'),
                e('br'),
                this._v('\n面接（社長）'),
                e('br'),
                this._v('\n採用')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('以下の3つのうちどれか1つにてご連絡下さい。'),
                e('br'),
                this._v(
                  '質問やエントリー前のカジュアル面談等も歓迎しております。お気軽にご相談下さい。'
                )
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v('011-600-2455'),
                e('br'),
                this._v('担当：経営管理部 室田')
              ])
            },
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('p', { staticClass: 'text' }, [
                this._v(
                  '弊社ではフリーランスエンジニアの方も募集しております。'
                ),
                e('br'),
                this._v(
                  '上記の内容とは条件が異なりますので、詳しくは採用担当者へお問い合わせ下さい。'
                )
              ])
            }
          ],
          !1,
          null,
          '08af8372',
          null
        )
      e.default = component.exports
    }
  }
])
