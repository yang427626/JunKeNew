<template>
  <div>
    <!-- <div class="pro1">2.目的</div> -->
    <div class="pro2">
      <textarea
        v-model="$store.state.CDcontestant.CD5.data1"
        class="target"
        show-word-limit
      />
      <p class="text">
        从人事角度说明第一部分提出的使命任务是否可以被支撑；从人事角度说明哪个行动方案可以被最好地支撑；识别应引起指挥官注意的主要人事缺陷，并包括消除或减少这些缺陷的建议
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    progress: Number
  },
  data() {
    return {
     
    }
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 3)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.target{
  width: 100%;
  margin: 0 auto;
  height: 16rem;
}
.pro2{
   width: 98%;
  margin: 1rem auto;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  outline:none;
  overflow: auto;
}
.text_pro {
  display: inline-block;
  font-size: 0.7rem;
  width: 40%;
}


.text {
  color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto 0 auto;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.progress {
  width: 96%;
  margin: 1rem auto;
}
.box_pro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
.pro_con2 {
  display: flex;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #90c4df;
  font-size: 0.9rem;
  flex-wrap: wrap;
  justify-content: space-around;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;

}
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
