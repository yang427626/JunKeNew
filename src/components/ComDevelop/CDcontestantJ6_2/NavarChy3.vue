<template>
  <div class="guide">
    <!--编写政治 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title"
          >注释：对影响拟定作战行动方案的C4因素进行有序检查，以确定其方式和影响程度。这项分析的目的是分离出在指挥官判断中指挥官应该权衡C4方面的影响</span
        >
        <div class="pro3_a">
          <p class="sub_title">1、从C4角度分析每个作战行动方案</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD3.data1" class="pro3_b1" />
            <p class="sub_title_p">
              其中，分析细节是通过考虑指挥级别、预期作战范围和需求的紧急程度来确定的
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">2、对每个行动方案分析第二部分中的C4因素</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD3.data2" class="pro3_b1" />
            <p class="sub_title_p">
            实事求是地检查相关因素，具体包括对气候和天气、水文、时间、空间、敌方能力以及其它可能影响C4情况的重要因素进行正确考虑。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">3、在分析过程中，首要考虑C4因素</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD3.data3" class="pro3_b1" />
            <p class="sub_title_p">
              分析的目的不是为了作出决定，而是为了确保所有相关因素都得到了适当的考虑，并将作为第四部分比较的基础。
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
      refuseData: "",
      tableData: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
      },
    };
  },

  methods: {
  
  },
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

.pro4 {
  height: 23rem;
  overflow-y: auto;
}
.textarea_div {
  width: 90%;
  margin-left: 1rem;
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
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  /* width: 5rem; */
  /* text-align: center; */
  font-size: 0.8rem;
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

</style>