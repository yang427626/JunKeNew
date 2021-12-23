<template>
  <!-- 收集和分析友方中立信息 -->
  <div class="NavarchySin">
    <div class="task_title">收集和分析友方中立信息</div>
    <Enmeny />
    <!-- <EnmenyJ3></EnmenyJ3> -->
  </div>
</template>
<script>
import Enmeny from '@/components/Enemy'
import EnmenyJ3 from '@/components/EnmemyJ3'
export default {
  components: {
    Enmeny,
    EnmenyJ3
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.NavarchySin {
  width: 100%;
  background: #031437;
  // border: 1px solid #4156f4;
  height: 67vh;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
//   background-image: url("@/assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
</style>
