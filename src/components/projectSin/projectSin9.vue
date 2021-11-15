<template>
  <div>
    <div class="pro1">9.人物</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title">a.</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
            <p class="sub_title">规划开始制定参谋判定参谋部职责</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">b.</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
            <p class="sub_title">概述协调指示</p>
            <div class="pro3_item">
              <span class="title1">(1)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title">需要相邻和下属司令部和机构协调</p>
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(2)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title">需要单个军种,通用和交叉协调</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="nextClick">下一步</p>
      <p class="pro_bom2" @click="flxClick">确定</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_a: ''
    }
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 10)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
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
  margin: 0;
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
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
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
  bottom: 1rem;
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
  background-image: url("../../assets/img/his.png");
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
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
