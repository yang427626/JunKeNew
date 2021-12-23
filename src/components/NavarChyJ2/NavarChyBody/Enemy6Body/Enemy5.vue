// <template>
  <div class="enemy">
    <div class="pro1">
      解释：（以上部分的讨论可得出结论。如有可能，应简要说明每项能力对完成指定任务的影响。在适用的情况下，引用敌人的劣势。这一部分概述了最有可能被采用的敌方能力。如果有足够的信息，则按相对概率的顺序列出可能采取的能力。在适当的情况下，还应包括一个简明的陈述，说明每项敌方能力对完成指定任务的影响。在适用的情况下，还应列出可利用的敌方弱点。）
    </div>
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">a、相对采用概率的敌方能力</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
              v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress1"
            :disabled="disabled"
              placeholder="在现有地点利用...进行防御"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
                v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress2"
            :disabled="disabled"
              placeholder="从当前位置沿着...开始延迟"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)</p>
          <div class="textarea_div">
            <textarea
                 v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress3"
            :disabled="disabled"
              placeholder="利用...加强防御或延迟"
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(4)</p>
          <div class="textarea_div">
            <textarea
                 v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress4"
            :disabled="disabled"
              placeholder="在该地区进行非常规作战活动"
              class="pro3_b1"
            />
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">b、弱点</span>
        <div class="pro3_a">
          <p class="sub_title">(1)</p>
          <div class="textarea_div">
            <textarea
                 v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress5"
            :disabled="disabled"
              placeholder="敌方的左(西)侧翼容易被两栖攻击所包围..."
              class="pro3_b1"
            />
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)</p>
          <div class="textarea_div">
            <textarea
                  v-model="$store.state.content.CM_J2_6_progress1.CM_J2_5_progress6"
            :disabled="disabled"
              placeholder="敌方在其防御区的左(西)部分的空中搜索雷达覆盖范围很差..."
              class="pro3_b1"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">保存</p>
      <p class="pro_bom2" @click="nextClick">{{ confirm }}</p>
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
      pro3_a:"",
      disabled: false,
    };
  },
  props: {
    confirm: String,
  },
  created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        // console.log(res,'aaaaaaaaaa')
        if (res.data.content == undefined) {
        } else {
          this.$store.state.content = res.data.content;
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route() {
      this.NumShow = this.$route.query.dealStatus;
      this.id = this.$route.query.id;
    },
    NumShow() {
      if (this.NumShow == "0") {
        this.disabled = true;
      } else {
        this.disabled = false;
      }
    },
    id() {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
        } else {
          this.$store.state.content = res.data.content;
        }
      });
    },
  },
  methods: {
    nextClick() {
      this.$emit("nextClick", 6);
    },
       flxClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.$store.state.content,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 24rem;
}
.pro4 {
  height: 18.9rem;
  //   overflow-y: scroll;
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
