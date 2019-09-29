<template>
  <div class="layout">
    <div class="layout-article">
      <div class="layout-article-item" v-for="(page,index) in $pagination.pages" :key="index">
        <!-- 放置图片 -->
        <div class="layout-article-item-image">
          <img :src="page.frontmatter.cover || '/akarin.png'" alt />
        </div>
        <!-- 放置图片结束 -->

        <!-- 放置摘要 -->
        <div class="layout-article-item-summary">
          <h2>{{ page.title }}</h2>
          <div class="layout-article-item-summary_info">
            <span
              class="layout-article-item-summary_author"
              v-if="page.frontmatter.author"
            >By {{ page.frontmatter.author }}</span>
            <span
              class="layout-article-item-summary_date"
              v-if="page.frontmatter.date"
            >{{ new Date(page.frontmatter.date.trim()).toLocaleDateString(lang,options) }}</span>
          </div>
          <span>{{ page.frontmatter.summary || page.summary }}</span>
        </div>
        <!-- 放置摘要结束 -->

        <!-- 放置尾部 -->
        <div class="layout-article-item-footer">
          <!-- <router-link class="page-link" :to="page.path">{{ page.title }}</router-link> -->
          <div>标签 {{ page.frontmatter.tag }}</div>
          <router-link class="layout-article-item-footer_more" :to="page.path">MORE...</router-link>
        </div>
        <!-- 放置尾部结束 -->
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
      options: { year: 'numeric', month: 'long', day: 'numeric' }
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
    height 600px
    padding 10px
    background-color #fff
    display grid
    grid-template-columns 100%
    grid-template-rows 360px 180px 60px
    grid-template-areas 'image' 'summary' 'footer'
    margin-bottom 40px
    .layout-article-item-summary
      grid-area summary
    .layout-article-item-footer
      grid-area footer
      display flex
      justify-content space-between
    .layout-article-item-image
      grid-area image
      height 100%
      img
        object-fit cover
        width 100%
        height 100%
        display block
        border-radius 5px
.layout-article-item-summary, .layout-article-item-footer
  padding 20px
.layout-article-item-summary_info, .layout-article-item-footer
  font-size 14px
  color #DDDDDD
.layout-article-item-summary_info
  display flex
  height 50px
.layout-article-item-summary_date
  margin-left 10px
.layout-article-item-footer_more
  text-decoration none
  color #DDDDDD
.layout-article-item-footer_more:hover
  margin-bottom -2px
  border-bottom 2px solid $accentColor
  color $accentColor
</style>
