<template>
  <div class="guide">
    <!--编写作战环境 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">3、敌方非传统战争、心理战情况 </span>
        <div class="pro3_a">
          <p class="sub_title">（1）游击队</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin3.data1" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌方在游击队和叛乱作战方面的能力、政策和现状
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">（2）心理战</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin3.data2" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌方在作战区域内进行心理战的理论、技术、方法、组织和实施情况
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（3）颠覆</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin3.data3" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌方在作战区域内的进行颠覆的理论、技术、方法、组织和实施情况。
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（4）蓄意破坏</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin3.data1" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌方在作战区域内组织破坏活动的可能性
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { save, submit, GetRoutePageByTaskId, handleProcess } from "@/api/Ha";
export default {
  data() {
    return {
      NumShow: 1,
      id: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: ""
    };
  },
  methods: {},
};
</script>
<style scoped>
.guide {
  height: 100%;
}
.item {
  display: flex;
}
.sub_item_min {
  margin: 0.2rem 0.5rem;
  color: #90c4df;
  font-size: 0.8rem;
  width: 6rem;
}
.sub_item_div {
  width: 98%;
  margin: 0.5rem 0;
}
.sub_textarea_div {
  width: 100%;
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0.2rem 1rem;
  width: 7rem;
}
.item_font_con {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 0rem;
  width: 80%;
}
.textarea {
  width: 100%;
  height: 7rem;
}
.textName {
  width: 20%;
  height: 1.4rem;
}
.text {
  width: 100%;
  height: 3rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  outline: none;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
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
  background-image: url("../../../../../assets/img/his.png");
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
  background-image: url("../../../../../assets/img/his.png");
  background-size: 100% 100%;
}
.pro4 {
  height: 16rem;
  overflow-y: auto;
}
.textarea_div {
  width: 80%;
  margin-left: -2rem;
}
.sub_title_p {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  width: 80%;
  /* height: 100%; */
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
.pro3_b {
  height: 1.5rem;
  width: 80%;
  font-size: 0.8rem;
  /* overflow-y: scroll; */
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  width: 10rem;
  text-align: center;
  font-size: 0.8rem;
  margin-right: 1rem;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
}
.pro3_item {
  margin-top: 0.5rem;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
</style>