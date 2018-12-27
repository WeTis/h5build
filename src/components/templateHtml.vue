<!-- 模板Html组件 -->
<template>
  <!-- <div class="templateHtml"> -->
    <div class="WT-item" v-html="msg.tmp" v-bind:style="styleHtml" v-if="msg.type == 'div' " >
      
    </div>
    <img v-bind:src="msg.tmp" v-bind:style="styleHtml" v-if="msg.type == 'img' ">
  <!-- </div> -->
</template>

<script>
export default {
  name: 'templateHtml',
  props: {
    msg: Object,
    styleHtml: Object
  },
  data () {
    return {
      message: "",
      src: "",
    }
  },
  created() {
    
  },
  methods:{

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
</style>
