<!-- 文本框组件 -->

<template>
  <div class="textBox" contenteditable="true"   @input="changeText">
    
  </div>
</template>

<script>
export default {
  name: 'textBox',
  props: {
    msg: String
  },
  data () {
    return {
      message: ""
    }
  },
  created() {
    
  },
  methods:{
    changeText(){
      this.message = {tmp:this.$el.innerHTML,type:'div'};
      this.$emit('input',this.message);
    }
  }
}
</script>

<style scoped lang="scss">
.textBox{
   width: 550px;
   height: 200px;
   border: 1px solid #ccc;
   background-color: #ffffff;
   margin: 0 auto;
   margin-top: 20px;
   overflow: auto;
   font-size: 16px;
 }
</style>
