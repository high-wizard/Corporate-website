<template lang="pug">
  component
    h1(v-if='type === "main"')
      | {{ text }}
      p.subText(v-if='subText !== ""') {{ subText }}
    h2(v-if='type === "secondary"')
      | {{ text }}
      p.subText(v-if='subText !== ""') {{ subText }}
    h3(v-if='type === "tertiary"')
      | {{ text }}
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    subText: String
  }
}
</script>

<style lang="sass" scoped>
h1
  font-size: 34px
  letter-spacing: .2em
  line-height: 1
  .subText
    margin-top: 10px
    font-size: 20px
    letter-spacing: 0
    font-weight: bold

h2
  font-size: 20px
  letter-spacing: 0.2em
  font-weight: bold
  .subText
    margin-top: 10px
    font-size: 16px
    letter-spacing: 0

h3
  font-size: 16px
  letter-spacing: 0
  font-weight: bold
</style>
