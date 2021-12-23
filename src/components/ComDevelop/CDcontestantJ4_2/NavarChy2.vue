<template>
  <div class="enemy">
    <div class="pro4">
      <p class="zhushi">
        注释：声明存在的客观条件，以及这些条件对敌方能力及其任务所具有的影响。本部分描述了作战区域、敌军情况以及这两个因素对敌方能力的影响。
      </p>
      <div class="pro3_item">
        <div class="pro3_item">
          <span class="title">1</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD2.data1"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">
               带有XXX的战时东道国支援计划。该计划涵盖XXXX更新的日/月/年。战时东道国支援被定义为东道国提供的军事或民用资源和援助，用于在危机、敌对状态或战争时的美军接收、集结、前运和保障。战时东     道国支援计划包含以下领域的技术支援安排：通信、工程、野战保障、维修、医疗、弹药、化生放核保障、人事和劳工保障、石油、安全、供应和运输。战时东道国支援计划每两年更新一次需求，已批准的战时东道国支援资产反映在临时战时东道国支援支援计划中
              </p>
            </div>
          </div>

          <span class="title">2、协定。确定并解决美国与东道国之间的所有个别协定，这些协定是：</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <p class="sub_title_p">
                (1)敌方可以在24个营的炮兵支援下，用6个步兵师和2个坦克师随时进攻。）
              </p>
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD2.data2"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
          <div class="pro3_a">

            <div class="textarea_div">
                <p class="sub_title_p">
                （2） 交叉跨服务协定，其中签订了法律文书，授权相互提供后勤支援、供应或保障（也称为互助支援协定）
              </p>
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD2.data3"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
 
        <div class="pro3_item">
          <span class="title">（3）海运和/或空运支援协定。确定并解决个别协定</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD2.data4"
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
    
        <div class="pro3_item">
          <span class="title">（4）与XXX的石油协定。确定并解决个别协定。</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD2.data5"
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
.zhushi {
  color: #90c4df;
  height: 1.5rem;
  overflow: hidden;
}
.pro3_bBox{
   height: 3rem;
  width: 80%;
  font-size: 0.8rem;
  overflow-y: scroll;
}
</style>
