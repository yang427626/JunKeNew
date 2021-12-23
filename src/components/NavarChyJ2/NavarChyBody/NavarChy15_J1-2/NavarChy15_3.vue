<template>
  <div>
      <div class="contenrt">
    <div class="pro1">1.以人事视角分析每个行动方案</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD3.data1"
              class="pro3_b"
            />
            <p class="sub_title">
             根据指挥级别、预期作战范围和需求紧急程度来确定分析的具体细节
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">2.第二部分所述的人事因素确定了分析每个行动方案所需的要素</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD3.data2"
              class="pro3_b"
            />
            <p class="sub_title">
            现实地检查这些人事因素，包括适当考虑气候和天气、地形、水文、敌军能力以及可能影响人事状况和行动方案的其他重要因素。
            </p>
          </div>
        </div>
      </div>
    </div>

        <div class="pro1">3.把人事考虑放在首位</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD3.data3"
              class="pro3_b"
            />
            <p class="sub_title">
          分析的目的不是为了作出决策，而是确保所有适用的人事因素都已经得到考虑，其将作为第四和第五部分的基础。
            </p>
          </div>
        </div>
      </div>
    </div>

 </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_input: "",
      pro3_a: "",
    };
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a);
    },

    nextClick() {
      this.$emit("nextClick", 4);
    },
    flxClick() {},
  },
};
</script>
<style lang="scss" scoped>
.contenrt{
    height: 22rem;
    overflow: auto;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  margin: 0.5rem 0;
  font-size: 0.7rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0;
  color: #90c4df;
  font-size: 0.7rem;
  width: 90%;
  // text-align: center;
}
.pro3_b1 {
  height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
}
.title1 {
  font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  width: 5rem;
  margin: 0 0.5rem;
}
.pro3_item_item {
  // height: 3rem;
  width: 90%;
  word-break: break-all;
  // overflow-y: scroll;
}
.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
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
  background-image: url("../../../../assets/img/his.png");
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
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
