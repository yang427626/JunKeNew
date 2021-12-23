<template>
  <div>
    <div class="pro1">8.指南</div>
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">(a)核生化防御武器</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideA1" class="pro3_b1" />
            <p class="sub_title_p">
              说明继续规划所需的假设.它们将被下级司令部当作事实
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideA2" class="pro3_b1" />
            <p class="sub_title_p">
              说明继续规划所需的假设.它们将被下级司令部当作事实
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(b)政治考虑</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideB1" class="pro3_b1" />
            <p class="sub_title_p">包括上级当局的指南</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideB2" class="pro3_b1" />
            <p class="sub_title_p">列出影响行动的部队地位协定或基本权利</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(c)机动资源</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideC1" class="pro3_b1" />
            <p class="sub_title_p">确定为规划而分派的战略或战术输送资产</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideC2" class="pro3_b1" />
            <p class="sub_title_p">突出运输资产的优先级或限制</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideC3" class="pro3_b1" />
            <p class="sub_title_p">装载港.卸载港和中转基地.在个小节中,确定用于支援计划的装载港.卸载港和间的中转基地</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(d)支援和下属司令部与机构</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideD" class="pro3_b1" />
            <p class="sub_title_p">给出来自相邻和下级支援的初步信息</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(e)指挥与控制</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideE" class="pro3_b1" />
            <p class="sub_title_p">说明指挥官选择的指挥和控制编组</p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">(f)其他</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.HaAaveProject.guideF" class="pro3_b1" />
            <p class="sub_title_p">包括指挥官认为必要的指南</p>
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
      pro3_a: ''
    }
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 9)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.pro4{
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
  // text-align: center;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
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
}
.pro3_b1 {
  height: 1.5rem;
  width: 80%;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.2rem 0;
  color: #90c4df;
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
  margin-top: 0.5rem;
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
</style>
