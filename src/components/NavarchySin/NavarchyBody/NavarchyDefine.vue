<template>
  <!-- 定义问题 -->
  <div class="NavarchySin">
    <div class="task_title">定义问题</div>
    <Issue></Issue>
  </div>
</template>
<script>
import Issue from '@/components/Issue'
export default {
  data() {
    return {}
  },
  components:{
    Issue
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.NavarchySin {
  width: 100%;
  background: #031437;
  border: 1px solid #4156f4;
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
