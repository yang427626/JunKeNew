<template>
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">1、陆地作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data1"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              敌方可以在24个营的炮兵支援下，用6个步兵师和2个坦克师随时进攻。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data2"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              敌方现在可以在目前的位置进行防御，由2个坦克师和16个中轻型火炮营支援7个步兵师。）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">2、空中作战能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data3"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              1）从现在开始，根据预估的XXX架战斗机和XXX架中型轰炸机的兵力，己方可以在作战区进行攻击。前X天每天XXX架次的战斗机出动率，随后是每天XXX架次的战斗机出动率和每天XX架次的轰炸机出动率，然后是每天XX架次的战斗机出动率。

（2）己方利用___附近的机场，拥有足够的运输架次，在X小时的飞行时间内，可将一个团运输到附近的机场。

            </p>
          </div>
        </div>
     
      </div>
      <div class="pro3_item">
        <span class="title">3、海上作战能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data4"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              从现在开始，己方可以在整个区域内进行持续的海上和空中作战，包括X艘XX舰、X艘XX舰、X艘XX艇、X艘XX舰、一支由XX艘潜艇组成的水雷部队，以及XX艘小型船只。
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">4、太空作战能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data5"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">5、其他特殊武器能力</span>
        <div class="pro3_a">
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data6"
              :disabled="disabled"
              class="pro3_b1"
            />
               <p class="sub_title_p">
              （1）可用于战区作战的射频、电磁脉冲等武器其他特殊武器数量和能力
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">6、常规作战能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data7"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">己方可以在作战区域内随时使用空中、大炮、火箭炮和制导导弹发射常规战争武器。</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">7、非常规作战能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data8"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">己方在该区域进行作战行动的XX天内可实施非常规作战，与持不同政见的民族分子和当前政府的政治对手进行对峙。</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">8、联合能力</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <textarea
              v-model="$store.state.CDcontestantJ3_2.CD2.CDSin2.data9"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              己方现在可以继续防御有X个步兵师的阵地，由XX个炮兵营支援，开始行动后X小时内由X个机械化师增援。己方的防御也可以通过每天XXX架次的战斗机在一段时间内提供空中支援，并通过使用X艘XX舰、X艘XX舰、X艘XX艇提供水面支援。
            </p>
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

  methods: {
  }
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
  margin: 0;
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
  height: 1.5rem;
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

</style>
