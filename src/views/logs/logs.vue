<template>
  <div class="tab-container">
    <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
      登录日志
    </el-button>
     <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
      监控日志
    </el-button> -->
    <el-radio-group v-model="logType">
      <el-radio :label="1">登录日志</el-radio>
      <el-radio :label="2">监控日志</el-radio>
      <el-radio :label="3">其他日志</el-radio>
    </el-radio-group>
    <div>
      <el-button type="primary" :style="{float:'right'}" @click="handleCreate">
        导出日志
      </el-button>
      <el-button type="primary" :style="{float:'right',marginRight:'10px'}" @click="handleCreate">
        查询
      </el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="create_time"
        label="日期"
        width="180"
      />
      <el-table-column
        prop="moudlename"
        label="模块"
        width="180"
      />
      <el-table-column
        prop="loginfo"
        label="日志内容"
      />
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'Tab',
  data() {
    return {
      tabMapOptions: [
        { label: '登录日志', key: 'N' },
        { label: '监控日志', key: 'P' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
