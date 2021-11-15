<template>
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <div class="pro3_a">
          <p class="sub_title">(1)现有情况</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              （描述公路、铁路、内陆水路、机场和运输系统的其他物理特性，运输系统在车辆、驳船容量和码头设施等方面的能力，以及其他相关数据。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)对敌方能力的影响</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论现有运输系统及其能力对敌方广泛能力的影响。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)对己方作战行动的影响</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论现有运输系统及其能力对友军广泛作战行动的影响。）
            </p>
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
      this.$emit('nextClick', 9)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 25.5rem;
}
.pro4 {
  height: 20rem;
  overflow-y: scroll;
}
.textarea_div {
  width: 100%;
  margin-left: 1rem;
}
.sub_title_p {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  width: 80%;
  // text-align: center;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 0.7rem;
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
   font-size: 0.8rem;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  width: 5rem;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
  // flex-direction: column;
}
.pro3_item {
  margin-top: 2rem;
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
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
