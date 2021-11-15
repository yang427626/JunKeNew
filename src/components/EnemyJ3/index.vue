<template>
  <div class="task_conter">
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
        <Enemy1 v-show="progress == 1" @nextClick="nextClick" />

        <Enemy2 v-show="progress == 2" @nextClick="nextClick" />

        <Enemy3 v-show="progress == 3" @nextClick="nextClick" />

        <Enemy4 v-show="progress == 4" @nextClick="nextClick" />

        <Enemy5 v-show="progress == 5" @nextClick="nextClick" />

        <Enemy6 v-show="progress == 6" @nextClick="nextClick" />
        <Enemy7 v-show="progress == 7" @nextClick="nextClick" />
      </div>
    </div>
  </div>
</template>
<script>
import Enemy1 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_1_J3.vue'
import Enemy2 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_2_J3.vue'
import Enemy3 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_3_J3.vue'
import Enemy4 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_4_J3.vue'
import Enemy5 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_5_J3.vue'
import Enemy6 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_6_J3.vue'
import Enemy7 from '@/components/EnemyJ3/EnemyBody_J3/EnemyBody_7_J3.vue'

import { viewHandDrowProject } from '@/api/programming.js'
export default {
  name: 'TaskConter',
  components: {
    Enemy1,
    Enemy2,
    Enemy3,
    Enemy4,
    Enemy5,
    Enemy6,
    Enemy7
  },
  data() {
    return {
      progress: 1,
      projectSinData: null,
      progressDatta: [
        {
          name: '军事地理',
          index: 1
        },
        {
          name: '运输',
          index: 2
        },
        {
          name: '电信',
          index: 3
        },
        {
          name: '政治',
          index: 4
        },
        {
          name: '经济',
          index: 5
        },
        {
          name: '社会',
          index: 6
        },
        {
          name: '科学技术',
          index: 7
        }
      ]
    }
  },
  created() {},
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
  /* height: 25rem; */
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
/deep/.el-step__title {
  font-size: 0.6rem;
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
