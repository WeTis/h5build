<template>
  <div class="mainAPP">
    <moduleList/>
    <viewS ref="viewS" v-bind:msg="inputText" v-bind:nowIndex="viewNowIndex" v-bind:styleAll="styleArr"/>
    <bounced v-on:input-text="getInputText"/>
    <generalTool ref="generalTool" v-on:input-style="getStyle"/>
  </div>
</template>

<script>
import moduleList from './moduleList';
import viewS from './viewS';
import bounced from './bounced';
import generalTool from './generalTool';

export default {
  name: 'mainAPP',
  props: {
    msg: String
  },
  components: {
    moduleList,
    viewS,
    bounced,
    generalTool
  },
  data () {
    return {
       inputText: [],
       styleArr: [],
       viewNowIndex: [],
    }
  },
  created() {
    
  },
  methods:{
    getInputText(data){
      console.log(data);
      this.inputText.push(data);
    },
    getStyle(data){
      this.viewNowIndex.push(data[1]);
      this.styleArr.push(...data[0]);
      console.log(data);
    },
    showGeneralTool(index){
       // 触发通用组件方法
       this.$refs.generalTool.show(index);
    },
    hideGeneralTool(){
       // 触发通用组件方法
       this.$refs.generalTool.hide();
    }
  }
}
</script>

<style scoped lang="scss">

</style>
