<template>
  <div class="nav-link">
    <router-link class="nav-link_text" :to="link" exact>{{text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: String,
    text: String
  }
}
</script>

<style lang="stylus">
.nav-link
  margin 0 10px 0 10px
  display inline-block
  .nav-link_text
    text-decoration none
    color #000
  .nav-link_text:hover, .nav-link_text.router-link-active
    margin-bottom -2px
    border-bottom 2px solid $accentColor
    color $accentColor
</style>
