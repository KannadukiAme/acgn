<template>
  <Content class="markdown-body" />
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus">
.markdown-body
  box-sizing border-box
  min-width 200px
  max-width 980px
  margin 0 auto
  padding 45px
  a
    color $accentColor !important
@media (max-width: 767px)
  .markdown-body
    padding 15px
</style>

<style src="github-markdown-css/github-markdown.css"></style>
