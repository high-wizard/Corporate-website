<template lang="pug">
  .newsItem
    Heading.heading(type='tertiary' :text='title')
    p.date(v-if='date') {{date}}
    p.introduction {{introduction}}
    n-link.link(v-if='link && linkTo' :to='linkTo') {{link}}
</template>

<script>
import Heading from '@/components/molecules/Heading'

export default {
  components: {
    Heading
  },
  props: {
    title: String,
    introduction: String,
    date: String,
    link: String,
    linkTo: String
  }
}
</script>

<style lang="sass" scoped>
.newsItem
  margin: 40px 0 0
  &:only-child
    margin: 40px auto 0

  .heading
    padding-bottom: 10px
    border-bottom: 2px solid #d6d8dC

.introduction
  color: #040e17
  font-size: 14px
  line-height: 1.7
  padding-top: 16px

.link
  display: inline-block
  color: #144877
  font-size: 14px
  margin-top: 10px
  text-decoration: none

.date
  text-align: right
  color: #686e73
  font-size: 14px
  margin-top: 10px
</style>
