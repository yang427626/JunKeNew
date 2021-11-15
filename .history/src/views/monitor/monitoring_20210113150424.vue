<template>
  <!-- <sidebar class="sidebar-container" /> -->
  <div class="monitoring">
    <div class="leftbox">
      <el-dialog title="修改主题" :visible.sync="dialogVisible" width="30%">
        <el-input v-model="changeTree.label" placeholder="请输入修改的值" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="changeDataForTree">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="修改关键字" :visible.sync="updateKeyShow" width="30%">
        <el-input v-model="KeywordTree.label" placeholder="请输入修改的值" />
        <el-select
          v-model="KeywordTree.logicval"
          style="width: 80px; margin-top: 10px"
          placeholder="请选择"
        >
          <el-option label="and" value="and" />
          <el-option label="or" value="or" />
          <el-option label="not" value="not" />
        </el-select>
        <span slot="footer" class="dialog-footer">
          <el-button @click="updateKeyShow = false">取 消</el-button>
          <el-button type="primary" @click="changeKeyword">确 定</el-button>
        </span>
      </el-dialog>
      <!--添加主题及关键词-->
      <el-dialog :visible.sync="dialogVisible2" width="80%">
        <div style="margin: 0rem auto 0; width: 100%; text-align: center">
          <span>主题：</span>
          <el-input v-model.trim="theme" style="width: 60%" />
          <img
            src="../../assets/fontAdd.png"
            style="
              width: 31px;
              vertical-align: middle;
              height: 30px;
              margin: 0 10px;
            "
            alt=""
            @click="addSearchList"
          >
          <div
            v-for="(item, index) of searchList"
            :key="index"
            style="width: 70%; margin: 0 auto 1px"
          >
            <span style="text-align: left; display: inline-block">关键词</span>
            <el-input
              v-model.trim="item.keyword"
              style="width: 60%; margin-top: 10px; margin-left: 10px"
            />
            <el-select
              v-model="item.logicval"
              style="width: 80px"
              placeholder="请选择"
            >
              <el-option label="and" value="and" />
              <el-option label="or" value="or" />
              <el-option label="not" value="not" />
            </el-select>
            <img
              src="../../assets/fontDel.png"
              style="
                width: 31px;
                vertical-align: middle;
                height: 30px;
                margin: 0 10px;
                cursor: pointer;
              "
              alt=""
              @click="delSearch(index)"
            >
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="eldigAdd">确 定</el-button>
        </span>
      </el-dialog>
      <el-tree
        ref="tree"
        class="filter-tree"
        :data="treeData"
        :props="defaultProps"
        default-expand-all
        show-checkbox
        :expand-on-click-node="false"
        :render-content="renderContent"
      />
    </div>
    <div class="content">
      <div v-show="searchshow">
        <div class="filter-container">
          <div class="label-condition">时间范围：</div>
          <el-radio-group
            v-model="selectDate"
            size="mini"
            @change="changeSelectDate"
          >
            <el-radio-button label="1">一天</el-radio-button>
            <el-radio-button label="3">三天</el-radio-button>
            <el-radio-button label="7">七天</el-radio-button>
            <el-radio-button label="30">一个月</el-radio-button>
            <el-radio-button label="otherDate">自定义</el-radio-button>
          </el-radio-group>
        </div>
        <div class="filter-container">
          起止日期：
          <el-date-picker
            v-model="listQuery.sbegintime"
            :disabled="dateCanNotSet"
            type="datetime"
            placeholder="选择日期时间"
          />
          至
          <el-date-picker
            v-model="listQuery.sendtime"
            :disabled="dateCanNotSet"
            type="datetime"
            placeholder="选择日期时间"
          />
        </div>
        <div class="filter-container">
          勾选来源：
          <el-checkbox-group
            v-model="listQuery.sourcelist"
            style="display: inline-block;"
          >
            <el-checkbox
              v-for="item in articlesourcelist"
              :key="item.id"
              :label="item.id"
              border
            >
              {{ item.app_name }}
            </el-checkbox>
          </el-checkbox-group>

          <el-checkbox-group v-model="checkList" @change="checkChange">
            <el-checkbox
              v-for="item in sourceList"
              :key="item.appId"
              :label="item.appName"
            />
          </el-checkbox-group>
        </div>

        <div class="filter-container">
          勾选类型：
          <el-checkbox-group
            v-model="listQuery.sourcelist"
            style="display: inline-block"
          >
            <el-checkbox
              v-for="item in typeList"
              :key="item.appId"
              :label="item.appName"
              border
            />
          </el-checkbox-group>
          <!-- <el-checkbox v-for="item in applist"  v-model="listQuery.app[item.id]" :label="item.name" border></el-checkbox> -->
        </div>
        <div>
          <div class="content-inline">
            发布状态：
            <el-checkbox-group
              v-model="listQuery.release_state"
              style="display: inline-block"
            >
              <el-checkbox label="1">已发布</el-checkbox>
              <el-checkbox label="0">未发布</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="content-inline content-left">
            导出状态：
            <el-checkbox-group
              v-model="listQuery.exported_state"
              style="display: inline-block"
            >
              <el-checkbox label="1">已导出</el-checkbox>
              <el-checkbox label="0">未导出</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="filter-container">
          <div class="label-condition">关键词：</div>
          <el-input
            v-model="listQuery.sensword"
            style="width: 300px"
            class="filter-item"
          />
          <el-button
            class="filter-item"
            type="primary"
            icon="el-icon-search"
            @click="handleFilter"
          >
            查询
          </el-button>
          <el-button
            class="filter-item"
            style="margin-left: 10px"
            type="primary"
            icon="el-icon-edit"
            @click="handleReset"
          >
            重置
          </el-button>
        </div>
      </div>
      <el-divider><i :class="searchClass" @click="changesearch" /></el-divider>
      <div class="filter-container">
        排序：
        <el-button>时间排序</el-button>
        <el-button>阅读量排序</el-button>
      </div>
      <el-table
        :data="articleList"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          label="序号"
          prop="id"
          type="index"
          sortable="custom"
          align="center"
          width="80"
        >
          <template slot-scope="scope">
            <span>{{
              (listQuery.pagenum - 1) * listQuery.pagesize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="APP名称"
          width="150px"
          align="center"
          props="app_name"
        >
          <!-- <template slot-scope="{row}">
            <span> {{ row.appName }}</span>
            <img
              style="vertical-align: middle;"
              width="50"
              higth="50"
              :src="appicon[Number(row.appId)]"
              alt=""
            >
          </template> -->
        </el-table-column>
        <el-table-column label="APP内容" width="300" align="center">
          <template slot-scope="{ row }">
            <div
              style="
                max-height: 50px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              "
            >
              <span class="link-type">标题：{{ row.title }}</span>
              <br>
              <span class="link-type">内容： <span v-html="row.content" /></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="敏感词" width="110px" align="center">
          <template slot-scope="{ row }">
            <span style="color: red">{{ row.sensword }}</span>
          </template>
        </el-table-column>
        <el-table-column label="更新时间" width="120" align="center">
          <template slot-scope="{ row }">
            <span>{{
              row.update_time | parseTime('{y}-{m}-{d} {h}:{i}')
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="预警状态"
          class-name="status-col"
          align="center"
          width="100"
        >
          <!-- <template slot-scope="{row}">
            <el-tag :type="Number(row.status) | statusFilter">
              {{ statusOptions[Number(row.status)] }}
            </el-tag>
          </template> -->
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150"
          class-name="small-padding fixed-width"
        >
          <!-- <template slot-scope="{row}"> -->
          <template>
            <el-button size="mini" type="danger"> 有害 </el-button>
            <el-button type="primary" size="mini"> 无害 </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination
        :total="total"
        :page.sync="listQuery.pagenum"
        :limit.sync="listQuery.pagesize"
        @pagination="getList"
      />
    </div>
    <div class="rightbox">
      <div style="text-align: left; margin-left: 0.5rem; margin-top: 1rem">
        <div
          style="float: left; width: 4px; height: 0.85rem; background: #337ab7"
        />
        <span> &nbsp;类型分析</span>
      </div>
      <div style="text-align: center">
        <div id="DeployPie" style="width: 100%; height: 180px" />
      </div>
      <div>
        <div style="text-align: left; margin-left: 0.5rem; margin-top: 1rem">
          <div
            style="
              float: left;
              width: 4px;
              height: 0.85rem;
              background: #337ab7;
            "
          />
          <span>&nbsp;数量分析</span>
        </div>

        <div id="PublishBar" style="width: 100%; height: 180px" />
      </div>

      <div style="text-align: left; margin-left: 0.5rem; margin-top: 1rem">
        <div
          style="float: left; width: 4px; height: 0.85rem; background: #337ab7"
        />
        <span>&nbsp;发展趋势</span>
      </div>
      <div>
        <div id="lineChart" style="width: 100%; height: 180px" />
      </div>
      <div class="bottombutton">
        <div>
          <el-button
            type="primary"
            class="rightbutton"
            plain
          >批量标记有害</el-button>
        </div>
        <div>
          <el-button
            type="primary"
            class="rightbutton"
            plain
          >批量标记无害</el-button>
        </div>
        <div>
          <el-button type="primary" class="rightbutton" plain>提交</el-button>
        </div>
        <div>
          <el-button
            type="primary"
            class="rightbutton"
            plain
          >导出选中</el-button>
        </div>
        <div>{{ test }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  findcustomtreelist,
  addcustomtreelist,
  modifycustomtreelist,
  deletecustomtreelist,
  articlekeyword_find,
  findarticlesourcelist,
  getcategorylist
} from '@/api/monitoringReally'
import { getExportName, getExportType } from '@/api/test'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import echarts from 'echarts'
import moment from 'moment'

// // 全局变量
//  var testObj1= {
//    id: 111,
//    name: '张三'
//  }
//  // 作用域变量
//  let testObj = {
//    id: 111,
//    name: '李四'
//  }

//  const testObj2 = {
//    id: 111,
//    name: '王五'
//  }

export default {
  name: 'ComplexTable',
  components: { Pagination },
  filters: {},
  data() {
    return {
      sourceList: [],
      checkList: [],
      demoList: ['aaa', 'bbb', 'ccc'],
      selectDate: '1',
      total: 0,
      dateCanNotSet: true,
      listQuery: {
        pagenum: 0,
        pagesize: 10,
        keyword: '',
        date: '',
        sbegintime: moment(
          new Date(new Date(new Date().toLocaleDateString()).getTime())
        ).format('YYYY-MM-DD HH:mm:ss'),
        sendtime: new Date(),
        release_state: [],
        exported_state: [],
        sourceNamelist: [],
        sourcelist: []
      },
      articleList: [],
      articlesourcelist: [],
      articlesourcetypelist: [],
      nameList: [],
      typeList: [],
      categorylist: [],
      KeywordTree: {
        lable: ''
      },
      updateKeyShow: false,
      theme: '',
      searchList: [
        { value: '', logicval: 'and' },
        { value: '', logicval: 'and' },
        { value: '', logicval: 'and' },
        { value: '', logicval: 'and' },
        { value: '', logicval: 'and' }
      ],
      changeTree: {},
      treeData: [
        {
          id: 1,
          label: '主题',
          children: []
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      searchshow: true,
      searchClass: 'el-icon-caret-bottom',
      listLoading: true,
      downloadLoading: false,
      dialogVisible2: false,
      dialogVisible: false,
      deployPie: null,
      publishBar: null,
      lineChart: null
    }
  },
  // // 页面加载初始化函数
  // created() {
  //   this.getList()
  //   this.getThemeList()
  //   this.initGetData()
  //   getName(this.baseUrl).then(res => {
  //     this.sourceList = res.data
  //     console.log('this.sourceList',this.sourceList)
  //   })

  // },

  created() {
    this.getList()
    this.getThemeList()
    this.initGetData()
    getExportName(this.baseUrl).then(res => {
      this.nameList = res.data
      console.log('this.nameListhhhhhhh', this.nameList)
    })
    getExportType(this.baseUrl).then(res => {
      this.typeList = res.data
    })
  },

  // dom对象加载完毕后执行
  mounted() {
    this.deployPieChart()
    this.publishBarChart()
    this.lineChartMethod()
  },
  methods: {
    checkChange(data) {
      console.log('选中变化', data)
      console.log('checkList', this.checkList)
    },
    initGetData() {
      findarticlesourcelist(this.baseUrl).then(res => {
        console.log(res)
        if (res.ResultCode === 200) {
          this.articlesourcelist = res.data.articlesourcelist
        }
      })
      getcategorylist(this.baseUrl).then(res => {
        if (res.status === 200) {
          this.categorylist = res.data.categorylist
        }
      })
    },
    changeSelectDate(data) {
      this.dateCanNotSet = true
      this.listQuery.sendtime = new Date()
      if (data === 'otherDate') {
        this.dateCanNotSet = false
      } else if (data === '1') {
        this.listQuery.sbegintime = new Date(
          new Date(new Date().toLocaleDateString()).getTime()
        )
      } else if (data === '3') {
        this.listQuery.sbegintime = new Date().setDate(new Date().getDate() - 3)
      } else if (data === '7') {
        this.listQuery.sbegintime = new Date().setDate(new Date().getDate() - 7)
      } else if (data === '30') {
        this.listQuery.sbegintime = new Date().setDate(
          new Date().getDate() - 30
        )
      }
    },
    getList() {
      this.listLoading = true
      articlekeyword_find(this.baseUrl, {
        sbegintime: '2020-09-01 00:00:00',
        sendtime: '2020-09-02 00:00:00',
        sourcelist: [{ app_name: '小红书' }, { app_name: '陌陌' }],
        release_state: '1',
        exported_state: '1',
        keyword: '1',
        mode: 'time',
        pagesize: '10',
        pagenum: '0'
      })
        .then(res => {
          if (res.status === 200) {
            this.articleList = res.data.articlelist
            this.total = Number(res.data.total)
          }
        })
        .finally(() => {
          this.listLoading = false
        })
    },
    getThemeList() {
      findcustomtreelist(this.baseUrl, { role_id: '1' }).then(res => {
        if (res.status === 200) {
          const childArr = []
          res.data.themelist.map(item => {
            const childData = []
            item.keywordlist.map(keyword => {
              childData.push({
                label: keyword.keyword,
                id: keyword.id,
                logicval: keyword.logicval
              })
            })
            childArr.push({
              id: item.id,
              label: item.theme_name,
              children: childData
            })
          })
          this.treeData[0].children = childArr
        }
      })
    },
    editTree(data) {
      this.changeTree = Object.assign({}, data)
      this.dialogVisible = true
    },
    editKeyword(data) {
      this.KeywordTree = Object.assign({}, data)
      this.updateKeyShow = true
    },
    changeKeyword() {
      modifycustomtreelist(this.baseUrl, {
        id: this.KeywordTree.id,
        keyword: this.KeywordTree.label,
        logicval: this.KeywordTree.logicval
      }).then(res => {
        if (res.status === 200) {
          this.$message.success('修改成功')
          this.getThemeList()
          this.updateKeyShow = false
        }
      })
    },
    changeDataForTree() {
      modifycustomtreelist(this.baseUrl, {
        id: this.changeTree.id,
        theme_name: this.changeTree.label
      }).then(res => {
        if (res.status === 200) {
          this.$message.success('修改成功')
          this.getThemeList()
          this.dialogVisible = false
        }
      })
    },
    delSearch(index) {
      this.searchList.splice(index, 1)
    },
    addSearchList() {
      this.searchList.push({ value: '', logicval: 'and' })
    },
    append() {
      this.theme = ''
      this.searchList = [
        { keyword: '', logicval: 'and' },
        { keyword: '', logicval: 'and' },
        { keyword: '', logicval: 'and' },
        { keyword: '', logicval: 'and' },
        { keyword: '', logicval: 'and' }
      ]
      this.dialogVisible2 = true
    },
    eldigAdd() {
      if (this.theme === '') {
        this.$message.error('请填写主题名称')
        return
      }
      const flagCommit = this.searchList.some(item => {
        return item.keyword === ''
      })
      if (flagCommit) {
        this.$message.error('部分关键词未填写')
      } else {
        const keyValues = []
        this.searchList.map(item => {
          keyValues.push(item.keyword)
        })
        if (new Set(keyValues).size !== keyValues.length) {
          this.$message.error('关键词不能重复')
          return
        }

        addcustomtreelist(this.baseUrl, {
          theme_name: this.theme,
          role_id: '1',
          keywordlist: this.searchList
        }).then(res => {
          if (res.status === 200) {
            this.$message.success('添加成功')
            this.getThemeList()
            this.dialogVisible = false
          }
        })
        this.dialogVisible2 = false
      }
    },
    remove(node) {
      deletecustomtreelist(this.baseUrl, {
        id: node.data.id
      }).then(res => {
        if (res.status === 200) {
          this.$message.success('删除成功')
          this.getThemeList()
        }
      })
    },
    renderContent(h, { node, data, store }) {
      const del = require('../../assets/fontDel.png')
      const edit = require('../../assets/fontEdit.png')
      const addPic = require('../../assets/fontAdd.png')
      return (
        <span class='custom-tree-node'>
          <span>
            {node.label}
            {node.data.id === 1 ? (
              <img
                style='width:12px;height:12px;margin-left: 15px;'
                src={addPic}
                on-click={e => {
                  this.append(data)
                }}
              />
            ) : (
              ''
            )}
          </span>
          {node.childNodes.length === 0 ? (
            node.data.id !== 1 ? (
              <span>
                <img
                  style='width:12px;height:12px;margin-left: 15px;'
                  src={edit}
                  on-click={() => this.editKeyword(data)}
                />
              </span>
            ) : (
              ''
            )
          ) : node.data.id !== 1 ? (
            <span>
              <img
                style='width:12px;height:12px;margin-left: 15px;'
                src={edit}
                on-click={() => {
                  this.editTree(data)
                }}
              />{' '}
              <img
                style='width:12px;height:12px;margin-left: 10px;'
                src={del}
                on-click={() => this.remove(node, data)}
              />
            </span>
          ) : (
            ''
          )}
        </span>
      )
    },
    deployPieChart() {
      this.deployPie = echarts.init(document.getElementById('DeployPie'))
      this.deployPie.setOption({
        color: ['#0db38c', '#e7552d', '#b33349', '#e7aa1b', '#6f4fb3'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 20,
          bottom: 20,
          data: ['图文类', '社交类', '新闻类', '问答类', '笔记类']
        },
        series: [
          {
            name: '实例数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 17, name: '图文类', itemStyle: { color: '#afdde8' }},
              { value: 5, name: '社交类', itemStyle: { color: '#40bf5e' }},
              { value: 3, name: '新闻类', itemStyle: { color: '#24b3b6' }},
              { value: 2, name: '问答类', itemStyle: { color: '#358ded' }},
              {
                value: 7,
                name: '笔记类',
                itemStyle: { color: 'rgba(53, 141, 237,1)' }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    publishBarChart() {
      this.publishBar = echarts.init(document.getElementById('PublishBar'))
      this.publishBar.setOption({
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 40,
          bottom: 20,
          data: ['陌陌', '有道', '在行', '头条']
        },
        backgroundColor: '#fff',
        color: ['#afdde8', '#40bf5e', '#24b3b6', 'rgba(53, 141, 237,1)'],
        grid: {
          left: '10',
          right: '80',
          bottom: '30',
          backgroundColor: '#333',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['陌陌', '有道', '在行', '头条']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '在行',
            type: 'bar',
            data: [2, 5, 12, 6],
            barGap: '2%', // 柱图间距
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0]
              }
            }
          },
          {
            name: '陌陌',
            type: 'bar',
            data: [1, 3, 3, 4],
            barGap: '2%', // 柱图间距
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0]
                // color: '#000'
              }
            }
          },
          {
            name: '有道',
            type: 'bar',
            data: [4, 4, 5, 1],
            barGap: '2%', // 柱图间距
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0]
              }
            }
          },
          {
            name: '头条',
            type: 'bar',
            data: [3, 2, 1, 3],
            barGap: '2%', // 柱图间距
            itemStyle: {
              normal: {
                barBorderRadius: [3, 3, 0, 0]
              }
            }
          }
        ]
      })
    },
    lineChartMethod() {
      this.lineChart = echarts.init(document.getElementById('lineChart'))
      this.lineChart.setOption({
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 20,
          bottom: 20,
          data: ['图文类', '社交类', '新闻类', '问答类']
        },
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['1/2', '2/2', '3/2', '4/2', '5/2', '6/2'],
            [41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            [86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            [24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            [55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category', name: '日期' },
        yAxis: [
          {
            type: 'value',
            name: '数量'
          }
        ],
        grid: { left: 30, top: 50, bottom: 30, right: 50 },
        series: [
          {
            type: 'line',
            name: '图文类',
            symbol: 'none',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: { color: '#afdde8' }
          },
          {
            type: 'line',
            name: '社交类',
            symbol: 'none',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: { color: '#40bf5e' }
          },
          {
            type: 'line',
            name: '新闻类',
            symbol: 'none',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: { color: '#24b3b6' }
          },
          {
            type: 'line',
            name: '问答类',
            symbol: 'none',
            smooth: true,
            seriesLayoutBy: 'row',
            itemStyle: { color: 'rgba(53, 141, 237,1)' }
          }
        ]
      })
    },
    changesearch() {
      this.searchshow = !this.searchshow
      if (this.searchshow === false) {
        this.searchClass = 'el-icon-caret-bottom'
      } else {
        this.searchClass = 'el-icon-caret-top'
      }
    },
    handleFilter() {
      this.listQuery.page = 1
    },
    getListByCondition() {
      this.listLoading = true
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    handleReset() {
      this.listQuery = {
        pagenum: 0,
        pagesize: 10,
        published: [0, 0, 0],
        deleted: [0, 0, 0],
        exported: [0, 0, 0],
        app: [0, 0, 0, 0, 0, 0, 0, 0],
        class: [0, 0, 0],
        keyword: '',
        date: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.monitoring {
  overflow: hidden;
  position: relative;
  /deep/.el-tree-node__label {
    font-size: 18px;
    color: #337ab7;
  }
  .float {
    float: left;
    width: 60%;
  }
  .leftbox {
    overflow: auto;
    padding-left: 1rem;
    position: absolute;
    left: 0;
    color: #337ab7;
    width: 20%;
    height: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9); /*blur值为5px*/
    /deep/.el-tree-node__content:hover {
      background-color: rgba(51, 122, 183, 0.7);
    }
  }
  .content {
    width: 100%;
    padding: 10px 21% 0;
    .label-condition {
      display: inline-table;
      width: 70px;
    }
    .content-inline {
      display: inline-table;
      font-size: 0.875rem;
      margin-bottom: 10px;
    }
    .content-left {
      margin-left: 100px;
    }
  }
  .rightbox {
    right: 0;
    height: 100%;
    text-align: center;
    color: #337ab7;
    width: 20%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 0px;
  }
  .rightbutton {
    width: 7rem;
    margin-top: 0.5rem;
  }
  .bottombutton {
    position: fixed;
    bottom: 20px;
    right: 0px;
    width: 20%;
  }
  .el-checkbox.is-bordered.el-checkbox--small {
    margin-left: 0px;
    margin-right: 0px;
    width: 120px;
  }
}
</style>
