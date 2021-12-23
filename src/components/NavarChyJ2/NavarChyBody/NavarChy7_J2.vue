<template>
  <div class="box">
    <div class="task_title">确定并分析行动限制</div>
    <div class="Cont">
      <div class="item">
        <p class="item_font">注意事项:</p>
        <p class="item_font_con">
          确定并分析行动限制文本注意事项：1、制约：上级提出的一种要求，他规定了一个行动“必须做”，从而限制了行动的自由。例子：艾森豪威尔将军被要求进入欧洲大陆，而不是依靠战略轰炸来战胜德国。2、约束：是上级提出的要求，禁止一个行动“不能做”，从而限制了行动的自由。例子：朝鲜战争期间，麦克阿瑟将军禁止攻击鸭绿江以北的中国目标。
        </p>
        <!-- <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p> -->
      </div>
      <table border="1px solid #fff" class="table_tr">
        <div class="tabke_tr_conter">
          <tr>
            <th>序号</th>
            <th>类型(约束)</th>
            <th>部门</th>
            <th>行动限制</th>
            <th :rowspan="tableData.num1">
              <i class="el-icon-circle-plus-outline" @click="Num1Click"></i>
            </th>
          </tr>
          <tr v-for="(item, index) in tableData.tableData1" :key="index">
            <td>
              <input type="text" v-model="item.name" />
            </td>
            <td>
              <input type="text" v-model="item.date" />
            </td>
            <td>
              <input type="text" v-model="item.address" />
            </td>
            <td>
              <input type="text" v-model="item.add" />
            </td>
          </tr>
        </div>
        <div class="tabke_tr_conter">
          <tr>
            <th>序号</th>
            <th>类型(限制)</th>
            <th>部门</th>
            <th>行动限制</th>
            <th :rowspan="tableData.num2">
              <i class="el-icon-circle-plus-outline" @click="Num2Click"></i>
            </th>
          </tr>
          <tr v-for="(item, index) in tableData.tableData2" :key="index">
            <td>
              <input type="text" v-model="item.name" />
            </td>
            <td>
              <input type="text" v-model="item.date" />
            </td>
            <td>
              <input type="text" v-model="item.address" />
            </td>
            <td>
              <input type="text" v-model="item.add" />
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
      pro3: "确定并分析行动限制文本注意事项：1、制约：上级提出的一种要求，他规定了一个行动“必须做”，从而限制了行动的自由。例子：艾森豪威尔将军被要求进入欧洲大陆，而不是依靠战略轰炸来战胜德国。2、约束：是上级提出的要求，禁止一个行动“不能做”，从而限制了行动的自由。例子：朝鲜战争期间，麦克阿瑟将军禁止攻击鸭绿江以北的中国目标。",
      NumShow: 1,
      id: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
      tableData: {
        num1: 2,
        num2: 2,
        tableData1: [
          {
            date: "",
            name: "",
            address: "",
            add: "",
          },
        ],
        tableData2: [
          {
            date: "",
            name: "",
            address: "",
            add: "",
          },
        ],
      },
    };
  },
   created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined||res.data.content=='') {
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
        date: "",
        name: "",
        address: "",
        add: "",
      };
      this.tableData.tableData1.push(jop);
      this.tableData.num1 = this.tableData.tableData1.length + 1;
    },
    Num2Click() {
      let jop = {
        date: "",
        name: "",
        address: "",
        add: "",
      };
      this.tableData.tableData2.push(jop);
      this.tableData.num2 = this.tableData.tableData2.length + 1;
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
  height: 10rem;
  width: 39rem;
  overflow-y: auto;
  margin: 0 auto 1rem;
}
.table_tr {
  width: 37rem;
  margin: 0 auto;
  background: #031437;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  border: 0px solid #4156f4;
  tr {
    // width: 16rem;
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
</style>