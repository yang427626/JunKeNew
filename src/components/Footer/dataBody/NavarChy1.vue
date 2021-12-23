<template>
  <div>
    <el-dialog title="数据库" :visible.sync="dataShow" width="50%">
      <el-tabs type="border-card">
        <el-tab-pane label="支持构件模型库">
          <div class="his_title_hear">
            <div class="input_tit">
              <p><input type="text" placeholder="文件名称/时间/上传人" /></p>
              <p class="input_button">
                <button @click="dataShow = false">筛选</button>
              </p>
            </div>
            <div class="button">
              <p class="input_button">
                <button @click="dataShow = false">批量导入</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">批量删除</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">删除</button>
              </p>
            </div>
          </div>
          <div class="input_content">
            <el-table
              :data="tableData1"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column type="selection" width="55" align="center">
              </el-table-column>
              <el-table-column label="文件名称" align="center">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" align="center" label="上传人">
              </el-table-column>
              <el-table-column prop="address" align="center" label="上传时间">
              </el-table-column>
              <el-table-column align="center" label="其他">
                <template slot-scope="scope">
                  <button @click="dataShow = false">查看</button>
                  <button @click="dataShow = false">删除</button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="规则库">
          <div class="his_title_hear">
            <div class="input_tit">
              <p><input type="text" placeholder="文件名称/时间/上传人" /></p>
              <p class="input_button">
                <button @click="dataShow = false">筛选</button>
              </p>
            </div>
            <div class="button">
              <p class="input_button">
                <button @click="dataShow = false">批量导入</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">批量删除</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">删除</button>
              </p>
            </div>
          </div>
          <div class="input_content">
            <el-table
              :data="tableData2"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column type="selection" width="55" align="center">
              </el-table-column>
              <el-table-column label="文件名称" align="center">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" align="center" label="上传人">
              </el-table-column>
              <el-table-column prop="address" align="center" label="上传时间">
              </el-table-column>
              <el-table-column align="center" label="其他">
                <template slot-scope="scope">
                  <button @click="dataShow = false">查看</button>
                  <button @click="dataShow = false">删除</button>
                </template>
              </el-table-column>
            </el-table>
          </div></el-tab-pane
        >
        <el-tab-pane label="目标库">
          <div class="his_title_hear">
            <div class="input_tit">
              <p><input type="text" placeholder="文件名称/时间/上传人" /></p>
              <p class="input_button">
                <button @click="dataShow = false">筛选</button>
              </p>
            </div>
            <div class="button">
              <p class="input_button">
                <button @click="dataShow = false">批量导入</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">批量删除</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">删除</button>
              </p>
            </div>
          </div>
          <div class="input_content">
            <el-table
              :data="tableData3"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column type="selection" width="55" align="center">
              </el-table-column>
              <el-table-column label="文件名称" align="center">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" align="center" label="上传人">
              </el-table-column>
              <el-table-column prop="address" align="center" label="上传时间">
              </el-table-column>
              <el-table-column align="center" label="其他">
                <template slot-scope="scope">
                  <button @click="dataShow = false">查看</button>
                  <button @click="dataShow = false">删除</button>
                </template>
              </el-table-column>
            </el-table>
          </div></el-tab-pane
        >
        <el-tab-pane label="构件库">
          <div class="his_title_hear">
            <div class="input_tit">
              <p><input type="text" placeholder="文件名称/时间/上传人" /></p>
              <p class="input_button">
                <button @click="dataShow = false">筛选</button>
              </p>
            </div>
            <div class="button">
              <p class="input_button">
                <button @click="dataShow = false">批量导入</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">批量删除</button>
              </p>
              <p class="input_button">
                <button @click="dataShow = false">删除</button>
              </p>
            </div>
          </div>
          <div class="input_content">
            <el-table
              :data="tableData4"
              style="width: 100%"
              :header-cell-style="{
                background: '#031437',
                color: '#90C4DF ',
                border: '1px solid #4156F4',
              }"
            >
              <el-table-column type="selection" width="55" align="center">
              </el-table-column>
              <el-table-column label="文件名称" align="center">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" align="center" label="上传人">
              </el-table-column>
              <el-table-column prop="address" align="center" label="上传时间">
              </el-table-column>
              <el-table-column align="center" label="其他">
                <template slot-scope="scope">
                  <button @click="dataShow = false">查看</button>
                  <button @click="dataShow = false">删除</button>
                </template>
              </el-table-column>
            </el-table>
          </div></el-tab-pane
        >
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeClick">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataShow: false,
      tableData1: [
        {
          date: "保密文件-1-2-3-3",
          name: "周果",
          address: "2021-11-13",
        },
           {
          date: "保密文件-3-3-3-3",
          name: "张翰",
          address: "2021-11-13",
        },
      ],
       tableData2: [
        {
          date: "保密文件-2-4-3-4",
          name: "张翰",
          address: "2021-10-01",
        },
      ],
        tableData3: [
        {
          date: "保密文件-4-3-3-3",
          name: "崔",
          address: "2021-09-14",
        },
          {
          date: "保密文件-3-6-3-3",
          name: "张翰",
          address: "2021-11-13",
        },
      ],
        tableData4: [
        {
          date: "保密文件-5-3-3-21",
          name: "刘",
          address: "2021-10-19",
        },
      ],
    };
  },
  props: { dataShow: Boolean },
  methods: {
    closeClick() {
      this.dataShow = false;
      this.$store.state.dataShow = false;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
  },
};
</script>
<style   lang="scss" scoped>
::v-deep.el-tabs--border-card > .el-tabs__content {
  background: #1f295c;
}
::v-deep.el-tabs--border-card {
  border: 0px;
}
::v-deep.el-scrollbar__wrap {
  background: #1f295c;
}
::v-deep.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #1f295c;
}

.newMessage_title {
  color: #4a88a8;
  width: 5rem;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.foote {
  display: flex;
  width: 96%;
  margin: 0 auto;
}
.select {
  display: flex;
  width: 100%;
  margin: 1rem auto 0;
}
.foot_it {
  background: #0076db;
  border: 1px solid #242c39;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
}
.foot_item {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #90c4df;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
}
.his_title_hear {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1c34bb;
  .button {
    display: flex;
  }
}
.input_content {
  margin: 1rem 0;
}
.input_tit {
  display: flex;
  //  justify-content: space-between;
  input {
    background: #060c2f;
    outline: none;
    color: #fff;
    border: 1px solid #5c75f3;
  }
}
.input_button {
  margin-left: 1rem;
//   button {
//     background: #031437;
//     border: 0px;
//     cursor: pointer;
//     font-size: 0.6re;
//     color: #fff;
//     padding: 0.1rem 0.2rem;
//     border-radius: 4px;
//   }
}

/deep/.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  input {
    background: #04215a;
    color: #8ebcec;
    border: 0px;
    width: 30rem;
  }
  // input:hover{
  //   background: #8ebcec;
  // }
}
/deep/ .el-tree-node__content {
  font-size: 0.7rem;
}
/deep/ .el-tree {
  color: #8ebcec;
  background: #04215a;
}
/deep/ .el-tree-node__content:hover {
  background: #053eaf;
}
/deep/ .el-tree-node:focus > .el-tree-node__content {
  background: #1051d3;
}
/deep/ .el-dialog__wrapper {
  top: -2.5rem;
}
/deep/.el-dialog__header {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
  /* background-size: 100% 100%; */
  border: 0px solid #4156f4;
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
  width: 40%;
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
/deep/.el-select {
  width: 100%;
}
/deep/.el-dialog__header {

  border: 1px solid #4156f4;
}
/deep/.el-dialog {
  background: #031437;
  border: 1px solid #4156f4;
}
/deep/.el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
::v-deep.el-dialog--center .el-dialog__footer{
    text-align:right;
}
</style>
