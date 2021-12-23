<template>
  <div class="box">
    <div class="task_title">确定决策点和决策标准</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
      <p class="item_font">文本注意事项:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textNames" /></p>
    </div>
    <div class="itemCon">
      <table class="table" border="1" cellspacing="0" width="90%" height="100">
        <tr class="item_td">
          <td :rowspan="tableData.dataNum" class="item_td">评估</td>
          <td v-for="(item, index) in tableData.tableData0" :key="index + 't'">
            <input type="text" v-model="item.model" />
          </td>
          <td :rowspan="tableData.dataNum">
            <i @click="assessClick" class="el-icon-circle-plus"></i>
          </td>
        </tr>
        <tr
          class="item_td"
          v-for="(table, key) in tableData.table"
          :key="key + 's'"
        >
          <td v-for="(key, i) in table.enemyDataSin" :key="i">
            <input type="text" v-model="key.model" />
          </td>
        </tr>
      </table>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">确定</p>
      <p class="pro_bom2">下一步</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3: "",
      tableData: {
        dataNum: 5,
        tableData0: [
          { model: "决策点" },
          { model: "2" },
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
        ],
        table: [
          {
            enemyDataSin: [
              { model: "分支" },
              { model: "3" },
              { model: "" },
              { model: "4" },
              { model: "" },
              { model: "" },
              { model: "" },
            ],
          },
          {
            enemyDataSin: [
              { model: "后续" },
              { model: "3" },
              { model: "" },
              { model: "4" },
              { model: "" },
              { model: "" },
              { model: "" },
            ],
          },
          {
            enemyDataSin: [
              { model: "指挥官关键信息需求" },
              { model: "3" },
              { model: "" },
              { model: "4" },
              { model: "" },
              { model: "" },
              { model: "" },
            ],
          },
          {
            enemyDataSin: [
              { model: "风险" },
              { model: "3" },
              { model: "" },
              { model: "4" },
              { model: "" },
              { model: "" },
              { model: "" },
            ],
          },
        ],
      },
    };
  },
  methods: {
    assessClick() {
      let obj = {
        enemyDataSin: [
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
          { model: "" },
        ],
      };
      this.tableData.table.push(obj);
      this.tableData.dataNum = this.tableData.table.length + 1;
    },
  },
};
</script>
<style scoped lang="scss">
.add {
  float: right;
  cursor: pointer;
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
  font-size: 0.7rem;
  font-weight: 900;
  text-align: center;
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
  width: 10rem;
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
  // height: 25rem;
  width: 39rem;
  overflow-y: auto;
  margin: 0 auto;
}
.itemCon {
  color: #fff;
  width: 100%;
  font-size: 0.3rem;
  height: 23rem;
  overflow: auto;
  .table {
    margin: 0 auto;
  }
  .item_td {
    width: 4rem;
    input {
      width: 100%;
      background: #031437;
      outline: none;
      color: #fff;
      border: 0px;
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
.itemCon {
  color: #fff;
  width: 100%;
  font-size: 0.3rem;
  height: 23rem;
  overflow: auto;
  .table {
    margin: 0 auto;
  }
  .item_td {
    width: 4rem;
    input {
      width: 100%;
      background: #031437;
      outline: none;
      color: #fff;
      border: 0px;
    }
  }
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
.table_content {
  height: 22rem;
  overflow: auto;
}
</style>