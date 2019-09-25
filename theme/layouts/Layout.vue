<template>
  <div class="layout">
    <!-- <ul id="default-layout">
      <li v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>-->
    <div class="layout-article">
      <div class="layout-article_item" v-for="(page,index) in $pagination.pages" :key="index">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
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
  components: {},
}
</script>

<style lang="stylus">
.layout
  width 800px
  margin 0 auto
  margin-top 45px
</style>
