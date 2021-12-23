// <template>
  <div class="enemy">
    <div class="pro1">
      解释：（根据赋予的任务分析每项能力，并尝试确定和说明敌军策略的相对顺序及其概率。讨论敌方的劣势。在这部分中，通过讨论有利于或不利于敌人策略的因素来检验敌人的能力。在适用的情况下，对每项能力的分析还应包括对与该能力有关的敌方缺点的讨论，即敌人特别容易受到损害、欺骗或失败的环境、条件或情况。最后，分析还应包括对可能采用该能力的任何迹象的讨论。例如，以下内容：）
    </div>
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">a、当前使用部队沿着作战区域前沿进攻</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress1"
            :disabled="disabled"
              placeholder="下列因素有利于敌方采取该项能力"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
               v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress2"
            :disabled="disabled"
              placeholder="该地区的地形不利于进攻"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)</p>
          <div class="textarea_div">
            <textarea
               v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress3"
            :disabled="disabled"
              placeholder="公路和铁路网将不支持大规模部队和提供进攻该地区所需的行军活动"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(4)</p>
          <div class="textarea_div">
            <textarea
               v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress4"
            :disabled="disabled"
              placeholder="利用这一能力将使敌方的西侧受到攻击"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(5)</p>
          <div class="textarea_div">
            <textarea
                v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress5"
            :disabled="disabled"
              placeholder="除了在该地区进行的小型巡逻行动外,没有采用这种能力的迹象"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title">b、在当前位置沿着河岸线{{ pro3_a }}的延误</span>
        <p class="sub_title_p_p">1、有利于敌方采用这种能力的因素有：</p>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <p class="sub_title_p">山之间有几道天然屏障：</p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
               v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress6"
            :disabled="disabled"
              placeholder="水域屏障的效能将会提高,以及随着季风的到来,斜坡上的通行能力将会恶化"
              class="pro3_b1"
            />
          </div>
        </div>
        <p class="sub_title_p_p">2、下列因素妨碍了敌方采用这种能力：</p>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress7"
            :disabled="disabled"

              class="pro3_b1"
            />
          </div>
        </div>
        <p class="sub_title_p_p">
          3、在利用这一能力的过程中，敌人的交通线将受到有限的公路和铁路网的限制，而公路和铁路网很容易被封锁。
        </p>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress8"
            :disabled="disabled"

              class="pro3_b1"
            />
          </div>
        </div>
        <p class="sub_title_p_p">4、以下事实表明利用了这一能力的迹象：</p>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress9"
            :disabled="disabled"
              placeholder="航空摄影显示在相应位置准备屏障"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
               v-model="$store.state.content.CM_J2_6_progress1.CM_J2_4_progress10"
            :disabled="disabled"
              placeholder="已发现大量的兵力调动和沿水障的浮桥设备的预先部署"
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
      pro3_a:"",
      disabled: false,
         refuse:false,
      refuseData:'',
       authRight: 0,
    }
  },
   props:{
    confirm:String
  },
  
  methods: {
    nextClick() {
      this.$emit('nextClick', 5)
    },
  
  }
}
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 23rem;
}
.pro4 {
  height: 18rem;
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
