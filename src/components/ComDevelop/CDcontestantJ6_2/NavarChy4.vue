<template>
  <div>
    <!-- <div class="pro1">2.目的</div> -->
    <div class="pro2">
          <p class="textTitle">
        1、从J-6的角度，对比列出每个作战行动方案的优缺点。
      </p>
      <textarea
        v-model="$store.state.CDcontestantJ6_2.CD4.data1"
        class="target"
        show-word-limit
      />
      <p class="text">
        其中，分析细节是通过考虑指挥级别、预期作战范围和需求的紧急程度来确定的。
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
  width: 98%;
  margin: 0 auto;
  height: 14rem;
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
.textTitle{
      color: #90c4df;
  width: 96%;
  font-size: 0.8rem;
  margin: 1rem auto;
}
</style>
