<template>
  <div id="global-layout">
    <Header class="layout_header" />
    <DefaultGlobalLayout class="layout_content"/>
    <Footer class="layout_footer" />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'

import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: { DefaultGlobalLayout: GlobalLayout, Header, Footer },
}
</script>

<style lang="stylus">
#global-layout
  display grid
  grid-template-columns 1fr
  grid-template-rows 60px 1fr 120px
  grid-template-areas 'header' 'content' 'footer'
  .layout_header
    grid-area header
  .layout_content
    grid-area content
  .layout_footer
    grid-area footer
</style>
