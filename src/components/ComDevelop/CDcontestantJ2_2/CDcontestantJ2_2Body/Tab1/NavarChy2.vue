<template>
  <div class="guide">
    <!--编写作战环境 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">2、敌军情况（陆、海、空、天、其他） </span>
        <div class="pro3_a">
          <p class="sub_title">（1）力量</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data1" class="pro3_b1" />
            <p class="sub_title_p">
              说明在作战区域内投入的敌军数量和规模，以及可供使用的敌军增援部队。地面力量、空中力量、海军力量、核生化武器、电子战、非常规战争、保障潜力以及所有其他力量都需要进行考虑
            </p>
          </div>
        </div>
        <div class="pro3_a">
          <p class="sub_title">（2）构成</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data2" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌军的结构和非常规组织特点，标识和武器系统
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（3）位置和部署</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data3" class="pro3_b1" />
            <p class="sub_title_p">
              描述该地区敌军的地理位置，包括火力支援部队、指挥和控制设施、地面部队、空军、海军和导弹部队以及基地。
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（4）位增强能力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data4" class="pro3_b1" />
            <p class="sub_title_p">
              从地面部队、空军、海军、导弹和大规模杀伤性武器等方面描述敌军的增援能力；描述地形、天气、公路和铁路网、运输、轮换、劳动力、战俘政策以及其他参与邻国可能提供的援助
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（5）行军和活动</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data5" class="pro3_b1" />
            <p class="sub_title_p">描述敌军在区域内的最新活动。</p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（6）后勤</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data6" class="pro3_b1" />
            <p class="sub_title_p">
              描述补给水平和重复补给能力，以及海滩、港口、公路、铁路、机场和其他基础设施支援补给和再补给的能力。考虑医疗与撤离、军事建筑、劳动力资源和作战装备的维护。
            </p>
          </div>
        </div>

        <div class="pro3_a">
          <p class="sub_title">（7）发射导弹的作战能力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data7" class="pro3_b1" />
            <p class="sub_title_p">
              描述该地区作战部队的总导弹能力（空中、地面和海上），包括导弹系统的特点、发射或运载装置的位置和容量、初始和可持续发射率、储存的大小和位置以及其他相关因素。
            </p>
          </div>
        </div>

          <div class="pro3_a">
          <p class="sub_title">（8）飞机的可用能力和出勤率</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data8" class="pro3_b1" />
            <p class="sub_title_p">
              描述按类型划分的飞机总库存量、作战飞机的性能特征、按类型划分的飞机初始架次和停机架次以及其他相关因素。
            </p>
          </div>
        </div>

          <div class="pro3_a">
          <p class="sub_title">（9）作战舰艇的作战能力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data9" class="pro3_b1" />
            <p class="sub_title_p">
              描述该地区作战部队的总导弹能力（空中、地面和海上），包括导弹系统的特点、发射或运载装置的位置和容量、初始和可持续发射率、储存的大小和位置以及其他相关因素
            </p>
          </div>
        </div>
        
            <div class="pro3_a">
          <p class="sub_title">（10）装备的技术特点</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data10" class="pro3_b1" />
            <p class="sub_title_p">
              描述尚未考虑的敌方其他主要装备的技术特征
            </p>
          </div>
        </div>
           
            <div class="pro3_a">
          <p class="sub_title">（11）信号情报</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data11" class="pro3_b1" />
            <p class="sub_title_p">
              描述利用通信系统和非通信系统发射源收集敌方情报的能力
            </p>
          </div>
        </div>
             <div class="pro3_a">
          <p class="sub_title">（12）核生化武器能力</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data12" class="pro3_b1" />
            <p class="sub_title_p">
              描述敌方库存中核生化武器的类型和特点、库存数据、运载能力、核生化武器的使用政策和技术，以及其他相关因素。
            </p>
          </div>
        </div>

          <div class="pro3_a">
          <p class="sub_title">（13）重要优缺点</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data13" class="pro3_b1" />
            <p class="sub_title_p">
              讨论上述事实中可以得出的敌人的主要优势和弱点。
            </p>
          </div>
        </div>

              <div class="pro3_a">
          <p class="sub_title">（14）信息站</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data14" class="pro3_b1" />
          
          </div>
        </div>
              <div class="pro3_a">
          <p class="sub_title">（15）测量和签署情报</p>
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin2.data15" class="pro3_b1" />
           
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
      disabled: false,
      refuse: false,
      authRight: 0,
      refuseData: "",
      tableData: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
        data8: "",
        data9: "",
      },
    };
  },
  methods: {},
};
</script>
<style scoped>
.guide {
  height: 100%;
}
.item {
  display: flex;
}
.sub_item_min {
  margin: 0.2rem 0.5rem;
  color: #90c4df;
  font-size: 0.8rem;
  width: 6rem;
}
.sub_item_div {
  width: 98%;
  margin: 0.5rem 0;
}
.sub_textarea_div {
  width: 100%;
}
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0.2rem 1rem;
  width: 7rem;
}
.item_font_con {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 0rem;
  width: 80%;
}
.textarea {
  width: 100%;
  height: 7rem;
}
.textName {
  width: 20%;
  height: 1.4rem;
}
.text {
  width: 100%;
  height: 3rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
  outline: none;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
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
.pro4 {
  height: 16rem;
  overflow-y: auto;
}
.textarea_div {
  width: 80%;
  margin-left: -2rem;
}
.sub_title_p {
  margin: 0;
  color: #90c4df;
  font-size: 0.8rem;
  width: 80%;
  /* height: 100%; */
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
.pro3_b {
  height: 1.5rem;
  width: 80%;
  font-size: 0.8rem;
  /* overflow-y: scroll; */
}
.sub_title {
  margin: 0.5rem 0;
  color: #90c4df;
  width: 10rem;
  text-align: center;
  font-size: 0.8rem;
  margin-right: 1rem;
}
.pro3_a {
  margin-left: 4rem;
  margin-top: 0.5rem;
  width: 90%;
  justify-content: flex-end;
  display: flex;
}
.pro3_item {
  margin-top: 0.5rem;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
</style>