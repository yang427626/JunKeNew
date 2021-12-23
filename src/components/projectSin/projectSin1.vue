<template>
  <div>
    <div class="pro1">1.基础信息</div>
    <div class="pro_con2">
      <p class="pro_con_item">
        <span class="text_pro">文件名称:</span>
        <el-input v-model="$store.state.HaAaveProject.baseFileName" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 签发部门:</span>
        <el-input v-model="$store.state.HaAaveProject.baseSignDepartment" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro">保密等级:</span>
        <el-input
          v-model="$store.state.HaAaveProject.baseConfidentialityLevel"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 签发地点:</span>
        <el-input v-model="$store.state.HaAaveProject.baseSignLocation" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 份数编号:</span>
        <el-input v-model="$store.state.HaAaveProject.baseProjectNo" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 信息索引/编号:</span>
        <el-input
          v-model="$store.state.HaAaveProject.baseInfomationIndex"
          placeholder="(日期-时间组)"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 参考文献:</span>
        <!-- <input v-model="input7" class="inputcl" /> -->
        <textarea
          v-model="$store.state.HaAaveProject.baseReference"
          class="extarea"
          placeholder="地图或图表和相关文件"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 规划指令目的:</span>
        <el-input v-model="$store.state.HaAaveProject.baseTarget" />
      </p>
    </div>
  </div>
</template>
<script>
import { HaSaveProject } from "@/api/Ha";
export default {
  data() {
    return {
      data: "11111",
      data1: "",
    };
  },
  created() {},
  methods: {
    nextClick() {
      this.$emit("nextClick", 2);
    },
  },
};
</script>
<style lang="scss" scoped>
.text_pro {
  display: inline-block;
  font-size: 0.7rem;
  width: 40%;
}
.extarea{
  width: 87%;
  font-size: 0.8rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
   outline:none;
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
  background-image: url("../../assets/img/bag.png");
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
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
</style>
