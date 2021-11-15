<template>
  <div class="enemy">
    <!-- <div class="pro1">3.使命人物</div> -->

    <div class="input1">
      <div class="pro3_item">
        <span class="title">a、游击队</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述敌方在游击队和叛乱作战方面的能力、政策和现状。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">b、心理战</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述敌方在作战区域内进行心理战的理论、技术、方法、组织和实施情况。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">c、颠覆</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述敌方在作战区域内的进行破坏的理论、技术、方法、组织和实施情况。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">d、增援能力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （从地面部队、空军、海军、导弹和大规模杀伤性武器等方面描述敌军的增援能力；描述地形、天气、公路和铁路网、运输、轮换、劳动力、战俘政策以及其他参与邻国可能提供的援助。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">e、破坏</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">（描述敌方在作战区域内组织破坏活动的可能性。）</p>
        </div>
      </div>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2">下一步</p>
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
.enemy {
  position: relative;
  height: 24.5rem;
}
.input1 {
  height: 20rem;
//   overflow-y: scroll;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0;
  width: 90%;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_b1 {
  height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
   font-size: 0.8rem;
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
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  width: 5rem;
}
.title1 {
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
