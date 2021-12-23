 <template>
  <div class="enemy">
    <div class="pro4">
           <p class="zhushi">
      注释：

根据指派的任务分析每项能力，并尝试确定和说明己方策略的相对顺序及其概率。重点讨论己方的劣势。在这部分中，通过讨论有利于或不利于己方策略的因素来检验己方的能力。在适用的情况下，对每项能力的分析还应包括对与该能力有关的己方劣势的讨论，即己方特别容易受到损害、欺骗或失败的环境、条件或情况。最后，分析还应包括对可能采用该能力的任何迹象的讨论。


    </p>
      <div class="pro3_item">
        <span class="title">1、当前使用部队沿着作战区域前沿进攻</span>
        <div>
          <p class="titles">
            （1）下列因素有利于己方采取该项能力
          </p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 $store.state.CDcontestantJ3_2.CD2.CDSin3.data1
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">（2）下列因素不利于己方采取该项能力</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin3.data2
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>

        </div>

        <div>
          <p class="titles">（3）利用这一能力将使敌方的西侧受到攻击</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin3.data3
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">
            （4）除了在该地区进行的小型巡逻活动外，没有采用这种能力的迹象
          </p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                  $store.state.CDcontestantJ3_2.CD2.CDSin3.data4
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title">2、在当前位置沿着河岸线的延误</span>
        <div>
          <p class="titles">（1）在当前位置沿着河岸线____的延误</p>
        </div>
      </div>

      <div>
        <p class="titles">（2）下列因素有利于己方采取该项能力</p>
        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">1）河与山之间有几道天然屏障</p>
            <textarea
              v-model=" $store.state.CDcontestantJ3_2.CD2.CDSin3.data5"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">
              2）水域屏障的效能将会提高，以及随着季风的到来，斜坡上的通行能力将会恶化
            </p>
            <textarea
              v-model=" $store.state.CDcontestantJ3_2.CD2.CDSin3.data6"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>

      <div>
        <p class="titles">（3）在利用这一能力的过程中，己方的交通线将受到有限的公路和铁路网的限制，而公路和铁路网很容易被封锁。</p>
        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <textarea
              v-model=" $store.state.CDcontestantJ3_2.CD2.CDSin3.data7"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>
        <div>
        <p class="titles">（4）下事实表明利用了这一能力的迹象</p>
        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">1）河与山之间有几道天然屏障。</p>
            <textarea
              v-model=" $store.state.CDcontestantJ3_2.CD2.CDSin3.data8"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">
              2）已进行的大量兵力调动和沿水障的浮桥设备的预先部署
            </p>
            <textarea
              v-model=" $store.state.CDcontestantJ3_2.CD2.CDSin3.data19"
              :disabled="disabled"
              class="pro3_b1"
            />
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
.zhushi{
  color: #90c4df;
  height: 2.5rem;
  overflow: hidden;
}
.enemy {
  position: relative;
  height: 23rem;
}
.pro4 {
  height: 18.9rem;
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
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 1rem;
}

</style>
