<template>
  <div class="guide">
    <div class="task_title">编写政治</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="tableData.data1" class="textName" /></p>
    </div>
    <!--编写政治 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title"
          >战略方向：
          定义：本节分析总体政策、战略指南和对战区或全球形势的权威指导，并确定了全球和区域层面的战略需求。</span
        >
        <div class="pro3_a">
          <p class="sub_title">a、美国的政策目标</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data2" class="pro3_b1" />
            <p class="sub_title_p">
              确定美国国家安全或军事目标以及作战司令部受领或协调的战略任务。
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">b、非美国/多国政策目标。</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data3" class="pro3_b1" />
            <p class="sub_title_p">
              确定多国[联盟或同盟]的安全或军事目标和战略任务，这些目标和任务也可能赋予作战司令部或由其协调
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">c、对手的政策目标和期望的最终状态。</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data4" class="pro3_b1" />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">d、 最终状态。</p>
          <div class="textarea_div">
            <textarea v-model="tableData.data5" class="pro3_b1" />
            <p class="sub_title_p">
              描述战役或行动的目标或最终状态以及相关的军事目标，以达到和维持最终状态。
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