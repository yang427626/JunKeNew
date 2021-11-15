<template>
  <div class="verification">
    <div v-show="searchshow">
      <div class="filter-container">
        时间范围：
        <el-radio-group v-model="timerange" size="mini">
          <el-radio-button label="一天" />
          <el-radio-button label="三天" />
          <el-radio-button label="一周" />
          <el-radio-button label="一个月" />
          <el-radio-button label="三个月" />
        </el-radio-group>
        <!-- 分类：
        <el-select v-model="listQuery.type" placeholder="" clearable style="width: 100px">
          <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
        </el-select> -->
      </div>
      <div class="filter-container">
        起止日期：
        <el-date-picker
          v-model="startDate"
          type="datetime"
          placeholder="选择日期时间"
        />
        至
        <el-date-picker
          v-model="endDate"
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
          v-waves
          class="filter-item"
          type="primary"
          icon="el-icon-search"
          @click="handleFilter"
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
        <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
          导出
        </el-button> -->
        <!-- <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
          敏感词
        </el-checkbox> -->
      </div>
      <div class="filter-container">
        发布状态：
        <el-checkbox v-model="listQuery.published[0]" label="已发布" />
        <el-checkbox v-model="listQuery.published[1]" label="未发布" />
        <!-- <el-checkbox v-model="listQuery.published[2]" label="未知状态" /> -->
        导出状态：
        <el-checkbox v-model="listQuery.exported[0]" label="已导出" />
        <el-checkbox v-model="listQuery.exported[1]" label="未导出" />
        <!-- <el-checkbox v-model="listQuery.exported[2]" label="未知状态" /> -->
      </div>
      <!-- <div class="filter-container">
        删除状态：
        <el-checkbox v-model="listQuery.deleted[0]" label="已删除" />
        <el-checkbox v-model="listQuery.deleted[1]" label="未删除" />
        <el-checkbox v-model="listQuery.deleted[2]" label="未知状态" />
        分类状态：
        <el-checkbox v-model="listQuery.class[0]" label="已分类" />
        <el-checkbox v-model="listQuery.class[1]" label="未分类" />
        <el-checkbox v-model="listQuery.class[2]" label="未知状态" />
      </div> -->
      <!-- <div class="filter-container">
        预警状态：
        <el-checkbox v-model="listQuery.status[0]" label="未处理" ></el-checkbox>
        <el-checkbox v-model="listQuery.status[1]" label="有害" ></el-checkbox>
        <el-checkbox v-model="listQuery.status[2]" label="无害" ></el-checkbox>
      </div> -->
    </div>
    <el-divider><i :class="searchClass" @click="changesearch" /></el-divider>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="queryVerificationList"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column
        label="序号"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="APP名称"
        prop="appName"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ applist[row.appid].name }}</span>
          <!-- <span>图标</span> -->
        </template>
      </el-table-column>
      <el-table-column label="" width="80px" align="center">
        <template slot-scope="{ row }">
          <img width="50" higth="50" :src="appicon[row.appid]" alt="">
        </template>
      </el-table-column>
      <el-table-column label="APP内容" min-width="150px">
        <template slot-scope="{ row }">
          <span class="link-type">标题：{{ row.articleTitle }}</span>
          <br>
          <span
            class="link-type"
          >内容：<span v-html="row.articleContent" />
          </span>
          <!-- <span class="link-type" @click="handleUpdate(row)">{{ row.content }}</span> -->
          <!-- <el-tag>{{ row.type | typeFilter }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column
        label="敏感词"
        prop="keywordName"
        width="110px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span style="color:red;">{{ row.sensword }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="更新时间"
        prop="updateTime"
        width="100px"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="发布账号" width="80px">
        <template slot-scope="{row}">
          <span style="color:red;">{{ row.author }}</span>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="阅读量" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column> -->
      <el-table-column
        label="处置源头"
        prop="isDisposal"
        class-name="status-col"
        width="100"
      >
        <template slot-scope="{ row }">
          <el-tag :type="row.sourcestatus | statusSourceFilter">
            {{ statusSource[row.sourcestatus] }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
           <el-button size="mini" type="danger" @click="handleArticle(row,1)">
            有害
          </el-button>
          <el-button type="primary" size="mini" @click="handleArticle(row,2)">
            无害
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table
        :data="pvData"
        border
        fit
        highlight-current-row
        style="width: 100%"
      >
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogPvVisible = false"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import { disposeArticle } from '@/api/articles'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import { getQueryVerification } from '@/api/verification'
import { getExportName, getExportType } from '@/api/test'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
// import { date } from 'jszip/lib/defaults'

const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        2: 'success',
        1: 'danger',
        0: 'danger'
      }
      return statusMap[status]
    },
    statusSourceFilter(status) {
      const statusMap = {
        2: 'success',
        1: 'success',
        0: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      startDate: '',
      endDate: '',
      startSecond: '',
      endSecond: '',
      appicon: [
        require('../../assets/apps/0.png'),
        require('../../assets/apps/1.png'),
        require('../../assets/apps/2.png'),
        require('../../assets/apps/3.png'),
        require('../../assets/apps/4.png'),
        require('../../assets/apps/5.png')
      ],
      timerange: '一天',
      searchshow: true,
      searchClass: 'el-icon-caret-bottom',
      tableKey: 0,
      published1: '',
      published2: '',
      published3: '',
      deleted1: '',
      deleted2: '',
      deleted3: '',
      list: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20,
        published: [0, 0, 0],
        deleted: [0, 0, 0],
        exported: [0, 0, 0],
        app: [0, 0, 0, 0, 0, 0, 0, 0],
        class: [0, 0, 0],
        status: [0, 0, 0],
        keyword: '',
        date: '',
        sourcelist: [], // 类型
        sourceNamelist: [] // 来源
      },
      nameList: [],
      typeList: [],
      queryVerificationList: [],
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      // sortOptions: [{ label: '序号 升序', key: '+id' }, { label: '序号降序', key: '-id' }],
      statusOptions: ['未处理', '有害', '无害'],
      statusSource: ['未处置', '已处置'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      applist: [],
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [
          { required: true, message: 'type is required', trigger: 'change' }
        ],
        timestamp: [
          {
            type: 'date',
            required: true,
            message: 'timestamp is required',
            trigger: 'change'
          }
        ],
        title: [
          { required: true, message: 'title is required', trigger: 'blur' }
        ]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
    getExportName(this.baseUrl).then(res => {
      this.nameList = res.data
      console.log('this.nameList', this.nameList)
    })
    getExportType(this.baseUrl).then(res => {
      this.typeList = res.data
    })
    getQueryVerification(this.baseUrl, {
      nameList: this.listQuery.sourceNamelist
    }).then(res => {
      this.queryVerificationList = res.data
    })
  },
  methods: {
    changesearch() {
      this.searchshow = !this.searchshow
      if (this.searchshow === false) {
        this.searchClass = 'el-icon-caret-bottom'
      } else {
        this.searchClass = 'el-icon-caret-top'
      }
    },
    getList() {
      // this.listLoading = true
      console.log(this.listQuery)
      // getList(this.baseUrl, this.listQuery).then((response) => {
      //   console.log('response:')
      //   console.log(response)
      //   // this.tableData = {data:[{index:1}],total:1};
      //   this.list = response.data.result.data
      //   this.applist = response.data.result.applist
      //   this.total = response.data.result.total
      //   this.listLoading = false
      // })
      // fetchList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.total = response.data.total
      //   console.log(this.list)
      //   console.log(this.total)
      //   // Just to simulate the time of the request
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, 1.5 * 1000)
      // })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleReset() {
      this.listQuery = {
        page: 1,
        limit: 20,
        published: [0, 0, 0],
        deleted: [0, 0, 0],
        exported: [0, 0, 0],
        app: [0, 0, 0, 0, 0, 0, 0, 0],
        class: [0, 0, 0],
        keyword: '',
        date: ''
      }
    },
    createData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          // createArticle(this.temp).then(() => {
          //   this.list.unshift(this.temp)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: 'Success',
          //     message: 'Created Successfully',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    handleArticle(row, para) {
      this.listLoading = true
      disposeArticle(this.baseUrl, { id: row.id, status: para })
        .then(
          response => {
            console.log('response:')
            console.log(response)
            setTimeout(() => {
              this.$message({
                message: '操作成功！',
                type: 'success'
              })
              row.status = para
              this.listLoading = false
            }, 1 * 1000)
            // eslint-disable-next-line no-return-assign
          },
          response => this.$layer_message(response.result)
        )
        .finally(() => (this.listLoading = false))
    },
    updateData() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          // updateArticle(tempData).then(() => {
          //   const index = this.list.findIndex(v => v.id === this.temp.id)
          //   this.list.splice(index, 1, this.temp)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: 'Success',
          //     message: 'Update Successfully',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
        }
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      // fetchPv(pv).then(response => {
      //   this.pvData = response.data.pvData
      //   this.dialogPvVisible = true
      // })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [
          'app名称',
          '标题',
          '内容',
          '发布时间',
          '发布账号',
          '是否有害'
        ]
        const filterVal = [
          'name',
          'title',
          'content',
          'timestamp',
          'author',
          'status'
        ]
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v =>
        filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>

<style lang="scss" scoped>
.verification {
  padding: 30px 60px;
  .el-checkbox.is-bordered.el-checkbox--small {
    margin-left: 0px;
    width: 94px;
    margin-right: 0px;
  }
}
</style>
