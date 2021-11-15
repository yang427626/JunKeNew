<template>
  <!-- 预警信息 -->
  <div class="headEarly">
    <div @click="handleClick($event)">
      <vueSeamlessScroll
        :data="earlyData"
        class="seamless-warp"
        :class-option="classOption"
      >
        <div
          v-for="(item, index) in earlyData"
          :key="index"
          class="headEarly_box"
        >
          <p>{{ item.keywordName }}</p>
          <p>{{ item.createTime }}</p>
          <p>{{ item.liveSynopsis }}</p>
          <p @click="EarlyClick(item.liveSynopsis)">
            <img src="@/assets/images/forward.png" :data-dept="item.liveSynopsis" alt="">
          </p>
        </div>
      </vueSeamlessScroll>
    </div>
    <el-dialog :visible.sync="earlyShow" width="30%" :show-close="false">
      <span style="font-size: 1rem">{{ earilyCom }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmClick">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'HeadEarly',
  components: {
    vueSeamlessScroll
  },
  props: {
    earlyData: {
      type: Array
    }
  },
  data() {
    return {
      step: 0.5,
      earlyShow: false,
      earilyCom: ''
    }
  },
  computed: {
    classOption() {
      return {
        step: this.step, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  created() {},
  methods: {
    handleClick(event) {
      this.earlyShow = true
      this.earilyCom = event.target.dataset.dept
      this.step = 0
    },
    EarlyClick(data) {
      this.earlyShow = true
      this.earilyCom = data
      this.step = 0
    },
    // 关闭
    confirmClick() {
      this.earlyShow = false
      this.step = 0.5
    }
  }
}
</script>

<style scoped lang="scss">
.seamless-warp {
  width: 100%;
  height: calc(100% - 16px);
  overflow: hidden;
}
.headEarly_box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  height: 4rem;
  line-height: 2rem;
  border-bottom: 1px solid rgba(233, 233, 233, 100);
}
.headEarly_box p:nth-child(1) {
  overflow: hidden;
  color: rgba(37, 38, 255, 100);
  font-size: 1.1rem;
  text-align: left;
  font-weight: bold;
  flex: 3;
}
.headEarly_box p:nth-child(2) {
  overflow: hidden;
  font-size: 1.1rem;
  text-align: left;
  font-weight: bold;
  flex: 2;
}
.headEarly_box p:nth-child(3) {
  overflow: hidden;
  font-size: 1.1rem;
  text-align: left;
  font-weight: bold;
  flex: 7;
  padding-left: 0.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.headEarly_box p:nth-child(4) {
  color: rgba(37, 38, 255, 100);
  font-size: 1.1rem;
  text-align: left;
  font-weight: bold;
  width: 1.4rem;
  height: 1.4rem;
}
.earlyImg {
  margin: 0.6rem 0 0 0;
}
</style>
