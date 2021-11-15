<template>
  <div id="app">
    <!-- <div id="app" @mousemove="moveEvent" @click="moveEvent"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      trmmer: null,
      login: null
    }
  },
  created() {

  },
  methods: {
    //  moveEvent(){
    //   let path = [sessionStorage.getItem("mhUrl")]
    //   if(!path.includes(this.$route.path)) {
    //     clearTimeout(this.timmer);
    //     this.init();
    //   }
    // },

    // init(){
    //   this.timmer=setTimeout(()=>{
    //     //清除session
    //     // console.log("定时器")
    //     sessionStorage.removeItem("token");
    //     sessionStorage.clear();
    //     //跳往登录页面
    //    window.location = sessionStorage.getItem("mhUrl");
    //   },5*60*1000);
    // },

  }
}
</script>
<style scoped>
#app{
  background: #4156F4;
}
</style>
