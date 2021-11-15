<template>
  <!-- 平台有害比例 -->
  <div class="headRadio">
    <img
      class="ratioImg"
      src="@/assets/images/seting.png"
      alt=""
      @click="addClick(appAueryApp3)"
    >
    <!-- 弹窗 -->
    <el-dialog :visible.sync="dialogVisible" width="30%">
      <!-- 是否关闭 -->
      <!-- :before-close="handleClose" -->
      <div
        style="
              width: 100%;
              text-align: center;
              font-weight: bold;
              font-size: 1.25rem;
              margin-bottom: 0.9375rem;
            "
      >
        平台有害比例
      </div>
      <el-checkbox-group v-model="appAueryApp2">
        <el-checkbox
          v-for="(item, index) in appAueryApp1"
          :key="index"
          :label="item.appId"
          name="appList"
        >{{ item.appName }}</el-checkbox>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelClick">取 消</el-button>
        <el-button type="primary" @click="confirmClick">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <button @click="bottem">按钮</button> -->
    <div id="FooterLeftEchs" class="FooterLeftEchs" />
  </div>
</template>

<script>
import { appAueryApp, chartQueryHarmful } from '@/api/monitoringReally'
import echarts from 'echarts'
// import {

// } from '@/api/monitoringReally'
export default {
  name: 'HeadRadio',
  components: {},
  props: {

  },
  data() {
    return {
      myChart: null,
      appAueryApp1: [],
      appAueryApp2: [],
      appAueryApp3: [],
      dialogVisible: false,
      ratioList: []
    }
  },
  created() {
    // 平台来源
    appAueryApp(this.baseUrl).then((res) => {
      this.appAueryApp1 = res.data.list
      for (var i = 0; i < this.appAueryApp1.length; i++) {
        this.appAueryApp2.push(this.appAueryApp1[i].appId)
      }
      this.appAueryApp2.forEach((item) => {
        this.appAueryApp1.forEach((item1) => {
          if (item === item1.appId) {
            this.appAueryApp3.push(item1)
          }
        })
      })
      chartQueryHarmful(this.baseUrl, {
        list: this.appAueryApp2
      }).then(res => {
        this.ratioList = res.data
        this.Bar()
      })
    })
  },
  methods: {
    bottem() {
      this.Bar()
    },
    // 图
    Bar() {
      this.myChart = echarts.init(document.getElementById('FooterLeftEchs'))
      var data = []
      var titlename = []
      var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
      this.ratioList.forEach(item => {
        data.push(item.totalTreatment)
        titlename.push(item.appName)
      })
      const option = {
        backgroundColor: '#ffff',
        xAxis: {
          show: false
        },
        grid: {
          top: 0,
          left: 40
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: function(value, index) {
                  var num = myColor.length
                  return myColor[index % num]
                }
              },
              formatter: data,
              rich: {}
            }
          }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: function(params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
              }
            }
          }
        ]
      }

      this.myChart.setOption(option)
    },
    // 添加按钮
    addClick() {
      this.dialogVisible = true
      this.oldAppAueryApp = this.appAueryApp3
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          this.cancelClick()
          done()
        })
        .catch((_) => {})
    },
    // 弹窗确定按钮
    confirmClick() {
      this.appAueryApp3 = []
      this.dialogVisible = false
      this.appAueryApp2.forEach((item) => {
        this.appAueryApp1.forEach((item1) => {
          if (item === item1.appId) {
            this.appAueryApp3.push(item1)
          }
        })
      })
      chartQueryHarmful(this.baseUrl, {
        list: this.appAueryApp2
      }).then(res => {
        this.ratioList = res.data
        this.Bar()
      })
    },
    // 取消
    cancelClick() {
      this.appAueryApp2 = []
      this.dialogVisible = false
      this.oldAppAueryApp.forEach((item) => {
        this.appAueryApp2.push(item.appId)
      })
      chartQueryHarmful(this.baseUrl, {
        list: this.appAueryApp2
      }).then(res => {
        this.ratioList = res.data
        this.Bar()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.headRadio {
  width: 96%;
  margin: auto;
   position: relative;
}
      .ratioImg {
        position: absolute;
        right: 0px;
        top: -3.5rem;
      }
      .FooterLeftEchs{
        width: 100%; height: 21rem;
        overflow: hidden;
      }

</style>
