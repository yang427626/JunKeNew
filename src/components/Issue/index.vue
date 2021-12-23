<template>
  <div class="box">
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con">
        <textarea
          :disabled="disabled"
          v-model="tableData.textName"
          class="textName"
        />
      </p>
    </div>
    <div class="item">
      <p class="item_font">文本注意事项:</p>
      <p class="item_font_con">
        <textarea
          :disabled="disabled"
          v-model="tableData.text"
          class="textNames"
        />
      </p>
    </div>
    <table border="1px solid #fff" class="table_tr">
      <div class="tabke_tr_conter">
        <tr>
          <th>序号</th>
          <th>部门</th>
          <th>问题</th>
          <th :rowspan="tableData.numLength">
            <i class="el-icon-circle-plus-outline" @click="addClick"></i>
          </th>
        </tr>
        <tr v-for="(item, index) in tableData.tableData" :key="index">
          <td width="50">
            <input type="text" :disabled="disabled" v-model="item.index" />
          </td>
          <td>
            <input type="text" :disabled="disabled" v-model="item.section" />
          </td>
          <td width="400">
            <input type="text" :disabled="disabled" v-model="item.issue" />
          </td>
        </tr>
      </div>
    </table>

    <div class="pro_bom">
      <p class="pro_bom1" v-show="NumShow==1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-if="authRight == 1">拒绝</p>
      <p class="pro_bom2" v-show="NumShow==1" @click="saveClick">保存</p>
      <p class="pro_bom2" v-show="NumShow==1" @click="submitClick">提交</p>
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
        numLength: 2,
        text: "",
        textName: "",
        tableData: [
          {
            index: "",
            section: "",
            issue: "",
          },
        ],
      },
    };
  },

  created() {
    this.authRight = this.$route.query.authRight;
    if (this.$route.query.id == undefined) {
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
    addClick() {
      let Objuct = {};
      this.tableData.tableData.push(Objuct);
      this.tableData.numLength = this.tableData.tableData.length + 1;
    },
    // // 拒绝
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
.item {
  display: flex;
}
.newMessage_title {
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.dial {
  margin: 0 1rem;
}
.textarea {
  width: 82%;
  height: 5rem;
}
.textNames {
  width: 25rem;
}
.item_font {
  font-size: 0.7rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 6rem;
  padding: 0.2rem 0;
}
.item_font_con {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  width: 80%;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  height: 1.2rem;
}
.tabke_tr_conter {
  height: 19rem;
  width: 35rem;
  overflow-y: auto;
  margin: 0 auto;
}
.table_tr {
  // width: 37rem;
  background: #031437;
  color: #fff;
  // height: 1rem;
  font-size: 0.8rem;
  // overflow: auto;
  text-align: center;
  border: 0px solid #4156f4;
  tr {
    // width: 30rem;
    text-align: center;
    th {
      text-align: center;
      // width: 10em;
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
.box {
  position: relative;
  height: 62vh;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
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
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
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
  width: 80%;
  margin: 0 auto;
}
</style>