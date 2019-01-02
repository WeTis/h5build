<template>
  <div class="viewS" v-on:click.stop="hideAll" >
    <img src="../assets/top.jpg" class="top" />

    <div class="view">
       <div id="my-node" v-if="showDIc">
         <!-- <div  v-bind:class="{borderBox: index == num}" :key="item.numIndex" v-for="(item,index) in TextArry" class="WT-view" v-on:click.stop="clickBox(index)" v-bind:style="isstyle(index)">
             <templateHtml v-bind:msg="item" >
             </templateHtml>
           <div class="WT-btn">
              <span v-on:click.stop="removeBox(index)">删除</span> 
              <span>复制</span> 
              <span v-on:click.stop="upMove(index)" v-if="index != 0">上移</span> 
              <span v-on:click.stop="downMove(index)" v-if="index != TextArry.length-1">下移</span> 
              <span v-on:click.stop="showTool(index)">编辑{{index}}</span>
           </div>
         </div> -->
         <template v-for="(item,index) in TextArry"  >
           <templateHtml v-if="item.type == 'div'" v-bind:msg="item" v-bind:index="index" v-bind:num="num" v-bind:styleHtml="isstyle(index)" >
           </templateHtml>
           <imgTemplate v-if="item.type == 'img'" v-bind:msg="item" v-bind:index="index" v-bind:num="num" v-bind:styleHtml="isstyle(index)"></imgTemplate>
           <topNavTemplate v-if="item.type == 'topNav'" v-bind:msg="item" v-bind:index="index" v-bind:num="num" v-bind:styleHtml="isstyle(index)" ></topNavTemplate>
           <div class="WT-btn" v-bind:class="{borderBox: index == num}">
              <span v-on:click.stop="removeBox(index)">删除</span> 
              <span>复制</span> 
              <span v-on:click.stop="upMove(index)" v-if="index != 0">上移</span> 
              <span v-on:click.stop="downMove(index)" v-if="index != TextArry.length-1">下移</span> 
              <span v-on:click.stop="showTool(index)">编辑{{index}}</span>
           </div>
         </template>
       </div>
    </div>

    <div class="output" v-on:click="outputHtml">查看html</div>
    <div class="outputImg" v-on:click="outputImg">下载图片</div>
  </div>
</template>

<script>
import templateHtml from './templateHtml';
import imgTemplate from './imgTemplate';
import topNavTemplate from './topNavTemplate';
import domtoimage from 'dom-to-image';
import $ from 'jquery';
import saveAs from 'file-saver';
export default {
  name: 'viewS',
  props: {
    msg: Array,
    styleAll: Array,
    nowIndex: Array
  },
  components: {
    templateHtml,
    imgTemplate,
    topNavTemplate
  },
  data() {
    return {
      TextArry: this.msg,
      num: null,
      style: this.styleAll,
      showDIc: false,
    }
  },
  created() {
    
  },
  methods:{
    outputImg(){
      let props = { 
      width:375*2,
      height: $("#my-node").height() * 2,
      style:{ 
      'transform':'scale(2)',
      'transform-origin':'top left' 
      } 
    } 
    console.log($("#my-node").height());
    domtoimage.toBlob(document.getElementById('my-node'),props)
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
    },
    outputHtml(){
       console.log($(".view").html())
       $.ajax({
        url: '/api/imooc/lib/outHtml.php',
        type: "POST",
        data: {
          content: $(".view").html()
        },
        dataType: 'JSON',
        success: (res) => {
           console.log(res);
           if(res.status = 90000){
            window.open(res.src,"_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=375, height=667");
           }
        }
       })
    },
    clickBox(num){
      this.num = num;
      this.$parent.hideGeneralTool();
    },
    deleteText(num){
      console.log("删除键")
      this.TextArry.splice(num,1);
    },
    hideAll(){
      console.log("asdhaskjd");
      this.num = null;
      console.log(this.num);
      this.$parent.hideGeneralTool();
    },
    showTool(index){
      this.$parent.showGeneralTool(index);
      console.log("当前"+index);
    },
    setStyle(item){
      console.log("样式")
      let obj = {};
      for(let i = 0; i < item.length; i++){
        let value = "";
        for(let j = 0; j < item[i].value.length; j++){
          console.log(Number.isNaN(Math.ceil(item[i].value[j].val)),item[i].value[j].val)
          if(item[i].value[j].val){
            if(!Number.isNaN(Math.ceil(item[i].value[j].val)) && item[i].inputVal != "zIndex"){
               console.log("数组");
               value += " " + Math.ceil(item[i].value[j].val)/37.5+item[i].unit[j];
            }else{
              if(new RegExp(/%$/).test(item[i].value[j].val)){
                 value += " " + item[i].value[j].val; 
              }else{
                value += " " + item[i].value[j].val+item[i].unit[j];
              }
              
            }
          }else{
            value += " " + item[i].value[j].val+item[i].unit[j];
          }
          
          

        }

        obj[item[i].inputVal] = value;
      }
      console.log(obj);
      return obj;
    },
    isstyle(index){
      console.log('__________',index);
      for(let i = 0; i < this.style.length; i++){
        if(this.style[i].nowIndex == index){
          return this.setStyle(this.style[i].arr);
          break;
        }
      }
    },
    upMove(index){
      // 上移
      let upIndex = index-1;
      this.num = upIndex;
      this.$set(this.TextArry,0, ...this.$parent.modifyInputText(index,upIndex));
      this.$parent.triggerModifyToolValue(index,upIndex);
      this.$forceUpdate();
      console.log(this.styleAll);
    },
    downMove(index){
      // 下移
      let upIndex = index+1;
      this.num = upIndex;
   
      this.TextArry = this.$parent.modifyInputText(index,upIndex);
      this.$parent.triggerModifyToolValue(index,upIndex);
    },
    removeBox(index){
      this.num = null;
      // 删除组件
      this.TextArry = this.$parent.delectInputText(index);
      // 删除样式
      console.log(this.$parent.triggerDelectToolValue(index));
      console.log(this.styleAll);

    }
  },
  watch:{
    styleAll: {
      handler(newValue, oldValue) {
        this.showDIc = false;
       console.log("已经变化");
       this.style = this.styleAll;
       console.log(this.style);
       this.TextArry = this.msg;
       // this.TextArry.push({tmp:"用于触发",type:'div'});
       // this.$forceUpdate();

       setTimeout(() => {
        this.showDIc =true;
       },30);
      },
      deep: true
    },
    TextArry: {
      handler(newValue, oldValue) {
       console.log("已经变化");
       this.style = this.styleAll;
       console.log(this.style);
       this.TextArry = this.msg;
       // this.TextArry.push({tmp:"用于触发",type:'div'});
       // this.$forceUpdate();

       this.showDIc =false;
       setTimeout(() => {
        this.showDIc =true;
       },30);
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/base.css";

.viewS{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -333px;
  margin-left: -187px;
  width: 375px;
  height: 687px;
  background-color: #ffffff;
  font-size: 0;
  .view{
    width: 375px;
    height: 667px;
    overflow: hidden;
    overflow-y: auto;
    
  }
  .WT-item{
    font-size: 16px;
 
      word-wrap: break-word;
    
    div{
      font-size: 16px;
    }
  }
  .WT-btn{
    display: none;
  }
  #my-node{
    // position: relative;
    position: relative;
    z-index: 1;
  }
  .output{
    width: 100px;
    height: 40px;
    background-color: #67c23a;
    line-height: 40px;
    text-align: center;
    position:absolute;
    top: 50%;
    left: -120px;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }
  .outputImg{
    width: 100px;
    height: 40px;
    background-color: #67c23a;
    line-height: 40px;
    text-align: center;
    position:absolute;
    top: 50%;
    left: -120px;
    margin-top: 80px;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }
  .WT-view{
    position:relative;
  }
  .borderBox{
    // position: relative;
    
    &.WT-btn{
      position: fixed;
      right: -52px;
      top: 50%;
      left: 50%;
      width: 50px;
      margin-top: -150px;
          margin-left: 190px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      z-index: 9999999;
      span{
        width:50px;
        height: 30px;
        background-color: #4e9dee;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
        &:hover{

        }
      }
    }
  }
}
</style>
