<template>
  <div>
    <!-- <div class="pro1">2.目的</div> -->
      <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>
    <div class="pro2">
      <textarea
        v-model="$store.state.HaAaveProject.target"
        class="target"
        show-word-limit
      />
      <p class="text">
       各部门针对初步的行动构想，提出本领域能否支撑任务的完成和存在的主要兵力和资源的缺口
      </p>
    </div>
     <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">确定</p>
      <p class="pro_bom2">提交</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    progress: Number
  },
  data() {
    return {
     
    }
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 3)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
}
.item_font {
  font-size: 0.7rem;
  font-weight: 900;
  text-align: center;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 6rem;
  padding: 0.2rem 0;
}
.item_font_con {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 80%;
}
.target{
  width: 100%;
  margin: 0 auto;
  height: 15rem;
}
.pro2{
   width: 98%;
  margin: 0rem auto;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  outline:none;
  overflow: auto;
}
.text_pro {
  display: inline-block;
  font-size: 0.7rem;
  width: 40%;
}


.text {
  color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto 0 auto;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.progress {
  width: 96%;
  margin: 1rem auto;
}
.box_pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.pro_con2 {
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #90c4df;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
}
.pro_bom1 {
    width: 6rem;
  height: 3rem;
  line-height: 3.9rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
cursor: pointer;
}
.pro_bom2 {
   width: 6rem;
  height: 3rem;
  line-height: 3.9rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;

}
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
