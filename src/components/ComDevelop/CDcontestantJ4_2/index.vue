<template>
  <div class="task_conter">
    <div class="task_title">编辑参谋判断</div>
      <div class="progress">
        <el-steps :active="progress">
          <el-step
            v-for="item in progressDatta"
            :key="item.index"
            :title="item.name"
            @click.native="progressClick(item.index)"
          />
        </el-steps>
        <Enemy1 v-show="progress == 1" />

        <Enemy2 v-show="progress == 2"/>

        <Enemy3 v-show="progress == 3"  />

        <Enemy4 v-show="progress == 4"  />
        <Enemy5 v-show="progress == 5"  />
        <Enemy6 v-show="progress == 6"  />


   
      </div>
    <!-- </div>
      <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">确定</p>
      <p class="pro_bom2" v-if="progress<5" @click="nextClick">下一步</p>
      <p class="pro_bom2" v-if="progress>=5">提交</p>
    </div> -->
       <div class="pro_bom">
      <p class="pro_bom1" v-show="NumShow == 1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-show="authRight == 1">
        拒绝
      </p>
      <p class="pro_bom2" v-show="NumShow == 1" @click="saveClick">保存</p>
      <p class="pro_bom2" v-show="NumShow == 1 && progress>=6" @click="submitClick">提交</p>
       <p class="pro_bom2" v-if="progress<6" @click="nextClick">下一步</p>
    </div>
    <!-- 退回 -->
    <el-dialog :visible.sync="refuse" title="退回原因" width="30%">
      <div class="newMessage">
        <p class="newMessage_title">请说出您的退回理由：</p>
      </div>
      <div>
        <textarea
          v-model="refuseData"
          type="textarea"
          class="textarea dial"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="refuse = false">取 消</el-button>
        <el-button type="primary" @click="refuse_Dialog_Clcik">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Enemy1 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy1.vue'
import Enemy2 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy2.vue'
import Enemy3 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy3.vue'
import Enemy4 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy4.vue'
import Enemy5 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy5.vue'
import Enemy6 from '@/components/ComDevelop/CDcontestantJ4_2/NavarChy6.vue'
import { save, submit, GetRoutePageByTaskId, handleProcess } from "@/api/Ha";
export default {
  name: 'TaskConter',
  components: {
    Enemy1,
    Enemy2,
    Enemy3,
    Enemy4,
    Enemy5,
    Enemy6,
  
  },
  
  data() {
    return {
      progress: 1,
      projectSinData: null,
           NumShow: 1,
      id: "",
      pro3: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
      progressDatta: [
        {
          name: '形式',
          index: 1
        },
        {
          name: '东道国支援和后勤保障协定',
          index: 2
        },
        {
          name: '战略航空港和卸载海港',
          index: 3
        },
        {
          name: '预置和战区储备库存',
          index: 4
        },
         {
          name: '联合后勤职能',
          index: 5
        },
         {
          name: '后勤能力缺口',
          index: 6
        },
      ]
    }
  },
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.$store.state.CDcontestantJ4_2 = res.data.content;
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route() {
      this.$router.go(0);
      this.NumShow = this.$route.query.dealStatus;
      this.id = this.$route.query.id;
    },
    NumShow() {
      if (this.NumShow == "0") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    id() {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.$store.state.CDcontestantJ4_2 = res.data.content;
        }
      });
    },
  },
  methods: {

    progressClick(index) {
      this.progress = index
    },
    nextClick() {
      this.progress =this.progress+1
      // console.log(index)
    },
     // 拒绝
    refuse_Dialog_Clcik() {
      this.id = parseInt(this.$route.query.id);
      handleProcess(this.baseUrl, {
        reason: this.refuseData,
        status: 1,
        taskId: this.id,
      }).then((res) => {
        this.refuse = false;
      });
    },
    // 保存
    saveClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content:   this.$store.state.CDcontestantJ4_2
      }).then((res) => {
        this.$message(res.msg);
      });
    },
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content:   this.$store.state.CDcontestantJ4_2
      }).then((res) => {
        this.$message(res.msg);
      });
    },
  }
}
</script>
<style scoped>
.pro2 {
  width: 96%;
  margin-top: 1rem;
  /* height: 100px; */
}
.task_conter {
  background: #031437;
  /* border: 1px solid #4156f4; */
  /* height: 25rem; */
  /* position: relative; */
}
.text {
  color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto 0 auto;
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
.progress {
  width: 96%;
  margin: 1rem auto;
}
.box_pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  margin: 0.5rem 0;
  font-size: 0.7rem;
}
.pro_con2 {
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #90c4df;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
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
   cursor: pointer;
  border: 1px solid #242c39;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding: 0.2rem 0.4rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
}
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/deep/.el-step__title {
  font-size: 0.6rem;
}
/deep/.el-textarea__inner {
  background: #1f295c;
  height: 17rem;
  border: 1px solid #4156f4;
}
/deep/ .el-input--small {
  width: 100%;
  margin-left: 1rem;
  background: #1f295c;
  border: 1px solid #4156f4;
}
/deep/ .el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/ .el-step__title.is-process {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-finish {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__title.is-wait {
  font-weight: 400;
  color: #4156f4;
}
/deep/ .el-step__icon.is-text {
  background: #031437;
  color: #fff;
}
/deep/ .el-step__icon.is-text {
  color: #fff;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(0deg, #00f5ff, #74a2e4);
  box-shadow: 0px 1px 5px 0px #a4c1e8;
  border-radius: 50%;
}
</style>
