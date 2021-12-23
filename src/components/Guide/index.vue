<template>
  <div class="guide">
    <div class="task_title">调整战略判断和指挥官初始化规划指南</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con">
        <textarea
          v-model="content.Guide1"
          :disabled="disabled"
          class="textName"
        />
      </p>
    </div>
    <div class="item">
      <p class="item_font">作战环境的描述:</p>
      <p class="item_font_con">
        <textarea v-model="content.Guide2" :disabled="disabled" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">问题的界定:</p>
      <p class="item_font_con">
        <textarea v-model="content.Guide3" :disabled="disabled" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">行动方法:</p>
      <p class="item_font_con">
        <textarea v-model="content.Guide4" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">初始意图:</p>
      <p class="item_font_con">
        <textarea v-model="content.Guide5" class="textarea" />
      </p>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-if="authRight == 1">拒绝</p>
      <p class="pro_bom2" @click="saveClick">保存</p>
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
      NumShow: 1,
      id: "",
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
      content: {
        Guide1: "",
        Guide2: "",
        Guide3: "",
        Guide4: "",
        Guide5: "",
      },
    };
  },
  created() {
    this.authRight = this.$route.query.authRight;
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.content = res.data.content;
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
          this.content = res.data.content;
        }
      });
    },
  },
  methods: {
    //  submitClick() {
    //   save(this.baseUrl, {
    //     taskId: this.$route.query.id,
    //     content: this.content,
    //   }).then((res) => {
    //     console.log(res, "形成指挥官初始规划指南");
    //   });
    // },
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
        content: this.content,
      }).then(res=>{
        this.$message(res.msg);
      })
    },
    // 提交
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.content,
      }).then((res) => {
        // console.log("111111111111111", res);
        this.$message(res.msg);
      });
    },
  },
};
</script>
<style scoped>
.guide {
  position: relative;
  height: 90%;
}
.item {
  display: flex;
}
.newMessage_title {
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.dial {
  margin: 0 1rem;
}
.textarea {
  width: 82%;
  height: 5rem;
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  width: 7rem;
}
.item_font_con {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  width: 80%;
}
.textarea {
  width: 100%;
  height: 7rem;
}
.textName {
  width: 20%;
  height: 1.4rem;
}
.text {
  width: 100%;
  height: 3rem;
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
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
  background-image: url("../../assets/img/his.png");
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
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
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
</style>