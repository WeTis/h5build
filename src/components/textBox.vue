<!-- 文本框组件 -->

<template>
  <div class="textBox">
    <textarea>
      输入文本框
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'textBox',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
