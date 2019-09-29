<template>
  <div class="layout">
    <Header class="layout-header" />
    <Kanban class="layout-kanban" />
    <ArticleList class="layout-article-list" />
    <Footer class="layout-footer" />
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue'
import Kanban from '@theme/components/Kanban.vue'
import ArticleList from '@theme/components/ArticleList.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    Header,
    Kanban,
    ArticleList,
    Footer
  }
}
</script>

<style lang="stylus">
.layout
  display grid
  grid-template-columns 1fr
  grid-template-rows 60px 300px 1fr 120px
  grid-template-areas 'header' 'kanban' 'content' 'footer'
  .layout-header
    background-color $bgColor
    grid-area header
    position -webkit-sticky
    position sticky
    top 0
    z-index 1
  .layout-kanban
    grid-area kanban
  .layout-article-list
    grid-area content
  .layout-footer
    grid-area footer
</style>
