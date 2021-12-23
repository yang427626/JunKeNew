<template>
  <div class="task_conter">
      <!-- j5-2 -->
       <NavarchyRecord v-if="$store.state.Enact=='0'"></NavarchyRecord>
       <Enact2 v-if="$store.state.Enact=='1'"></Enact2>
       <Enact3 v-if="$store.state.Enact=='2'"></Enact3>
       <Enact4 v-if="$store.state.Enact=='3'"></Enact4>
       <Enact5 v-if="$store.state.Enact=='4'"></Enact5>
       <Enact6 v-if="$store.state.Enact=='5'"></Enact6>
       <Enact7 v-if="$store.state.Enact=='6'"></Enact7>
       <Enact9 v-if="$store.state.Enact=='8'"></Enact9>
       <Enact10 v-if="$store.state.Enact=='9'"></Enact10>
       <Enact11 v-if="$store.state.Enact=='10'"></Enact11>
       <Enact12 v-if="$store.state.Enact=='11'"></Enact12>
       <Enact13 v-if="$store.state.Enact=='12'"></Enact13>
       <Enact14 v-if="$store.state.Enact=='13'"></Enact14>
       <Enact15 v-if="$store.state.Enact=='14'"></Enact15>
       <Enact16 v-if="$store.state.Enact=='15'"></Enact16>
  </div>
</template>
<script>
import NavarchyRecord from '@/components/NavarchySin/NavarchyBody/NavarchyRecord.vue'
import Enact2 from '@/components/Enact/EnactBody/Enact2.vue'
import Enact3 from '@/components/Enact/EnactBody/Enact3.vue'
import Enact4 from '@/components/Enact/EnactBody/Enact4.vue'
import Enact5 from '@/components/Enact/EnactBody/Enact5.vue'
import Enact6 from '@/components/Enact/EnactBody/Enact6.vue'
import Enact7 from '@/components/Enact/EnactBody/Enact7.vue'
import Enact9 from '@/components/Enact/EnactBody/Enact9.vue'
import Enact10 from '@/components/Enact/EnactBody/Enact10.vue'
import Enact11 from '@/components/Enact/EnactBody/Enact11.vue'
import Enact12 from '@/components/Enact/EnactBody/Enact12.vue'
import Enact13 from '@/components/Enact/EnactBody/Enact13.vue'
// import Enact14 from '@/components/Enact/EnactBody/Enact14_1.vue'//任务编组
// import Enact14 from '@/components/Enact/EnactBody/Enact14_2.vue'//组成任务部队分配
// import Enact14 from '@/components/Enact/EnactBody/Enact14_3.vue'//时间表
// import Enact14 from '@/components/Enact/EnactBody/Enact14_4.vue'//推荐的分阶段指挥与控制
// import Enact14 from '@/components/Enact/EnactBody/Enact14_5.vue'//作战线
// import Enact14 from '@/components/Enact/EnactBody/Enact14_6.vue'//行动方案风险
import Enact14 from '@/components/Enact/EnactBody/Enact14_7.vue'//同步矩阵
import Enact15 from '@/components/Enact/EnactBody/Enact15.vue'
import Enact16 from '@/components/ConRatify/ConRatifyBody/ConRatify2.vue'
// import Enact16 from '@/components/ConRatify/ConRatifyBody/ConRatify2.vue'
export default {
  name: 'TaskConter',
  components: {
  NavarchyRecord,
  Enact2,
  Enact3,
  Enact4,
  Enact5,
  Enact6,
  Enact7,
  Enact9,
  Enact10,
  Enact11,
  Enact12,
  Enact13,
  Enact14,
  Enact15,
  Enact16
  },
  data() {
    return {}
  },
  created() {

  },
  methods: {
 
  }
}
</script>
<style scoped>
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  position: relative;
}
</style>
