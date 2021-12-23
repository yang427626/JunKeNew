<template>
  <div class="task_conter">
    <!-- j5-2 -->
    <ComAnalyse1 v-if="$store.state.ComAnalyse == '0'"></ComAnalyse1>
    <ComAnalyse2 v-if="$store.state.ComAnalyse == '1'"></ComAnalyse2>
    <ComAnalyse3 v-if="$store.state.ComAnalyse == '2'"></ComAnalyse3>
    <ComAnalyse4 v-if="$store.state.ComAnalyse == '3'"></ComAnalyse4>
    <ComAnalyse5 v-if="$store.state.ComAnalyse == '4'"></ComAnalyse5>
  </div>
</template>
<script>
import ComAnalyse1 from "@/components/ComAnalyse/ComAnalyseBody/ComAnalyse1.vue";
import ComAnalyse2 from "@/components/ComAnalyse/ComAnalyseBody/ComAnalyse2.vue";
import ComAnalyse3 from "@/components/ComAnalyse/ComAnalyseBody/ComAnalyse3.vue";
import ComAnalyse4 from "@/components/ComAnalyse/ComAnalyseBody/ComAnalyse4.vue";
import ComAnalyse5 from "@/components/ComAnalyse/ComAnalyseBody/ComAnalyse5.vue";

export default {
  name: "TaskConter",
  components: {
    ComAnalyse1,
    ComAnalyse2,
    ComAnalyse3,
    ComAnalyse4,
    ComAnalyse5,
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
