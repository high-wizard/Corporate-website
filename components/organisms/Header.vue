<template lang="pug">
  header.header
    .headerContents
      Logo
      img.humburger(src='@/assets/icon/Hamburger.svg' @click='toggleHamburgerMenuDisplay')
      ul.headerMenu(v-if='hamburgerMenuDisplay')
        li.headerMenuItem
          n-link(to='#') COMPANY
        li.headerMenuItem
          n-link(to='#') SERVICE
        li.headerMenuItem
          n-link(to='#') CONTACT
        li.headerMenuItem
          n-link(to='#') RECRUIT
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
    }
  },
  mounted: function() {
    this.hamburgerMenuDisplay = window.innerWidth >= 720 ? true : false
  }
}
</script>

<style lang="sass" scoped>
.header
  border-bottom: 1px solid #d6d8dc
  .headerContents
    max-width: 1040px
    margin: 0 auto
    padding: 0 20px
    display: flex
    justify-content: space-between
    align-items: center

  .headerMenuItem
    font-family: 'Montserrat'
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
      width: calc(100% - 20px * 2)
      text-align: right
      position: absolute
      top: 79px
      right: 20px
      border-bottom: 1px solid #d6d8dc
      background: #ffffff
      .headerMenuItem
        display: block
        margin: 2em 0
</style>
