<template>
  <div>
    <div class="pro1">7.提出行动方案</div>
    <div>
      <div class="pro3_item">
        <span class="title">(1)</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_a1" />
          <p class="sub_title">列出参谋部可以考虑的行动方案.包括指挥官在规划指南中建议的临时行动方案,以及指挥官的行动部门或计划部门建议考虑的行动方案</p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(2)</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_a1" />
          <p class="sub_title">随着规划流程的继续,这些行动方案中的任何一个都可能被舍弃或修改,还有新的行动方案被确定和提出.</p>
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
      this.$emit('nextClick', 8)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.sub_title {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
    width: 90%;
  // text-align: center;
}
.pro3_item_item {
  width: 90%;
  word-break: break-all;
}
.sub_title {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_a1 {
  height: 7rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.title {
  font-size: 0.8rem;
  // width: 7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
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
