<template>
  <div class="kanban">
    <div class="kanban-hitokoto">
      <div class="kanban-serifu">{{ serifu }}</div>
      <div class="kanban-author">{{ author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kanban',
  data() {
    return {
      serifu: 'どれほどの速さで生きれば、きみにまた会えるか。',
      author: '秒速5センチメートル'
    }
  }
}
</script>

<style lang="stylus">
.kanban
  height 100%
  background center no-repeat url('/kanban1.jpg')
  // filter blur(3px)
  filter grayscale(60%) drop-shadow(0px 2px 10px black)
  display flex
  justify-content center
  align-items center
  .kanban-hitokoto
    // transform rotate(10deg) scale(1.2, 1.2)
    width 985px
    font-weight 800
    font-size 28px
    .kanban-author
      text-align right
</style>
