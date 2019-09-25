<template>
  <div class="header">
    <div class="header-logo">
      <router-link class="header-logo_title" :to="'/'" exact>{{$site.title}}</router-link>
    </div>
    <div class="header-nav">
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
import NavLink from '@theme/global-components/NavLink.vue'

export default {
  name: 'header',
  components: {
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
  border-bottom 1px solid lighten($accentColor, 80%)
  .header-nav_link
    display flex
.header-logo_title
  font-size 28px
  font-weight 500
  text-decoration none
  color #000
</style>
