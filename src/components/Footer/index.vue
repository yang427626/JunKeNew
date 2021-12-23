<template>
  <div class="foote">
    <!-- <p class="foot_it">研讨</p> -->
    <!-- <p class="foot_item">态势</p> -->
    <p class="foot_item" @click="databaseClick">文档库</p>
    <p class="foot_item" @click="reminderClick">进度提醒</p>
    <!-- <p class="foot_item">席位配置</p> -->
    <p class="foot_item" @click="TroopsClick">兵力编组</p>
    <p class="foot_item" @click="MeFileClick">我的文件</p>
    <p class="foot_item" @click="dataClick">数据库</p>

    <!-- 文档库 -->
    <el-dialog :title="title" :visible.sync="databaseShow" width="50%">
      <div class="his_title_hear">
        <div class="input_tit">
          <p><input type="text" placeholder="文件名称/时间/上传人" /></p>
          <p class="input_button">
            <button @click="databaseShow = false">筛选</button>
          </p>
        </div>
        <div class="button">
          <p class="input_button">
            <button @click="databaseShow = false">批量导入</button>
          </p>
          <p class="input_button">
            <button @click="databaseShow = false">批量删除</button>
          </p>
          <p class="input_button">
            <button @click="databaseShow = false">删除</button>
          </p>
        </div>
      </div>
      <div class="input_content">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="{
            background: '#031437',
            color: '#90C4DF ',
            border: '1px solid #4156F4',
          }"
          @selection-change="handleSelectionChange"
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
              <button @click="databaseShow = false">查看</button>
              <button @click="databaseShow = false">下载</button>
              <button @click="databaseShow = false">删除</button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="databaseShow = false">关闭</el-button>
      </span>
    </el-dialog>
    <!-- 兵力编组 -->
    <el-dialog title="兵力编组" :visible.sync="TroopsShow" width="80%">
      <div class="tree-drag">
        <p>从左侧拖拽到右侧，出现蓝线为可以添加</p>
        <el-tree
          :data="treeData1"
          ref="treeIn"
          class="tree"
          node-key="id"
          default-expand-all
          draggable
          :allow-drag="returnTrue"
          @node-drag-start="handleDragstart"
          @node-drag-end="handleDragend"
        ></el-tree>
        <el-tree
          :data="treeData2"
          ref="treeOut"
          class="tree"
          node-key="id"
          default-expand-all
          draggable
          :allow-drop="returnTrue"
          @node-drop="handleDrop"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span @dblclick="dbclick(node)"
              ><input
                type="text"
                @blur="test(node)"
                :disabled="disabled"
                v-model="node.data.label"
            /></span>
            <span>
              <i @click="DeleteClick(node)" class="el-icon-delete"></i>
            </span>
          </span>
        </el-tree>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="TroopsShow = false">关闭</el-button>
      </span>
    </el-dialog>

    <!-- 退回 -->
    <el-dialog :visible.sync="reminder" title="进度提示" width="30%">
      <div class="newMessage">
        <p class="newMessage_title">提醒事项</p>
      </div>
      <div>
        <textarea
          v-model="reminderData"
          type="textarea"
          class="textarea dial"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
        <div class="select">
          <p class="newMessage_title">提醒人选择</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reminder = false">取 消</el-button>
        <el-button type="primary" @click="refuse_Dialog_Clcik">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 数据库 -->
    <CDdata :dataShow="this.$store.state.dataShow"/>
  </div>
</template>
<script>
import {
  HaGetForceTree,
  HaSaveForceTree,
  HaListForceTeam,
  HaDeleteForceTeam,
  HaModifyForceTeam,
} from "@/api/Ha";
import CDdata from "@/components/Footer/dataBody/NavarChy1.vue"
export default {
  name: "foote",
  created() {
    HaGetForceTree(this.baseUrl).then((res) => {
      this.treeData1 = res.data;
    });
    this.HaListForceTeamClick();
  },
  components:{
    CDdata
  },
  data() {
    return {
      databaseShow: false,
      dataShow: false,
      TroopsShow: false,
      title: "",
      disabled: true,
      treeData1: [],
      reminder: false,
      reminderData: "",
      options: [
        {
          value: "选项1",
          label: "李康",
        },
        {
          value: "选项2",
          label: "张翰萌",
        },
      ],
      value: "",
      treeData2: [
        {
          id: 0,
          label: "默认编组",
          children: [],
        },
      ],
      parentId: 0,
      SinId: 0,
      labelName: "",
      tableData: [
        {
          date: "xxxx",
          name: "张翰萌",
          address: "20121-10-10",
        },
      ],
    };
  },
  methods: {
    dataClick() {
     this.$store.state.dataShow=true
    },
    reminderClick() {
      this.reminder = true;
    },
    refuse_Dialog_Clcik() {
      this.reminder = false;
      console.log("保存");
    },
    // 保存完的兵力库
    HaListForceTeamClick() {
      HaListForceTeam(this.baseUrl).then((res) => {
        if (res.data == "") {
          this.treeData2 = [
            {
              id: 0,
              label: "默认编组",
              children: [],
            },
          ];
        } else {
          this.treeData2 = res.data;
        }
      });
    },
    databaseClick() {
      this.title = "文档库";
      this.databaseShow = true;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    TroopsClick() {
      this.TroopsShow = true;
    },
    MeFileClick() {
      this.title = "我的文件";
      this.databaseShow = true;
    },
    // 删除
    DeleteClick(id) {
      console.log(id.data.id);
      HaDeleteForceTeam(this.baseUrl, {
        id: id.data.id,
      }).then((res) => {
        console.log(res, "删除");
        this.HaListForceTeamClick();
      });
    },
    // 双击
    dbclick(data) {
      this.disabled = false;
      // console.log("双击", this.disabled)
    },
    // input失去焦点
    test(data) {
      this.disabled = true;
      HaModifyForceTeam(this.baseUrl, {
        id: data.data.id,
        label: data.data.label,
      }).then((res) => {
        this.HaListForceTeamClick();
      });
      // console.log("失去焦点",data)
    },
    //左侧节点触发拖拽
    handleDragstart(node, event) {
      // console.log("start", node, event);
      //在左侧节点触发拖拽的时候触发右侧节点的拖拽事件
      this.$refs.treeOut.$emit("tree-node-drag-start", event, { node: node });
    },
    //拖拽结束，但是确定是否成功
    handleDragend(draggingNode, endNode, position, event) {
      // let id = draggingNode.data.id;
      let newData = { id: +new Date(), children: [] };
      //在左tree插入拖拽的节点
      // this.$refs.treeIn.insertBefore(newData, draggingNode);
      //右tree触发结束拖拽事件
      this.$refs.treeOut.$emit("tree-node-drag-end", event);
      this.$nextTick(() => {
        // 如果是移动到了自身---
        // console.log(this.$refs.treeIn.getNode(draggingNode.data));
        if (this.$refs.treeIn.getNode(draggingNode.data)) {
          this.$refs.treeIn.remove(newData);
          console.log("移动到自身");
        } else {
          // 如果移动到了右tree上----
          let data = JSON.parse(JSON.stringify(draggingNode.data));
          this.$refs.treeIn.insertAfter(
            data,
            this.$refs.treeIn.getNode(newData)
          );
          this.$refs.treeIn.remove(newData);
          console.log("移动到别的tree");
        }
      });
    },
    //结束拖拽，可得到拖拽来源与去向
    handleDrop(draggingNode, dropNode, dropType, ev) {
      this.parentId = 0;
      this.SinId = 0;
      this.labelName = "";
      this.parentId = dropNode.data.id;
      this.SinId = draggingNode.data.id;
      this.labelName = draggingNode.data.label;
      if (dropType == "after") {
        this.parentId = 0;
      }
      console.log(dropType, "父标签");
      HaSaveForceTree(this.baseUrl, {
        id: this.SinId,
        parentId: this.parentId,
        label: this.labelName,
      }).then((res) => {
        console.log(res, "保存兵力树");
        this.HaListForceTeamClick();
      });
    },
    returnTrue() {
      return true;
    },
    returnFalse() {
      return false;
    },
  },
};
</script>
<style   lang="scss" scoped>
.tree {
  display: inline-block;
  overflow: auto;
  width: 49%;
  height: 30rem;
  border: 1px solid #444;
}
.tree_i {
  margin-left: 100rem;
}
::v-deep.el-scrollbar__wrap {
  background: #1f295c;
}
::v-deep.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #1f295c;
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
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
.dial {
  width: 100%;
  height: 5rem;
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
  button {
    // background: #5c75f3;
    // border: 0px;
    // cursor: pointer;
    // color: #fff;
    // padding: 0.1rem 0.2rem;
    // border-radius: 4px;
  }
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
