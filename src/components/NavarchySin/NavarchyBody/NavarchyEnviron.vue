<template>
  <!-- 描述作战环境 -->
  <div class="NavarchySin">
    <div class="task_title">描述作战环境</div>
    <EnemyJ3 />
  </div>
</template>

<script>
import EnemyJ3 from '@/components/EnemyJ3/index.vue'
export default {
  components: {
    EnemyJ3
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
