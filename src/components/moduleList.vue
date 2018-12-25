<template>
  <div class="moduleList">
    组件列表
    <div class="title">文本</div>
    <ul>
      <li>标题</li>
      <li>副标题</li>
      <li>段落</li>
      <li>链接</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'moduleList',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
 
 .moduleList{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  font-size: 16px;
  .title{
    font-size: 16px;
  }
  li{
    font-size: 16px;
  }
 }
</style>
