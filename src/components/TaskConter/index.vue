<template>
  <div class="task_conter">
    <div class="task_title">处理事项</div>
    <div class="cont">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          background: '#031437',
          color: '#90C4DF ',
          border: '1px solid #4156F4',
        }"
      >
        <el-table-column prop="message" label="任务名称" align="center" />
        <el-table-column prop="createTime" label="收到时间" align="center" />
        <el-table-column label="状态" align="center" width="70">
          <template slot-scope="scope">
            <span v-if="scope.row.dealStatus == '0'">未处理</span>
            <span v-if="scope.row.dealStatus == '1'">同意</span>
            <span style="color: red" v-if="scope.row.dealStatus == '2'"
              >拒绝</span
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button
              class="buttomScope"
              v-if="scope.row.dealStatus == '0'"
              @click="EditClick(scope.row)"
              >编辑</el-button
            >
            <el-button
              class="buttomScope"
              @click="LookClick(scope.row)"
              size="mini"
              type="danger"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { ListTaskByUserId } from "@/api/Ha";
export default {
  name: "TaskConter",
  data() {
    return {
      tableData: [],
      timer: null,
    };
  },
  created() {
    ListTaskByUserId(this.baseUrl).then((res) => {
      this.tableData = res.data;
    });
    this.timer = setInterval(() => {
      setTimeout(() => {
        this.initData();
      }, 0);
    }, 5000);
  },
  methods: {
    initData() {
      ListTaskByUserId(this.baseUrl).then((res) => {
        this.tableData = res.data;
      });
    },
    // 查看
    LookClick(item) {
        this.$forceUpdate()
      this.$message("查看 不可修改");
    
      this.$router.push({
        path: item.routePage,
        query: {
          id: item.id,
          dealStatus: 0,
          authRight: item.authRight,
        },
      });
    },
    // 编辑
    EditClick(item) {
        this.$forceUpdate()
      this.$message("编辑 可以修改");
      this.$router.push({
        path: item.routePage,
        query: {
          id: item.id,
          dealStatus: 1,
          authRight: item.authRight,
        },
      });
    },
  },
};
</script>
<style  scoped>
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
  overflow: hidden;
}
.cont{
 overflow: auto;
 height: 30rem;
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
.buttomScope {
  width: 2rem;
  height: 1rem;
  font-size: 0.4rem;
  padding: 0 0;
}
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e;
}
/deep/.el-table th > .cell {
  text-align: center;
}
/deep/ .el-table tr {
  background-color: #031437;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #134088;
  /* box-shadow: 0px 1px 5px 0px c; */
  /* border: 1px solid #a5c6fb; */
  color: #90c4df;
}
/deep/ .el-button {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  color: #90c4df;
  margin: 0.1rem 0.1rem;
}
/deep/ .el-table__empty-block {
  background: #061043;
  color: #90c4df;
}
</style>
