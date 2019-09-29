<template>
  <div class="header">
    <div class="header-logo">
      <router-link class="header-logo_title" :to="'/'" exact>{{$site.title}}</router-link>
    </div>
    <div class="header-nav">
      <SearchBox class="header-nav_search" />
      <div class="header-nav_link" v-if="$themeConfig.nav">
        <NavLink
          :link="item.link"
          :text="item.text"
          v-for="(item,index) in $themeConfig.nav"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLink from '@theme/global-components/NavLink.vue'

export default {
  name: 'header',
  components: {
    SearchBox,
    NavLink
  }
}
</script>

<style lang="stylus">
.header
  display flex
  justify-content space-between
  align-items center
  padding 10px 15px 10px 15px
  filter drop-shadow(0px 2px 3px black)
  // border-bottom 1px solid lighten($accentColor, 80%)
  .header-nav
    display flex
    align-items center
    .header-nav_link
      display flex
.header-logo_title
  font-size 28px
  font-weight 500
  text-decoration none
  color #000
.header-nav_search input
  border-radius 0
</style>
