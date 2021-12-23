<template>
  <div class="box">
    <div class="task_title">推荐的分阶段指挥与控制</div>
    <div class="table_content">
      <table border="1px solid #fff" class="table_tr">
        <div class="tabke_tr_conter">
          <tr>
            <th>阶段</th>
            <th>作战区域</th>
            <th>指挥官</th>
          </tr>
          <tr v-for="(item, index) in tableData" :key="index">
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
          <p class="add" @click="addClick">添加</p>
        </div>
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
      tableData: [
        {
          
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
.add{
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
  width: 28rem;
  overflow-y: auto;
  margin: 0 auto;
}
.table_tr {
  width: 37rem;
  background: #031437;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  margin: 1rem 0;
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
.tr_con{
    height: 22rem;
    overflow: auto;
}
</style>