<template>
  <div class="NavarchySin">
    <div class="task_title">同步矩阵</div>
    <div class="itemCon">
      <table class="table" border="1" cellspacing="0" width="90%" height="150">
        <tr>
          <th rowspan="2"></th>
          <th colspan="1">活动时间</th>
          <th colspan="2">2020-23-32---2020-23-32</th>
          <th colspan="4">2020-23-32---2020-23-32</th>
          <th colspan="3">2020-23-32---2020-23-32</th>
          <th rowspan="2"></th>
        </tr>
        <tr>
          <th colspan="1">阶段</th>
          <th colspan="2">威胁</th>
          <th colspan="4">掌握主动权</th>
          <th colspan="3">主导</th>
        </tr>

        <!-- 表内容 -->
        <tr>
          <td :rowspan="tableData[0].enemy">敌军部队</td>
          <td
            v-for="(item, index) in tableData[0].enemyData0"
            :key="index+'e'"
            class="item_td"
          >
            <input type="text" v-model="item.model" />
          </td>
          <td :rowspan="tableData[0].enemy">
            <i @click="enemyClicy" class="el-icon-circle-plus"></i>
          </td>
        </tr>
        <tr
          class="item_td"
          v-for="(item, index) in tableData[0].enemyData"
           :key="index+'e0'"
        >
          <td v-for="(key, i) in item.enemyDataSin"  :key="i+'D'">
            <input type="text" v-model="key.model" />
          </td>
        </tr>
        <tr>
          <td :rowspan="tableData[1].constitute">组成部队</td>
          <td
            v-for="(item, index) in tableData[1].enemyData0"
            :key="index+'c'"
            class="item_td"
          >
            <input type="text" v-model="item.model" />
          </td>
          <td :rowspan="tableData[1].constitute">
            <i @click="constituteClick" class="el-icon-circle-plus"></i>
          </td>
        </tr>
        <tr
          class="item_td"
          v-for="(item, index) in tableData[1].enemyData"
           :key="index+'c0'"
        >
          <td v-for="(key, i) in item.enemyDataSin"  :key="i+'Dc'">
            <input type="text" v-model="key.model" />
          </td>
        </tr>

        <tr>
          <td :rowspan="tableData[2].unite">联合职能领域</td>
          <td
            v-for="(item, index) in tableData[2].enemyData0"
            :key="index+'u'"
            class="item_td"
          >
            <input type="text" v-model="item.model" />
          </td>
          <td :rowspan="tableData[2].unite">
            <i @click="uniteClick" class="el-icon-circle-plus"></i>
          </td>
        </tr>
        <tr
          class="item_td"
          v-for="(item, index) in tableData[2].enemyData"
          :key="index+'0'"
        >
          <td v-for="(key, i) in item.enemyDataSin"  :key="i+'uD'">
            <input type="text" v-model="key.model" />
          </td>
        </tr>

        <tr>
          <td :rowspan="tableData[3].assess">评估</td>
          <td
            v-for="(item, index) in tableData[3].enemyData0"
            :key="index"
            class="item_td"
          >
            <input type="text" v-model="item.model" />
          </td>
          <td :rowspan="tableData[3].assess">
            <i @click="assessClick" class="el-icon-circle-plus"></i>
          </td>
        </tr>
        <tr
          class="item_td"
          v-for="(item, index) in tableData[3].enemyData"
          :key="index"
        >
          <td v-for="(key, i) in item.enemyDataSin" :key="i">
            <input type="text" v-model="key.model" />
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
      tableData: [
        {
          enemy: 2,
          enemyData0: [
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
          ],
          enemyData: [
            {
              enemyDataSin: [
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
          ],
        },
        {
          constitute: 6,
          enemyData0: [
            { model: "地面部队组成指挥官" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
          ],
          enemyData: [
            {
              enemyDataSin: [
                { model: "海上部队组成指挥官" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "空中部队组成指挥官" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "特种作战组成部队指挥官" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "心理战特遣部队" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "机构间联合协调团体" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
          ],
        },
        {
          unite: 6,
          enemyData0: [
            { model: "指挥与控制" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
          ],
          enemyData: [
            {
              enemyDataSin: [
                { model: "情报" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "持续保障" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "信息行动" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "民政事务" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "军事欺骗" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
          ],
        },
        {
          assess: 5,
          enemyData0: [
            { model: "决策点" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
            { model: "" },
          ],
          enemyData: [
            {
              enemyDataSin: [
                { model: "分支" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "后续" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "指挥官关键信息需求" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
            {
              enemyDataSin: [
                { model: "风险" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            },
          ],
        },
      ],
    };
  },
  created() {},
  methods: {
    // 敌军部队
    enemyClicy(){
      let obj= {
              enemyDataSin: [
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            }
      this.tableData[0].enemyData.push(obj)
      this.tableData[0].enemy=this.tableData[0].enemyData.length+1
    },
// 组成部队
    constituteClick(){
       let obj= {
              enemyDataSin: [
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            }
      this.tableData[1].enemyData.push(obj)
      this.tableData[1].constitute=this.tableData[1].enemyData.length+1
    },
    // 联合职能领域
    uniteClick(){
       let obj= {
              enemyDataSin: [
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            }
      this.tableData[2].enemyData.push(obj)
      this.tableData[2].unite=this.tableData[2].enemyData.length+1
    },
       // 评估
    assessClick(){
       let obj= {
              enemyDataSin: [
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
                { model: "" },
              ],
            }
      this.tableData[3].enemyData.push(obj)
      this.tableData[3].assess=this.tableData[3].enemyData.length+1
    },
    flxClick(){
      
    }
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
</style>
