<template>
  <div class="task_conter">
    <div class="task_title">任务中心</div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%;"
        :header-cell-style="{
          background: '#031437',
          color: '#90C4DF ',
          border: '1px solid #4156F4',
        }"
      >
        <el-table-column prop="index" label="序号" width="50" align="center" />
        <el-table-column prop="name" label="任务名称" align="center" />
        <el-table-column prop="address" label="收到时间" align="center" />
        <el-table-column prop="date" label="状态" align="center" />
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <!-- @click="handleEdit(scope.$index, scope.row)" -->
            <el-button size="mini" type="danger">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskConter',
  data() {
    return {
      tableData: [
        {
          index: '1',
          date: '2016-05-02',
          name: '王小虎',
          address: '未完成'
        },
        {
          index: '1',
          date: '2016-05-04',
          name: '王小虎',
          address: '未完成'
        },
        {
          index: '1',
          date: '2016-05-01',
          name: '王小虎',
          address: '未完成'
        },
        {
          index: '1',
          date: '2016-05-03',
          name: '王小虎',
          address: '未完成'
        }
      ]
    }
  }
}
</script>
<style  scoped>
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
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
</style>
