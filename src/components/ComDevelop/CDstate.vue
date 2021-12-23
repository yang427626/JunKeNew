<template>
  <div class="NavarchyRecord">
    <div class="task_title">制定任务陈述</div>
    <div class="Cont">
      <div class="pro_con2" v-for="(item, index) in content" :key="index">
        <p class="pro_con_item">
          <span class="text_pro">{{ index + 1 }}任务名称:</span>
          <el-input v-model="item.data1" :disabled="disabled" />
        </p>

        <p class="pro_con_item">
          <span class="text_pro"> 任务描述:</span>
          <textarea
            v-model="item.data2"
            type="textarea"
            class="textarea"
            :disabled="disabled"
            :autosize="{ minRows: 4, maxRows: 4 }"
          />
        </p>
      </div>
      <p class="add" @click="addClick">添加</p>
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
      content: [
        {
          data1: "",
          data2: "",
        },
      ],
      NumShow: 1,
      id: "",
      pro3: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
    };
  },
  // props:{
  //   projectSinData:Object
  // },
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.content = res.data.content;
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
          this.content = res.data.content;
        }
      });
    },
  },
  methods: {
    addClick() {
      let obj = {
        data1: "",
        data2: "",
      };
      this.content.push(obj);
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
      }).then((res) => {
        this.$message(res.msg);
      });
    },
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.content,
      }).then((res) => {
        this.$message(res.msg);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.NavarchyRecord {
  position: relative;
  height: 26rem;
}
.Cont {
  height: 25rem;
  overflow: auto;
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
  width: 5rem;
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
  right: 0rem;
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
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
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
.add {
  width: 3rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  margin-left: 50%;
  font-weight: bold;
  font-size: 0.6rem;
  cursor: pointer;
  background: #495cec;
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
  background-image: url("../../assets/img/his.png");
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
