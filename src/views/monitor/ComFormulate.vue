<template>
<!-- 任务分析 -->
  <div class="monitoring">
    <div class="title">
      <p
        class="foot_item"
        @click="NavarchyHaveClick(index)"
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
      <NavarChyJ2 class="Project"></NavarChyJ2>
      <Synergy class="Synergy" />
    </div>
    <Footer />
  </div>
</template>
<script>
import TaskConter from "@/components/TaskConter";
import Synergy from "@/components/synergy";
import Footer from "@/components/Footer";
import Navarchy from "@/components/Navarchy";
import NavarchyBody from "@/components/NavarchySin/NavarchyBody/NavarchyBody.vue";
// import NavarchySin1 from "@/components/NavarchySin/NavarchySin1.vue";
import NavarChyJ2 from "@/components/NavarChyJ2/index.vue";
export default {
  name: "Monitoring",
  components: {
    TaskConter,
    Synergy,
    Footer,
    Navarchy,
    NavarchyBody,
    NavarChyJ2
  },
  data() {
    return {
      flag: null,
      creareIndex: 2,
      pro3_a: "",
      titleData: [
        {
          title: "完善初始化作战构想",
        },
        {
          title: "兵力和能力申请",
        },
        {
          title: "解决额外兵力需求",
        },
        {
          title: "指挥官批注额外兵力申请",
        },
        {
          title: "兵力规划",
        },
        {
          title: "记录兵力需求数据和信息",
        },
        {
          title: "分阶段兵力安排",
        },
        {
          title: "动员规划",
        },
        {
          title: "轮换需求",
        },
        {
          title: "作战指挥官确定兵力规划",
        },

        {
          title: "保障规划",
        },
        {
          title: "后勤保障构想",
        },

        {
          title: "后勤保障性分析",
        },
        {
          title: "运输优化",
        },
        {
          title: "部署和再部署",
        },
        {
          title: "调遣规划",
        },
         {
          title: "识别缺口",
        },
         {
          title: "可行性分析",
        },
         {
          title: "兵力",
        },
         {
          title: "保障资源",
        },
         {
          title: "运输",
        },
         {
          title: "制作文档",
        },
         {
          title: "调遣计划审查和批准",
        },
         {
          title: "JS和JPEC审查计划和命令",
        },
         {
          title: "CJCS和副部长审查计划",
        },
         {
          title: "部长和总统审查，批准计划",
        },
         {
          title: "过渡简报",
        },
         {
          title: "确定简报",
        },
         {
          title: "过渡训练",
        },
         {
          title: "计划实施",
        },
      ],
    };
  },
  created() {
    this.flag = sessionStorage.getItem("flag");
    this.$store.state.progress=2
  },
  methods: {
    creareClick() {
      if (this.flag == 0) {
        this.creare = false;
      } else {
        this.creareIndex = 1;
        this.$store.state.NavarchyShow = 0;
        this.creare = false;
      }
    },
    NavarchyHaveClick(index){
       this.$store.state.NavarchyP2=index
    }
  },
};
</script>
<style  lang="scss" scoped>
.his_title {
  font-size: 0.8rem;
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
  }
  .Synergy {
    width: 25%;
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
  outline: none;
  color: #4a88a8;
  height: 100%;
  width: 99%;
  margin: 0 auto 0.3rem auto;
  font-size: 0.3rem;
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
  font-size: 0.2rem;
  cursor: pointer;
}
.title {
  display: flex;
  width: 97%;
  margin: 0 auto;
  height: 3.5rem;
  overflow: auto;
  flex-wrap: wrap;
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
