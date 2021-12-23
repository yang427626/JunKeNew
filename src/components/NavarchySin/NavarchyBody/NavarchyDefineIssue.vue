<template>
  <!-- 下发文件 -->
  <div class="NavarchySin">
    <div class="task_title">下发文件</div>
    <div class="cont">
      <div class="newMessage">
        <p class="newMessage_title">选择开会人员</p>
      </div>
      <div class="hearAvatar">
        <div
          class="avatar"
          v-for="(item, index) in sendPersonList"
          :key="index"
        >
          <el-avatar
            :src="item.avatar"
          ></el-avatar>
          <p class="newMessage_title">{{item.userName}}</p>
        </div>
      </div>
      <div class="title_table">
        <p class="title_group">文件名称</p>
        <p class="title_p">
          <textarea
            class="input"
            v-model="sendFileName"
            disabled="false"
            placeholder="请输入内容"
          />
        </p>
      </div>
      <!-- <div class="title_table">
        <p class="title_group">文件模板</p>
        <p class="title_p">
          <span class="title_group">模板一</span>
        </p>
      </div> -->
      <div class="title_table">
        <p class="title_group">文本注意事项</p>
        <p class="title_p">
          <textarea class="textName" v-model="note"  placeholder="请输入内容" />
        </p>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="nextClick">下发</p>
       <!-- @click="submitClick" -->
    </div>
  </div>
</template>
<script>
import { getSendFileInfo,issueFile} from "@/api/Ha";
export default {
  data() {
    return {
      checkList: [],
      input: "",
      sendPersonList: [],
      sendFileName: "",
      note: "",
    };
  },

  created() {
    getSendFileInfo(this.baseUrl, {
      taskId:24,
      content: {},
    }).then((res) => {
      if (res.code == 0) {
        this.sendPersonList = res.data.sendPersonList;
        this.sendFileName = res.data.sendFileName;
        this.note = res.data.note;
      } else {
        this.$message(res.msg);
      }
    });
  },
  methods: {
      nextClick(){
        issueFile(this.baseUrl,{
            taskId:this.$route.query.id,
            content:{}
        }).then(res=>{
            this.$message(res.msg)
        })
      }
  },
};
</script>
<style lang="scss" scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hearAvatar {
  height: 3rem;
  display: flex;
}
.cont {
  width: 80%;
  margin: 0 auto;
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  font-size: 0.7rem;
}
.textName {
  width: 70%;
  height: 10rem;
}
.input {
  width: 70%;
  height: 1.4rem;
  line-height: 1.2rem;
}
.NavarchySin {
  width: 100%;
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
  position: relative;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  //   background-image: url("@/assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.newMessage_title {
//   margin-left: 1rem;
  margin-top: 0.3rem;
  font-size: 0.7rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.title_table {
  display: flex;
  color: #ffffff;
  margin-left: 1rem;
  align-items: center;
}
.title_p {
  width: 80%;
}
.title_group {
  width: 6rem;
  font-size: 0.7rem;
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
