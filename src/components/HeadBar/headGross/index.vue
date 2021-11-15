<template>
  <!-- 有害总量 -->
  <div class="headGross">
    <div id="headGross" class="headGross" />
  </div>
</template>

<script>
import echarts from 'echarts'
import { chartQueryTotalHarmful } from '@/api/monitoringReally'
export default {
  name: 'HeadGross',
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
    chartQueryTotalHarmful(this.baseUrl).then((res) => {
      console.log(res.data)
      this.grossData = res.data
      this.Bar()
    })
  },

  methods: {
    bottem() {
      this.Bar()
    },
    // 图
    Bar() {
      const that = this
      that.myChart = echarts.init(document.getElementById('headGross'))
      var option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            splitNumber: 5,
            axisLine: {
              lineStyle: {
                color: [
                  [0.31, '#F37B1D'],
                  [1, '#e9ecf3']
                ],
                width: 50
              }
            },
            axisTick: {
              lineStyle: {
                color: '#3bb4f2',
                width: 3
              },
              length: -25,
              splitNumber: 1
            },
            axisLabel: {
              distance: -80,
              textStyle: {
                color: '#000'
              }
            },
            splitLine: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#494f50'
              }
            },
            detail: {
              formatter: '{value}%',
              offsetCenter: [0, '60%'],
              textStyle: {
                fontSize: 30,
                color: '#F37B1D'
              }
            },
            title: {
              offsetCenter: [0, '100%']
            },
            data: [
              {
                name: '搜索总量/有害总量',
                value: this.grossData
              }
            ]
          }
        ]
      }
      var value = this.grossData
      option.series[0].axisLine.lineStyle.color[0][0] = value / 100
      that.myChart.setOption(option, true)
    }
  }
}
</script>

<style scoped lang="scss">
.headGross {
  width: 96%;
  margin: auto;
}
.headGross {
  width: 100%;
  height: 21rem;
  overflow: hidden;
  margin: 0 auto;
}
</style>
