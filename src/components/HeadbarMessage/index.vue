<template>
  <div class="message">
    <el-dialog title="消息区域" :visible.sync="messageData" width="80%">
      <div class="title">
        <p class="task_title" @click="superiorClick">上级命令</p>
        <p class="task_title" @click="pendingClick">待批准</p>
      </div>
      <div v-if="tabData == '1'">
        <div class="conter">
          <div class="newMessage">
            <p class="newMessage_title">最新消息</p>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column
                prop="index"
                label="下发单位"
                width="100"
                align="center"
              />
              <el-table-column prop="name" label="任务名称" align="center" />
              <el-table-column prop="address" label="发布时间" align="center" />
              <el-table-column prop="date" label="状态" align="center" />
              <el-table-column label="操作" width="260" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="BeganClick"
                  >开始研讨</el-button>
                  <el-button size="mini" @click="handleEdit">查看</el-button>
                  <!-- @click="handleEdit(scope.$index, scope.row)" -->
                  <el-button size="mini" type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="conter">
          <div class="newMessage">
            <p class="newMessage_title">历史案例</p>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column
                prop="index"
                label="下发单位"
                width="100"
                align="center"
              />
              <el-table-column prop="name" label="任务名称" align="center" />
              <el-table-column prop="address" label="发布时间" align="center" />
              <el-table-column prop="date" label="状态" align="center" />
              <el-table-column label="操作" width="150" align="center">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit">查看</el-button>
                  <!-- @click="handleEdit(scope.$index, scope.row)" -->
                  <el-button size="mini" type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div v-if="tabData == '2'">
        <div class="conter">
          <div class="newMessage">
            <p class="newMessage_title">最新消息(待批准)</p>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column
                prop="index"
                label="下发单位"
                width="100"
                align="center"
              />
              <el-table-column prop="name" label="任务名称" align="center" />
              <el-table-column prop="address" label="发布时间" align="center" />
              <el-table-column prop="date" label="状态" align="center" />
              <el-table-column label="操作" width="150" align="center">
                <template slot-scope="scope">
                  <el-button size="mini">查看</el-button>
                  <!-- @click="handleEdit(scope.$index, scope.row)" -->
                  <el-button size="mini" type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="conter">
          <div class="newMessage">
            <p class="newMessage_title">历史案例(待批准)</p>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column
                prop="index"
                label="下发单位"
                width="100"
                align="center"
              />
              <el-table-column prop="name" label="任务名称" align="center" />
              <el-table-column prop="address" label="发布时间" align="center" />
              <el-table-column prop="date" label="状态" align="center" />
              <el-table-column label="操作" width="150" align="center">
                <template slot-scope="scope">
                  <el-button size="mini">查看</el-button>
                  <!-- @click="handleEdit(scope.$index, scope.row)" -->
                  <el-button size="mini" type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelClck">取 消</el-button>
        <el-button type="primary" @click="cancelClck">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible" width="80%" height="90vh">
      <iframe
        src="http://book.zongheng.com/chapter/1039213/67350004.html"
        class="iframe"
        frameborder="0"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 研讨页面 -->
    <el-dialog :visible.sync="cancelData" title="开始研讨" width="40%">
      <div class="newMessage">
        <p class="newMessage_title">选择开会人员</p>
      </div>
      <div>
        <el-checkbox-group v-model="checkList" class="newMessage_title">
          <el-checkbox label="p1" />
          <el-checkbox label="p2" />
          <el-checkbox label="p3" />
        </el-checkbox-group>
      </div>
      <div class="title">
        <p class="title_group">群主名称</p>
        <p class="title_p">
          <el-input v-model="input" placeholder="请输入内容" />
        </p>
      </div>
      <div class="title">
        <p class="title_group">主持人</p>
        <p class="title_p">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </p>
      </div>
      <div class="title">
        <p class="title_group">议程</p>
        <p class="title_p">
          <el-input v-model="input" />
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelData = false">取 消</el-button>
        <el-button type="primary" @click="cancelData = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    messageData: Boolean
  },
  data() {
    return {
      tabData: '1',
      dialogVisible: false,
      cancelData: false,
      checkList: [],
      input: '',
      tableData: [
        {
          index: '1',
          date: '2016-05-02',
          name: '王小虎',
          address: '未完成'
        }
      ],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      value: ''
    }
  },
  methods: {
    superiorClick() {
      this.tabData = '1'
    },
    pendingClick() {
      this.tabData = '2'
    },
    // 查看
    handleEdit() {
      this.dialogVisible = true
    },
    // 开始研讨
    BeganClick() {
      this.$emit('cancelC', false)
      this.dialogVisible = false
      this.cancelData = true
    },
    cancelClck() {
      
      this.$emit('cancelC', false)
    }
  }
}
</script>
<style scoped>
.message{
  z-index: 10002;
}
.title {
  display: flex;
  color: #ffffff;
  margin-left: 1rem;
  align-items: center;
}
.iframe {
  width: 100%;
  height: 60vh;
}
.title_p {
  width: 80%;
}
.title_group{
    width: 4rem;
}
.newMessage_title {
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}

.conter {
  width: 100%;
  margin: 0 auto;
  height: 30vh;
  background: #031437;
  border: 1px solid #4156f4;
  box-shadow: 0px 6px 9px 0px #000000;
  color: #ffffff;
}
.table {
  height: 26vh;
  overflow-y: auto;
}
.task_title {
  font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  height: 1.9rem;
  width: 5rem;
  line-height: 1.9rem;
  background-size: cover;
  background-image: url("../../assets/img/hisq.png");
  cursor: pointer;
}
/deep/ .el-dialog__wrapper{
  top:-2.5rem;
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
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e;
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
  background: #061043;
  border: 1px solid #4156f4;
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
/deep/.el-step__title.is-process {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__title.is-finish {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__title.is-wait {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__icon.is-text {
  background: #031437;
  color: #fff;
}
/deep/.el-select{
    width: 100%;
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
</style>
