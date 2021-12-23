<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="己方情况"> <Enemy1 /></el-tab-pane>
      <el-tab-pane label="己方能力"
        ><Enemy2/></el-tab-pane
      >
      <el-tab-pane label="己方能力分析"><Enemy3/></el-tab-pane>
      <el-tab-pane label="结论"><Enemy4/></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Enemy1 from "@/components/ComDevelop/CDcontestantJ3_2/CDcontestantJ3_2Body/Tab/NavarChy1.vue";
import Enemy2 from "@/components/ComDevelop/CDcontestantJ3_2/CDcontestantJ3_2Body/Tab/NavarChy2.vue";
import Enemy3 from "@/components/ComDevelop/CDcontestantJ3_2/CDcontestantJ3_2Body/Tab/NavarChy3.vue";
import Enemy4 from "@/components/ComDevelop/CDcontestantJ3_2/CDcontestantJ3_2Body/Tab/NavarChy4.vue";
export default {
  components: {
    Enemy1,
    Enemy2,
    Enemy3,
    Enemy4
  },
};
</script>
<style lang="scss" scoped>
::v-deep.el-tabs--border-card > .el-tabs__content {
  background: #031437;
}
::v-deep.el-tabs--border-card > .el-tabs__header {
  background: #031437;
}

</style>