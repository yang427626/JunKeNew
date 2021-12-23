<template>
  <div class="NavarchySin">
    <div class="task_title">自定义流程</div>
    <!-- <el-tree
      :data="treeData.processNodeList"
      :props="defaultProps"
      :show-checkbox="true"
      :check-strictly="false"
      node-key=" id"
      ref="tree"
      @check-change="handleCheckChange"
    >
    </el-tree> -->
    <div class="custom-tree-containe">
      <el-tree
        :data="treeData.processNodeList"
        :props="defaultProps"
        :show-checkbox="true"
        :check-strictly="false"
        node-key=" id"
        ref="tree"
        :render-content="renderContent"
        @check-change="handleCheckChange"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <span class="dataName">{{ data.nodeName }}</span>
            <!-- <el-button type="text" size="mini"> 导入 </el-button> -->
          </span>
        </span>
      </el-tree>
    </div>

    <p class="pro_bom2" @click="ensureClick">确定</p>
  </div>
</template>
<script>
import { HaListProcess, HaSaveProcessTemplate } from "@/api/Ha";
export default {
  data() {
    return {
      id: "",
      treeData: [],
      treeDatas: {
        projectId: "",
        processNodeList: [],
      },
      closeTree: false,
      defaultProps: {
        children: "processNodeList",
        label: "nodeName",
        id: " id",
      },
    };
  },
  created() {
    HaListProcess(this.baseUrl).then((res) => {
      this.treeData = res.data;
    });
  },
  methods: {
    handleCheckChange(data, checked) {
      this.treeDatas.processNodeList = [];
      let res = this.$refs.tree.getCheckedNodes();
      res.forEach((item) => {
        item.status = "1";
        this.treeDatas.processNodeList.push(item);
      });
    },
    ensureClick() {
      this.treeDatas.projectId = 3;
      HaSaveProcessTemplate(this.baseUrl, this.treeDatas).then((res) => {
        console.log(res);
      });
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
            >
              导入
            </el-button>
          </span>
        </span>
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.NavarchySin {
  width: 48%;
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
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
/deep/.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
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
</style>
