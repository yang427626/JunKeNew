<template>
  <div>
    <div class="pro1">4.指挥官分析</div>
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">a.指挥官的意图</span>
        <div class="pro3_a">
          <p class="sub_title">(1)目的</p>
          <textarea v-model="pro3_a" class="pro3_b1" />
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)预期的战略效果</p>
          <textarea v-model="pro3_a" class="pro3_b1" />
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)关键任务</p>
          <textarea v-model="pro3_a" class="pro3_b1" />
        </div>
        <div class="pro3_a">
          <p class="sub_title">(4)最终状态</p>
          <textarea v-model="pro3_a" class="pro3_b1" />
        </div>
      </div>
      <div class="pro4">
        <div class="pro3_item">
          <span
            class="title"
          >b.本段包含指挥官对使命任务的分析,即如何分阶段执行使命任务</span>
          <div class="pro3_a">
            <textarea v-model="pro3_a" class="pro3_b1" />
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
      this.$emit('nextClick', 5)
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

.title {
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  margin-left: 2rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.pro3_b1 {
  height: 1.5rem;
  width: 80%;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
}
.pro3_item {

  margin-top: 0.5rem;

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
