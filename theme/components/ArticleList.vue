<template>
  <div class="article-list">
    <div class="article-list-item" v-for="(page,index) in $pagination.pages" :key="index">
      <!-- 放置图片 -->
      <div class="article-list-item-image">
        <img :src="page.frontmatter.cover || '/akarin.png'" alt />
      </div>
      <!-- 放置图片结束 -->

      <!-- 放置摘要 -->
      <div class="article-list-item-summary">
        <h2>{{ page.title }}</h2>
        <div class="article-list-item-summary_info">
          <span
            class="article-list-item-summary_author"
            v-if="page.frontmatter.author"
          >By {{ page.frontmatter.author }}</span>
          <span
            class="article-list-item-summary_date"
            v-if="page.frontmatter.date"
          >{{ new Date(page.frontmatter.date.trim()).toLocaleDateString(lang,options) }}</span>
        </div>
        <span>{{ page.frontmatter.summary || page.summary }}</span>
      </div>
      <!-- 放置摘要结束 -->

      <!-- 放置尾部 -->
      <div class="article-list-item-footer">
        <!-- <router-link class="page-link" :to="page.path">{{ page.title }}</router-link> -->
        <div>标签 {{ page.frontmatter.tag }}</div>
        <router-link class="article-list-item-footer_more" :to="page.path">MORE...</router-link>
      </div>
      <!-- 放置尾部结束 -->
    </div>

    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data() {
    return {
      lang: 'zh-CN',
      options: { year: 'numeric', month: 'long', day: 'numeric' }
    }
  }
}
</script>

<style lang="stylus">
.article-list
  width 980px
  margin 0 auto
  margin-top 45px
  .article-list-item
    width 100%
    height 600px
    padding 10px
    background-color #fff
    display grid
    grid-template-columns 100%
    grid-template-rows 360px 180px 60px
    grid-template-areas 'image' 'summary' 'footer'
    margin-bottom 40px
    .article-list-item-summary
      grid-area summary
    .article-list-item-footer
      grid-area footer
      display flex
      justify-content space-between
    .article-list-item-image
      grid-area image
      height 100%
      img
        object-fit cover
        width 100%
        height 100%
        display block
        border-radius 5px
.article-list-item-summary, .article-list-item-footer
  padding 20px
.article-list-item-summary_info, .article-list-item-footer
  font-size 14px
  color #DDDDDD
.article-list-item-summary_info
  display flex
  height 50px
.article-list-item-summary_date
  margin-left 10px
.article-list-item-footer_more
  text-decoration none
  color #DDDDDD
.article-list-item-footer_more:hover
  margin-bottom -2px
  border-bottom 2px solid $accentColor
  color $accentColor
</style>
