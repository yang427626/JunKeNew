<template>
  <div class="box">
    <div class="task_title">进行初始化兵力分析</div>
    <div class="Cont">
      <div class="item">
        <p class="item_font">文本名称:</p>
        <p class="item_font_con">
          <textarea v-model="tableData.data1" class="textName" />
        </p>
      </div>
      <div class="item">
        <p class="item_font">文本注意事项:</p>
        <p class="item_font_con">
          <textarea v-model="tableData.data2" class="textNames" />
        </p>
      </div>
      <table border="1px solid #fff" class="table_tr">
        <div class="tabke_tr_conter">
          <tr>
            <th>序号</th>
            <th>任务类别</th>
            <th>任务描述</th>
            <th>基本任务</th>
            <th>可用兵力</th>
            <th>指派</th>
            <th>差额</th>
            <th :rowspan="tableData.num1">
              <i class="el-icon-circle-plus-outline" @click="Num1Click"></i>
            </th>
          </tr>
          <tr v-for="(item, index) in tableData.tableData" :key="index">
            <td>
              <input type="text" v-model="item.data1" />
            </td>
            <td>
              <input type="text" v-model="item.data2" />
            </td>
            <td>
              <input type="text" v-model="item.data3" />
            </td>
            <td>
              <input type="text" v-model="item.data4" />
            </td>
            <td>
              <input type="text" v-model="item.data5" />
            </td>
            <td>
              <input type="text" v-model="item.data6" />
            </td>
            <td>
              <input type="text" v-model="item.data7" />
            </td>
          </tr>
        </div>
      </table>
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
      NumShow: 1,
      id: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
      tableData: {
        date1: "",
        date2: "",
        num1: 2,
        tableData: [
          {
            date1: "",
            date2: "",
            date3: "",
            date4: "",
            date5: "",
            date6: "",
          },
        ],
      },
    };
  },
  created() {
    if (this.$route.query.id == undefined || res.data.content == "") {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.tableData = res.data.content;
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
          this.tableData = res.data.content;
        }
      });
    },
  },
  methods: {
    Num1Click() {
      let jop = {
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
      };
      this.tableData.tableData.push(jop);
      this.tableData.num1 = this.tableData.tableData.length + 1;
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
        content: this.tableData,
      }).then((res) => {
        this.$message(res.msg);
      });
    },
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.tableData,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg);
      });
    },
  },
};
</script>
<style scoped lang="scss">
.Cont {
  width: 90%;
  margin: 0 auto;
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
.item {
  display: flex;
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 6rem;
  padding: 0.2rem 0;
}
.item_font_con {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 80%;
}
.textNames {
  width: 19rem;
}
.textName {
  width: 8rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  height: 1.5rem;
}
.tabke_tr_conter {
  width: 41rem;
  overflow-y: auto;
  margin: 0 auto;
  height:19rem;
}
.table_tr {
  width: 37rem;
  background: #031437;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  border: 0px solid #4156f4;
  tr {
    width: 16rem;
    width: 100%;
    text-align: center;
    th {
      text-align: center;
        vertical-align:middle;
    }
    input {
      width: 100%;
      background: #031437;
      color: #fff;
      border: 0px;
      font-size: 0.8rem;
    }
  }
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
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
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
input,
textarea,
select,
a:focus {
  outline: none;
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
/deep/.el-table tr:hover {
  background-color: #031437;
  border: 1px solid #4156f4;
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
/deep/.el-input--small .el-input__inner {
  background: #061043;
}
/deep/.el-input__inner {
  border: 1px solid #061043;
}
.box {
  width: 90%;
  margin: 0 auto;
}
</style>