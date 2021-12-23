<template>
  <!-- p2 比较方案 -->
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
      <ComCompare class="Project"></ComCompare>
      <Synergy class="Synergy" />
    </div>
    <Footer />
  </div>
</template>
<script>
import Programming from "@/components/Programming";
import TaskConter from "@/components/TaskConter";
import Project from "@/components/project";
import Synergy from "@/components/synergy";
import Footer from "@/components/Footer";
import ComCompare from "@/components/ComCompare/index.vue";

export default {
  name: "Monitoring",
  components: {
    Programming,
    TaskConter,
    Project,
    Synergy,
    Footer,
  ComCompare
  },
  data() {
    return {
      flag: null,
      creareIndex: 1,
      pro3_a: "",
      titleData: [
        {
          title: "确定/定义比较/评估标准",
        },
        {
          title: "确认评估标准加权",
        },
        {
          title: "参谋评估行动方案",
        },
        {
          title: "每个参谋提交行动方案建议",
        }
      ],
    };
  },
  created() {
    this.flag = sessionStorage.getItem("flag");
     this.$store.state.progress=5
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
         this.$store.state.ComCompare=index
    }
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
