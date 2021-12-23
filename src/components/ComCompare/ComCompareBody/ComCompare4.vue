<template>
  <div class="NavarchySin">
    <div class="task_title">列出已知的关键事件</div>

    <div class="table_content">
      <table border="1px solid #fff" class="table_tr">
        <tr>
          <th class="item_td"></th>
          <th class="item_td">阶段一</th>
          <th class="item_td">阶段二</th>
          <th class="item_td">阶段三</th>
          <th class="item_td">阶段四</th>
        </tr>
        <tr v-for="(item, index) in tableDataT1" :key="index">
          <td>
            {{ item.model }}
            <!-- <input type="text" name="" id=""> -->
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
         
        </tr>
      </table>
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
      tableDataT1:[
           {
              model:'特点（不同点）'
          },
           {
              model:'建议'
          },
            
          
      ],
     
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
.itemCon {
  color: #fff;
  width: 100%;
  font-size: 0.3rem;
  height: 23rem;
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
.table_content {
//   height: rem;
width: 90%;
margin: 0 auto;
  overflow: auto;
}
.table_tr {
  width: 100%;
  background: #031437;
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
  margin: 1rem 0;
  border: 0px solid #4156f4;
  tr {
    // width: 16rem;
    width: 100%;
    text-align: center;
    th {
      text-align: center;
    }
    input {
      width: 100%;
      background: #031437;
      color: #fff;
      outline: none;
      border: 0px;
      font-size: 0.8rem;
    }
  }
}
</style>
