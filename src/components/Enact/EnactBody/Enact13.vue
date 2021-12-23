<template>
  <div>
    <div class="task_title">初始行动方案汇总</div>

    <div class="pro3_item">
      <div class="pro3_item_item">
        <p class="sub_title">作战环境联合准备情况：</p>
        <textarea v-model="pro3_a1" class="pro3" />
      </div>
      <div class="pro3_item_item">
        <p class="sub_title">敌人目标：</p>
        <textarea v-model="pro3_a1" class="pro3_a1" />
      </div>

      <div class="pro3_item_item">
        <p class="sub_title">
          <span>敌人行动方案：</span>
          <span class="tabClass" @click="weixinClick">最危险</span>
          <span class="tabClass" @click="kenengClick">最可能</span>
        </p>
        <textarea v-model="pro3_a1" v-show="tab == 1" class="pro3_a1" />
        <textarea v-model="pro3_a1" v-show="tab == 2" class="pro3_a1" />
        <div class="tabCon">
          <div class="title_tab">
            <span class="title_tab_item">优势分析</span>
            <textarea v-model="pro3_a2" class="tabItem" />
          </div>
          <div class="title_tab">
            <span class="title_tab_item">劣势分析</span>
            <textarea v-model="pro3_a2" class="tabItem" />
          </div>
        </div>
      </div>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">确定</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_a: "",
      pro3_a2: "",
      pro3_a3: "",
      tab: 1,
    };
  },
  methods: {
    nextClick() {
      this.$emit("nextClick", 6);
    },
    flxClick() {},

    weixinClick() {
      this.tab = 1;
    },
    kenengClick() {
      this.tab = 2;
    },
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
.title_tab {
  position: relative;
  font-size: 0.7rem;
  color: #90c4df;
  width: 50%;
}
.title_tab_item {
  position: absolute;
  top: 5px;
  left: 0.5rem;
}
.tabItem {
  width: 90%;
  height: 5rem;
  padding-top: 1rem;
  overflow: auto;
}
.tabClass {
  display: inline-block;
  padding: 0.1rem;
  border: 1px solid #4156f4;
  cursor: pointer;
}
.tabCon {
  display: flex;
  width: 90%;
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
  outline: none;
  font-size: 0.7rem;
}
.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro3 {
  height: 5rem;
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
