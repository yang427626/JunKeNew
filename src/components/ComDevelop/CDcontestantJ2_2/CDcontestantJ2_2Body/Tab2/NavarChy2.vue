 <template>
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <div>
          <p class="titles">1、在当前位置沿着河岸线____的延误</p>
        </div>
      </div>

      <div>
        <p class="titles">2、下列因素有利于己方采取该项能力</p>
        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">1）河与山之间有几道天然屏障</p>
            <textarea
              v-model="$store.state.CDcontestantJ2_2.CD4.CDSin2.data1"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">
              2）水域屏障的效能将会提高，以及随着季风的到来，斜坡上的通行能力将会恶化。
            </p>
            <textarea
              v-model="$store.state.CDcontestantJ2_2.CD4.CDSin2.data2"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title">3、下列因素妨碍了敌方采用这种能力</span>
        <div>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                  $store.state.CDcontestantJ2_2.CD4.CDSin2.data3
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title"
          >4 、在利用这一能力的过程中，敌人的通信线路将受到有限的公路和铁路网的限制，而公路和铁路网很容易被封锁。</span
        >
        <div>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 $store.state.CDcontestantJ2_2.CD4.CDSin2.data4
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
      </div>


       <div>
        <p class="titles">5、以下事实表明利用了这一能力的迹象</p>
        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">1）航空摄影显示在相应位置准备屏障</p>
            <textarea
              v-model="$store.state.CDcontestantJ2_2.CD4.CDSin2.data5"
              :disabled="disabled"
              class="pro3_b1"
            />
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title"></p>
          <div class="textarea_div">
            <p class="titles_sub">
              2）已发现大量的部队移动和沿水障的浮桥设备的预先部署
            </p>
            <textarea
              v-model="$store.state.CDcontestantJ2_2.CD4.CDSin2.data6"
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
.enemy {
  position: relative;
  height: 23rem;
}
.pro4 {
  height: 16.9rem;
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
   width: 80%;
   display: inline-block;
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
  background-image: url("../../../../../assets/img/his.png");
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
  background-image: url("../../../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
