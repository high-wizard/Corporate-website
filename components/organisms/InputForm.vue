<template lang="pug">
  div(id='form')
    form(method='post' action='https://docs.google.com/forms/u/1/d/e/1FAIpQLSdN57aAnhGRjUnBfsVBb8O8kcov-Dx3PfYy6m3wGmpsz9P-0g/formResponse' target='submitComplate' v-bind:style='beforeDisplay')
      p
        input.textbox.input(type='text' name='entry.321627631' v-model='name' placeholder='【必須】お名前(ニックネームOK)' required)
      p
        input.textbox.input(type='text' name='entry.270617219' v-model='email' placeholder='【必須】メールアドレス' required)
      p
        textarea.input.textarea(name='entry.1703700739' v-model='hopeDate' placeholder='【必須】ご希望の日時\r\n\r\n例\r\n10/21 17:30〜\r\n10/22 18:00〜' required)
      p
        textarea.input.textarea(name='entry.709254892' placeholder='【任意】その他\r\n\r\n例\r\n焼肉食べたいです。\r\n')
      p.bottom
        input.btn(type='submit' value='送信' v-on:click='post')
    iframe(name='submitComplate' style='display:none')
    p.message(v-bind:style='afterDisplay') お申込み頂き、誠にありがとうございます。
    p.message(v-bind:style='afterDisplay') ３営業日以内にご返事のメールをいたします。
    </template>
<script>
export default {
  data: () => ({
    beforeDisplay: 'display: block',
    afterDisplay: 'display: none',
    name: '',
    email: '',
    hopeDate: ''
  }),
  methods: {
    post: function() {
      if (this.name != '' && this.email != '' && this.hopeDate != '') {
        setTimeout(() => {
          console.clear()
        }, 1000)
        const afterDisplay = this.afterDisplay
        this.afterDisplay = this.beforeDisplay
        this.beforeDisplay = afterDisplay
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.input
  padding: 5% 0
  border: none
  border-bottom: 1px solid #eaeaea
  padding-bottom: 1.25em
  &:focus
    outline: none
    border-color: #757575
  &:hover
    border-color: #757575
.textarea
  resize: none
  width: 80%
  height: 100px
.textbox
  width: 40%
  @media screen and (max-width: 719px)
    width: 80%
.btn
  margin-top: 15px
  margin-right: 20%
  float: right
  width:  55px
  height: 30px
  background-color: rgba(0,0,0,0)
  border: solid
  border-width: 0.1px
  border-color: #757575
  color: #757575
  font-size: 14px
  &:focus
    outline: none
.bottom
  margin-bottom: 60px
.message
  font-size: 21px
  color: #757575
  font-weight: 400
</style>
