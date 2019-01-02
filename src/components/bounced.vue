<!-- 弹框操作层 -->
<template>
  <div class="bounced" v-bind:class="{bouncedScale:BouncedShow}">
    <div class="toolsCale" v-on:click="showBounced" v-if="toolsCaleShow">
      <img src="../assets/tool.png"  />
    </div>
    
    <div class="maisoh">输入文本</div>
    <div class="icon">
      
      <img src="../assets/shouqi.png" v-on:click="shouqiBounced"/>
      <img src="../assets/close.png" v-on:click="closeBounced" />
    </div>
    <textBox v-on:input="getText" ref="textBox"/>
    <div class="tool">
      <span v-on:click="clickY">确定</span>
      <span>取消</span>
      <span>宽度</span>
      <span>高度</span>
      <span>居中</span>
      <span>左对齐</span>
      <span>右对齐</span>
    </div>
  </div>
</template>

<script>
import textBox from './textBox';
export default {
  name: 'bounced',
  props: {
    msg: String
  },
  components: {
    textBox
  },
  data () {
    return {
      message: "",
      BouncedShow: true,
      toolsCaleShow: true
    }
  },
  created() {
    
  },
  methods:{
    clickY(){
      console.log(this.message);
      this.$emit("input-text",this.message);
       
      this.shouqiBounced();
      this.$refs.textBox.clearText();
    },
    getText(data){
      this.message = data;
    },
    shouqiBounced(){
        this.BouncedShow = true;
        setTimeout(() => {
          this.toolsCaleShow = true;
        },500);
    },
    closeBounced(){
      this.BouncedShow = true;
        setTimeout(() => {
          this.toolsCaleShow = true;
        },500);
         this.$refs.textBox.clearText();
    },
    showBounced(){
      this.BouncedShow = false;
      this.toolsCaleShow = false;
    }
  }
}
</script>

<style scoped lang="scss">
 .bounced{
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
       z-index: 99;
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
 .bouncedScale{
  transform: scale(0.1);
  transform-origin: 600px 0;
  width: 600px;
  height: 600px;
  background-color: rgba(0,0,0,0);
  box-shadow: 0 0 3px 4px rgba(0,0,0,0);
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
 
 .tool{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  span{
    padding: 5px 8px;
    background-color: #4e9dee;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
  }
 }
 
</style>
