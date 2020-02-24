<template lang="pug">
  div
    h1(v-if='type === "main"' :style='setTextAlign')
      | {{ text }}
      p.subText(v-if='subText') {{ subText }}
    h2(v-if='type === "secondary"' :style='setTextAlign')
      | {{ text }}
      p.subText(v-if='subText') {{ subText }}
    h3(v-if='type === "tertiary"' :style='setTextAlign')
      | {{ text }}
</template>

<script>
export default {
  computed: {
    setTextAlign: function() {
      if (this.centering) {
        return 'text-align: center;'
      }
      return ''
    }
  },
  props: {
    type: 'main' | 'secondary' | 'tertiary',
    text: String,
    subText: String,
    centering: Boolean
  }
}
</script>

<style lang="sass" scoped>
h1
  font-size: 34px
  letter-spacing: .2em
  line-height: 1
  @media screen and (max-width: 719px)
    font-size: 28px
  .subText
    margin-top: 10px
    font-size: 20px
    letter-spacing: 0
    font-weight: bold
    @media screen and (max-width: 719px)
      font-size: 18px

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
