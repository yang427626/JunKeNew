<template>
  <div class="guide">
    <!--编写政治 -->
    <div class="pro4">
      <div class="pro3_item">
       
        <div class="pro3_a">
          <p class="sub_title">（1）责任区</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ5_2.CD2.data1" class="pro3_b1" />
            <p class="sub_title_p">
              提供指定给作战指挥官的责任区中相关地理、政治、经济、社会、人口、历史和文化因素的设想。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">（2）关心区域</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ5_2.CD2.data2" class="pro3_b1" />
            <p class="sub_title_p">
             描述指挥官关心的区域，包括影响区域和邻近区域，并延伸到敌方领土。这一区域还包括敌军占领的可能会危及任务完成的区域
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">（3）对手兵力。</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ5_2.CD2.data3" class="pro3_b1" />
             <p class="sub_title_p">
             确定所有可能敌视或威胁美国和伙伴国家利益的国家、集团或组织，并评估其总体目标、动机和能力。提供对清楚地了解潜在威胁的程度至关重要的信息，包括对力量投送活动的威胁。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">（4）己方兵力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ5_2.CD2.data4" class="pro3_b1" />
            <p class="sub_title_p">
              确定所有相关的友方国家、兵力和组织。这些包括隶属于美国部队、地区盟友和预计的多国合作伙伴。描述其他国家实力手段[外交、经济和信息]、美国军事支援司令部以及其他美国政府部门和机构的能力，它们可能对该责任区的行动产生直接和重大的影响。
            </p>
          </div>
        </div>
  <div class="pro3_a">
          <p class="sub_title">（5）中立方兵力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ5_2.CD2.data5" class="pro3_b1" />
            <p class="sub_title_p">
              确定责任区中所有其他相关的国家、集团或组织，并确定其总体目标、动机和能力。提供必要的信息，以便清楚地了解他们的动机，以及他们可能如何影响美国和友方的多国行动。
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