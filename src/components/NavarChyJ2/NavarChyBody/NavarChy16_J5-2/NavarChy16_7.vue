<template>
  <div class="NavarchySin">
    <!-- <NavarChy1></NavarChy1> -->
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="pro3" class="textName" /></p>
    </div>
    <div class="item">
      <p class="item_font">作战环境的描述:</p>
      <p class="item_font_con">
        <textarea v-model="pro3" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">问题的界定:</p>
      <p class="item_font_con">
        <textarea v-model="pro3" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">行动方法:</p>
      <p class="item_font_con">
        <textarea v-model="pro3" class="text" />
      </p>
    </div>
    <div class="item">
      <p class="item_font">初始意图:</p>
      <p class="item_font_con">
        <textarea v-model="pro3_a" class="textarea" />
      </p>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">确定</p>
      <p class="pro_bom2">下一步</p>
    </div>
  </div>
</template>
<script>
import NavarChy1 from "@/components/NavarChyJ2/NavarChyBody/NavarChy1_J2.vue";
import Guide from "@/components/Guide/index.vue";
export default {
  components: {
    NavarChy1,
    Guide,
  },
  data() {
    return {
      pro3_a: "",
      pro3: "",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.NavarchySin{
    position: relative;
  height: 26rem;
}
.item {
  display: flex;
  height: 3.4rem;
}
.item_font {
  font-size: 0.7rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0 1rem;
  width: 7rem;
}
.item_font_con {
  font-size: 0.7rem;
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
  right: 0.3rem;
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
  background-image: url("../../../../assets/img/his.png");
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
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
