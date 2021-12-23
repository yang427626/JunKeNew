<template>
<!-- 制定方案 -->
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
      <Enact class="Project"></Enact>
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
import Enact from "@/components/Enact/index.vue";
export default {
  name: "Monitoring",
  components: {
    TaskConter,
    Synergy,
    Footer,
    Navarchy,
    Enact
  },
  data() {
    return {
      flag: null,
      creareIndex: 1,
      pro3_a: "",
      titleData: [
        {
          title: "确定行动方案制定方法和军事目标",
        },
        {
          title: "同步兵力所有成员行动",
        },
        {
          title: "回顾和完善敌我重心分析",
        },
        {
          title: "确定每个行动方案的行动顺序",
        },
        {
          title: "按阶段确定主要和支援行动",
        },
        {
          title: "确定决策点和决策标准",
        },
        {
          title: "确定组成部队及任务",
        },
        {
          title: "任务编组",
        },
        {
          title: "维持构想",
        },
        {
          title: "部署构想",
        },

        {
          title: "定义作战区域",
        },
        {
          title: "制定初始行动方案陈述",
        },
{
          title: "初始行动方案汇总",
        },
        {
          title: "详细行动方案汇总",
        },
      
        {
          title: "检验每个行动方案的有效性",
        },
        {
          title: "向指挥官简报行动方案制定情况",
        },
        {
          title: "指挥官批准行动方案",
        }
      ],
    };
  },
  created() {
    this.flag = sessionStorage.getItem("flag");
     this.$store.state.progress=3
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
       this.$store.state.Enact=index
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
  font-size: 0.65rem;
  cursor: pointer;
}
.title {
  display: flex;
  width: 97%;
  margin: 0 auto;
  height: 3.5rem;
  overflow: auto;
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
