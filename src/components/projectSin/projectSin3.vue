<template>
  <div>
    <div class="pro1">3.使命人物</div>
    <div>
      <div class="input1">
        <div class="pro3_item">
          <span class="title">a.</span>
          <div class="pro3_item_item">
            <textarea v-model="$store.state.HaAaveProject.missionA" class="pro3_a1" />
            <p class="sub_title">为司令部写一份清晰简洁的人物说明</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">b.</span>
          <div class="pro3_item_item">
            <textarea v-model="$store.state.HaAaveProject.missionB" class="pro3_b" />
            <p class="sub_title">
              一个段落应列出国家战略目标,包括最终状态和预期效果(如已规定)以及任务,包括:
            </p>
            <div class="pro3_item">
              <span class="title1">(1)</span>
              <div class="pro3_item_item">
                <textarea v-model="$store.state.HaAaveProject.missionB1" class="pro3_b1" />
                <p class="sub_title">
                  上级总部赋予的任务
                </p>
              </div>
            </div>
            <div class="pro3_item">
              <span class="title1">(2)</span>
              <div class="pro3_item_item">
                <textarea v-model="$store.state.HaAaveProject.missionB2" class="pro3_b1" />
                <p class="sub_title">为了传达对整体使命任务的清洗理解而必须描述的推断或隐藏任务</p>

              </div>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">c.</span>
          <div class="pro3_item_item">
            <textarea v-model="$store.state.HaAaveProject.missionC" class="pro3_b" />
            <p class="sub_title">如果对使命任务或任务的分析没有进展到可以正式说明的程度,提供指挥官对使命任务的最佳判断</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_input: '',
      pro3_a: ''
    }
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a)
    },

    nextClick() {
      this.$emit('nextClick', 4)
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
textarea{
  resize: none;
  background: #1f295c;
    border: 1px solid #4156f4;
    color: #4a88a8;
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
  font-size: 1rem;
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
