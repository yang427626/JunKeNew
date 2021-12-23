<template>
  <div>
      <div class="contenrt">
    <div class="pro1">1.作战区域特征</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data1"
              class="pro3_b"
            />
            <p class="sub_title">
              根据情报判断和区域研判，总结作战区域方面的数据，重点在于影响人事活动的重要因素
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">2.敌军兵力</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data2"
              class="pro3_b"
            />
            <p class="sub_title">
              力量和部署：参考当前情报判断。敌军能力：根据当前情报判断，讨论敌军能力，重点在于对人事事务的影响。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">3.友军兵力</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <div class="pro3_item">
              <span class="title1">(1)主要兵力的当前部署</span>
              <div class="pro3_item_item">
                <textarea
                  v-model="$store.state.CDcontestant.CD2.data3"
                  class="pro3_b1"
                />
                <p class="sub_title">（包括对他们力量的判断）</p>
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(2)行动方案</span>
              <div class="pro3_item_item">
                <textarea
                  v-model="$store.state.CDcontestant.CD2.data4"
                  class="pro3_b1"
                />
                <p class="sub_title">
                  根据作战和计划部门的信息，声明所考虑的行动方案。
                </p>
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(3)可能的战术进展</span>
              <div class="pro3_item_item">
                <textarea
                  v-model="$store.state.CDcontestant.CD2.data5"
                  class="pro3_b1"
                />
                <p class="sub_title">
                  审查初始作战阶段和后续作战阶段中的主要兵力部署情况。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">4.后勤状态</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data6"
              class="pro3_b"
            />
            <p class="sub_title">
              声明已知的后勤问题，如果存在，其将影响人事状况。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">5.指挥、控制与通信状况</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data7"
              class="pro3_b"
            />
            <p class="sub_title">
              声明指挥、控制和通信问题，强调可能影响人事状况的已知问题。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">6.假设</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data8"
              class="pro3_b"
            />
            <p class="sub_title">
              声明关于人事状况的假设。因为，关于作战的基础假设已经在筹划指导和计划中存在了，其不应该在此处重复。有关人事判断的某些人事假设可能在此处进行开发。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">6.特征</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data9"
              class="pro3_b"
            />
            <p class="sub_title">
              列举出在本判断的其他部分都没有涵盖的任何可能影响人事状况的因素。比如，识别对支持作战非常关键的民用和本土的劳动力。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pro1">8.人事状况</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title"></span>
          <div class="pro3_item_item">
            <textarea
              v-model="$store.state.CDcontestant.CD2.data10"
              class="pro3_b"
            />
            <p class="sub_title">
              声明可 能影响特定行动方案选择的已知或预期的人事问题
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
