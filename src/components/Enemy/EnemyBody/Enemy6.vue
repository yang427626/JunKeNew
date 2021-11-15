<template>
  <div class="enemy">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="中立方情况" name="first">
        <Enemy1 />
      </el-tab-pane>
      <el-tab-pane label="中立方能力" name="second">
        <Enemy3 />
      </el-tab-pane>
      <el-tab-pane label="中立方能力分析" name="third">
        <Enemy4 />
      </el-tab-pane>
      <el-tab-pane label="结论" name="fourth">
        <Enemy5 />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Enemy1 from '@/components/Enemy/EnemyBody/Enemy1.vue'
import Enemy3 from '@/components/Enemy/EnemyBody/Enemy3.vue'
import Enemy4 from '@/components/Enemy/EnemyBody/Enemy4.vue'
import Enemy5 from '@/components/Enemy/EnemyBody/Enemy5.vue'

export default {
  components: {
    Enemy1,
    Enemy3,
    Enemy4,
    Enemy5

  },
  data() {
    return {
      activeName: 'first',
      pro3_input: '',
      pro3_a: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
/deep/ .el-tabs__item {
  color: #fff;
}
/deep/ .el-tabs__item:hover {
  color: #1890ff;
}
/deep/ .el-tabs__item.is-active {
  color: #1890ff;
}
/deep/ .el-tabs__content {
  height: 25.5rem;
}
</style>
