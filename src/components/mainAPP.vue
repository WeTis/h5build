<template>
  <div class="mainAPP">
    <moduleList/>
    <viewS ref="viewS" v-bind:msg="inputText" v-bind:nowIndex="viewNowIndex" v-bind:styleAll="styleArr"/>
    <bounced v-on:input-text="getInputText"/>
    <generalTool ref="generalTool" v-on:input-style="getStyle"/>
     <imgBox />
  </div>
</template>

<script>
import moduleList from './moduleList';
import viewS from './viewS';
import bounced from './bounced';
import generalTool from './generalTool';
import imgBox from './imgBox';

export default {
  name: 'mainAPP',
  props: {
    msg: String
  },
  components: {
    moduleList,
    viewS,
    bounced,
    generalTool,
    imgBox
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
      this.styleArr = [];
      this.styleArr.push(...data);
      console.log(data);
    },
    showGeneralTool(index){
       // 触发通用组件方法
       this.$refs.generalTool.show(index);
    },
    hideGeneralTool(){
       // 触发通用组件方法
       this.$refs.generalTool.hide();
    },
    modifyInputText(index,upindex){
      console.log("触发上移");
      let nowText = this.inputText[index];
      let upText = this.inputText[upindex];
      this.inputText[index] = upText;
      this.inputText[upindex] = nowText;
      return this.inputText;
    },
    delectInputText(index){
      this.inputText.splice(index,1);
      return this.inputText;
    },
    triggerDelectToolValue(index){
      this.styleArr = [];
      this.styleArr.push(...this.$refs.generalTool.delectToolValue(index));
    },
    triggerModifyToolValue(index,upindex){
     return this.$refs.generalTool.modifyToolValue(index,upindex);
    },
    addImg(dom){
      this.inputText.push(dom);
      
    }
  }
}
</script>

<style scoped lang="scss">

</style>
