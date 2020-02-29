<template lang="pug">
  header.header
    nav.headerContents
      Logo(@click.native='initHamburgerMenuDisplay')
      img.humburger(src='@/assets/icon/Hamburger.svg' @click='toggleHamburgerMenuDisplay')
      ul.headerMenu(v-if='hamburgerMenuDisplay')
        li.headerMenuItem
          n-link(to='/company' @click.native='initHamburgerMenuDisplay') COMPANY
        li.headerMenuItem
          n-link(to='/service' @click.native='initHamburgerMenuDisplay') SERVICE
        li.headerMenuItem
          n-link(to='/contact' @click.native='initHamburgerMenuDisplay') CONTACT
        li.headerMenuItem
          n-link(to='/recruit' @click.native='initHamburgerMenuDisplay') RECRUIT
</template>

<script>
import Logo from '@/components/atoms/Logo'

export default {
  components: {
    Logo
  },
  data: () => ({
    hamburgerMenuDisplay: true
  }),
  methods: {
    toggleHamburgerMenuDisplay: function() {
      this.hamburgerMenuDisplay = !this.hamburgerMenuDisplay
    },
    initHamburgerMenuDisplay: function() {
      this.hamburgerMenuDisplay = window.innerWidth >= 720 ? true : false
    }
  },
  mounted: function() {
    this.initHamburgerMenuDisplay()
    window.addEventListener('resize', this.initHamburgerMenuDisplay)
  }
}
</script>

<style lang="sass" scoped>
.header
  border-bottom: 1px solid #d6d8dc
  position: fixed
  width: 100%
  top: 0
  background: #ffffff
  z-index: 100
  .headerContents
    max-width: 1040px
    margin: 0 auto
    padding: 0 20px
    display: flex
    justify-content: space-between
    align-items: center

  .headerMenuItem
    a
      text-decoration: none
      color: #040e17
      font-size: 14px
      &:hover
        color: #144877

  @media screen and (min-width: 720px)
    .humburger
      display: none
    .headerMenu
      display: flex
      .headerMenuItem
        margin-left: 20px

  @media screen and (max-width: 719px)
    .headerMenu
      display: block
      width: 100%
      text-align: right
      position: absolute
      top: 79px
      right: 0px
      padding-right: 20px
      border-bottom: 1px solid #d6d8dc
      background: #ffffff
      z-index: 100
      .headerMenuItem
        display: block
        margin: 2em 0
</style>
