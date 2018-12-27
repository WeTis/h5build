<!-- 图片框组件 -->
<template>
  <div class="imgBox">
    <input type="file" ref="file" name="" @change="getfile" />
    <img  src="../assets/imgBox.png" />
  </div>
</template>

<script>
export default {
  name: 'imgBox',
  props: {
    msg: String
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
    }
  }
}
</script>

<style scoped lang="scss">
.imgBox{
   position: absolute;
   width: 600px;
   height: 600px;
   top: 50%;
   left: 50%;
    margin-top: -150px;
    margin-left: -300px;
        transform: scale(0.1);
    transform-origin: 600px 0;
    overflow: hidden;
    background-color: #fff;
        z-index: -1;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
    input{
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      border: none;
      opacity: 0;
    }
 }
</style>
