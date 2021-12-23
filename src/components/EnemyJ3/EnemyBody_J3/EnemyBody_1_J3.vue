<template>
  <div class="enemy">
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">a、地形</span>
        <div class="pro3_a">
          <p class="sub_title">(1)现有情况</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress1"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （描述救援和排水，植被、表面物、文化特征以及对关键地形、观测、火场、障碍物、覆盖物和隐蔽物、通道、通信线路和着陆区域有影响的其他特征。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)对敌方能力的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress2"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论地形对敌军广泛能力的影响，如攻击和防御，描述地形如何影响每种类型的活动。对大规模杀伤性武器使用的影响，对两栖、空降或空中部队的影响，对情报收集能力保障设备和系统的影响，对通信设备和系统的影响，对电子战、心理战、军事欺骗、后勤保障的影响等其他多方面的影响都应该考虑在内。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)对己方作战行动的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress3"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论地形对友军军事行动（攻击、防御等）的影响，与上一段中对敌方能力影响的分析过程相同。）
            </p>
          </div>
        </div>
      </div>

      <div class="pro3_item">
        <span class="title">b、水文</span>
        <div class="pro3_a">
          <p class="sub_title">(1)现有情况</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress4"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              描述海岸线的自然状态，邻近岛屿，登陆海滩及其引道和出口的位置、范围和容量，近海引道的自然条件，包括海底和坡度类型，自然障碍物，海面、潮汐和水流条件。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)对敌方能力的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress5"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论现有情况对敌方广泛能力的影响。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)对己方作战行动的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress6"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （讨论现有情况对友军广泛作战行动的影响。）
            </p>
          </div>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">c、气候与天气</span>
        <div class="pro3_a">
          <p class="sub_title">(1)现有情况</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress7"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （描述温度、云层、能见度、降水量、光照数据和其他气候和天气条件及其对道路、河流、土壤可通行性和观测的一般影响，以及对地面、空中和海上作战和设备的影响。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(2)对敌方能力的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress8"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （广泛讨论现有气候和天气对对敌方能力的影响。）
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">(3)对己方作战行动的影响</p>
          <div class="textarea_div">
            <textarea  v-model="$store.state.CEcontent.CE_J2_1.CE_J2_1_data_progress9"
            :disabled="disabled" class="pro3_b1" />
            <p class="sub_title_p">
              （广泛讨论现有气候和天气对友军作战行动的影响。）
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">保存</p>
          <p class="pro_bom2" @click="nextClick">下一步</p>
    </div>
  </div>
</template>
<script>
import { save, GetRoutePageByTaskId } from "@/api/Ha";
export default {
  data() {
    return {
      pro3_a: '',
       NumShow: 1,
      id: "",
      disabled: false,
    }
  },
   created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined || res.data.content == [] ) {
           
        } else {
          
          this.$store.state.CEcontent = res.data.content;
        }
      });
      this.NumShow = this.$route.query.dealStatus;
    }
  },
  watch: {
    $route() {
       this.$router.go(0);
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
          this.$store.state.CEcontent = res.data.content;
        }
      });
    },
  },
  methods: {
    nextClick() {
      this.$emit('nextClick', 2)
    },
   flxClick() {
      save(this.baseUrl,{
        taskId:this.$route.query.id,
        content:this.$store.state.CEcontent 
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.enemy {
  position: relative;
  height: 25.5rem;
}
.pro4 {
  height: 20rem;
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
   font-size: 0.8rem;
  overflow-y: scroll;
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  width: 5rem;
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
  background-image: url("../../../assets/img/his.png");
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
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
}
</style>
