<template>
  <div class="enemy">
    <div class="pro4">
      <p class="zhushi">
        注释：

确定并解决能力缺口，并沿袭（继承）风险和解决或减轻风险的手段。

      </p>
      <div class="pro3_item">

        <div class="pro3_item">
          <span class="title"
            >（1） 部署和分发</span
          >
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data1"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">（2） 补给</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data2"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

           <div class="pro3_item">
          <span class="title">（3） 维护</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data3"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
                <div class="pro3_item">
          <span class="title">（4） 后勤勤务</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data4"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
                <div class="pro3_item">
          <span class="title">（5） 作战合同保障</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data5"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
                <div class="pro3_item">
          <span class="title">（6） 工兵</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data6"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
                <div class="pro3_item">
          <span class="title">（7） 卫生勤务保障</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD6.data7"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<script>
import { save, GetRoutePageByTaskId } from "@/api/Ha";
export default {
  data() {
    return {
      NumShow: 1,
      id: "",
      disabled: false,
    };
  },
  props: {
    confirm: String,
  },

  methods: {},
};
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
  margin: 1rem 0;
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
  height: 2.5rem;
  width: 80%;
  font-size: 0.8rem;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.2rem 0;
  color: #90c4df;
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
  margin-top: 0.5rem;
}
.zhushi {
  color: #90c4df;
  height: 1.5rem;
  overflow: hidden;
}
.pro3_bBox {
  height: 3rem;
  width: 80%;
  font-size: 0.8rem;
  overflow-y: scroll;
}
</style>
