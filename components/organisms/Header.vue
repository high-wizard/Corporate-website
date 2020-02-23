<template lang="pug">
  header.header
    .headerContents
      Logo
      ul.headerMenu
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

  .headerMenu
    display: flex
    .headerMenuItem
      margin-left: 20px
      font-family: 'Montserrat'
      a
        text-decoration: none
        color: #040e17
        &:hover
          color: #144877
</style>
