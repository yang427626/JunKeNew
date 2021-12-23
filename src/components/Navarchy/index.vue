<template>
  <div>
    <div v-if="this.$store.state.creare == false">
      <div class="steps">
        <el-steps :active="this.$store.state.progress">
          <el-step
            v-for="(item,index) in this.$store.state.progressDatta"
            :key="index"
            :title="item.nodeName"
            @click.native="progressDattaClick(index)"
          />
        </el-steps>
      </div>
      <div
        v-for="(item, index) in this.$store.state.progressDatta"
        :key="index"
      >
        <div v-if="item.nodeStatus == '1'" class="title">
          <p
            v-for="(i, index) in item.sonList"
            :class="
              i.nodeStatus == '0'
                ? 'foot_item'
                : i.nodeStatus == '1'
                ? 'foot_item1'
                : 'foot_item2'
            "
            :key="index"
          >
            {{ i.nodeName }}
          </p>
        </div>
      </div>
      <!-- <div class="conter">
        <textarea
          v-model="pro3_a"
          placeholder="想定描述:2021 04 02 打击00岛 任务完成时段 : 30天"
        />
      </div> -->
    </div>
    <div v-if="this.$store.state.creare == true" class="hefig"></div>

    <el-dialog
      title="选择正在进行的下发项目"
      :visible.sync="this.$store.state.creare"
      width="30%"
    >
      <div
        class="his_title"
        v-for="(item, index) in listData"
        :key="index"
        @click="creareClick(item)"
      >
        <p>{{ item.projectName }}</p>
        <p>{{ item.createTime }}</p>
      </div>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
  </div>
</template>
<script>
import { GetProcessByProjectId, ListCurrentProject } from "@/api/Ha";
export default {
  data() {
    return {
      pro3_a: "",
      listData: [],
      indexData:0
    };
  },
  created() {
    // 获取进度条
    if (localStorage.getItem("id") == undefined) {
    } else {
      GetProcessByProjectId(this.baseUrl, {
        id: localStorage.getItem("id"),
      }).then((res) => {
        // this.$store.state.progressDatta = res.data;
      });
    }
    // 正在下发的项目
    ListCurrentProject(this.baseUrl).then((res) => {
      this.listData = res.data;
    });
  },
  methods: {
    creareClick(item) {
      this.$store.state.creare = false;
      localStorage.setItem("id", item.id);
      localStorage.setItem("projectName", item.projectName);
      // 获取进度条
      GetProcessByProjectId(this.baseUrl, {
        id: localStorage.getItem("id"),
      }).then((res) => {
        this.$store.state.progressDatta = res.data;
      });
    },
    progressDattaClick(index) {

      if (index == "0") {
        this.$router.push({
          path: "/Commander/monitor",
        });
      } else if (index == "1") {
        this.$router.push({
          path: "/ComDevelop",
        });
      }else if(index == "2"){
         this.$router.push({
          path: "/ComEnact",
        });
      }else if(index == "3"){
         this.$router.push({
          path: "/ComAnalyse",
        });
      }else if(index=='4'){
         this.$router.push({
          path: "/ComCompare",
        });
      }else if(index=='5'){
         this.$router.push({
          path: "/ConRatify",
        });
      }else if(index=='6'){
         this.$router.push({
          path: "/ComFormulate",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-step__line {
  color: #1890ff;
  border-color: 1rem solid #1890ff;
}
.hefig {
  height: 10rem;
}
.steps {
  width: 97%;
  margin: 0 auto;
}
.his_title {
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  color: #fff;
  justify-content: space-between;
  border: 1px solid #4156f4;
  padding: 0 1rem;
  border-radius: 6px;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  height: 100%;
  width: 100%;
}
.conter {
  width: 97%;
  height: 2.5rem;
  border: 2px solid #4156f4;
  border-radius: 4px;
  margin: 0rem auto 0.3rem auto;
  // overflow-y: scroll;
  font-size: 0.7rem;
  font-family: PingFangSC;
  font-weight: bold;
  color: #90c4df;
  // font-size: 0.7rem;
}
.foot_item {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #90c4df;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;
}
.foot_item1 {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #1028a0;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;
}
.foot_item2 {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #3c677e;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;
}
.title {
  display: flex;
  width: 97%;
  margin: 0 auto;
}
/deep/ .el-step__icon.is-text {
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(0deg, #00f5ff, #74a2e4);
  box-shadow: 0px 1px 5px 0px #a4c1e8;
  border-radius: 50%;
}
/deep/ .el-step.is-horizontal .el-step__line {
  top: 1.3rem;
}
/deep/.el-dialog__header {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
  /* background-size: 100% 100%; */
  border: 1px solid #4156f4;
}
/deep/.el-dialog {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png");
  background-size: 100% 100%; */
  background: #031437;
  border: 1px solid #4156f4;
}
/deep/.el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
/deep/.el-table th > .cell {
  text-align: center;
}
/deep/.el-table tr {
  background-color: #031437;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #134088;
  /* box-shadow: 0px 1px 5px 0px c; */
  /* border: 1px solid #a5c6fb; */
  color: #90c4df;
}
/deep/.el-button {
  // background: #061043;
  // border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  color: #90c4df;
  margin: 0.1rem 0.1rem;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  display: none;
}
/deep/.el-checkbox__label {
  color: #ffffff;
}
/deep/.el-textarea__inner {
  background: #1f295c;
  height: 17rem;
  border: 1px solid #4156f4;
}
/deep/.el-input--small {
  width: 100%;
  margin-left: 1rem;
  background: #1f295c;
  border: 1px solid #4156f4;
}
/deep/.el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/.el-select {
  width: 100%;
}
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
</style>
