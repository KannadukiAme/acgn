<template>
  <div class="footer">
    <span class="footer_copyright">{{ copyright}}</span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    copyright() {
      return (
        this.$themeConfig.footer && this.$themeConfig.footer.copyright || []
      )
    },
  }
}
</script>

<style lang="stylus">
.footer
  display flex
  justify-content center
  align-items center
  // border-top 1px solid gray
</style>
