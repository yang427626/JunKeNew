<template>
  <div class="task_conter">
    <div class="task_title">编辑规划指令</div>
    <div>
      <div class="progress">
        <el-steps :active="progress">
          <el-step
            v-for="item in progressDatta"
            :key="item.index"
            :title="item.name"
            @click.native="progressClick(item.index)"
          />
        </el-steps>
        <projectSin1
          v-show="progress == 1"
          :project-sin-data="projectSinData"
          @nextClick="nextClick"
        />

        <projectSin2
          v-show="progress == 2"
          @nextClick="nextClick"
        />

        <projectSin3
          v-show="progress == 3"
          @nextClick="nextClick"
        />

        <projectSin4
          v-show="progress == 4"
          @nextClick="nextClick"
        />

        <projectSin5
          v-show="progress == 5"
          @nextClick="nextClick"
        />

        <projectSin6
          v-show="progress == 6"
          @nextClick="nextClick"
        />

        <projectSin7
          v-show="progress == 7"
          @nextClick="nextClick"
        />

        <projectSin8
          v-show="progress == 8"
          @nextClick="nextClick"
        />

        <projectSin9
          v-show="progress == 9"
          @nextClick="nextClick"
        />

        <projectSin10
          v-show="progress == 10"
          @nextClick="nextClick"
        />

        <div />
      </div>
    </div>
  </div>
</template>
<script>
import projectSin1 from '@/components/projectSin/projectSin1.vue'
import projectSin2 from '@/components/projectSin/projectSin2.vue'
import projectSin3 from '@/components/projectSin/projectSin3.vue'
import projectSin4 from '@/components/projectSin/projectSin4.vue'
import projectSin5 from '@/components/projectSin/projectSin5.vue'
import projectSin6 from '@/components/projectSin/projectSin6.vue'
import projectSin7 from '@/components/projectSin/projectSin7.vue'
import projectSin8 from '@/components/projectSin/projectSin8.vue'
import projectSin9 from '@/components/projectSin/projectSin9.vue'
import projectSin10 from '@/components/projectSin/projectSin10.vue'
import { viewHandDrowProject } from '@/api/programming.js'
export default {
  name: 'TaskConter',
  components: {
    projectSin1,
    projectSin2,
    projectSin3,
    projectSin4,
    projectSin5,
    projectSin6,
    projectSin7,
    projectSin8,
    projectSin9,
    projectSin10
  },
  data() {
    return {
      progress: 1,
      projectSinData: null,
      progressDatta: [
        {
          name: '基础信息',
          index: 1
        },
        {
          name: '目的',
          index: 2
        },
        {
          name: '使命人物',
          index: 3
        },
        {
          name: '指挥官分析',
          index: 4
        },
        {
          name: '假设和限制',
          index: 5
        },
        {
          name: '兵力分配',
          index: 6
        },
        {
          name: '行动方案',
          index: 7
        },
        {
          name: '指南',
          index: 8
        },
        {
          name: '人物',
          index: 9
        },
        {
          name: '行政',
          index: 10
        }
      ]
    }
  },
  created() {
    // viewHandDrowProject(this.baseUrl).then((res) => {
    //    console.log('22222222222222')
    //    this.projectSinData = res.data;
    // });
  },
  methods: {
    // 接收数据
    // viewHandDrowProjectData(){
    //     viewHandDrowProject(this.baseUrl).then((res) => {
    //    this.projectSinData = res.data;
    // });
    // },
    progressClick(index) {
      this.progress = index
    },
    nextClick(index) {
      this.progress = index
      // console.log(index)
    }
  }
}
</script>
<style scoped>
.pro2 {
  width: 96%;
  margin-top: 1rem;
  /* height: 100px; */
}
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
  position: relative;
}
.text {
  color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto 0 auto;
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
.progress {
  width: 96%;
  margin: 1rem auto;
}
.box_pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.pro_con2 {
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #90c4df;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
}
.pro_bom1 {
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
}
.pro_bom2 {
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
}
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/deep/.el-textarea__inner {
  background: #1f295c;
  height: 17rem;
  border: 1px solid #4156f4;
}
/deep/ .el-input--small {
  width: 100%;
  margin-left: 1rem;
  background: #1f295c;
  border: 1px solid #4156f4;
}
/deep/ .el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/ .el-step__title.is-process {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-finish {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-wait {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__icon.is-text {
  background: #031437;
  color: #fff;
}
/deep/ .el-step__icon.is-text {
  color: #fff;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(0deg, #00f5ff, #74a2e4);
  box-shadow: 0px 1px 5px 0px #a4c1e8;
  border-radius: 50%;
}
</style>
