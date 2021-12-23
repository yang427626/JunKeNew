<template>
  <div class="enemy">
    <div class="task_title">定义作战区域1</div>
    <div class="item">
      <p class="item_font">文本注意事项:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>
    <div class="item">
      <p class="item_font">备注分类:</p>
      <p class="item_font_con">
        <textarea v-model="pro3_a" class="textNames" />
      </p>
    </div>

    <div class="table_content">
      <table border="1px solid #fff" class="table_tr">
        <div class="tabke_tr_conter">
          <tr>
            <th>分类</th>
            <th>名称</th>
            <th>位置</th>
            <th>责任人</th>
          </tr>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" v-model="item.date" />
            </td>
            <td>
              <input type="text" v-model="item.address" />
            </td>
            <td>
              <input type="text" v-model="item.address" />
            </td>
          </tr>
          <p class="add" @click="addClick">添加</p>
        </div>
      </table>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       tableData: [
        {}
      ],
      pro3_a:
        "1、战争区（用于涉及作战的重大行动和战役）\n2、战区 （为便于组织实施联合作战行动而划设，当联合部队开展行动的范围超过联合作战区域范围时，就建立战区）\n3、联合作战区域（未完成具体任务而划设，任务完成该区域即取消）\n4、两栖目标区（两栖部队的目标所在的区域）\n5、联合特种作战区（指派给特种部队指挥官，进行特种作战的区域）6、行动区域（为陆军和海军部队定义的区域）",
      pro3: "",
    };
  },
  props: {
    confirm: String,
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a);
    },
     addClick() {
      let Objuct = {};
      this.tableData.push(Objuct);
    },
  },
};
</script>
<style lang="scss" scoped>
.enemy {
  //   position: relative;
  //   height: 24rem;
  margin: 0 1rem;
}
.textNames {
  width: 100%;
  height: 7rem;
}
.input1 {
  height: 20rem;
  overflow-y: scroll;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0.6rem 0;
  width: 90%;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}

.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
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
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  text-align: center;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 6rem;
  padding: 0.2rem 0;
}
.item_font_con {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 80%;
}
.item_font_con_con {
  font-size: 0.8rem;
  font-weight: 500;
  height: 5rem;
  color: rgb(144, 196, 223);
  // padding: 0 1rem;
  width: 80%;
}
.tabke_tr_conter {
  // height: 25rem;
  width: 39rem;
  overflow-y: auto;
  margin: 0 auto;
}
.table_tr {
  width: 37rem;
  background: #031437;
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  margin: 1rem auto;
  border: 0px solid #4156f4;
  tr {
    width: 16rem;
    text-align: center;
    th {
      text-align: center;
    }
    input {
      width: 100%;
      background: #031437;
      color: #fff;
      border: 0px;
      font-size: 0.8rem;
    }
  }
}
</style>
