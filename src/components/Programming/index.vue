<template>
  <div class="programming">
    <div class="title">规划指令</div>
    <div class="conter">
      <!-- <iframe width="100%" src="http://192.168.50.191/app/image/html/1.html" frameborder="0"></iframe> -->

      111
    </div>
    <div class="programming_bottom">
      <p class="programming_bottom_it">重新编辑</p>
      <p class="programming_bottom_item">历史选择</p>
      <p class="programming_bottom_item">下发</p>
    </div>
  </div>
</template>
<script>
// import {viewHandDrowProject} from "@/api/programming.js"
export default {
  name: 'Programming',
  data() {
    return {

    }
  },
  created() {
    // viewHandDrowProject(this.baseUrl).then(res=>{
    //   console.log(res)
    // })
  }
}
</script>
<style lang="scss" scoped>
.programming {
  background: #061043;
  width: 98%;
  margin: 0 auto;
  .title {
    color: #6fafd9;
    font-weight: bold;
    font-size: 0.9rem;
    // padding-left: 1rem;
  }
  .conter {
    width: 100%;
    height: 4.7rem;
    border: 2px solid #4156f4;
    border-radius: 4px;
    margin: 0.5rem auto 0 auto;
    overflow: hidden;
    color: white;
  }
  .programming_bottom {
    display: flex;
    justify-content: flex-end;
    .programming_bottom_it {
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
    }
    .programming_bottom_item {
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
    }
  }
}
</style>
