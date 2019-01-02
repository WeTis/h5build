<!-- 通用工具栏 -->
<template>
  <div class="generalTool" v-bind:class="{hideGeneralToolBOX:hideGeneralTool}">
    <div class="toolS" v-for="item in toolValue" v-if="item.nowIndex == nowIndex">
      <div v-for="item in item.arr">
        <span>{{item.name}}</span>
        <input type="" v-bind:name="item.inputVal" v-model="itemInput.val"  v-for="itemInput in item.value"/>
      </div>
      
    </div>
    <div class="generalBtn">
      <span v-if="!hideGeneralTool" v-on:click="getStyle">确定</span>
      <span v-if="!hideGeneralTool">取消</span>
      <span v-on:click="hide" v-if="!hideGeneralTool">收起</span>
      <span v-on:click="show(nowIndex)" v-if="hideGeneralTool">展开</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'generalTool',
  props: {
    msg: String,
    indexNN: Number
  },
  data () {
    return {
      message: "",
      toolValue:[
        {
          nowIndex: 0,
          arr: [
            {
              name: "宽度",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "width"
            },
            {
              name: "高度",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "height"
            },
            {
              name: "颜色",
              value: [{val:""}],
              unit: [" "],
              inputVal: "color"
            },
            {
              name: "字号",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "fontSize"
            },
            {
              name: "字体",
              value: [{val:""}],
              unit: [" "],
              inputVal: "fontFamily"
            },
            {
              name: "背景色",
              value: [{val:""}],
              unit: [" "],
              inputVal: "backgroundColor"
            },
            {
              name: "行高",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "lineHeight"
            },
            {
              name: "字重",
              value: [{val:""}],
              unit: [""],
              inputVal: "fontWeight"
            },
            {
              name: "边框",
              value: [{val:""},{val:""},{val:""}],
              unit: ['rem','',''],
              inputVal: "border"
            },
            {
              name: "圆角",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "borderRadius"
            },
            {
              name: "边距",
              value: [{val:"0"},{val:"0"},{val:"0"},{val:"0"}],
              unit: ['rem','rem','rem','rem'],
              inputVal: "margin"
            },
            {
              name: "补白",
              value: [{val:"0"},{val:"0"},{val:"0"},{val:"0"}],
              unit: ['rem','rem','rem','rem'],
              inputVal: "padding"
            },
            {
              name: "内容位置",
              value: [{val:""}],
              unit: [''],
              inputVal: "textAlign"
            },
            {
              name: "定位",
              value: [{val:""}],
              unit: [''],
              inputVal: "position"
            },
            {
              name: "top",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "top"
            },
            {
              name: "left",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "left"
            },
            {
              name: "bottom",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "bottom"
            },
            {
              name: "right",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "right"
            },
            {
              name: "层级",
              value: [{val:""}],
              unit: [''],
              inputVal: "zIndex"
            },
          ]
        }
      ],
      hideGeneralTool: true,
      nowIndex: 0,   // 当前编辑的内容的id
      allData: new Set()
    }
  },
  created() {
    
  },
  methods:{
     // 
     getStyle(){
      this.$emit("input-style",this.toolValue);
     },
     hide() {
      this.hideGeneralTool = true;
     },
     show(index) {
       console.log("传入的"+index);
       this.isIndex(index);
       this.hideGeneralTool = false;
     },
     isIndex(index){
      let obj = {
          nowIndex: 0,
          arr: [
            {
              name: "宽度",
              value: [{val:null}],
              unit: ["rem"],
              inputVal: "width"
            },
            {
              name: "高度",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "height"
            },
            {
              name: "颜色",
              value: [{val:""}],
              unit: [" "],
              inputVal: "color"
            },
            {
              name: "字号",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "fontSize"
            },
            {
              name: "字体",
              value: [{val:""}],
              unit: [" "],
              inputVal: "fontFamily"
            },
            {
              name: "背景色",
              value: [{val:""}],
              unit: [" "],
              inputVal: "backgroundColor"
            },
            {
              name: "行高",
              value: [{val:""}],
              unit: ["rem"],
              inputVal: "lineHeight"
            },
            {
              name: "字重",
              value: [{val:""}],
              unit: [""],
              inputVal: "fontWeight"
            },
            {
              name: "边框",
              value: [{val:""},{val:""},{val:""}],
              unit: ['rem','',''],
              inputVal: "border"
            },
            {
              name: "圆角",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "borderRadius"
            },
            {
              name: "边距",
              value: [{val:"0"},{val:"0"},{val:"0"},{val:"0"}],
              unit: ['rem','rem','rem','rem'],
              inputVal: "margin"
            },
            {
              name: "补白",
              value: [{val:"0"},{val:"0"},{val:"0"},{val:"0"}],
              unit: ['rem','rem','rem','rem'],
              inputVal: "padding"
            },
            {
              name: "内容位置",
              value: [{val:""}],
              unit: [''],
              inputVal: "textAlign"
            },
            {
              name: "定位",
              value: [{val:""}],
              unit: [''],
              inputVal: "position"
            },
            {
              name: "top",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "top"
            },
            {
              name: "left",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "left"
            },
            {
              name: "bottom",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "bottom"
            },
            {
              name: "right",
              value: [{val:""}],
              unit: ['rem'],
              inputVal: "right"
            },
            {
              name: "层级",
              value: [{val:""}],
              unit: [''],
              inputVal: "zIndex"
            }
          ]
        };
      obj.nowIndex = index;
      console.log(this.toolValue);
      // 判断当前要操作的组件是否已经操作过
      for(let i = 0; i < this.toolValue.length; i++){
        if(this.toolValue[i].nowIndex == index){
          // 存在
          console.log("存在");
          this.nowIndex = index;
          break;
        }else{
          // 不存在 新建
          if( i == this.toolValue.length-1){
            console.log("循环完成");
            this.nowIndex = index;
            this.toolValue.push(obj);
          }
        }
      }
     },
     delectToolValue(index){
      console.log(index);
      let nowBox = this.toolValue.findIndex((item) => {
         return item.nowIndex == index;
       });
      let relativeBox = this.toolValue.findIndex((item) => {
         return item.nowIndex == index+1;
       });
       console.log(nowBox,relativeBox);
       if(nowBox != -1){
          console.log("存在用");
          this.toolValue.splice(nowBox,1);
          console.log(relativeBox);
       }
       for(let i = 0; i < this.toolValue.length; i++){
        if(this.toolValue[i].nowIndex > index){
          this.toolValue[i].nowIndex = this.toolValue[i].nowIndex-1;
        }
       }
       // if(relativeBox != -1){
       //    console.log("存在");
       //    this.toolValue[relativeBox].nowIndex = index;

          
       // }
       
      
       console.log(this.toolValue);
       
       return this.toolValue;
     },
     modifyToolValue(index,upIndex){
       let indexObj = this.toolValue.find((item) => {
         return item.nowIndex == index;
       });

       let upObj = this.toolValue.find((item) => {
         return item.nowIndex == upIndex;
       });
       // 移动的
       let nowBox = this.toolValue.findIndex((item) => {
         return item.nowIndex == index;
       });
       // 相对移动的
       let relativeBox = this.toolValue.findIndex((item) => {
         return item.nowIndex == upIndex;
       });

       if(nowBox != -1){
        // 存在
        if(relativeBox != -1){
          // 相对的也存在
          console.log("相对的也存在");
          // this.toolValue[nowBox].arr = [];
          // this.toolValue[nowBox].arr.push(...upObj.arr);
          // this.$set(this.toolValue,nowBox, upObj);

          // this.toolValue.splice(nowBox,1,upObj);
          // this.toolValue.splice(relativeBox,1,indexObj);
          // this.toolValue[nowBox].nowIndex = index;
          // this.toolValue[relativeBox].nowIndex = upIndex;

          // this.toolValue.splice(nowBox,1);

          // this.toolValue[nowBox].nowIndex = index;
          // this.toolValue[relativeBox].arr = [];
          // this.toolValue[relativeBox].arr.push(...indexObj.arr);
          
          let IArr = [];
          IArr.push(...indexObj.arr);
          let UArr = [];
          UArr.push(...upObj.arr);
          console.log(IArr);
          console.log(UArr);
          this.$set(this.toolValue[relativeBox],'arr', IArr);
          console.log(IArr);
          console.log(UArr);
          this.$set(this.toolValue[nowBox],'arr', UArr);
    
          // this.toolValue[relativeBox].nowIndex = upIndex;

        }else{
          // 相对的不存在
          this.toolValue[nowBox].nowIndex = upIndex;
        }
       }else{
        // 不存在
         if(relativeBox != -1){
          // 相对的存在
          this.toolValue[relativeBox].nowIndex = index;

        }else{
        }
       }
       console.log(this.toolValue);
       return this.toolValue;
     },
     isFN(index){
      let nowLet ;
      
      for(let i = 0; i < this.toolValue.length; i++){
         if(this.toolValue[i].nowIndex == upIndex){
           // 存在
           nowLet = this.toolValue[i];
           break;
         }else{
           if(i == this.toolValue.length - 1){
            // 不存在
            nowLet = null;
           }
         }
       }

       return nowLet;
     }

  }
}
</script>

<style scoped lang="scss">
.generalTool{
   position: absolute;
   right: 0;
   top: 0;
   width: 380px;
   bottom: 0;
   background-color: rgba(0,0,0,0.8);
    transition: all 0.3s;
        z-index: 99;
   .toolS{
    width: 362px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    >div{
      min-width: 140px;
      // margin-bottom: 20px;
      span{
        display: inline-block;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        font-size: 12px;
        color: #fff;
      }
      input{
        width: 60px;
        height: 30px;
        margin-left: 8px;
        font-size: 16px;
        font-weight: bold;
        text-indent: 5px;
        flex:1;
      }
    }
   }
   .generalBtn{
    position:absolute;
    width: 50px;
    top: 20px;
    left: -50px;
    span{
      display: block;
      cursor: pointer;
      width:50px;
      height: 30px;
      background-color: #4e9dee;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
   }
 }
 .hideGeneralToolBOX{
  width: 0;
 }
</style>
