<template>
  <div class="box">
     <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>
     <div class="item">
      <p class="item_font">文本注意事项:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textNames" /></p>
    </div>
    <table border="1px solid #fff" class="table_tr">
      <div class="tabke_tr_conter">
        <tr>
          <th>序号</th>
          <th>类型（指定和隐含）</th>
          <th>部门</th>
          <th>任务描述</th>
          <th>基本任务</th>
          <th>综合描述（是基本任务则需要填写）</th>
          <th>任务描述</th>
        </tr>
        <tr v-for="(item, index) in tableData" :key="index">
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
            <input type="text" v-model="item.address" />
          </td>
           <td>
            <input type="text" v-model="item.address" />
          </td>
           <td>
            <input type="text" v-model="item.address" />
          </td>
            <td>
            <input type="text" v-model="item.address" />
          </td>
        </tr>
      </div>
    </table>
    <div class="pro_bom">
      <p class="pro_bom1" @click="addClick">添加</p>
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">提交</p>
       <!-- <p class="pro_bom2">下一步</p> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3:'',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路1516 弄",
        }
      ],
    };
  },
  methods: {
    addClick() {
      let Objuct = {};
      this.tableData.push(Objuct);
    },
  },
};
</script>
<style scoped lang="scss">
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
.textNames{
  width: 19rem;
}
.textName{
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