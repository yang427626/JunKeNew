<template>
  <div class="guide">
    <!--编写政治 -->
    <div class="pro4">
      <div class="pro3_item">
        <div class="pro3_a">
          <p class="sub_title">1、陈述第一部分所提出的使命任务在C4方面能否被支持</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD5.data1" class="pro3_b1" />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">2、陈述哪个作战行动方案在C4方面能被最好地支持</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD5.data2" class="pro3_b1" />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">3、识别需要指挥官关注的最主要的C4缺陷</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ6_2.CD5.data3" class="pro3_b1" />
            <p class="sub_title_p">
           （包括用于减轻这些缺陷影响的方法建议。）
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