<template>
  <div class="layout">
    <div class="layout-article">
      <div class="layout-article-item" v-for="(page,index) in $pagination.pages" :key="index">
        <!-- <router-link class="page-link" :to="page.path">{{ page.title }}</router-link> -->
        <div class="layout-article-item_header">
          <div class="ui-post-date" v-if="page.frontmatter.date">
            <span>{{ new Date(page.frontmatter.date.trim()).toLocaleDateString(lang,options) }}</span>
          </div>
          <div v-if="page.frontmatter.author">
            <span>{{ page.frontmatter.author }}</span>
          </div>
        </div>
        <div class="layout-article-item_summary">
          <span>{{ page.frontmatter.summary || page.summary }}</span>
        </div>
        <div class="layout-article-item_footer">
          <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
        </div>
        <div class="layout-article-item_image">
          <img src="/kanban1.jpg" alt />
        </div>
      </div>
    </div>

    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      lang: 'zh-CN',
      options: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    }
  }
}
</script>

<style lang="stylus">
.layout
  width 980px
  margin 0 auto
  margin-top 45px
  .layout-article-item
    width 100%
    height 320px
    display grid
    grid-template-columns 520px 1fr
    grid-template-rows 60px 180px 80px
    grid-template-areas 'image header' 'image summary' 'image footer'
    margin-bottom 40px
    .layout-article-item_header
      grid-area header
    .layout-article-item_summary
      grid-area summary
    .layout-article-item_footer
      grid-area footer
    .layout-article-item_image
      grid-area image
      height 100%
      img
        width 100%
        height 100%
        display block
        overflow hidden
.layout-article-item_header,.layout-article-item_summary,.layout-article-item_footer
  padding 20px
</style>
