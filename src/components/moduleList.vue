<template>
  <div class="moduleList">
    组件列表
    <textBox />
  </div>
</template>

<script>
import textBox from './textBox';

export default {
  name: 'moduleList',
  props: {
    msg: String
  },
  components: {
    textBox
  }
}
</script>

<style scoped lang="scss">
 
 .moduleList{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 400px;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
 }
</style>
