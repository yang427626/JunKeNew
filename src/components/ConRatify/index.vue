<template>
  <div class="task_conters">
    <!-- j5-2 -->
    <!-- <ConRatify1 v-if="$store.state.ConRatify == '0'"></ConRatify1> -->
    <ConRatify2 v-if="$store.state.ConRatify == '1'"></ConRatify2>
    <!-- <ConRatify3 v-if="$store.state.ConRatify == '2'"></ConRatify3> -->
    <!-- <ConRatify4 v-if="$store.state.ConRatify == '3'"></ConRatify4> -->
    <!-- <ConRatify5 v-if="$store.state.ConRatify == '4'"></ConRatify5> -->
      <div v-if="$store.state.ConRatify == '0'">
      <div class="task_title">行动方案决策简报会</div>
      <ConRatify1></ConRatify1>
    </div>

    <div v-if="$store.state.ConRatify == '2'">
      <div class="task_title">指挥官选择/修改行动方案</div>
      <ConRatify3></ConRatify3>
    </div>
        <div v-if="$store.state.ConRatify == '3'">
      <div class="task_title">完善选定的行动方案</div>
      <ConRatify4></ConRatify4>
    </div>

    <div v-if="$store.state.ConRatify == '4'">
      <div class="task_title">起草指挥官的判断</div>
      <ConRatify5></ConRatify5>
    </div>

    <ConRatify6 v-if="$store.state.ConRatify == '5'"></ConRatify6>
  </div>
</template>
<script>
import ConRatify1 from "@/components/NavarChyJ2/NavarChyBody/NavarChy15_J1-2";
import ConRatify2 from "@/components/ConRatify/ConRatifyBody/ConRatify2.vue";
import ConRatify3 from "@/components/NavarChyJ2/NavarChyBody/NavarChy11_J2.vue";
import ConRatify4 from "@/components/NavarChyJ2/NavarChyBody/NavarChy12_J2.vue";
import ConRatify5 from "@/components/NavarChyJ2/NavarChyBody/NavarChy14_J2.vue";
import ConRatify6 from "@/components/ConRatify/ConRatifyBody/ConRatify6.vue";

export default {
  name: "TaskConter",
  components: {
    ConRatify1,
    ConRatify2,
    ConRatify3,
    ConRatify4,
    ConRatify5,
    ConRatify6,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.task_conters {
  background: #031437;
  border: 1px solid #4156f4;
  position: relative;
  /* width: 45%;
  margin: 0 auto; */
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
