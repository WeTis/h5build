<!-- 顶部导航组件 -->
<template>
    <div class="WT-topNav" v-html="msg.tmp" v-bind:class="{templateHtmlBorder: index == num}" v-on:click.stop="clickPartnBox" v-bind:style="styleHtml" v-if="msg.type == 'topNav' " >
      
    </div>
</template>

<script>
export default {
  name: 'topNavTemplate',
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
.WT-topNav{
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
