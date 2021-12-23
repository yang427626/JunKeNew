<template>
  <div class="login-container">
    <el-card class="login-box" element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-form
        ref="loginForm"
        :model="loginForm"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @blur="capsTooltip = false"
          />
            <!-- @keyup.native="checkCapslock " -->
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click.native.prevent="handleLogin"
          >登 录</el-button
        >
      </el-form>
    </el-card>
    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business
      simulation! ! !
      <br />
      <br />
      <br />
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import SocialSign from "./components/SocialSignin";
import { LoginClick } from "../../api/login.js";
export default {
  name: "Login",
  components: { SocialSign },
  data() {
    return {
      loginForm: {
        username: "J0",
        password: "123456",
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
    };
  },

  created() {},
  methods: {
    // checkCapslock(e) {
    //   const { key } = e;
    //   this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    // },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
          //  this.$router.push({
          //     path: "/Commander/monitor",
          //   });  
        LoginClick(this.baseUrl, {
          password: this.loginForm.password,
          userName: this.loginForm.username,
        }).then((res) => {
          if (res.code == 0) {
            sessionStorage.setItem("token", res.data.token);
            localStorage.setItem("flag", res.data.flag);
            sessionStorage.setItem("userName", res.data.userName);
            if(res.data.flag=='/Ha/monitor'){
               this.$store.state.creare=false
            }else{
               this.$store.state.creare=true
            }
            this.$router.push({
              path: res.data.flag,
            });  
          }else{
            this.$message(res.msg)
          }
        });
    },
    creareClick(){}
  },
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
.login-container {
  background-size: 125% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}
.login-box {
  background: #ebeef5;
  border: none;
  width: 35%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  .el-card__body {
    padding: 5px;
    background: #fff;
  }
}

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #666;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
    .el-button--small {
      font-size: 16px;
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #0b131d;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(-180deg, #2f9de2, #57bdbf);

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 40px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 22px;
      color: $light_gray;
      margin: 15px auto 40px auto;
      display: flex;
      justify-content: center;
      color: #666;
      span {
        line-height: 90px;
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
