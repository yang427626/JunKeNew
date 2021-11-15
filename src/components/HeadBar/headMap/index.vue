<template>
  <!-- 地图 -->
  <div class="masp">
    <div @click="bottem">地图</div>
    <div id="masp" class="masp" />
  </div>
</template>

<script>
import echarts from 'echarts'
// import {  } from "@/api/monitoringReally";
export default {
  name: 'Masp',
  components: {},
  props: {
    allInputNum: {
      type: Array
    }
  },
  data() {
    return {
      myChart: null,
      grossData: null
    }
  },
  created() {

  },
  methods: {
    bottem() {
      this.Bar()
    },
    // 图
    Bar() {
      var myChart = null
      myChart = echarts.init(document.getElementById('masp'))

      myChart.setOption(option, true)
    }
  }
}
</script>

<style scoped lang="scss">
.masp {
  width: 96%;
  overflow: hidden;
  margin: auto;
}

</style>
