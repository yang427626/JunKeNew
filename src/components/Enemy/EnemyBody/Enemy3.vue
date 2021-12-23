// <template>
  <div class="enemy">
    <div class="pro1">
      解释：（列出每一个可能影响任务完成的敌方能力。每项敌方能力都应该包含以下信息：敌方可以做什么、可以在哪里做、何时可以开始并完成任务、可以投入多少兵力来完成任务。）
    </div>
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">a、陆地作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress1"
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
              v-model="$store.state.content.CM_J2_3_progress2"
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
        <span class="title">b、空中作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress3"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              从现在开始，根据预估的300架战斗机和100架中型轰炸机的兵力，敌方可以在作战区进行攻击。前2天每天240架次的战斗机出动率，随后是每天150架次的战斗机出动率和每天60架次的轰炸机出动率，然后是每天48架次的战斗机出动率。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress4"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              敌人利用___附近的机场，拥有足够的运输架次，在4小时的飞行时间内，可将一个团运输到附近的机场。）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">c、海上作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress5"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              （从现在开始，敌方可以在整个区域内进行持续的海上和空中作战，包括X艘XX舰、X艘XX舰、X艘XX艇、X艘舰、一支由XX艘潜艇组成的水雷部队，以及XX艘小型船只。）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">d、太空作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress6"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">e、太空作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)核能力</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress7"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)生物能力</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress8"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)化学能力</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress9"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(4)其他特殊武器能力</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress10"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              （其他特殊武器装备如射频、电磁脉冲武器等）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(e)指挥与控制</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress11"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">说明指挥官选择的指挥和控制编组</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(f)其他</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress12"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">包括指挥官认为必要的指南</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">f、常规作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress13"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              （敌人可以在作战区域内随时使用空中、大炮、火箭炮和制导导弹发射常规战争武器。）
            </p>
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title">g、非常规作战能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress14"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              （敌人在该区域进行作战行动的10天内可实施非常规作战，与持不同政见的民族分子和当前政府的政治对手进行对峙。）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">h、联合能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_3_progress15"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              （敌人现在可以继续防御有6个步兵师的阵地，由16个炮兵营支援，开始行动后8小时内由3个机械化师增援。敌人的防御也可以通过每天150架次的战斗机在一段时间内提供空中支援，并通过使用包括6艘XX舰、5艘XX艇、1艘XX舰提供水面支援。）
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
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        // console.log(res,'aaaaaaaaaa')
        if (res.data.content == undefined) {
        } else {
          this.$store.state.content = res.data.content;
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route() {
      this.NumShow = this.$route.query.dealStatus;
      this.id = this.$route.query.id;
    },
    NumShow() {
      if (this.NumShow == "0") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    id() {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.$store.state.content = res.data.content;
        }
      });
    },
  },
  methods: {
    nextClick() {
      this.$emit("nextClick", 4);
    },
    flxClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.$store.state.content,
      });
    },
  },
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
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
