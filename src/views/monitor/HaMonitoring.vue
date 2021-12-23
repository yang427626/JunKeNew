<template>
  <div class="monitoring">
    <div>
      <Programming />
      <div class="conter">
        <TaskConter class="TaskConter" />
        <!-- <NavarchySin1 v-if="creareIndex == 0" class="Project" /> -->
        <Project v-if="$store.state.creareIndex==0" class="Project" />
        <NavarchySin1 v-if="$store.state.creareIndex==1" class="Project" />
        <Synergy class="Synergy" />
      </div>
      <Footer />
    </div>
    <!-- <el-dialog
      title="应做事项"
      :visible.sync="this.$store.state.creare"
      width="30%"
    >
      <div class="his_title">您现在需要做梳理会议记录，形成会议纪要</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="creareClick">取 消</el-button>
        <el-button type="primary" @click="creareClick">立刻下发</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>
<script>
import Programming from "@/components/Programming";
import TaskConter from "@/components/TaskConter";
import Project from "@/components/project";
import Synergy from "@/components/synergy";
import Footer from "@/components/Footer";
import Navarchy from "@/components/Navarchy";
import NavarchyBody from "@/components/NavarchySin/NavarchyBody/NavarchyBody.vue";
import NavarchySin1 from "@/components/NavarchySin/NavarchySin1.vue";
export default {
  name: "Monitoring",
  components: {
    Programming,
    TaskConter,
    Project,
    Synergy,
    Footer,
    Navarchy,
    NavarchySin1,
    NavarchyBody,
  },
  data() {
    return {
      flag: null,
      creare: true,
      creareIndex: 1,
      pro3_a: "",
      titleData: [
        {
          title: "接收想定",
        },
        {
          title: "整理会议记录",
        },
        {
          title: "收集和分析友方,中立信息",
        },
          {
          title: "描述作战环境",
        },
        {
          title: "定义问题",
        },
        {
          title: "制定行动方法",
        },
        {
          title: "形成指挥官初始化规划指南",
        },
      ],
    };
  },
  created() {
    this.flag = sessionStorage.getItem("flag");
    this.$store.state.city = 1;
    console.log(this.$store.getters);
    console.log(this.$store.state.creareIndex);
  },
  methods: {
    creareClick() {
      if (this.flag == 0) {
        this.$store.state.creare = false;
      } else {
        this.creareIndex = 1;
        this.$store.state.NavarchyShow = 0;
        this.$store.state.creare = false;
      }
    },
    NavarchyHaveClick(index) {
      this.$store.state.NavarchyShow = index;
    },
  },
};
</script>
<style  lang="scss" scoped>
.his_title {
  font-size: 0.8rem;
  /* font-family: Source Han Sans CN; */
  font-weight: 500;
  color: #ffffff;
}
.conter {
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .TaskConter {
    width: 25%;
  }
  .Project {
    width: 48%;
    overflow: auto;
  }
  .Synergy {
    width: 25%;
     overflow: hidden;
  }
}
.steps {
  width: 97%;
  margin: 0 auto;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
 outline:none;
  color: #4a88a8;
  height: 100%;
  width: 99%;
  margin: 0 auto 0.3rem auto;
  font-size: 0.8rem;
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
  font-size: 0.7rem;
  cursor: pointer;
  overflow: hidden;
}
.title {
  display: flex;
  width: 97%;
  margin: 0 auto;
}
/deep/ .el-dialog__header {
  border: 1px solid #4156f4;
}
/deep/ .el-dialog {
  background: #031437;
  color: #ffffff;
  border: 1px solid #4156f4;
}
/deep/ .el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
</style>
