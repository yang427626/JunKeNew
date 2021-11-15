<template>
  <div>
    <div class="pro1">10.行政</div>
    <div class="cont_scr">
      <div class="input1">
        <div class="pro3_item">
          <span class="title">(a).规划安排</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
            <div class="pro3_item">
              <span class="title1">(1)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="规划会议安排" class="pro3_b1" />
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(2)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="基本计划完成中止" class="pro3_b1" />
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(3)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="附件完成中止" class="pro3_b1" />
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(4)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="确定必要的其他里程碑事件" class="pro3_b1" />
              </div>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(b)参谋部联络指示</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(c)协调</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
            <div class="pro3_item">
              <span class="title1">(1)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="行动军官指定" class="pro3_b1" />

              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(2)</span>
              <div class="pro3_item_item">
                <textarea v-model="pro3_a" placeholder="基本计划完成中止" class="pro3_b1" />
              </div>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(d)安全说明</span>
          <div class="pro3_item_item">
            <textarea v-model="pro3_a" class="pro3_a1" />
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="nextClick">下一步</p>
      <p class="pro_bom2" @click="flxClick">确定</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_a: ''
    }
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 10)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.cont_scr{
  overflow-y: scroll;
  height: 20rem;
}
textarea{
  resize: none;
  background: #1f295c;
    border: 1px solid #4156f4;
    color: #4a88a8;
    font-size: 0.7rem;
}
.sub_title {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_b1{
   height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.title {
    font-size: 0.8rem;
    width: 8rem;
    text-align: center;
    font-weight: bold;
    color: #90c4df;
}
.title1{
   font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
}
.pro3_item_item {
  // height: 3rem;
  width: 90%;
  word-break: break-all;
  // overflow-y: scroll;
}
.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 1rem;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
