<template>
  <div class="NavarchyJ2">
    <div v-show="this.$store.state.NavarchyP2 == 0">
      <div class="task_title">战略判断</div>
      <NavarChy1></NavarChy1>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 1">
      <div class="task_title">分析上级指导</div>
      <NavarChy2></NavarChy2>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 2">
      <div class="task_title">整理会议记录</div>
      <NavarChy3></NavarChy3>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 3">
      <div class="task_title">调整战略判断和指挥官初始化规划指南</div>
      <NavarChy4></NavarChy4>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 4">
      <div class="task_title">确定已知事实和制定规划假设</div>
      <NavarChy5></NavarChy5>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 5">
      <div class="task_title">组织收集情报核实事实和假设信息</div>
      <NavarChy6></NavarChy6>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 6">
      <div class="task_title">确定并分析行动限制</div>
      <NavarChy7></NavarChy7>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 7">
      <div class="task_title">确定指定、隐含和基本任务</div>
      <NavarChy8></NavarChy8>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 8">
      <div class="task_title">制定任务陈述</div>
      <NavarChy9></NavarChy9>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 9">
      <div class="task_title">进行初始兵力分析</div>
      <NavarChy10></NavarChy10>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 10">
      <div class="task_title">制定军事目标</div>
      <NavarChy11></NavarChy11>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 11">
      <div class="task_title">制定行动方案评估标准</div>
      <NavarChy12></NavarChy12>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 12">
      <div class="task_title">开展风险评估</div>
      <NavarChy13></NavarChy13>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 13">
      <div class="task_title">确定初始指挥官关键信息需求</div>
      <NavarChy14></NavarChy14>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 14">
      <div class="task_title">编辑参谋判断</div>
      <NavarChy15></NavarChy15>
    </div>
    <div v-show="this.$store.state.NavarchyP2 == 15">
      <div class="task_title">准备任务分析简报</div>
      <NavarChy16></NavarChy16>
    </div>

  </div>
</template>
<script>
import NavarChy1 from "@/components/NavarChyJ2/NavarChyBody/NavarChy1_J2.vue";
import NavarChy2 from "@/components/NavarChyJ2/NavarChyBody/NavarChy2_J2.vue";
import NavarChy3 from "@/components/NavarChyJ2/NavarChyBody/NavarChy3_J2.vue";
import NavarChy4 from "@/components/NavarChyJ2/NavarChyBody/NavarChy4_J2.vue";
import NavarChy5 from "@/components/NavarChyJ2/NavarChyBody/NavarChy5_J2.vue";
import NavarChy6 from "@/components/NavarChyJ2/NavarChyBody/NavarChy6_J2.vue";
import NavarChy7 from "@/components/NavarChyJ2/NavarChyBody/NavarChy7_J2.vue";
import NavarChy8 from "@/components/NavarChyJ2/NavarChyBody/NavarChy8_J2.vue";
import NavarChy9 from "@/components/NavarChyJ2/NavarChyBody/NavarChy9_J2.vue";
import NavarChy10 from "@/components/NavarChyJ2/NavarChyBody/NavarChy10_J2.vue";
import NavarChy11 from "@/components/NavarChyJ2/NavarChyBody/NavarChy11_J2.vue";
import NavarChy12 from "@/components/NavarChyJ2/NavarChyBody/NavarChy12_J2.vue";
import NavarChy13 from "@/components/NavarChyJ2/NavarChyBody/NavarChy13_J2.vue";
import NavarChy14 from "@/components/NavarChyJ2/NavarChyBody/NavarChy14_J2.vue";
import NavarChy15 from "@/components/NavarChyJ2/NavarChyBody/NavarChy15_J1-2.vue";
import NavarChy16 from "@/components/NavarChyJ2/NavarChyBody/NavarChy16_J1-2.vue";
// import NavarChy16 from "@/components/NavarChyJ2/NavarChyBody/NavarChy16_J2-2.vue";
// import NavarChy16 from "@/components/NavarChyJ2/NavarChyBody/NavarChy16_J3-2.vue";
// import NavarChy16 from "@/components/NavarChyJ2/NavarChyBody/NavarChy16_J4-2.vue";
// import NavarChy16 from "@/components/NavarChyJ2/NavarChyBody/NavarChy16_J5-2.vue";
export default {
  components: {
    NavarChy1,
    NavarChy2,
    NavarChy3,
    NavarChy4,
    NavarChy5,
    NavarChy6,
    NavarChy7,
    NavarChy8,
    NavarChy9,
    NavarChy10,
    NavarChy11,
    NavarChy12,
    NavarChy13,
    NavarChy14,
    NavarChy15,
    NavarChy16,
  },
  data() {
    return {};
  },
  created() {
    console.log(this.$store.state.NavarchyP2);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.NavarchyJ2 {
  width: 98%;
  padding: 0 1rem;
  background: #031437;
  border: 1px solid #4156f4;
  position: relative;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
</style>
