<!-- 图片框组件 -->
<template>
  <div class="btn" v-bind:class="{btnScale:BouncedShow}">
     
    <div class="toolsCale" v-on:click="showBounced" v-if="toolsCaleShow">
      <img src="../assets/btn.png" />
    </div>
    
    <div class="maisoh">输入文本</div>
    <div class="icon">
      
      <img src="../assets/shouqi.png" v-on:click="shouqiBounced"/>
      <img src="../assets/close.png" />
    </div>
     <div class="btnBox">
       <div>
         <span>个数：</span>
         <input type="text" name="" v-model="num" />
       </div>
       <div>
         <span>文字</span>
         <input type="text" name="" v-model="item.content" v-for="item in text" />
       </div>
       <div>
         <span>宽度</span>
         <input type="text" name="" v-model="item.content" v-for="item in width"/>
       </div>
       <div>
         <span>高度</span>
         <input type="text" name="" v-model="item.content" v-for="item in height"/>
       </div>
       <div>
         <span>背景色</span>
         <input type="" name="" v-for="item in bgColor" v-model="item.content" />
       </div>
       <div>
         <span>颜色</span>
         <input type="" name="" v-for="item in color" v-model="item.content" />
       </div>
       <div>
         <span>排列</span>
         <span v-on:click="pailei(1)" class="bbtn" :class="{bbtnActive:arrangement == 1}">横排</span>
         <span v-on:click="pailei(2)" class="bbtn" :class="{bbtnActive:arrangement == 2}">纵排</span>
       </div>
       <div>
         <span>功能</span>
         <input type="text" name="" v-for="item in way" />
       </div>
       <div>
         <div v-on:click="getData">确定</div>
         <div>取消</div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    msg: String
  },
  data () {
    return {
      message: "",
      num: 3,
      text: [],
      way: [],
      color: [],
      bgColor: [],
      width:[],
      height:[ ],
      arrangement: 1,
      BouncedShow: true,
      toolsCaleShow: true
    }
  },
  created() {
    this.fillArr();
  },
  methods:{
    getData(){
       let html = '';
       
       if(this.arrangement == 1){
        for(let i = 0; i < this.num; i++){
          console.log(this.color[i].content);
            html += '<span class="WT-btn" style="cursor: pointer; font-size:0.37rem; border-radius:5px; margin: 0 10px; flex: 1; color:'+this.color[i].content+'; width: '+this.width[i].content/37.5+'rem; height: '+this.height[i].content/37.5+'rem; line-height: '+this.height[i].content/37.5+'rem; text-align:center;background-color:'+this.bgColor[i].content+'">'+this.text[i].content+'</span>'
         }
         html = '<div style="display:flex;flex-direction: row;flex-wrap: wrap;justify-content: space-around;">'+html+'</div>';
       }else if(this.arrangement == 2){
          for(let i = 0; i < this.num; i++){
          console.log(this.color[i].content);
            html += '<span class="WT-btn" style="cursor: pointer;font-size:0.37rem; margin:10px 0;border-radius:5px; color:'+this.color[i].content+'; width: '+this.width[i].content/37.5+'rem; height: '+this.height[i].content/37.5+'rem; line-height: '+this.height[i].content/37.5+'rem; text-align:center;background-color:'+this.bgColor[i].content+'">'+this.text[i].content+'</span>'
         }

         html = '<div style="display:flex;flex-direction: column;flex-wrap: wrap;align-items: center;">'+html+'</div>';
       }
      
       let m = {tmp:html,type:'div'};
       this.$parent.addImg(m);


       this.shouqiBounced();
    },
    setStyle(item){
      
    },
    pailei(num){
      this.arrangement = num;
    },
    fillArr(){
     this.text = [];
     this.way = [];
     this.bgColor = [];
     this.color = [];
     this.width = [];
     this.height = [];
     for(let i = 0; i < this.num; i++){
       this.text.push(
        {
          content: ""
        }
        );
       this.way.push(
        {
          content: ""
        }
        );
       this.bgColor.push({
         content: '#66b1ff'
       });
       this.color.push({
        content: '#ffffff'
       });
       this.width.push({
        content: '98'
       });
       this.height.push({
        content: '40'
       });
     }
    },
    shouqiBounced(){
        this.BouncedShow = true;
        setTimeout(() => {
          this.toolsCaleShow = true;
        },500);
    },
    showBounced(){
      this.fillArr();
      this.BouncedShow = false;
      this.toolsCaleShow = false;
    }
  },
  watch: {
    num(val,oldval){
      this.fillArr();
    }
  }
}
</script>

<style scoped lang="scss">
.btn{
  position: absolute;
  width: 600px;
  height: 500px;
  background-color: #ddd;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -250px;
  box-shadow: 0 0 3px 4px rgba(0,0,0,0.2);
   transition: all 0.5s;
  .icon{
    width: 100px;
    height: 50px;
    position:absolute;
    top: 0;
    right: 0;
    img{
      display: inline-block;
      width: 25px;
      height: 25px;
      margin: 12px 10px;
      cursor: pointer;
      transition: all 0.2s;
      transform:rotate(180deg);
      &:hover{
        transform:rotate(0deg);
      }
    }
  }
  .toolsCale{
    position:absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: #ffffff;
    // border-radius: 50%;
    img{
      display: block;
      width: 100%;
      height: 100%;
      // border-radius:50%;

    }
  }
 }
 .btnScale{
  transform: scale(0.1);
  transform-origin: 600px 0;
  width: 600px;
  height: 600px;
  background-color: rgba(0,0,0,0);
  box-shadow: 0 0 3px 4px rgba(0,0,0,0);
  margin-top: -50px;
      z-index: -1;
 }
 .maisoh{
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
 }
.btn{
 
  .btnBox{
    width: 100%;
    height: 100%;
    >div{
      width: 100%;
      display: flex;
      
      flex-direction: row;
      flex-wrap: wrap;

      margin-bottom: 20px;
      span{
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
      }
      .bbtn{
        width: 60px;
        margin:0 20px;
        color: #ffffff;
        font-size: 14px;
        background-color: #92989e;
        cursor: pointer;
      }
      .bbtnActive{
        color: #ffffff;
        font-size: 14px;
        background-color: #4e9dee;
      }
      >div{
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        font-size: 14px;
        background-color: #4e9dee;
        margin-right: 30px;
        margin-left: 10px;
      }
      input{
        width: 50px;
        height: 30px;
        margin: 0 10px;
      }
    }
  }
}
</style>
