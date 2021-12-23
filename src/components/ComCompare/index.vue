<template>
  <div class="task_conter">
    <!-- j5-2 -->
    <ComCompare1 v-if="$store.state.ComCompare == '0'"></ComCompare1>
    <ComCompare2 v-if="$store.state.ComCompare == '1'"></ComCompare2>
    <ComCompare3 v-if="$store.state.ComCompare == '2'"></ComCompare3>
    <ComCompare4 v-if="$store.state.ComCompare == '3'"></ComCompare4>
  
  </div>
</template>
<script>
import ComCompare1 from "@/components/ComCompare/ComCompareBody/ComCompare1.vue";
import ComCompare2 from "@/components/ComCompare/ComCompareBody/ComCompare2.vue";
import ComCompare3 from "@/components/ComCompare/ComCompareBody/ComCompare3.vue";
import ComCompare4 from "@/components/ComCompare/ComCompareBody/ComCompare4.vue";


export default {
  name: "TaskConter",
  components: {
    ComCompare1,
    ComCompare2,
    ComCompare3,
    ComCompare4
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  position: relative;
  /* width: 45%;
  margin: 0 auto; */
}
</style>
