<template>
  <!-- 整理会议记录 -->
  <div class="NavarchySin">
    <NavarchyHave v-show="this.$store.state.NavarchyShow == 0" />
    <NavarchyRecord
      v-show="this.$store.state.NavarchyShow == 1"
    />
    <NavarchyMessage
      v-show="this.$store.state.NavarchyShow == 2"
    />
    <NavarchyEnviron
      v-show="this.$store.state.NavarchyShow == 3"
    />
    <NavarchyDefine
      v-show="this.$store.state.NavarchyShow == 4"
    />
    <NavarchyAction
      v-show="this.$store.state.NavarchyShow == 5"
    />
    <NavarchyGuide v-show="this.$store.state.NavarchyShow == 6" />
  </div>
</template>
<script>
import NavarchyRecord from '@/components/NavarchySin/NavarchyBody/NavarchyRecord.vue'
import NavarchyAction from '@/components/NavarchySin/NavarchyBody/NavarchyAction.vue'
import NavarchyDefine from '@/components/NavarchySin/NavarchyBody/NavarchyDefine.vue'
import NavarchyEnviron from '@/components/NavarchySin/NavarchyBody/NavarchyEnviron.vue'
import NavarchyGuide from '@/components/NavarchySin/NavarchyBody/NavarchyGuide.vue'
import NavarchyMessage from '@/components/NavarchySin/NavarchyBody/NavarchyMessage.vue'
import NavarchyHave from '@/components/NavarchySin/NavarchyBody/NavarchyHave.vue'
export default {
  components: {
    NavarchyRecord,
    NavarchyAction,
    NavarchyDefine,
    NavarchyEnviron,
    NavarchyGuide,
    NavarchyMessage,
    NavarchyHave
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
