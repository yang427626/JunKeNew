<template>
  <div class="monitoring">
    <div>
      <!-- <Navarchy /> -->
      <div class="title">
        <p
          class="foot_item"
          v-for="(item, index) in titleData"
          :key="index"
        >
          {{ item.title }}
        </p>
      </div>
      <div>
        <div class="conter">
          <textarea
            v-model="pro3_a"
            placeholder="想定描述:2021 04 02 打击00岛 任务完成时段 : 30天"
          />
        </div>
      </div>
      <div class="conter">
        <TaskConter class="TaskConter" />
        <NavarchyBody class="Project" />
        <Synergy class="Synergy" />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Programming from "@/components/Programming";
import TaskConter from "@/components/TaskConter";
import Project from "@/components/project";
import Synergy from "@/components/synergy";
import Footer from "@/components/Footer";
import Navarchy from "@/components/Navarchy";
import NavarchyBody from "@/components/ComDevelop/CDbulletinJ1/NavarChy8.vue";
export default {
  name: "Monitoring",
  components: {
    Programming,
    TaskConter,
    Project,
    Synergy,
    Footer,
    Navarchy,
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
          title: "战略判断",
        },
        {
          title: "分析上级指导",
        },
        {
          title: "整理会议记录",
        },
        {
          title: "调整战略判断和指挥官初始化规划指南",
        },
        {
          title: "确定已知事实和制定规划假设",
        },
        {
          title: "组织收集情报核实事实和假设信息",
        },
        {
          title: "确定并分析行动限制",
        },
        {
          title: "确定指定、隐含和基本任务",
        },
        {
          title: "制定任务陈述",
        },
        {
          title: "进行初始兵力分析",
        },

        {
          title: "制定军事目标",
        },
        {
          title: "制定行动方案评估标准",
        },

        {
          title: "开展风险评估",
        },
        {
          title: "确定初始指挥官关键信息需求",
        },
        {
          title: "编制参谋判断",
        },
        {
          title: "准备任务分析简报",
        },
        {
          title: "进行任务分析简报会准备",
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
    overflow: hidden;
      height: 67vh;
      border: 1px solid #4156f4;
      position: relative;
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
