<template>
  <div class="task_conter">
    <div class="task_title">敌方中立方信息</div>
    <div>
      <div class="progress">
        <el-steps :active="progress">
          <el-step
            v-for="item in progressDatta"
            :key="item.index"
            :title="item.name"
            @click.native="progressClick(item.index)"
          />
        </el-steps>
        <Enemy1
          v-show="progress == 1"
          :project-sin-data="projectSinData"
        
        />

        <Enemy2 v-show="progress == 2" />

        <Enemy3
          v-show="progress == 3"
     
        />

        <Enemy4
          v-show="progress == 4"
     
        />

        <Enemy5
          v-show="progress == 5"
       
        />

        <Enemy6 v-show="progress == 6"/>
        <div />
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-if="authRight == 1">拒绝</p>
      <p class="pro_bom2" @click="flxClick">保存</p>
      <p class="pro_bom2" @click="nextClick"  v-if="progress<6">下一步</p>
      <p class="pro_bom2" @click="submitClick" v-if="progress>=6">提交</p>
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
          :disabled="disabled"
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
import { save, submit, GetRoutePageByTaskId, handleProcess } from "@/api/Ha";
import Enemy1 from "@/components/Enemy/EnemyBody/Enemy1.vue";
import Enemy2 from "@/components/Enemy/EnemyBody/Enemy2.vue";
import Enemy3 from "@/components/Enemy/EnemyBody/Enemy3.vue";
import Enemy4 from "@/components/Enemy/EnemyBody/Enemy4.vue";
import Enemy5 from "@/components/Enemy/EnemyBody/Enemy5.vue";
import Enemy6 from "@/components/Enemy/EnemyBody/Enemy6.vue";
export default {
  name: "TaskConter",
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
      NumShow: 1,
      id: "",
      disabled: false,
      refuse: false,
      refuseData: "",
      authRight: 0,
      progress: 1,
      projectSinData: null,
      confirm: "下一步",
      progressDatta: [
        {
          name: "敌方军事情况",
          index: 1,
        },
        {
          name: "敌方非传统战争和心理战情况",
          index: 2,
        },
        {
          name: "敌方能力",
          index: 3,
        },
        {
          name: "敌方能力分析",
          index: 4,
        },
        {
          name: "结论",
          index: 5,
        },
        {
          name: "中立方的分析",
          index: 6,
        },
      ],
    };
  },
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        // console.log(res,'aaaaaaaaaa')
        if (res.data.content == undefined) {
        } else {
          this.$store.state.content = res.data.content;
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
          this.$store.state.content = res.data.content;
        }
      });
    },
  },
  methods: {
    progressClick(index) {
      this.progress = index;
    },
    nextClick(index) {
      this.progress =  this.progress+1;
      // console.log(index)
    },
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.$store.state.content,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg);
      });
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
    flxClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.$store.state.content,
      });
    },
  },
};
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
  border-bottom: 0px solid #4156f4;
  /* height: 25rem; */
  position: relative;
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
  background-image: url("../../assets/img/bag.png");
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
  font-size: 1rem;
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
