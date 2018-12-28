<!-- 模板Html组件 -->
<template>

      <img  v-on:click.stop="clickPartnBox" v-bind:src="msg.tmp" v-bind:style="styleHtml" style="width: 100%;" v-if="msg.type == 'img' ">
</template>

<script>
export default {
  name: 'imgTemplate',
  props: {
    msg: Object,
    styleHtml: Object,
    index: Number,
    num: Number
  },
  data () {
    return {
      message: "",
      src: "",
      border: false
    }
  },
  created() {
    
  },
  methods:{
    clickPartnBox(){
        this.$parent.clickBox(this.index);
    }
  }
}
</script>

<style scoped lang="scss">
.WT-item{
    font-size: 16px;
 
      word-wrap: break-word;
    
    div{
      font-size: 16px;
    }
  }
.templateHtmlBorder{
  position:relative;
  &:before{
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position:absolute;
    border: 1px dashed #4e9dee;
    top: 0;
    left: 0;
  }
}
</style>
