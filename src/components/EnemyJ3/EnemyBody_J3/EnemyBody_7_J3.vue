<template>
<!-- 编写作战环境 -->
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <div class="pro3_a">
          <p class="sub_title">(1)现有情况</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CEcontent.CE_J2_7.CE_J2_7_data_progress1"
              :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">（描述作战区域内的科技水平）</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)对敌方能力的影响</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CEcontent.CE_J2_7.CE_J2_7_data_progress2"
              :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">（考虑科技对敌方广泛能力的影响。）</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)对己方作战行动的影响</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CEcontent.CE_J2_7.CE_J2_7_data_progress3"
              :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">（考虑科技对友军广泛作战行动的影响。）</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">保存</p>
         <p class="pro_bom2" @click="refuse = true" v-if="authRight == 1">拒绝</p>
      <p class="pro_bom2" @click="submitClick">提交</p>
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
export default {
  data() {
    return {
      pro3_a: "",
      NumShow: 1,
      id: "",
      disabled: false,
      refuse:false,
      refuseData:'',
       authRight: 0,
    };
  },
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined||res.data.content =='') {
        } else {
          this.$store.state.CEcontent = res.data.content;
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
          this.$store.state.CEcontent = res.data.content;
        }
      });
    },
  },
  methods: {
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.$store.state.CEcontent,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg)
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
        content: this.$store.state.CEcontent,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 25.5rem;
}
.pro4 {
  height: 20rem;
  overflow-y: scroll;
}
.textarea_div {
  width: 100%;
  margin-left: 1rem;
}
.sub_title_p {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  width: 80%;
  // text-align: center;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 0.7rem;
}

.title {
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  margin-left: 2rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  outline: none;
}
.pro3_b1 {
  height: 1.5rem;
  width: 80%;
  font-size: 0.8rem;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  width: 5rem;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
  // flex-direction: column;
}
.pro3_item {
  margin-top: 2rem;
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
  cursor: pointer;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
