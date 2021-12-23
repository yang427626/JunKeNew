<template>
  <div class="NavarchySin">
    <div class="task_title">指挥当局审批</div>
    <div class="item">
      <p>现有评估标准:</p>
      <!-- <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p> -->
    </div>
    <div class="itemCon">
      <table class="table" border="1" cellspacing="0" width="90%" height="40">
        <tr>
          <th colspan="1">兵力防护</th>
          <th colspan="1">决定性行为</th>
          <th colspan="1">人员伤亡</th>
          <th colspan="1">挫败敌人重心</th>
          <th colspan="1">保障/支援</th>
          <th colspan="1">塑造环境可观察性/可评估性</th>
          <th colspan="1">时间</th>
          <th colspan="1">灵活性</th>
          <th colspan="1">风险</th>
          <th colspan="1">突破性</th>
        </tr>
      </table>
    </div>

    <div class="item">
      <p>修改建议说明:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="state" /></p>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">确定</p>
    </div>
  </div>
</template>
<script>
import Action from "@/components/projectSin/projectSin2.vue";
export default {
  components: {
    Action,
  },
  data() {
    return {
      pro3: "",
    };
  },
  created() {},
  methods: {
    flxClick() {
     
    },
  },
};
</script>
<style lang="scss" scoped>
.NavarchySin {
  width: 100%;
  background: #031437;
  position: relative;
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
.item {
  display: flex;
  width: 100%;
  color: #fff;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  font-size: 0.9rem;
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  width: 6rem;
  height: 1.7rem;
  line-height: 1.7rem;
}
.item_font_con {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.textName {
  height: 1.7rem;
}
.state {
  width: 30rem;
  height: 9rem;
}
.itemCon {
  color: #fff;
  width: 100%;
  font-size: 0.3rem;
  height: 10rem;
  overflow: auto;
  .table {
    margin: 0 auto;
  }
  .item_td {
    width: 4rem;
    input {
      width: 100%;
      background: #031437;
      outline: none;
      color: #fff;
      border: 0px;
    }
  }
}
.pro_bom {
  display: flex;
  position: absolute;
  // bottom: 0rem;
  right: 1rem;
}
.pro_bom1 {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  font-weight: bold;
  color: #90c4df;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
}
.pro_bom2 {
  background: #0076db;
  border: 1px solid #242c39;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
}
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
