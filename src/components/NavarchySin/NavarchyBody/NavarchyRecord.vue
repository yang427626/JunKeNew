<template>
  <div class="NavarchyRecord">
    <div class="task_title">整理会议记录</div>
    <div class="pro_con2">
      <p class="pro_con_item">
        <span class="text_pro">文件名称:</span>
        <textarea
          class="input"
          v-model="content.Qrecord1"
          :disabled="disabled"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 会议时间:</span>
        <el-date-picker
          v-model="content.Qrecord2"
          type="datetime"
          :disabled="disabled"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </p>
      <p class="pro_con_item">
        <span class="text_pro">参会人员:</span>
        <textarea
          class="input"
          v-model="content.Qrecord3"
          :disabled="disabled"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 主持人:</span>
        <textarea
          class="input"
          v-model="content.Qrecord4"
          :disabled="disabled"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 会议议程:</span>
        <textarea
          v-model="content.Qrecord5"
          type="textarea"
          class="textarea"
          :disabled="disabled"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 会议内容:</span>
        <textarea
          v-model="content.Qrecord6"
          type="textarea"
          class="textarea"
          :disabled="disabled"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
      </p>
    </div>
 <div class="pro_bom">
      <p class="pro_bom1" v-show="NumShow==1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-if="authRight == 1">拒绝</p>
      <p class="pro_bom2" v-show="NumShow==1" @click="saveClick">保存</p>
      <p class="pro_bom2" v-show="NumShow==1" @click="submitClick">提交</p>
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
          :disabled="disabled"
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
      content: {
        Qrecord1: "",
        Qrecord2: "",
        Qrecord3: "",
        Qrecord4: "",
        Qrecord5: "",
        Qrecord6: "",
      },
      refuse: false,
      NumShow: 1,
      refuseData: "",
      id: "",
      disabled: false,
      authRight: 0,
    };
  },
  // props:{
  //   projectSinData:Object
  // },
  created() {
    this.authRight = this.$route.query.authRight;
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content) {
          this.content = res.data.content;
        } else {
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route(to, from) {
      this.$router.go(0);
      this.NumShow = this.$route.query.dealStatus;
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
          this.content = {
            Qrecord1: "",
            Qrecord2: "",
            Qrecord3: "",
            Qrecord4: "",
            Qrecord5: "",
            Qrecord6: "",
          };
        } else {
          this.content = res.data.content;
        }
      });
    },
  },
  methods: {
    nextClick() {
      this.$emit("nextClick", 2);
    },
    // 拒绝
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
        content: this.content,
      }).then(res=>{
        this.$message(res.msg);
      })
    },
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.content,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg)
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dial {
  margin: 0 1rem;
}
.newMessage_title {
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.NavarchyRecord {
  position: relative;
  height: 100%;
}
.input {
  width: 82%;
  height: 1.5rem;
  line-height: 1.2rem;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  //   background-image: url("@/assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.textarea {
  width: 82%;
  height: 5rem;
}
textarea {
  outline: none;
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
  font-size: 0.65rem;
}
.text_pro {
  display: inline-block;
  font-size: 0.7rem;
  width: 4rem;
}
.pro2 {
  width: 96%;
  margin-top: 1rem;
  /* height: 100px; */
}
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
  position: relative;
}
.text {
  color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto 0 auto;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.progress {
  width: 96%;
  margin: 1rem auto;
}
.box_pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.pro_con2 {
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #90c4df;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
.pro_con_item {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 2rem;
}
/deep/.el-textarea__inner {
  background: #1f295c;
  height: 17rem;
  border: 1px solid #4156f4;
}
/deep/ .el-input--small {
  width: 100%;
  margin-left: 1rem;
  background: #1f295c;
  border: 1px solid #4156f4;
}
/deep/ .el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
  font-size: 0.65re;
}
/deep/ .el-step__title.is-process {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-finish {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-wait {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__icon.is-text {
  background: #031437;
  color: #fff;
}
/deep/.el-input.is-disabled .el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
}
</style>
