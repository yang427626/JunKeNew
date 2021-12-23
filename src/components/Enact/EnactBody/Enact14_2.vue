<template>
  <div class="task">
    <div class="task_title">组成任务部队分配</div>
    <div class="contn">
      <div class="item_contn">
        <p class="item_title">地面组成部队</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.geoupData"
            :key="index"
          >
            <el-checkbox-group
              v-model="checkList"
              @change="handleCheckedCitiesChange(item)"
            >
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="item_contn">
        <p class="item_title">海上组成部队</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.sea"
            :key="index"
          >
            <el-checkbox-group v-model="checkList" @change="setChange(item)">
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="item_contn">
        <p class="item_title">空中组成部队</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.cavity"
            :key="index"
          >
            <el-checkbox-group v-model="checkList" @change="cavityChange(item)">
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div class="item_contn">
        <p class="item_title">特种作战组成部队</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.special"
            :key="index"
          >
            <el-checkbox-group
              v-model="checkList"
              @change="specialChange(item)"
            >
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="item_contn">
        <p class="item_title">心理战特遣部队</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.head"
            :key="index"
          >
            <el-checkbox-group v-model="checkList" @change="headChange(item)">
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="item_contn">
        <p class="item_title">机构间联合协调团体</p>
        <div class="con_con">
          <div
            class="iten_dis"
            v-for="(item, index) in dataLidst.organization"
            :key="index"
          >
            <el-checkbox-group
              v-model="checkList"
              @change="organizationChange(item)"
            >
              <el-checkbox :label="item.name"></el-checkbox>
            </el-checkbox-group>
            <p class="item_title">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="yixuan">
      <p>已选部队</p>
      <p>
        <span class="empty" @click="emptyClick">清空</span>
        <!-- <span class="empty" @click="detClick">删除</span> -->
      </p>
    </div>
    <div class="have">
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.geoupData"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.sea"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.cavity"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.special"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.head"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
      <div class="have_items">
        <div
          class="iten_diss"
          v-for="(item, index) in dataLidstSin.organization"
          :key="index"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="item.name"></el-checkbox>
          </el-checkbox-group>
          <p class="item_title">{{ item.name }}</p>
        </div>
      </div>
    </div>

    <div class="pro_bom">
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
      checkList: [],
      pro3: "",
      geoupData: [],
      dataLidst: {
        geoupData: [
          { name: "地面部队1", id: 1 },
          { name: "地面部队2", id: 2 },
          { name: "地面部队3", id: 3 },
          { name: "地面部队4", id: 4 },
        ],
        sea: [
          { name: "海上部队1", id: 0 },
          { name: "海上部队2", id: 0 },
        ],
        cavity: [
          { name: "空中部队1", id: 0 },
          { name: "空中部队2", id: 0 },
          { name: "空中部队3", id: 0 },
          { name: "空中部队4", id: 0 },
        ],
        special: [{ name: "特种部队1", id: 0 }],
        head: [{ name: "心里部队", id: 0 }],
        organization: [{ name: "机构部队", id: 0 }],
      },
      dataLidstSin: {
        geoupData: [],
        sea: [],
        cavity: [],
        special: [],
        head: [],
        organization: [],
      },
    };
  },
  created() {},
  methods: {
    huizongClick() {},
    addClick() {
      // this.geoupData.push({});
    },
    handleCheckedCitiesChange(data) {
      this.dataLidstSin.geoupData = [];
      this.checkList.forEach((res) => {
        this.dataLidst.geoupData.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.geoupData.push(item);
          }
        });
      });
    },
    setChange(data) {
      this.dataLidstSin.sea = [];
      this.checkList.forEach((res) => {
        this.dataLidst.sea.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.sea.push(item);
          }
        });
      });
    },
    cavityChange(data) {
      this.dataLidstSin.cavity = [];
      this.checkList.forEach((res) => {
        this.dataLidst.cavity.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.cavity.push(item);
          }
        });
      });
    },
    specialChange(data) {
      this.dataLidstSin.special = [];
      this.checkList.forEach((res) => {
        this.dataLidst.special.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.special.push(item);
          }
        });
      });
    },
    headChange(data) {
      this.dataLidstSin.head = [];
      this.checkList.forEach((res) => {
        this.dataLidst.head.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.head.push(item);
          }
        });
      });
    },
    organizationChange(data) {
      this.dataLidstSin.organization = [];
      this.checkList.forEach((res) => {
        this.dataLidst.organization.forEach((item) => {
          if (item.name == res) {
            this.dataLidstSin.organization.push(item);
          }
        });
      });
    },
    // 清空
    emptyClick() {
      (this.checkList = []),
        (this.dataLidstSin = {
          geoupData: [],
          sea: [],
          cavity: [],
          special: [],
          head: [],
          organization: [],
        });
    },
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
.empty {
  cursor: pointer;
}
.yixuan {
  color: rgb(144, 196, 223);
  font-size: 0.7rem;
  width: 90%;
  display: flex;
  margin: 0rem auto;
  justify-content: space-between;
}
.iten_dis {
  display: flex;
  color: rgb(144, 196, 223);
  font-size: 0.7rem;
  width: 80%;
  margin: 0.5rem auto;
  align-items: center;
}
.iten_diss {
  display: flex;
  color: rgb(144, 196, 223);
  font-size: 0.7rem;
  width: 80%;
  margin: 0rem auto;
  align-items: center;
}
.have {
  width: 100%;
  border: 1px solid #4156f4;
  height: 8rem;
  display: flex;
  color: rgb(144, 196, 223);
  align-items: center;
}
.have_item {
  width: 16.6%;
  text-align: center;
}
.have_items {
  width: 16.6%;
  text-align: center;
  height: 8rem;
  overflow: auto;
}
.have_items::-webkit-scrollbar {
  display: none;
}
.contn {
  //   height: 22rem;
  // overflow: auto;
  display: flex;
  // background: red;
}
.item_title {
  width: 100%;
  overflow: hidden;
  text-align: center;
  color: rgb(144, 196, 223);
  font-size: 0.8rem;
  height: 1.1rem;
  margin: 0.3rem 0;
}
.item_contn {
  width: 16.6%;
  height: 15rem;
  border: 1px solid #4156f4;
}
.con_con {
  height: 12rem;
  overflow: auto;
}
.con_con::-webkit-scrollbar {
  display: none;
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
  margin-top: -0.2rem;
}
</style>
