<template>
  <div class="monitoring">
    <div v-if="flag == 0">
      <Programming />
      <div class="conter">
        <TaskConter class="TaskConter" />
        <NavarchySin1 v-if="creareIndex == 0" class="Project" />
        <Project v-if="creareIndex == 1" class="Project" />
        <Synergy class="Synergy" />
      </div>
      <Footer />
    </div>
    <div v-else>
      <Navarchy />
      <div class="conter">
        <TaskConter class="TaskConter" />
        <!-- <NavarchySin1 v-if="creareIndex == 0" class="Project"></NavarchySin1> -->
        <NavarchyBody v-if="creareIndex == 1" class="Project" />
        <Synergy class="Synergy" />
      </div>
      <Footer />
    </div>
    <el-dialog title="应做事项" :visible.sync="creare" width="30%">
      <div class="his_title">您现在需要做梳理会议记录，形成会议纪要</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="creareClick">取 消</el-button>
        <el-button type="primary" @click="creareClick">立刻下发</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Programming from '@/components/Programming'
import TaskConter from '@/components/TaskConter'
import Project from '@/components/project'
import Synergy from '@/components/synergy'
import Footer from '@/components/Footer'
import Navarchy from '@/components/Navarchy'
import NavarchyBody from '@/components/NavarchySin/NavarchyBody/NavarchyBody.vue'
import NavarchySin1 from '@/components/NavarchySin/NavarchySin1.vue'
export default {
  name: 'Monitoring',
  components: {
    Programming,
    TaskConter,
    Project,
    Synergy,
    Footer,
    Navarchy,
    NavarchySin1,
    NavarchyBody
  },
  data() {
    return {
      flag: null,
      creare: true,
      creareIndex: 1
    }
  },
  created() {
    this.flag = sessionStorage.getItem('flag')
    this.$store.state.city = 1
    console.log(this.$store.getters)
    console.log(this.$store.state.city)
  },
  methods: {
    creareClick() {
      this.creareIndex = 1
      this.creare = false
    }
  }
}
</script>
<style  lang="scss" scoped>
.his_title {
  font-size: 0.8rem;
  /* font-family: Source Han Sans CN; */
  font-weight: 500;
  color: #ffffff;
}
.conter {
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  .TaskConter {
    width: 25%;
  }
  .Project {
    width: 48%;
  }
  .Synergy {
    width: 25%;
  }
}
/deep/ .el-dialog__header {
  border: 1px solid #4156f4;
}
/deep/ .el-dialog {
  background: #031437;
  color: #ffffff;
  border: 1px solid #4156f4;
}
/deep/ .el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
</style>
