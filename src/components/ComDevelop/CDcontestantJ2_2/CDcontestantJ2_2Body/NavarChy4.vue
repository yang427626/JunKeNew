<template>
  <div>
    <p class="zhushi">
      根据分配的任务分析每项能力，考虑上文第2部分中的所有适用因素，并尝试确定和说明敌军策略的相对顺序及其概率。讨论敌方的弱点。在这部分中，通过讨论有利于或不利于敌人策略的因素来检验敌人的能力。在适用的情况下，对每项能力的分析还应包括对与该能力有关的敌方缺点的讨论，即敌人特别容易受到损害、欺骗或失败的环境、条件或情况。最后，分析还应包括对可能采用该能力的任何迹象的讨论。
    </p>
    <el-tabs type="border-card">
      <el-tab-pane label="当前使用部队沿着作战区域前沿进攻"> <Enemy1 /></el-tab-pane>
      <el-tab-pane label="在当前位置沿着河岸线的延误"
        ><Enemy2/></el-tab-pane
      >
    
    </el-tabs>
  </div>
</template>
<script>
import Enemy1 from "@/components/ComDevelop/CDcontestantJ2_2/CDcontestantJ2_2Body/Tab2/NavarChy1.vue";
import Enemy2 from "@/components/ComDevelop/CDcontestantJ2_2/CDcontestantJ2_2Body/Tab2/NavarChy2.vue";
export default {
  components: {
    Enemy1,
    Enemy2
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