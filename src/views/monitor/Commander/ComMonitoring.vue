<template>
  <div class="monitoring">
    <div>
      <div class="conter">
        <TaskConter class="TaskConter" />
        <NavarchyBody class="Project" />
        <Synergy class="Synergy" />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Programming from "@/components/Programming";
import TaskConter from "@/components/TaskConter";
import Project from "@/components/project";
import Synergy from "@/components/synergy";
import Footer from "@/components/Footer";
import Navarchy from "@/components/Navarchy";
import NavarchyBody from "@/components/NavarchySin/NavarchyBody/NavarchyBody.vue";
import NavarchySin1 from "@/components/NavarchySin/NavarchySin1.vue";
export default {
  name: "Monitoring",
  components: {
    Programming,
    TaskConter,
    Project,
    Synergy,
    Footer,
    Navarchy,
    NavarchySin1,
    NavarchyBody,
  },
  data() {
    return {
      flag: null,
      creare: true,
      creareIndex: 1,
      pro3_a: "",
    };
  },
  created() {
    this.flag = sessionStorage.getItem("flag");
    // this.$store.state.city = 1;
  },
  methods: {
    
  },
};
</script>
<style  lang="scss" scoped>
.his_title {
  font-size: 0.8rem;
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
    overflow: hidden;
  }
  .Synergy {
    width: 25%;
     overflow: hidden;
  }
}
.steps {
  width: 97%;
  margin: 0 auto;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
 outline:none;
  color: #4a88a8;
  height: 100%;
  width: 99%;
  margin: 0 auto 0.3rem auto;
  font-size: 0.8rem;
}

.foot_item {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #90c4df;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.7rem;
  cursor: pointer;
}
.title {
  display: flex;
  width: 97%;
  margin: 0 auto;
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
