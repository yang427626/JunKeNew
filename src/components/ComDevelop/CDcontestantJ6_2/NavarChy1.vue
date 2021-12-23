<template>
  <div>
    <!-- <div class="pro1">2.目的</div> -->
    <div class="pro2">
      <textarea
        v-model="$store.state.CDcontestantJ6_2.CD1.data1"
        class="target"
        show-word-limit
      />
      <p class="text">
        根据指挥官的使命任务分析、筹划指导以及其他陈述，从整体上声明司令部的使命任务。
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
.pro_con_item {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
