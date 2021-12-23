 <template>
  <div class="enemy">
    <div class="pro4">
         <p class="zhushi">
      注释：

以上部分的讨论可得出结论。如有可能，应简要说明每项能力对完成指定任务的影响。在适用的情况下，引用己方的优势。这一部分概述了最有可能被采用的己方能力。如果有足够的信息，则按相对概率的顺序列出可能采取的能力。在适当的情况下，还应包括一个简要说明，说明每项己方能力对完成指定任务的影响。在适用的情况下，还应列出可利用的己方优势

    </p> 
      <div class="pro3_item">
        <div>
          <p class="titles">1、相对采用概率的敌方能力</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">1）在现有地点利用……进行防御</p>
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin4.data1
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>

          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">2）从当前位置沿着……开始延迟</p>
              <textarea
                v-model="
                 $store.state.CDcontestantJ3_2.CD2.CDSin4.data2
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>

          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">3）利用……加强防御或延迟</p>
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin4.data3
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>

          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">4）在该地区进行非常规作战活动</p>
              <textarea
                v-model="
                 $store.state.CDcontestantJ3_2.CD2.CDSin4.data4
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">2、弱点</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">
                1）敌方的左（西）侧翼容易被两栖攻击所包围……
              </p>
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin4.data5
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>

          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <p class="titles_sub">
                2）敌方在其防御区的左（西）部分的空中搜索雷达覆盖范围很差……
              </p>
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin4.data6
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { save, submit, GetRoutePageByTaskId, handleProcess } from "@/api/Ha";
export default {
  data() {
    return {
      NumShow: 1,
      id: "",
      pro3_a: "",
      disabled: false,
      refuse: false,
      refuseData: "",
      authRight: 0,
    };
  },
  props: {
    confirm: String,
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.zhushi {
  color: #90c4df;
  height: 2.5rem;
  overflow: hidden;
}
.enemy {
  position: relative;
  height: 23rem;
}
.pro4 {
  height: 16.6rem;
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
  width: 80%;
  height: 100%;
  padding-top: 0.4rem;
  // text-align: center;
}
.sub_title_p_p {
  margin-left: 2.5rem;
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
.titles {
  font-size: 0.8rem;
  width: 76%;
  //   text-align: center;
  font-weight: bold;
  color: #90c4df;
  margin-left: 0rem;
  padding-left: 2.4rem;
}
.titles_sub {
  font-size: 0.8rem;
  width: 76%;
  //   text-align: center;
  font-weight: bold;
  color: #90c4df;
  margin-left: 0rem;
  // padding-left: 2.4rem;
}
textarea {
  outline: none;
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.pro3_b1 {
  height: 1.5rem;
  width: 80%;
  overflow-y: scroll;
  font-size: 0.8rem;
}
.sub_title {
  margin: 0.5rem 0;
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
</style>
