<template lang="pug">
  div
    h1(v-if='type === "main"' :style='setStyle')
      | {{ text }}
      p.subText(v-if='subText') {{ subText }}
    h2(v-if='type === "secondary"' :style='setStyle')
      | {{ text }}
      p.subText(v-if='subText') {{ subText }}
    h3(v-if='type === "tertiary"' :style='setStyle')
      | {{ text }}
</template>

<script>
export default {
  computed: {
    setStyle: function() {
      return (
        (this.centering ? 'text-align: center;' : '') +
        (this.color ? `color: ${this.color}` : '')
      )
    }
  },
  props: {
    type: 'main' | 'secondary' | 'tertiary',
    text: String,
    subText: String,
    centering: Boolean,
    color: String
  }
}
</script>

<style lang="sass" scoped>
h1
  color: #040e17
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
  color: #040e17
  font-size: 20px
  letter-spacing: 0.2em
  font-weight: bold
  .subText
    margin-top: 10px
    font-size: 16px
    letter-spacing: 0

h3
  color: #040e17
  font-size: 16px
  letter-spacing: 0
  font-weight: bold
</style>
