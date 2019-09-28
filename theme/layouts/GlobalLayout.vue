<template>
  <div id="global-layout">
    <Header class="layout_header" />
    <Kanban class="layout_kanban" />
    <DefaultGlobalLayout class="layout_content" />
    <Footer class="layout_footer" />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'

import Header from '@theme/components/Header.vue'
import Kanban from '@theme/components/Kanban.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: { DefaultGlobalLayout: GlobalLayout, Header, Kanban, Footer },
}
</script>

<style lang="stylus">
#global-layout
  display grid
  grid-template-columns 1fr
  grid-template-rows 60px 300px 1fr 120px
  grid-template-areas 'header' 'kanban' 'content' 'footer'
  .layout_header
    background-color $bgColor
    grid-area header
    position -webkit-sticky
    position sticky
    top 0
    z-index 1
  .layout_kanban
    grid-area kanban
  .layout_content
    grid-area content
  .layout_footer
    grid-area footer
</style>
