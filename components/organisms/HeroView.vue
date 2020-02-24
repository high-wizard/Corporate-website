<template lang="pug">
  section.heroView
    .wrapper
      Heading.heroHeading(type='main' text='Test' subText='サブテキスト')
</template>

<script>
import Heading from '@/components/molecules/Heading'

export default {
  components: {
    Heading
  }
}
</script>

<style lang="sass" scoped>
.heroView
  position: relative
  height: 400px
  display: flex
  flex-direction: column
  margin-bottom: 20px
  @media screen and (max-width: 719px)
    height: 250px
  &:before
    position: absolute
    left: 0
    top: 0
    width: 90%
    height: 100%
    content: ''
    display: block
    z-index: -1
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(104.04deg, rgba(21, 75, 120, 0.4) 0%, rgba(160, 213, 198, 0.4) 100%), linear-gradient(360deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%), url('~assets/image/contact.jpg')
  &:after
    position: absolute
    right: 0
    bottom: -20px
    width: 90%
    height: 100px
    content: ''
    display: block
    z-index: -2
    background: #f0f3f6

.wrapper
  max-width: 1040px
  width: calc(100% - 40px)
  margin: auto auto 40px
  padding: 0 20px

.heroHeading
  color: #ffffff
</style>
