<template>
  <div class="guide">
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>
    <!--编写政治 -->
    <!-- <div class="pro4">
      <div class="pro3_item">
        <span class="title">战略方向： 定义：本节分析总体政策、战略指南和对战区或全球形势的权威指导，并确定了全球和区域层面的战略需求。</span>
        <div class="pro3_a">
          <p class="sub_title">a、美国的政策目标</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              确定美国国家安全或军事目标以及作战司令部受领或协调的战略任务。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b、非美国/多国政策目标。</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
             确定多国[联盟或同盟]的安全或军事目标和战略任务，这些目标和任务也可能赋予作战司令部或由其协调
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">c、对手的政策目标和期望的最终状态。</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
          </div>
        </div>
         <div class="pro3_a">
          <p class="sub_title">d、 最终状态。</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
            描述战役或行动的目标或最终状态以及相关的军事目标，以达到和维持最终状态。
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <!--编写作战环境 -->
    <!-- <div class="pro4">
      <div class="pro3_item">
        <span class="title">作战环境 </span>
        <div class="pro3_a">
          <p class="sub_title">a、责任区</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              提供指定给作战指挥官的责任区中相关地理、政治、经济、社会、人口、历史和文化因素的设想。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b、关心区域</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              描述指挥官关心的区域，包括影响区域和邻近区域，并延伸到敌方领土。这一区域还包括敌军占领的可能会危及任务完成的区域。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">c、对手兵力</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              确定所有可能敌视或威胁美国和伙伴国家利益的国家、集团或组织，并评估其总体目标、动机和能力。提供对清楚地了解潜在威胁的程度至关重要的信息，包括对力量投送活动的威胁。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">d、 己方兵力</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              描述战役或行动的目标或最终状态以及相关的军事目标，以达到和维持最终状态。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">e、 中立方兵力</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              确定责任区中所有其他相关的国家、集团或组织，并确定其总体目标、动机和能力。提供必要的信息，以便清楚地了解他们的动机，以及他们可能如何影响美国和友方的多国行动。
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <div class="sub_title">b、</div>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              一个段落应列出国家战略目标，包括最终状态和预期效果(如已规定)以及任务，包括：
            </p>
            <div class="item sub_item_div">
              <div class="sub_item_min">(1)</div>
              <div class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">上级总部赋予的任务</p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">(2)</div>
              <div  class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">为了传达对整体使命任务的清晰理解而必须描述的那些推断或隐含的任务。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--潜在的机遇 -->
    <!-- <div class="pro4">
      <div class="pro3_item">
        <span class="title">潜在的机遇 </span>
        <div class="pro3_a">
          <p class="sub_title">a、</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              这是对已知或预计的情况以及正在出现的情况的分析，作战司令部可以利用这些作为积极的杠杆来改善战区战略形势，并进一步促进美国或伙伴国家的利益
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b、</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              必须根据现有的战略指南和行动限制仔细评价每一个潜在的机遇。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">c、</div>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              一个段落应列出国家战略目标，包括最终状态和预期效果(如已规定)以及任务，包括：
            </p>
            <div class="item sub_item_div">
              <div class="sub_item_min">(1)</div>
              <div class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">上级总部赋予的任务</p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">(2)</div>
              <div class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">
                  为了传达对整体使命任务的清晰理解而必须描述的那些推断或隐含的任务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 风险评估 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">风险评估 </span>
        <div class="pro3_a">
          <p class="sub_title">a、</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              该评估将潜在的挑战列表与作战环境中的预计能力相匹配
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b、</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              应分别分析与每个重大挑战相关的风险，并根据重要性或可能性（如最危险或最有可能）进行分类
            </p>
          </div>
        </div>
          <div class="pro3_a">
          <p class="sub_title">c、</p>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
              作战司令部参谋部应制定一份针对这些风险的可能缓解措施的清单
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">d、</div>
          <div class="textarea_div">
            <textarea v-model="pro3_a" class="pro3_b1" />
            <p class="sub_title_p">
             一个段落应列出国家战略目标，包括最终状态和预期效果(如已规定)以及任务，包括：
            </p>
            <div class="item sub_item_div">
              <div class="sub_item_min">(1)</div>
              <div class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">上级总部赋予的任务</p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">(2)</div>
              <div class="sub_textarea_div">
                <textarea v-model="pro3_a" class="pro3_b1" />
                <p class="sub_title_p">
                  为了传达对整体使命任务的清晰理解而必须描述的那些推断或隐含的任务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2">提交</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_a: "",
      pro3: "",
    };
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
.pro4 {
  height: 23rem;
  overflow-y: auto;
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
  width: 5rem;
  text-align: center;
  font-size: 0.8rem;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
}
.pro3_item {
  margin-top: 0.5rem;
}
</style>