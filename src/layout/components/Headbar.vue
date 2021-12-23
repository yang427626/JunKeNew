<template>
  <div class="headerbar">
    <div class="headerbar_left">
      <p class="login">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcar0.autoimg.cn%2Fupload%2F2013%2F2%2F18%2Fu_20130218165304639264.jpg&refer=http%3A%2F%2Fcar0.autoimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639107863&t=acd2f1c3191262bda945401acca46a48"
          alt=""
        />
      </p>
      <p class="title">指挥系统</p>
    </div>
    <div class="headerbar_right">
      <p class="bottom">开始</p>
      <p class="bottom">紧急启动</p>
      <p class="bottom" @click="messageClick">消息记录</p>
      <p class="bot">{{ userName }}</p>
      <p class="bot" @click="login">登录</p>
    </div>
    <HeadbarMessage :message-data="messageData" @cancelC="cancelC" />
  </div>
</template>

<script>
import HeadbarMessage from "@/components/HeadbarMessage/index.vue";
export default {
  components: {
    HeadbarMessage,
  },
  data() {
    return {
      userName: null,
      projectName:"",
      messageData: false,
    };
  },
  created() {
    this.userName = sessionStorage.getItem("userName");
  },
  methods: {
    messageClick() {
      this.messageData = true;
    },
    cancelC(data) {
      this.messageData = data;
    },
    login() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.headerbar {
  width: 100%;
  height: 2.6rem;
  background: #061043;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 1.5rem;
  font-size: 1rem;
  border-bottom: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  margin-bottom: 0.6rem;
}
.headerbar_left {
  display: flex;
  text-align: center;
  width: 50%;
}
.login {
  display: flex;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  align-content: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.title {
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  margin-left: 1rem;
}
.headerbar_right {
  display: flex;
  width: 50%;
  justify-content: flex-end;
  font-size: 0.5rem;
  align-items: center;
  .bottom {
    // width: 2.5;
    cursor: pointer;
    padding: 0.2rem;
    margin-right: 1rem;
    // height: 2rem;
    // line-height: 2rem;
    text-align: center;
    background: #061043;
    border: 1px solid #4156f4;
    box-shadow: 0px 1px 5px 0px #4f9adb;
    color: #90c4df;
    border-radius: 2px;
  }
  .bot {
    // width: 2.5;
    padding: 0.2rem;
    margin-right: 1rem;
    text-align: center;
    background: #061043;
    border: 0px solid #4156f4;
    cursor: pointer;
  }
  /deep/ .el-dialog__header {
    /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
    /* background-size: 100% 100%; */
    border: 1px solid #4156f4;
  }
  /deep/ .el-dialog {
    /* background-image: url("../../assets/img/矩形 1129 拷贝.png");
  background-size: 100% 100%; */
    background: #031437;
    border: 1px solid #4156f4;
  }
  /deep/ .el-dialog__title {
    font-size: 0.9rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
