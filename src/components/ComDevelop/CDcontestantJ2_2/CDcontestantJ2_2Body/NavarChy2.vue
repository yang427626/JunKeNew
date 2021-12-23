<template>
  <div>
    <p class="zhushi">
      注释：声明存在的客观条件，以及这些条件对敌方能力及其任务所具有的影响。本部分描述了作战区域、敌军情况以及这两个因素对敌方能力的影响。
    </p>
    <el-tabs type="border-card">
      <el-tab-pane label="作战区域特征"> <Enemy1 /></el-tab-pane>
      <el-tab-pane label="敌军情况（陆、海、空、天、其他）"
        ><Enemy2/></el-tab-pane
      >
      <el-tab-pane label="敌方非传统战争、心理战情况"><Enemy3/></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Enemy1 from "@/components/ComDevelop/CDcontestantJ2_2/CDcontestantJ2_2Body/Tab1/NavarChy1.vue";
import Enemy2 from "@/components/ComDevelop/CDcontestantJ2_2/CDcontestantJ2_2Body/Tab1/NavarChy2.vue";
import Enemy3 from "@/components/ComDevelop/CDcontestantJ2_2/CDcontestantJ2_2Body/Tab1/NavarChy3.vue";
export default {
  components: {
    Enemy1,
    Enemy2,
    Enemy3
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
.zhushi{
  color: #90c4df;
  height: 1.5rem;
  overflow: hidden;
}
</style>