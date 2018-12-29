<!-- 导航顶部组件 -->
<template>
  <div class="topNavBox" v-bind:class="{btnScale:BouncedShow}">
    <div class="toolsCale" v-on:click="showBounced" v-if="toolsCaleShow">
      <img src="../assets/topNav.png" />
    </div>
    
    <div class="maisoh">输入文本</div>
    <div class="icon">
      
      <img src="../assets/shouqi.png" v-on:click="shouqiBounced"/>
      <img src="../assets/close.png" />
    </div>
    <div class="topNavBoxContent">
      <div>
        <span>左边</span>
        <input type="" name="" v-model="configData.left">
      </div>
      <div>
        <span>标题</span>
        <input type="" name="" v-model="configData.title">
      </div>
      <div>
        <span>右边</span>
        <input type="" name="" v-model="configData.right">
      </div>
      <div>
        <span>高度</span>
        <input type="" name="" v-model="configData.height">
      </div>
      <div>
        <span>背景色</span>
        <input type="" name="" v-model="configData.bgcolor">
      </div>
      <div>
        <span>标题颜色</span>
        <input type="" name="" v-model="configData.color">
      </div>
      <div>
        <span>左边功能</span>
        <input type="" name="" v-model="configData.leftFn">
      </div>
      <div>
        <span>右边功能</span>
        <input type="" name="" v-model="configData.rightFn">
      </div>
    </div>
    <div>
      <span v-on:click="clickY">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topNavBox',
  props: {
    msg: String
  },
  data () {
    return {
       BouncedShow: true,
      toolsCaleShow: true,
      message: "",
      src: "",
      configData:{
       left:"",
       right: "",
       height: null,
       title: "", 
       bgcolor: "",
       color: "",
       leftFn:"",
       right: ""
      }
    }
  },
  created() {
    
  },
  methods:{
    clickY(){
      console.log(this.configData);

      let html = `<div class="WT-left-btn">${this.configData.left}</div>
        <div class="WT-title">${this.configData.title}</div>
        <div class="WT-right-btn">${this.configData.right}</div>`;

      let m = {tmp:html,type:'topNav'};
       this.$parent.addImg(m);
       this.shouqiBounced();
    },
    getfile(e){
      console.log(e.target.files);
      // 检查是否为图像类型
        var simpleFile = e.target.files[0];
        if(!/image\/\w+/.test(simpleFile.type)) {
            alert("请确保文件类型为图像类型");
            return false;
        }
        var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        reader.readAsDataURL(simpleFile);
        reader.onload = (e) => {
            console.log(reader.result);
            this.src = reader.result;
            let m = {tmp:this.src,type:'img'};
            this.$parent.addImg(m);
        }
    },
    changeText(){
      this.message = this.$el.innerHTML;
      this.$emit('input',this.message);
    },
    shouqiBounced(){
        this.BouncedShow = true;
        setTimeout(() => {
          this.toolsCaleShow = true;
        },500);
    },
    showBounced(){
      // this.fillArr();
      this.BouncedShow = false;
      this.toolsCaleShow = false;
    }
  }
}
</script>

<style scoped lang="scss">
.topNavBox{
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
  .topNavBoxContent{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    >div{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      span {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
      }
      input{
        height: 40px;
        line-height: 40px;
        border: 1px solid #000;
      }
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
  margin-top: 50px;
      z-index: -1;
 }
</style>
