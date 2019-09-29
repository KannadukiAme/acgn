<template>
  <div class="post">
    <Header class="post-header" />
    <Content class="post-content markdown-body" />
    <Footer class="post-footer" />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>

<style lang="stylus">
.post
  display grid
  grid-template-columns 1fr
  grid-template-rows 60px 1fr 120px
  grid-template-areas 'header' 'content' 'footer'
.post-header
  background-color $bgColor
  grid-area header
  position -webkit-sticky
  position sticky
.post-content
  grid-area content
  background-color #fff
  margin-top 40px
  a
    color $accentColor !important
.markdown-body
  box-sizing border-box
  min-width 200px
  max-width 980px
  margin 0 auto
  padding 45px
@media (max-width: 767px)
  .markdown-body
    padding 15px
.post-footer
  grid-area footer
</style>

<style src="github-markdown-css/github-markdown.css"></style>
