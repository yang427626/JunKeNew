<template>
  <div class="task">
    <div class="task_title">任务编组</div>
    <div class="contn">
      <div class="iten_dis" v-for="(item, index) in geoupData" :key="index">
        <el-checkbox-group v-model="checkList">
          <el-checkbox :label="item.name"></el-checkbox>
        </el-checkbox-group>
        <p class="item_con">任务{{ index+1 }}</p>
        <textarea
          v-model="$store.state.HaAaveProject.suppose"
          class="pro3_a1"
        />
      </div>
    </div>
    <!-- <div class="addCs">
      <p class="addBm">新增任务</p>
    </div> -->
    <div class="pro_bom">
        <p class="pro_bom1" @click="addClick">新增任务</p>
      <p class="pro_bom1">关闭</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2">提交上级</p>
    </div>
  </div>
</template>
<script>

export default {
  name: "TaskConter",
  components: {},
  data() {
    return {
      checkList: ["复选框 A"],
      pro3: "",
      geoupData: [
        { name: "任务一", id: 0 },
        { name: "任务二", id: 1 },
        { name: "任务三", id: 2 },
      ],
    };
  },
  created() {},
  methods: {
    huizongClick() {},
    addClick(){
      this.geoupData.push({})
    }
  },
};
</script>
<style scoped lang="scss">
// .addCs {
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//     justify-content: center;
//   align-items: center;
// }
.iten_dis {
  display: flex;
  color: rgb(144, 196, 223);
  font-size: 0.7rem;
  width: 80%;
  margin: 1rem auto;
  align-items: center;
}
.contn {
  height: 22rem;
  overflow: auto;
  
  // background: red;
}
.item_con {
  width: 15%;
  padding-left: 10px;
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.item_click {
  width: 10%;
  cursor: pointer;
}
.pro3_a1 {
  height: 4rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.color_dis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  margin: 0 1rem;
  p {
    margin: 0.2rem 0;
  }
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}
.addBm {
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  font-weight: bold;
  width: 6rem;
  height: 3rem;
  line-height: 3.9rem;
  cursor: pointer;
  color: #fff;
  padding-left: 0.6rem;
}
.pro_bom1 {
  width: 6rem;
  height: 3rem;
  line-height: 3.9rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
.pro_bom2 {
  width: 6rem;
  height: 3rem;
  line-height: 3.9rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
/deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
  width: 0px;
  display: inline-block;
  overflow: hidden;
}
/deep/ .el-checkbox__label {
  width: 0px;

  overflow: hidden;
}
/deep/ .el-checkbox-group {
  margin-top: 0rem;
}
</style>
