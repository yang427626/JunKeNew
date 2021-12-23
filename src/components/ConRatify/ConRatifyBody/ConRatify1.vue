<template>
  <div class="NavarchyRecord">
    <div class="task_title">行动方案决策简报会</div>
    <div class="pro_con2">
      <p class="pro_con_item">
        <span class="text_pro">文件名称:</span>
        <el-input v-model="content.Qrecord1" :disabled="disabled" />
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
        <el-input :disabled="disabled" v-model="content.Qrecord3" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 主持人:</span>
        <el-input :disabled="disabled" v-model="content.Qrecord4" />
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
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2" @click="submitClick">提交</p>
    </div>
  </div>
</template>
<script>
import { save, GetRoutePageByTaskId } from "@/api/Ha";
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
      NumShow: 1,
      id: "",
      disabled: false,
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
        this.content = res.data.content;
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
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: {
          Qrecord1: this.content.Qrecord1,
          Qrecord2: this.content.Qrecord2,
          Qrecord3: this.content.Qrecord3,
          Qrecord4: this.content.Qrecord4,
          Qrecord5: this.content.Qrecord5,
          Qrecord6: this.content.Qrecord6,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.NavarchyRecord {
  position: relative;
  height: 100%;
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
