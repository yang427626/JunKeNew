<template>
  <div class="programming">
    <div class="title">规划指令</div>
    <div class="conter">111</div>
    <div class="programming_bottom">
        <p class="programming_bottom_it" @click="customClick">自定义流程</p>
      <p class="programming_bottom_it">重新编辑</p>
      <p class="programming_bottom_item" @click="historyClick">历史选择</p>
      <p class="programming_bottom_item" @click="nextIssueClick">下发</p>
    </div>
    <!-- 历史选择 -->
    <el-dialog title="历史选择" :visible.sync="history" width="30%">
      <div
        class="task_con_item"
        v-for="(item, index) in CardPartsStatisticsList"
        :key="index"
      >
        <p>{{ item.projectName }}</p>
        <el-button  @click="historyViewClick(item.id,item.fileUrl)">查看</el-button >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="history = false">取 消</el-button>
        <el-button type="primary" @click="history = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看 -->
     <el-dialog
     title="历史详情" 
        :visible.sync="historyView"
        width="60%"
      >
        <div>
         <iframe
        :src="this.fileUrl"
        class="iframe"
        frameborder="0"
      />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="historyView = false">取 消</el-button>
          <el-button type="primary" @click="UseClick">应用</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
import { HaIistHistoryProject,HaGetHistoryProject,HaSendProject} from "@/api/Ha";
export default {
  name: "Programming",
  data() {
    return {
      history: false,
      id:'',
      historyView: false,
      fileUrl:"",
      CardPartsStatisticsList: [],
    };
  },
  created() {
    HaIistHistoryProject(this.baseUrl).then((res) => {
      if (res.code == 0) {
        this.CardPartsStatisticsList = res.data;
      } else {
        alert("HaIistHistoryProject");
      }
    });
  },
  methods: {
    // 自定义流程
    customClick(){
      this.$store.state.creareIndex=1
    },
    historyClick() {
      this.history = true;
    },
    // 查看
    historyViewClick(id,fileUrl) {
      this.id=id
      this.fileUrl=fileUrl
      this.historyView = true;
    },
    // 下发
    nextIssueClick(){
        HaSendProject(this.baseUrl,{
          id:"3"
        }).then(res=>{
          this.$message(res.msg)
        })
    },
    UseClick(){
      HaGetHistoryProject(this.baseUrl,{
          id:this.id
      }).then(res=>{
         this.$store.state.HaAaveProject=res.data
      })
      this.historyView = false
      this.history = false;
      
    }
  },
};
</script>
<style lang="scss" scoped>
// /deep/ .el-dialog{
//   background: #fff !important;
// }
.iframe {
  width: 100%;
  height: 60vh;
}
.task_con_item {
  width: 85%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-content: center;
  height: 29px;
  line-height: 29px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  font-size: 0.8rem;
  color: #8ebcec;
  padding: 0 1rem;
  background: #0f1539;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  p {
    line-height: 0rem;
  }
}
.programming {
  z-index: 10002;
  background: #061043;
  width: 98%;
  margin: 0 auto;
  .title {
    color: #6fafd9;
    font-weight: bold;
    font-size: 0.9rem;
    // padding-left: 1rem;
  }
  .conter {
    width: 100%;
    height: 4.7rem;
    border: 2px solid #4156f4;
    border-radius: 4px;
    margin: 0.5rem auto 0 auto;
    overflow: hidden;
    color: white;
  }
  .programming_bottom {
    display: flex;
    justify-content: flex-end;
    .programming_bottom_it {
      background: #061043;
      border: 1px solid #4156f4;
      box-shadow: 0px 1px 5px 0px #4f9adb;
      border-radius: 2px;
      font-weight: bold;
      color: #90c4df;
      padding: 0.2rem 0.4rem;
      margin-right: 1rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 0.9rem;
    }
    .programming_bottom_item {
      background: #0076db;
      cursor: pointer;
      border: 1px solid #242c39;
      box-shadow: 0px 1px 5px 0px #4f9adb;
      font-weight: bold;
      border-radius: 2px;
      color: #fff;
      padding: 0.2rem 0.4rem;
      margin-right: 1rem;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}
/deep/ .el-dialog__headerbtn .el-dialog__close{
  color: #061043;
}
/deep/ .el-dialog__header{
  padding:10px;
}
/deep/ .el-button{
  background: #061043;
  border: 1px solid #061043;
}
/deep/ .el-button--primary.is-plain, .el-button--primary{
  color: #606266;
}
</style>
