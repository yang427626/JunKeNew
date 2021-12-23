<template>
  <div>
    <div class="pro1">5.假设和限制</div>
    <div class="pro3_item">
      <div class="pro3_item_item">
        <textarea v-model="$store.state.HaAaveProject.suppose" class="pro3_a1" />
        <p class="sub_title">说明继续规划所需的假设.它们将被下级司令部当作事实</p>
      </div>
      <div class="pro3_item_item">
        <textarea v-model="$store.state.HaAaveProject.limitCondition" class="pro3_a1" />
        <p class="sub_title">列表不是最终的;规划期间可能会添加或删除假设.说明适用于该计划的限制.</p>
      </div>
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
      this.$emit('nextClick', 6)
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
  // text-align: center;
}
.pro3_item_item {
  // height: 3rem;
  width: 95%;
   margin-left: 2rem;
   margin-top: 1rem;
  word-break: break-all;
  // overflow-y: scroll;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
textarea{
  resize: none;
  background: #1f295c;
    border: 1px solid #4156f4;
    color: #4a88a8;
}
.pro3_a1 {
  height: 7rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro3_item {
  margin-top: 0.5rem;
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
  cursor: pointer;
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
