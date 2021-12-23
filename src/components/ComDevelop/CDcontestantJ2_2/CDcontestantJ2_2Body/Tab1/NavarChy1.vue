<template>
  <div class="guide">
    <!--编写作战环境 -->
    <div class="pro4">
      <div class="pro3_item">
        <span class="title">1、作战区域特征 </span>
        <div class="pro3_a">
          <div class="textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data1" class="pro3_b1" />
            <p class="sub_title_p">
              讨论作战区域的物理特征对敌我双方军事活动的影响。如果对作战区域的分析是单独进行的，情报判断的这一部分可以简单地引用它，然后讨论存在的客观情况对该区域军事行动的影响。
            </p>
          </div>
        </div>
        <span class="title">（a）军事地理</span>
        <div class="pro3_a">
          <div class="sub_title">（1）地形</div>
          <div class="textarea_div">
            <!-- <textarea v-model="tableData.data7" class="pro3_b1" /> -->
            <p class="pro3_b"></p>
            <div class="item sub_item_div">
              <div class="sub_item_min">1）现有情况</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data2" class="pro3_b1" />
                <p class="sub_title_p">
                  描述救援和排水，植被、表面物、文化特征以及对关键地形、观测、火场、障碍物、覆盖物和隐蔽物、通道、通信线路和着陆区域有影响的其他特征。
                </p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">2）对敌方能力的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data3" class="pro3_b1" />
                <p class="sub_title_p">
                  讨论地形对敌军广泛能力的影响，如攻击和防御，描述地形如何影响每种类型的活动。对大规模杀伤性武器使用的影响，对两栖、空降或空中部队的影响，对情报收集能力保障设备和系统的影响，对通信设备和系统的影响，对电子战、心理战、军事欺骗、后勤保障的影响等其他多方面的影响都应该考虑在内。
                </p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">3）对友军作战行动的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data4" class="pro3_b1" />
                <p class="sub_title_p">
                  讨论地形对友军军事行动（攻击、防御等）的影响，与上一段中对敌方能力影响的分析过程相同。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="pro3_a">
          <div class="sub_title">（2）水文</div>
          <div class="textarea_div">
            <!-- <textarea v-model="tableData.data7" class="pro3_b1" /> -->
            <p class="pro3_b"></p>
            <div class="item sub_item_div">
              <div class="sub_item_min">1）现有情况</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data5" class="pro3_b1" />
                <p class="sub_title_p">
                  描述海岸线的自然状态，邻近岛屿，登陆海滩及其引道和出口的位置、范围和容量，近海引道的自然条件，包括海底和坡度类型，自然障碍物，海面、潮汐和水流条件。
                </p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">2）对敌方能力的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data6" class="pro3_b1" />
                <p class="sub_title_p">讨论现有情况对敌方广泛能力的影响。</p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">3）对友军作战行动的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data7" class="pro3_b1" />
                <p class="sub_title_p">
                  讨论现有情况对友军广泛作战行动的影响。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="pro3_a">
          <div class="sub_title">（3）气候与天气</div>
          <div class="textarea_div">
            <!-- <textarea v-model="tableData.data7" class="pro3_b1" /> -->
            <p class="pro3_b"></p>
            <div class="item sub_item_div">
              <div class="sub_item_min">1）现有情况</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data8" class="pro3_b1" />
                <p class="sub_title_p">
                  描述温度、云层、能见度、降水量、光照数据和其他气候和天气条件及其对道路、河流、土壤可通行性和观测的一般影响，以及对地面、空中和海上作战和设备的影响。。
                </p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">2）对敌方能力的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data9" class="pro3_b1" />
                <p class="sub_title_p">
                  广泛讨论现有气候和天气对对敌方能力的影响
                </p>
              </div>
            </div>
            <div class="item sub_item_div">
              <div class="sub_item_min">3）对友军作战行动的影响</div>
              <div class="sub_textarea_div">
                <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data10" class="pro3_b1" />
                <p class="sub_title_p">
                  广泛讨论现有气候和天气对友军作战行动的影响。
                </p>
              </div>
            </div>
          </div>
        </div>

        <span class="title">（b）运输</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data11" class="pro3_b1" />
            <p class="sub_title_p">描述公路、铁路、内陆水路、机场和运输系统的其他物理特性，运输系统在车辆、驳船容量和码头设施等方面的能力，以及其他相关数据。</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data12" class="pro3_b1" />
            <p class="sub_title_p">讨论现有运输系统及其能力对敌方广泛能力的影响。</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data13" class="pro3_b1" />
            <p class="sub_title_p">讨论现有运输系统及其能力对友军广泛作战行动的影响。</p>
          </div>
        </div>

         <span class="title">（c）电信</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data14" class="pro3_b1" />
            <p class="sub_title_p">讨论作战区域的电信基础设施及其能力</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data15" class="pro3_b1" />
            <p class="sub_title_p">讨论现有运输系统及其能力对敌方广泛能力的影响。</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data16" class="pro3_b1" />
            <p class="sub_title_p">讨论现有运输系统及其能力对友军广泛作战行动的影响</p>
          </div>
        </div>
          <div class="pro3_a">
          <div class="sub_title">4）电磁作战空间</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data17" class="pro3_b1" />
            <p class="sub_title_p">与J-6频谱管理者讨论在邻近国家频繁使用情报平台的频率限制、东道国协议、设备限制以及作战责任范围内的干扰报告。</p>
          </div>
        </div>
          <div class="pro3_a">
          <div class="sub_title">5）讨论了电子战冲突的消除过程</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data18" class="pro3_b1" />
            <p class="sub_title_p">根据SIGINT、C3和作战需求，其将用于对受保护和禁止的频率进行识别，并产生兼容、协调的列表排序</p>
          </div>
        </div>

               <span class="title">（d）政治</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data19" class="pro3_b1" />
            <p class="sub_title_p">描述作战区域的政府组织及其运转。</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data20" class="pro3_b1" />
            <p class="sub_title_p">考虑政治情况对敌人广泛能力的影响</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data21" class="pro3_b1" />
            <p class="sub_title_p">考虑政治情况对友军广泛作战行动的影响。</p>
          </div>
        </div>

                <span class="title">（e）经济</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data22" class="pro3_b1" />
            <p class="sub_title_p">描述作战区域的政府组织及其运转。</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data23" class="pro3_b1" />
            <p class="sub_title_p">考虑经济情况对敌方广泛能力的影响。</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data24" class="pro3_b1" />
            <p class="sub_title_p">考虑经济情况对友军广泛作战行动的影响。</p>
          </div>
        </div>

                     <span class="title">（f）社会</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data25" class="pro3_b1" />
            <p class="sub_title_p">描述语、宗教、社会机构、少数民族群体、人口分布、卫生保健和其他相关因素。</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data26" class="pro3_b1" />
            <p class="sub_title_p">考虑社会情况对敌方广泛能力的影响。</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data27" class="pro3_b1" />
            <p class="sub_title_p">考虑社会情况对友军广泛作战行动的影响。</p>
          </div>
        </div>

                     <span class="title">（g）科学技术</span>
        <div class="pro3_a">
          <div class="sub_title">1）现有情况</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data28" class="pro3_b1" />
            <p class="sub_title_p">描述作战区域内的科技水平</p>
          </div>
        </div>
         <div class="pro3_a">
          <div class="sub_title">2）对敌方能力的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data29" class="pro3_b1" />
            <p class="sub_title_p">考虑科技对敌方广泛能力的影响。</p>
          </div>
        </div>
        <div class="pro3_a">
          <div class="sub_title">3）对友军作战行动的影响</div>
          <div class="sub_textarea_div">
            <textarea v-model="$store.state.CDcontestantJ2_2.CD2.CDSin1.data30" class="pro3_b1" />
            <p class="sub_title_p">考虑科技对友军广泛作战行动的影响。</p>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
 
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
  width: 100%;
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
  width: 8rem;
  text-align: center;
  font-size: 0.8rem;
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