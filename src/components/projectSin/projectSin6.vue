<template>
  <div>
    <div class="pro1">
      6.兵力分配
      <span class="pro_size">提供关于主要作战兵力的类型和可用性的信息.</span>
    </div>
    <div>
      <div class="pro3_item">
        <span class="title">(1) 隶属兵力</span>
        <div class="pro3_item_item">
          <textarea v-model="$store.state.HaAaveProject.troops1" class="pro3_a1" />
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(2) 加强兵力</span>
        <div class="pro3_item_item">
          <textarea v-model="$store.state.HaAaveProject.troops2" class="pro3_a1" />
        </div>
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
      this.$emit('nextClick', 7)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
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
  height: 9rem;
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
  width: 7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.pro_size {
  color: #90c4df;
  font-size: 0.7rem;
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
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
