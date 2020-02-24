<template lang="pug">
  .serviceItem
    Heading(type='tertiary' :text='title')
    p.introduction {{introduction}}
    p.client(v-if='client') 取引先：{{client}}
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
    client: String
  }
}
</script>

<style lang="sass" scoped>
.serviceItem
  width: 100%
  max-width: 320px
  margin: 60px 20px 0
  &:only-child
    margin: 60px auto 0

.introduction
  color: #040E17
  font-size: 14px
  line-height: 1.7
  margin-top: 10px
  padding-top: 16px
  border-top: 2px solid #d6d8dC

.client
  color: #686e73
  font-size: 12px
  margin-top: 6px
</style>
