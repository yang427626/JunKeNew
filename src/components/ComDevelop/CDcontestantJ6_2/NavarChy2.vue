<template>
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <div class="pro3_item">
          <span class="title">1、作战区域特征</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data1"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">
                根据背景环境信息、情报判断和区域分析，总结作战区域的数据；重点放在影响C4活动的重要因素。应该重点关注频谱使用及其可用性方面
              </p>
            </div>
          </div>

          <span class="title">2、敌军</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <p class="sub_title_p">（1）力量与部署</p>
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data2"
                :disabled="disabled"
                class="pro3_b1"
              />
              <p class="sub_title_p">参考当前情报判断</p>
            </div>
          </div>
          <div class="pro3_a">
            <div class="textarea_div">
              <p class="sub_title_p">（2）敌方能力）</p>
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data3"
                :disabled="disabled"
                class="pro3_b1"
              />
              <p class="sub_title_p">
                基于当前情报判断，讨论敌方能力；重点放在敌方对C4情况的影响
              </p>
            </div>
          </div>
        </div>

        <span class="title">3、友军</span>
        <div class="pro3_a">
          <!-- <p class="sub_title">(1)</p> -->
          <div class="textarea_div">
            <p class="sub_title_p">（1）当前部署的主要情况</p>
            <textarea
              v-model="$store.state.CDcontestantJ6_2.CD2.data4"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">包括对友军力量的判断</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="textarea_div">
            <p class="sub_title_p">（2）作战行动方案</p>
            <textarea
              v-model="$store.state.CDcontestantJ6_2.CD2.data5"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              陈述从作战部门和计划部门所获得的处于当前考虑阶段的作战行动方案
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <div class="textarea_div">
            <p class="sub_title_p">（3）可能的策略开发</p>
            <textarea
              v-model="$store.state.CDcontestantJ6_2.CD2.data6"
              :disabled="disabled"
              class="pro3_b1"
            />
            <p class="sub_title_p">
              审查主要的部署情况和整个作战阶段所必要的C4准备情况
            </p>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">4、人事情况</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data7"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">陈述已知的可能会影响C4情况的人事问题</p>
            </div>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">5、后勤情况</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data8"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">陈述已知的可能会影响C4情况的后勤问题</p>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">6、假设</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data9"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">
                陈述此判断中关于C4方面的假设。有关作战方面的基本假设会在筹划指导和计划中指出，这里不应进行重复。但在准备此判断时可能做出的C4假设需要在这里进行说明。
              </p>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">7、特征</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data10"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">
                未包含在其他地方但可能会影响C4情况的特征需要在此处进行说明。
              </p>
            </div>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">8、指挥、控制、通信与计算情况</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ6_2.CD2.data11"
                :disabled="disabled"
                class="pro3_bBox"
              />
              <p class="sub_title_p">
                必须考虑作战区域的频谱可用性，以确保视距通信、卫星通信、超高频、极高频和特高频卫星通信、空对空通信、空间与地面终端设备、国防卫星通信系统地面移动端以及国防协作服务接口等方面的使用。
                示例： 1.C2通信 2.行政通信 3.通信侦察 4.通信安全
                5.作战的通信支持 （1）联合战术空中作战 （2）空对地作战
                （3）海面火力支持作战 6. 通信控制和武器援助 7.
                其他活动的通信需求
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
  margin: 0.5rem 0;
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
.pro3_bBox {
  height: 1.5rem;
  width: 80%;
  font-size: 0.8rem;
  overflow-y: scroll;
}
</style>
