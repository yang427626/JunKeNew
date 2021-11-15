<template>
  <div>
    <div class="pro1">1.基础信息</div>
    <div class="pro_con2">
      <p class="pro_con_item">
        <span class="text_pro">文件名称:</span>
        <el-input v-model="pro1_input1" />

      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 签发部门:</span>
        <el-input v-model="pro1_input2" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro">保密等级:</span>
        <el-input v-model="pro1_input3" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 签发地点:</span>
        <el-input v-model="pro1_input3" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 份数编号:</span>
        <el-input v-model="pro1_input4" />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 信息索引/编号:</span>
        <el-input
          v-model="pro1_input5"
          placeholder="(日期-时间组)"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 参考文献:</span>
        <!-- <input v-model="input7" class="inputcl" /> -->
        <el-input
          v-model="pro1_input6"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="地图或图表和相关文件"
        />
      </p>
      <p class="pro_con_item">
        <span class="text_pro"> 规划指令目的:</span>
        <el-input v-model="pro1_input7" />
      </p>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="nextClick">下一步</p>
      <!-- <p class="pro_bom2" @click="flxClick">确定</p> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

      pro1_input1: '',
      pro1_input2: '',
      pro1_input3: '',
      pro1_input4: '',
      pro1_input5: '',
      pro1_input6: '',
      pro1_input7: '',
      pro1_input8: ''

    }
  },
  // props:{
  //   projectSinData:Object
  // },
  created() {

  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 2)
    }
    // flxClick(){
    //   console.log(this.projectSinData.baseFileName)
    // }
  }
}
</script>
<style lang="scss" scoped>
.text_pro {
  display: inline-block;
  font-size: 0.7rem;
  width: 40%;
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
  bottom: 1rem;
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
