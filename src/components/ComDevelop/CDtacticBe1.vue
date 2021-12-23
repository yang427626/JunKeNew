<template>
  <div class="guide">
    <!-- 编写编辑对主要战略和作战挑战的评估-->
    <div class="task_title">战略判断</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con">
        <textarea v-model="tableData.data1" class="textName" />
      </p>
    </div>
    <div class="Cont">

    <div class="pro4">
      <div class="pro3_item">
        <span class="title">对主要战略和作战挑战的评估</span>
        <div class="pro3_a">
          <p class="sub_title">a</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data2" class="pro3_b1" />
            <p class="sub_title_p">
              这是对作战指挥官可能要处理的责任区中的主要挑战的持续评价
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b。</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data3" class="pro3_b1" />
            <p class="sub_title_p">
              这些可能包括一系列广泛的挑战，从直接军事对抗、和平行动和安全合作活动（包括协助安全部队建设合作伙伴的实力和能力），到对暴行、外国人道主义援助和稳定活动做出响应
            </p>
          </div>
        </div>
      </div>
      <div class="pro4">
        <div class="pro3_item">
          <span class="title">潜在的机遇 </span>
          <div class="pro3_a">
            <p class="sub_title">a、</p>
            <div class="textarea_div">
              <textarea v-model="tableData.data4" class="tableData.data2" />
              <p class="sub_title_p">
                这是对已知或预计的情况以及正在出现的情况的分析，作战司令部可以利用这些作为积极的杠杆来改善战区战略形势，并进一步促进美国或伙伴国家的利益
              </p>
            </div>
          </div>
          <div class="pro3_a">
            <p class="sub_title">b、</p>
            <div class="textarea_div">
              <textarea v-model="tableData.data5" class="tableData.data3" />
              <p class="sub_title_p">
                必须根据现有的战略指南和行动限制仔细评价每一个潜在的机遇。
              </p>
            </div>
          </div>
        </div>

      
          <span class="title">风险评估 </span>
          <div class="pro3_a">
            <p class="sub_title">a、</p>
            <div class="textarea_div">
              <textarea v-model="tableData.data6" class="pro3_b1" />
              <p class="sub_title_p">
                该评估将潜在的挑战列表与作战环境中的预计能力相匹配。
              </p>
            </div>
          </div>
          <div class="pro3_a">
            <p class="sub_title">b、</p>
            <div class="textarea_div">
              <textarea v-model="tableData.data7" class="pro3_b1" />
              <p class="sub_title_p">
                应分别分析与每个重大挑战相关的风险，并根据重要性或可能性（如最危险或最有可能）进行分类
              </p>
            </div>
          </div>
          <div class="pro3_a">
            <p class="sub_title">c、</p>
            <div class="textarea_div">
              <textarea v-model="tableData.data8" class="pro3_b1" />
              <p class="sub_title_p">
                作战司令部参谋部应制定一份针对这些风险的可能缓解措施的清单
              </p>
            </div>
          </div>
        </div>
      </div>
    <div class="pro_bom">
      <p class="pro_bom1" v-show="NumShow == 1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-show="authRight == 1">
        拒绝
      </p>
      <p class="pro_bom2" v-show="NumShow == 1" @click="saveClick">保存</p>
      <p class="pro_bom2" v-show="NumShow == 1" @click="submitClick">提交</p>
    </div>
      </div>
    <!-- 退回 -->
    <el-dialog :visible.sync="refuse" title="退回原因" width="30%">
      <div class="newMessage">
        <p class="newMessage_title">请说出您的退回理由：</p>
      </div>
      <div>
        <textarea
          v-model="refuseData"
          type="textarea"
          class="textarea dial"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="refuse = false">取 消</el-button>
        <el-button type="primary" @click="refuse_Dialog_Clcik">确 定</el-button>
      </span>
    </el-dialog>
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
        data6: "",
        data7: "",
        data8: "",
      },
    };
  },
  created() {
    this.authRight = this.$route.query.authRight;
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.tableData = res.data.content;
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route() {
      this.$router.go(0);
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
          this.tableData = res.data.content;
        }
      });
    },
  },
  methods: {
    // // 拒绝
    refuse_Dialog_Clcik() {
      this.id = parseInt(this.$route.query.id);
      handleProcess(this.baseUrl, {
        reason: this.refuseData,
        status: 1,
        taskId: this.id,
      }).then((res) => {
        this.refuse = false;
      });
    },
    // 保存
    saveClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.tableData,
      }).then((res) => {
        this.$message(res.msg);
      });
    },
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.tableData,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg);
      });
    },
  },
};
</script>
<style scoped>
.guide {
  height: 100%;
}
.Cont{
  height: 20rem;
  overflow: auto;
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
  right: 0rem;
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
  background-image: url("../../assets/img/his.png");
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
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
}
.pro4 {
  /* height: 23rem; */
  /* overflow-y: auto; */
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
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
</style>