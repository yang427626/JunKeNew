<template>
  <div class="enemy">
    <div class="pro4">
      <p class="zhushi">
        注释：
        解决责任区内和跨责任区的作战支援CS和作战勤务保障职能，这些职能因具体取决于地点和司令部而异。按照后勤能力区域，在责任区中提供作战支援和作战勤务支援能力概述。根据以下指南描述，核心后勤职能的描述应作为最低要求：：
      </p>
      <div class="pro3_item">

        <div class="pro3_item">
          <span class="title">（1） 部署和分发</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data1"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                概述当前战区能力，解决作战指挥官分发方法中的控制部分。这包括渠道控制；部署和分发网络的评估（且容量与上述第3段中提供的有关战区分发基础设施的数据一致）；关于部署和分发行动的独特假设；和平时期和突发事件分发合作伙伴，并指定每个合作伙伴必须提供的任务，包括在和平时期和突发事件的管理、后勤、通信和资金。所做的任何假设都应考虑支援部署和分发行动的战略机动资产和基础设施的威胁和可能的损耗。
              </p>
            </div>
          </div>
        </div>

             <div class="pro3_item">
          <span class="title">（2） 补给</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data2"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                提供战区国家评估，确定补给和保障设施以及战区可用的供应库存。解决行动库存目标和安全水平。指出已分派的预置的战争储备物资，以支持补给之前的部署。指定起始库存和周转库存的来源和地点，这些库存将被拨出，直到正常的补给率恢复。指定超出正常供应程序的物资支持所需的重要特殊安排。指出由于需求与判断可用资产的比较而导致的短缺/过剩
              </p>
            </div>
          </div>
        </div>

               <div class="pro3_item">
          <span class="title">（3） 维护</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data3"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                确定当前战区设施的能力以及现有和/或支援计划所需的维护和改造设施的需求。指出要执行的维护级别和维护地点，包括东道国或承包商设施（如果适用）。解决战区的检查、测试、服务、修理、大修、校准和抢修能力/过剩
              </p>
            </div>
          </div>
        </div>

                   <div class="pro3_item">
          <span class="title">（4） 后勤勤务</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data4"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                与上文第2款保持一致，解决与行业或第三方后勤提供方的主要保障安排和合同，这些安排和合同目前已经生效或将被执行以支援该计划。包括重要的军种间保障安排，并参考协定中的适当附件或附录。需要解决的勤务包括但不限于餐饮服务；水、水管理和制冰服务；应急基地勤务；集装箱和463L托盘管理；卫生勤务；和殡葬事物
              </p>
            </div>
          </div>
        </div>

                  <div class="pro3_item">
          <span class="title">（5） 作战合同保障</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data5"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                确定需要合同保障的任务方面以及对承包商人员的保障需求（保障、住宿、卫勤保障等）。计划并确定作战合同保障战区民用增援计划的能力和指导活动的政策，例如监督需求、民用增援计划启动流程。其他需要考虑的领域包括现有的战区承包能力；控制和保障结构；合同安排；同步部署前行动跟踪系统的使用；以及主要签约组织、办事处和商业伙伴的位置。
              </p>
            </div>
          </div>
        </div>

        
                  <div class="pro3_item">
          <span class="title">（6） 工兵</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data6"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                确定并解决适用于战区的工兵保障能力和活动，以及提供这些服务的政策。确定并解决战区通过不动产生命周期管理和军事设施服务提供支持美军所需的军事设施资产和服务的能力。评估军事设施保障能力，包括使用/获得对军事设施的控制、维护设施保障以及保障战区内的设施运行和服务。
              </p>
            </div>
          </div>
        </div>

                    <div class="pro3_item">
          <span class="title">（7） 卫生勤务保障</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD5.data7"
                :disabled="disabled"
                class="pro3_b1"
              />
                <p class="sub_title_p">
                确定并概述所有战区医疗基础设施。这是通过确定适当的军种、国家、设施的能力和战备状态、当前和计划的军事建设需求，以及对每个地点的能力提出的更改（包括维护、关闭或增强每个设施的建议）来实现的。。
              </p>
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
