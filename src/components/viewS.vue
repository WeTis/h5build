<template>
  <div class="viewS" v-on:click.stop="hideAll" >
    <img src="../assets/top.jpg" class="top" />

    <div class="view" >
       <div v-bind:class="{borderBox: index == num}" v-for="(item,index) in TextArry" class="WT-view" v-on:click.stop="clickBox(index)">
         <div class="WT-item" v-html="item" 
         v-bind:style="isstyle(index)"
         ></div>
         <div class="WT-btn">
            <span v-on:click.stop="removeBox(index)">删除</span> 
            <span>复制</span> 
            <span v-on:click.stop="upMove(index)" v-if="index != 0">上移</span> 
            <span v-on:click.stop="downMove(index)" v-if="index != TextArry.length-1">下移</span> 
            <span v-on:click.stop="showTool(index)">编辑{{index}}</span>
         </div>
       </div>
       <div v-for="(item,index) in styleAll">{{item.nowIndex}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'viewS',
  props: {
    msg: Array,
    styleAll: Array,
    nowIndex: Array
  },
  data() {
    return {
      TextArry: this.msg,
      num: null,
      style: this.styleAll,

    }
  },
  created() {
    
  },
  methods:{
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
          value += item[i].value[j].val+item[i].unit[j]+" ";

        }

        obj[item[i].inputVal] = value;
      }
      console.log(obj);
      return obj;
    },
    isstyle(index){
      for(let i = 0; i < this.styleAll.length; i++){
        if(this.styleAll[i].nowIndex == index){
          console.log(this.setStyle(this.styleAll[i].arr));
          console.log(this.styleAll[i].arr);
          return this.setStyle(this.styleAll[i].arr);
          break;
        }
      }
    },
    upMove(index){
      // 上移
      let upIndex = index-1;
      this.num = upIndex;
      // this.TextArry = this.$parent.modifyInputText(index,upIndex);
      this.$set(this.TextArry,0, ...this.$parent.modifyInputText(index,upIndex));
      this.$parent.triggerModifyToolValue(index,upIndex);
      this.$forceUpdate();
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
  }
}
</script>

<style scoped lang="scss">
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
  .borderBox{
    position: relative;
    border: 1px dashed #4e9dee;
    .WT-btn{
      position: absolute;
      right: 0;
      bottom: -30px;
      width: 280px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
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
        &:hover{

        }
      }
    }
  }
}
</style>
