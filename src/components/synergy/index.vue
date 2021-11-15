<template>
  <div class="task_conter">
    <div class="tssk_top">
      <div class="task_titleTab">
        <p @click="taskClick">协调研讨</p>
        <p @click="taskClick1">记事本</p>
      </div>
      <!-- 记事本 -->
      <div v-show="taskData==2" class="task_tab">
        <textarea v-model="pro3_a" class="pro3_b" />
      </div>
      <div v-show="taskData==1">
        <div class="task_con">
          <p class="task_con_item">1111111</p>
          <p class="task_con_item">1111111</p>
        </div>
        <div class="task_foot">新建研讨</div>
      </div>

    </div>
    <div v-show="taskData==1" class="tssk_bm">
      <div class="task_title">历史案例</div>
      <div class="task_con">
        <p class="task_con_item">1111111</p>
      </div>
      <!-- <div class="task_foots" @click="historyClick">查看更多</div> -->
      <el-button
        class="task_foots"
        type="text"
        @click="historyClick"
      >查看更多</el-button>
      <el-dialog
        title="选择历史案例中规划指令"
        :visible.sync="history"
        width="30%"
      >
        <div class="his_title">选择历史案例</div>
        <div class="his_con">
          <div class="his_con_item">
            <p class="his_con_item_con">案例1</p>
            <p class="his_con_item_bm">查看</p>
          </div>
          <div class="his_con_item">
            <p class="his_con_item_con">案例1</p>
            <p class="his_con_item_bm">查看</p>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="history = false">取 消</el-button>
          <el-button type="primary" @click="history = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: false,
      taskData: 1,
      pro3_a: ''
    }
  },
  methods: {
    historyClick() {
      this.history = true
    },
    taskClick() {
      this.taskData = 1
    },
    taskClick1() {
      this.taskData = 2
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__header {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
  /* background-size: 100% 100%; */
  border: 1px solid #4156f4;
}
/deep/ .el-dialog {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png");
  background-size: 100% 100%; */
  background: #031437;
  border: 1px solid #4156f4;
}
/deep/ .el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.task_con {
  height: 67%;
  /* background: red; */
  overflow: hidden;
}
.his_con_item_con {
  flex: 10;
  font-size: 0.7rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  margin-left: 1rem;
}
.his_con_item_bm {
  flex: 2;
  font-size: 0.7rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.his_con_item {
  display: flex;
}
.his_title {
  font-size: 0.8rem;
  /* font-family: Source Han Sans CN; */
  font-weight: 500;
  color: #ffffff;
}
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
}
.task_titleTab {
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    color: #90c4df;
    display: flex;
    justify-content: center;
    line-height: 1rem;
    background-image: url("../../assets/img/bag.png");
    background-size: cover;
    padding: 1rem 0;
    cursor: pointer;
  p {
    margin: 0 1rem;
  }
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 1rem;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
}
.tssk_top {
  height: 50%;
  background: #031437;
  border: 1px solid #4156f4;
  margin-bottom: 1rem;
  position: relative;
}
.tssk_bm {
  height: 45%;
  background: #031437;
  border-top: 1px solid #4156f4;
  position: relative;
}
.task_foots {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 6rem;
  height: 3rem;
  line-height: 3rem;
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
}
.task_foot {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
  bottom: 0.5rem;
  width: 6rem;
  height: 3rem;
  line-height: 4rem;
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
}
.task_con_item {
  width: 96%;
  margin: 0 auto;
  height: 29px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #8ebcec;
  line-height: 29px;
  padding: 0 1rem;
  background: #0f1539;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
}
.task_tab{
    height: 60vh;
  background: #0f1539;
  border-top: 1px solid #4156f4;
  position: relative;
}
textarea{
  resize: none;
  background: #1f295c;
    border: 1px solid #4156f4;
    color: #4a88a8;
}
.pro3_b{
     height: 60vh;
  background: #0f1539;
  border-top: 1px solid #4156f4;
  width: 100%;
}
</style>
