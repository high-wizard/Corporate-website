<template lang="pug">
  div.frame
    n-link.title(:to='date' append) {{ title }}
</template>

<script>
export default {
  props: {
    date: String,
    title: String
  }
}
</script>

<style lang="sass" scoped>
.frame
  padding-top: 14px

.title
  font-size: 20px
  color: #144877
  text-decoration: none
  line-height: 1.7
.title:hover
  text-decoration: underline
</style>
