<template lang="pug">
  footer
    section.information
      .wrapper
        .contact
          h3.informationTitle
            .english CONTACT
            .japanese お問い合わせ
          p.contactTo 011-600-2455
            span.or or
            n-link(to='contact').link Contact Us
        .footerContents
          .aboutUs
            Logo(mode='white')
            p.address
              span.postalCode 〒060-0041
              span 札幌市中央区大通東4丁目4-53
              spab.building ヒューガ大通スイート401
          ul.footerNav
            li.footerNavItem
              n-link(to='/company') COMPANY
            li.footerNavItem
              n-link(to='/service') SERVICE
            li.footerNavItem
              n-link(to='/contact') CONTACT
            li.footerNavItem
              n-link(to='/recruit') RECRUIT
    section.copyright
      p © High Wizard Inc.

</template>

<script>
import Logo from '@/components/atoms/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="sass" scoped>
.information
  background: #2b3137
  color: #ffffff
  padding: 80px 0

.wrapper
  max-width: 1040px
  margin: 0 auto
  padding: 0 20px

.informationTitle
  .english
    font-size: 20px
    font-weight: bold
    line-height: 24px
    letter-spacing: 0.2em
  .japanese
    font-size: 16px
    font-weight: bold
    margin-top: 10px

.contactTo
  margin-top: 30px
  font-size: 14px
  .or
    display: inline-block
    margin: 0 1em
  .link
    text-decoration: underline
    color: #ffffff

.footerContents
  margin-top: 60px
  font-size: 14px
  display: flex
  justify-content: space-between

  .address
    margin-top: 20px
    line-height: 24px
    .postalCode
      display: block
    .building
      display: inline-block

  .footerNavItem
    margin: 0 0 15px
    a
      color: #ffffff
      text-decoration: none
  @media screen and (max-width: 719px)
    display: block
    .footerNav
      display: none

.copyright
  font-size: 14px
  color: #ffffff
  height: 50px
  background: #040e17
  display: flex
  align-items: center
  justify-content: center
</style>
