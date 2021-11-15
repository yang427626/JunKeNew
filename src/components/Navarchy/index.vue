<template>
  <div>
    <div class="steps">
      <el-steps :active="progress">
        <el-step
          v-for="item in progressDatta"
          :key="item.index"
          :title="item.name"
          @click.native="progressClick(item.index)"
        />
      </el-steps>
    </div>
    <div class="title">
      <p class="foot_item" @click="NavarchyHaveClick">接收想定</p>
      <p class="foot_item" @click="NavarchyRecordClick">整理会议记录</p>
      <p class="foot_item" @click="NavarchyMessageClick">收集和分析友方.中立信息</p>
      <p class="foot_item" @click="NavarchyEnvironClick">描述作战环境</p>
      <p class="foot_item" @click="NavarchyDefineClick">定义问题</p>
      <p class="foot_item" @click="NavarchyActionClick">制定行动方法</p>
      <p class="foot_item" @click="NavarchyGuideClick">形成指挥官初始规划指南</p>
    </div>
    <div>
      <div class="conter">
        <textarea
          v-model="pro3_a"
          placeholder="想定描述:2021 04 02 打击00岛 任务完成时段 : 30天"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: 1,
      pro3_a: '',
      progressDatta: [
        {
          name: '规划启动',
          index: 1
        },
        {
          name: '任务分析',
          index: 2
        },
        {
          name: '制定方案',
          index: 3
        },
        {
          name: '分析方案',
          index: 4
        },
        {
          name: '比较方案',
          index: 5
        },
        {
          name: '批准方案',
          index: 6
        },
        {
          name: '制定计划',
          index: 7
        }
      ]
    }
  },
  methods: {
    progressClick(index) {
      this.progress = index
    },
    NavarchyHaveClick() {
      this.$store.state.NavarchyShow = 0
    },
    NavarchyRecordClick() {
      this.$store.state.NavarchyShow = 1
    },
    NavarchyMessageClick() {
      this.$store.state.NavarchyShow = 2
    },
    NavarchyEnvironClick() {
      this.$store.state.NavarchyShow = 3
    },
    NavarchyDefineClick() {
      this.$store.state.NavarchyShow = 4
    },
    NavarchyActionClick() {
      this.$store.state.NavarchyShow = 5
    },
    NavarchyGuideClick() {
      this.$store.state.NavarchyShow = 6
    }
  }
}
</script>
<style lang="scss" scoped>
.steps {
  width: 97%;
  margin: 0 auto;
}

textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  height: 100%;
  width: 100%;
}
.conter {
  width: 97%;
  height: 2.5rem;
  border: 2px solid #4156f4;
  border-radius: 4px;
  margin: 0rem auto 0.3rem auto;
  // overflow-y: scroll;
  font-size: 0.7rem;
  font-family: PingFangSC;
  font-weight: bold;
  color: #90c4df;
  // font-size: 0.7rem;
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
/deep/ .el-step__icon.is-text {
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(0deg, #00f5ff, #74a2e4);
  box-shadow: 0px 1px 5px 0px #a4c1e8;
  border-radius: 50%;
}
/deep/ .el-step.is-horizontal .el-step__line {
  top: 1rem;

  height: 0.4rem;
}
</style>
