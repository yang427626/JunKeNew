<template>
  <div class="enemy">
    <div class="pro4">
      <p class="zhushi">
        注释：

本节将讨论这些责任区机场和海港位置的当前容量/能力以及存在的问题。确定信息来源以及当前已知的长期差距。确定并解决机场和海港问题

      </p>
      <div class="pro3_item">
        <div class="pro3_item">
          <span class="title">（1）在美国XXX司令部责任区内解决海上预置的战争储备物资和/或岸基预置的战争储备物资。解决分派的资产和用途。</span>
          <div class="pro3_a">
            <!-- <p class="sub_title">(1)</p> -->
            <div class="textarea_div">
              <textarea
                v-model="$store.state.CDcontestantJ4_2.CD4.data1"
                :disabled="disabled"
                class="pro3_bBox"
              />
  
          
            </div>
          </div>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
import { save, GetRoutePageByTaskId } from "@/api/Ha";
export default {
  data() {
    return {
      NumShow: 1,
      id: "",
      disabled: false,
    };
  },
  props: {
    confirm: String,
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 25.5rem;
}
.pro4 {
  height: 20rem;
  overflow: auto;
}
.textarea_div {
  width: 100%;
  margin-left: 1rem;
}
.sub_title_p {
  margin: 1rem 0;
  color: #90c4df;
  font-size: 0.8rem;
  width: 80%;
  // text-align: center;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 0.7rem;
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
  font-size: 0.8rem;
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
.zhushi {
  color: #90c4df;
  height: 1.5rem;
  overflow: hidden;
}
.pro3_bBox{
   height: 12rem;
  width: 80%;
  font-size: 0.8rem;
  overflow: auto;
}
</style>
