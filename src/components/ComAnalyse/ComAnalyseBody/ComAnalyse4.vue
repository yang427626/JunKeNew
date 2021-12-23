<template>
  <div>
    <div class="task_title">确定已知事实和制定规划假设</div>
    <div class="pro3_item">
      <div class="pro3_item_item">
              <p class="sub_title">
         1己方参与兵力
        </p>
        <textarea
          v-model="$store.state.HaAaveProject.suppose"
          class="pro3_a1"
        />
      </div>
      <div class="pro3_item_item">
            <p class="sub_title">
         2、敌方参与兵力
        </p>
        <textarea
          v-model="$store.state.HaAaveProject.limitCondition"
          class="pro3_a1"
        />
      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_a: "",
    };
  },
  methods: {
    nextClick() {
      this.$emit("nextClick", 6);
    },
    flxClick() {},
  },
};
</script>
<style lang="scss" scoped>
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
.sub_title {
  margin: 1rem 0;
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
textarea {
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
  cursor: pointer;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
.item {
  display: flex;
  margin: 0 1rem;
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
</style>
