<template>
  <div class="exporting">
    <div>
      <div class="filter-container">
        时间范围：
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
          v-model="listQuery.sourceNamelist"
          style="display: inline-block;"
        >
          <el-checkbox
            v-for="item in nameList"
            :key="item.appId"
            :label="item.appId"
            border
          >
            {{ item.appName }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="filter-container">
        勾选类型：
        <el-checkbox-group
          v-model="listQuery.sourcelist"
          style="display: inline-block;"
        >
          <el-checkbox
            v-for="item in typeList"
            :key="item.dictId"
            size="medium"
            :label="item.dictId"
            border
          >{{ item.dictName }}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="filter-container">
        关键词
        <el-input
          v-model="listQuery.keyword"
          style="width: 300px;"
          class="filter-item"
        />
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="getList"
        >
          查询
        </el-button>
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-edit"
          @click="handleReset"
        >
          重置
        </el-button>
      </div>
      <div class="filter-container">
        发布状态：
        <el-checkbox-group
          v-model="listQuery.release_state"
          style="display: inline-block;margin-right:1rem"
        >
          <el-checkbox label="1">已发布</el-checkbox>
          <el-checkbox label="0">未发布</el-checkbox>
        </el-checkbox-group>
        导出状态：
        <el-checkbox-group
          v-model="listQuery.exported_state"
          style="display: inline-block;"
        >
          <el-checkbox label="1">已导出</el-checkbox>
          <el-checkbox label="0">未导出</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="filter-container" style="text-align:right;">
        <el-button class="filter-item" type="primary" icon="el-icon-download">
          导出
        </el-button>
      </div>
    </div>

    <el-table
      v-loading="listLoading"
      :data="articleHarmfulList"
      border
      fit
      highlight-current-row
      style="width: 100%;"
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
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="APP名称" prop="appName" />
      <el-table-column label="APP内容" width="300" align="center">
        <template slot-scope="{ row }">
          <div
            style="max-height:50px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"
          >
            <span class="link-type">标题：{{ row.articleTitle }}</span>
            <br>
            <span
              class="link-type"
            >内容： <span
              v-html="row.articleContent"
            /></span>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="敏感词"
        prop="keywordName"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span style="color:red;">{{ row.keywordName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间"
        prop="updateTime"
        width="120"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.updateTime | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="来源" prop="appName">
        <!-- <template slot-scope="{row}">
          <span style="color:black;">用户：{{ row.author }}</span>
        </template> -->
      </el-table-column>
    </el-table>

    <pagination
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import { getharmfulfind } from '@/api/export'
import { findarticlesourcelist, getcategorylist } from '@/api/monitoringReally'
import Pagination from '@/components/Pagination'
import moment from 'moment'
import { getExportName, getExportType, queryArticleHarmful } from '@/api/test'
export default {
  name: 'Export',
  components: { Pagination },
  data() {
    return {
      
      selectDate: '1',
      listLoading: false,
      exportList: [],
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
        sendtime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
        release_state: [],
        exported_state: [],
        sourcelist: [],
        sourceNamelist: [],
        dateCanNotSet: true,
        classList: []
      },
      articlesourcelist: [],
      categorylist: [],
      nameList: [],
      typeList: [],
      articleHarmfulList: []
    }
  },
  created() {
    this.getList()
    this.initGetData()
    getExportName(this.baseUrl).then(res => {
      this.nameList = res.data
      console.log('this.nameList', this.nameList)
    })
    getExportType(this.baseUrl).then(res => {
      this.typeList = res.data
    })
    queryArticleHarmful(this.baseUrl, {
      nameList: this.listQuery.sourceNamelist
    }).then(res => {
      this.articleHarmfulList = res.data
    })
  },
  mounted() {
    this.deployPieChart()
    this.publishBarchart()
    this.lineChartMethod()
  },
  methods: {
    checkChange(data) {
      console.log('选中变化', data)
      console.log('checkList', this.checkList)
    },
    initGetData() {
      findarticlesourcelist(this.baseUrl).then(res => {
        if (res.status === 200) {
          this.articlesourcelist = res.data.articlesourcelist
          console.log(' this.articlesourcelist', this.articlesourcelist)
        }
      })
      getcategorylist(this.baseUrl).then(res => {
        if (res.status === 200) {
          this.categorylist = res.data.categorylist
          console.log(' this.categorylist', this.categorylist)
        }
      })
    },
    getList() {
      this.listLoading = true
      getharmfulfind(this.baseUrl, {
        sbegintime: moment(this.listQuery.sbegintime).format(
          'YYYY-MM-DD HH:mm:ss'
        ), // 开始时间
        sendtime: moment(this.listQuery.sendtime).format('YYYY-MM-DD HH:mm:ss'), // 结束时间
        sourcelist: this.listQuery.sourcelist, // 勾选来源
        release_state: '1', // 发布状态
        exported_state: '1', // 导出状态
        typeList: {}, // 勾选类型
        keyword: this.listQuery.keyword, // 关键词
        mode: 'time', // XXXX
        pagesize: '10',
        pagenum: '0',
        dataParam1: this.listQuery.sourcelist,
        dataParam2: this.typeList,
        dataParam3: this.articleHarmfulList,
        dataParam4: this.listQuery.sourceNamelist
      })
        .then(res => {
          if (res.status === 200) {
            this.exportList = res.data.articlelist
            this.total = Number(res.data.total)
          }
        })
        .finally(() => {
          this.listLoading = false
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
    handleReset() {}
  }
}
</script>
<style lang="scss" scoped>
.exporting {
  padding: 30px 60px;
  .el-checkbox.is-bordered.el-checkbox--small {
    margin-left: 0px;
    min-width: 100px;
    margin-right: 0px;
  }
}
</style>
