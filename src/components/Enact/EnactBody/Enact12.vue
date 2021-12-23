<template>
  <div class="enemy">
    <div class="task_title">制定初始行动方案陈述</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>

    <div class="input1">
      <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">1·执行任务人（兵力类型）</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
      <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">2·有哪些任务</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">3·在哪里（用区域分类来描述）进行任务</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">4·何时开始任务</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">5·有哪些重要/关键决策点</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">6·指挥官如何提供作战指导以便组成部队能完成战术行动</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">7·每支部队任务的目的是什么</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>    <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">8·指挥官如何评估任务完成情况</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
          <div class="pro3_item">
        <div class="pro3_item_item">
          <p class="sub_title">9·最初的情报支援构想是什么</p>
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_input: "",
      pro3_a: "",
      pro3:''
    };
  },
  props: {
    confirm: String,
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a);
    },
    nextClick() {
      this.$emit("nextClick", 2);
    },
    flxClick() {},
  },
};
</script>
<style lang="scss" scoped>
.enemy {
//   position: relative;
//   height: 24rem;
}
.input1 {
  height: 20rem;
  overflow-y: scroll;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0.6rem 0;
  width: 90%;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_b1 {
  height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
  font-size: 0.8rem;
}
.pro3_item {
  display: flex;
//   margin-top: 1rem;
  justify-content: space-around;
}
.title {
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  width: 5rem;
}
.title1 {
  font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
}
.pro3_item_item {
  // height: 3rem;
  width: 90%;
  word-break: break-all;
  // overflow-y: scroll;
}
.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
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
  background-image: url("../../../assets/img/his.png");
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
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.item {
  display: flex;
}
.item_font {
  font-size: 0.9rem;
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
</style>
