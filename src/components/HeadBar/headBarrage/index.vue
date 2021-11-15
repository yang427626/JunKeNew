<template>
  <!--热点弹幕 -->
  <div class="headBarrage">
    <div @click="handleClick($event)">
      <vue-seamless-scroll
        :data="barrageData"
        class="seamless-warp"
        :class-option="classOption"
      >
        <div v-for="(item, index) in barrageData" :key="index" class="BarrageBox">
          <div class="Barrage_index">{{ index + 1 }}</div>
          <div class="Barrage_con">{{ item.bulletContent }}</div>
          <div class="Barrage_button" :data-dept="item.bulletContent" @click="goCheckClick(item.bulletContent)">
            前往查看
          </div>
        </div>
      </vue-seamless-scroll>
    </div>
    <el-dialog :visible.sync="barrageShow" width="30%" :show-close="false">
      <span style="font-size:1rem;">{{ barrageCon }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmClick">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'HeadBarrage',
  components: {
    vueSeamlessScroll
  },
  props: {
    barrageData: Array
  },
  data() {
    return {
      hoverStop: true,
      barrageShow: false,
      step: 0.5,
      barrageCon: ''
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
  methods: {
    handleClick(event) {
      this.barrageShow = true
      this.step = 0
      this.barrageCon = event.target.dataset.dept
    },
    // 前往查看
    goCheckClick(data) {
      this.barrageShow = true
      this.barrageCon = data
      this.step = 0
    },
    // 关闭
    confirmClick() {
      this.barrageShow = false
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
.headBarrage {
  width: 100%;
  margin: 0 auto;
  .BarrageBox {
    width: 95%;
    margin: 0 auto;
    height: 2rem;
    display: flex;
    margin-bottom: 0.8rem;
    .Barrage_index {
      height: 2rem;
      width: 2rem;
      flex: 1;
      color: rgba(255, 255, 255, 100);
      font-size: 1.3rem;
      text-align: center;
      line-height: 2rem;
      background-color: rgba(112, 113, 255, 100);
      margin-right: 0.8rem;
    }
    .Barrage_con {
      height: 100%;
      flex: 9;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      margin: 0 0 0 2%;
      line-height: 2rem;
      overflow: hidden;
      color: rgba(16, 16, 16, 100);
      font-size: 1.1rem;
      text-align: left;
      font-family: "Monospace";
    }
    .Barrage_button {
      height: 100%;
      flex: 2;
      line-height: 2rem;
      font-size: 0.9rem;
      color: rgba(63, 33, 255, 100);
      cursor: pointer;
    }
  }
}
</style>
