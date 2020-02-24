<template lang="pug">
  div
    HeroView(headingText='TEST' headingSubText='サブテキスト' imgSrc='/image/contact.jpg')
</template>

<script>
import Heading from '@/components/molecules/Heading'
import HeroView from '@/components/organisms/HeroView'

export default {
  components: {
    Heading,
    HeroView
  }
}
</script>

<style lang="sass" scoped></style>
