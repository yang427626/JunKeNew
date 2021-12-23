<template>
  <div class="enemy">
    <div class="pore">
      <div class="pro1">1.己方情况</div>
      <div class="input1">
        <div class="pro1">a.己方军事情况</div>
        <div class="pro3_item">
          <span class="title">(1) 兵力</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress1"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              说明在作战区域内投入的己方数量和规模，以及可供使用的己方增援兵力。地面力量、空中力量、海军力量、核生化武器、电子战、非常规战争、保障潜力以及所有其他力量都需要进行考虑。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（2）构成</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress2"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">描述己方的结构和特点、标识和武器系统。</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（3）位置和部署</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress3"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方的地理位置，包括火力支援部队、指挥和控制设施、地面部队、空军、海军和导弹部队以及基地。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(4）增援能力</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress4"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              从地面部队、空军、海军、导弹和大规模杀伤性武器等方面描述己方的增援能力；描述地形、天气、公路和铁路网、运输、轮换、劳动力、战俘政策以及其他参与邻国可能提供的援助
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（5）调遣与活动</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress5"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">描述己方在区域内的最新活动。</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（6）后勤</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress6"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述补给水平和重复补给能力，以及海滩、港口、公路、铁路、机场和其他基础设施支援补给和再补给的能力。考虑医疗与撤离、军事建筑、劳动力资源和作战装备的维护
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（7）发射导弹的作战能力</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress7"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述该地区作战部队的总导弹能力（空中、地面和海上），包括导弹系统的特点、发射或运载装置的位置和容量、初始和可持续发射率、储存的大小和位置以及其他相关因素。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（8）飞机的可用能力和出勤率</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress8"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述按类型划分的飞机总库存量、作战飞机的性能特征、按类型划分的飞机初始架次和停机架次以及其他相关因素。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（9）作战舰艇的作战能力</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress9"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述海军库存中舰船和船只的数量、类型和操作特点；基地位置；以及支持能力。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（10）装备的技术特点</span>
          <div class="pro3_item_item">
            <textarea v-model="content.CM_J3_progress10"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">描述己方其他可用主要装备的技术特征</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(11）信号情报</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress11"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述利用通信系统和非通信系统发射源收集敌方情报的能力。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（12）核生化武器能力</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress12"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方库存中核生化武器的类型和特点、库存数据、运载能力、核生化武器的使用政策和技术，以及其他相关因素。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（13）主要优势与劣势</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress13"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              讨论上述事实中可以得出的己方主要优势和劣势。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（14）信息战</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress14"
            :disabled="disabled" class="pro3_b" />
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（15）测量和签署情报</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress15"
            :disabled="disabled" class="pro3_b" />
          </div>
        </div>
      </div>
      <div class="input1">
        <div class="pro1">b.己方对抗敌非传统战争和心理战情况</div>
        <div class="pro3_item">
          <span class="title">(1)对抗游击队</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress16"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方对抗敌方游击队和叛乱作战方面的能力、政策和现状。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(2)对抗心理战</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress17"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方对抗敌方在作战区域内进行心理战的理论、技术、方法、组织和实施情况。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(3) 对抗颠覆</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress18"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方对抗敌方在作战区域内的进行破坏的理论、技术、方法、组织和实施情况。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">（4）对抗破坏</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress19"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              描述己方对抗敌方在作战区域内组织破坏活动的可能性。
            </p>
          </div>
        </div>
      </div>
      <div class="pro1">
        2.己方能力
        <div class="pro3_item">
          <span class="title" />
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress20"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              列出每一个可能影响任务完成的己方能力。每项能力都应该包含以下信息：己方可以做什么、可以在哪里做、何时可以开始并完成任务、可以投入多少兵力来完成任务。
            </p>
          </div>
        </div>
      </div>
      <div class="input1">
        <div class="pro1">a.陆地作战能力</div>
        <div class="pro3_item">
          <span class="title">(1) </span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress21"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方可以在XX个营的炮兵支援下，用X个步兵师和X个坦克师随时进攻
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(2)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress22"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方现在可以在目前的位置进行防御，由X个坦克师和XX个中轻型火炮营支援X个步兵师。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(3)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress23"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方可以在指定的时间和地点，用下列全部或部分兵力加强进攻（或防御）。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title" />
          <!-- 表格 -->
        </div>
      </div>
      <div class="input1">
        <div class="pro1">b.空中作战能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress24"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              从现在开始，根据预估的XXX架战斗机和XXX架中型轰炸机的兵力，己方可以在作战区进行攻击。前X天每天XXX架次的战斗机出动率，随后是每天XXX架次的战斗机出动率和每天XX架次的轰炸机出动率，然后是每天XX架次的战斗机出动率。
            </p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(2)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress25"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方利用___附近的机场，拥有足够的运输架次，在X小时的飞行时间内，可将一个团运输到附近的机场。
            </p>
          </div>
        </div>
      </div>

      <div class="input1">
        <div class="pro1">c.海上作战能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress26"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              从现在开始，己方可以在整个区域内进行持续的海上和空中作战，包括X艘XX舰、X艘XX舰、X艘XX艇、X艘XX舰、一支由XX艘潜艇组成的水雷部队，以及XX艘小型船只。
            </p>
          </div>
        </div>
      </div>

      <div class="input1">
        <div class="pro1">d.太空作战能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress27"
            :disabled="disabled" class="pro3_b" />
          </div>
        </div>
      </div>

      <div class="input1">
        <div class="pro1">e.其他特殊武器能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress28"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              可用于战区作战的射频、电磁脉冲等武器其他特殊武器数量和能力。
            </p>
          </div>
        </div>
      </div>
      <div class="input1">
        <div class="pro1">f.常规作战能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress29"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方可以在作战区域内随时使用空中、大炮、火箭炮和制导导弹发射常规战争武器。
            </p>
          </div>
        </div>
      </div>
      <div class="input1">
        <div class="pro1">g.非常规作战能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress30"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方在该区域进行作战行动的XX天内可实施非常规作战，与持不同政见的民族分子和当前政府的政治对手进行对峙
            </p>
          </div>
        </div>
      </div>
      <div class="input1">
        <div class="pro1">h.联合能力</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress31"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              己方现在可以继续防御有X个步兵师的阵地，由XX个炮兵营支援，开始行动后X小时内由X个机械化师增援。己方的防御也可以通过每天XXX架次的战斗机在一段时间内提供空中支援，并通过使用X艘XX舰、X艘XX舰、X艘XX艇提供水面支援。
            </p>
          </div>
        </div>
      </div>

      <div class="pro1">
        3.己方能力分析
        <div class="pro3_item">
          <span class="title" />
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress32"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">
              根据指派的任务分析每项能力，并尝试确定和说明己方策略的相对顺序及其概率。重点讨论己方的劣势。在这部分中，通过讨论有利于或不利于己方策略的因素来检验己方的能力。在适用的情况下，对每项能力的分析还应包括对与该能力有关的己方劣势的讨论，即己方特别容易受到损害、欺骗或失败的环境、条件或情况。最后，分析还应包括对可能采用该能力的任何迹象的讨论。例如，以下内容：
            </p>
          </div>
        </div>
      </div>

      <div class="input1">
        <div class="pro1">a.当前使用部队沿着作战区域前沿进攻</div>
        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress33"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">下列因素有利于己方采取该项能力</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(2)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress34"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">下列因素不利于己方采取该项能力</p>

            <div class="pro3_item">
              <span class="title">(a)</span>
              <div class="pro3_item_item">
                <textarea  v-model="content.CM_J3_progress35"
            :disabled="disabled" class="pro3_b_b" />
                <p class="sub_title">公路和铁路网将不支持大规模部队和提供进攻该地区所需的行军活动。</p>
              </div>
            </div>
            <div class="pro3_item">
              <span class="title">(b)</span>
              <div class="pro3_item_item">
                <textarea  v-model="content.CM_J3_progress36"
            :disabled="disabled" class="pro3_b_b" />
                <p class="sub_title">该地区的地形不利于进攻。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title">(3)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress37"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">利用这一能力将使己方的X侧受到攻击。</p>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">(4)</span>
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress38"
            :disabled="disabled" class="pro3_b" />
            <p class="sub_title">除了在该地区进行的小型巡逻活动外，没有采用这种能力的迹象</p>
          </div>
        </div>

      </div>
      <div class="input1">
        <div class="pro1">b.在当前位置沿着河岸线_____的延误</div>

        <div class="pro3_item">
          <span class="title">(1)</span>
          <div class="pro3_item_item">
            <!-- <textarea v-model="pro3_a" class="pro3_b"></textarea> -->
            <p class="sub_title">下列因素不利于己方采取该项能力</p>

            <div class="pro3_item">
              <span class="title">(a)</span>
              <div class="pro3_item_item">
                <textarea  v-model="content.CM_J3_progress39"
            :disabled="disabled" placeholder="河与山之间有机几道天然屏障" class="pro3_b_b" />
                <!-- <p class="sub_title">公路和铁路网将不支持大规模部队和提供进攻该地区所需的行军活动。</p> -->
              </div>
            </div>
            <div class="pro3_item">
              <span class="title">(b)</span>
              <div class="pro3_item_item">
                <textarea  v-model="content.CM_J3_progress40"
            :disabled="disabled" class="pro3_b_b" />
                <p class="sub_title">水域屏障的效能将会提高，以及随着季风的到来，斜坡上的通行能力将会恶化。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="pro3_item">
          <span class="title">(2)</span>
          <div class="pro3_item_item">
            <p class="sub_title">下列因素妨碍了己方采用这种能力：</p>
          </div>
        </div>
        <div class="pro3_item">
          <span class="title" />
          <div class="pro3_item_item">
            <textarea  v-model="content.CM_J3_progress41"
            :disabled="disabled" class="pro3_b_b_b" />
            <!-- <p class="sub_title">水域屏障的效能将会提高，以及随着季风的到来，斜坡上的通行能力将会恶化。</p> -->
          </div>
        </div>

      </div>
    </div>
    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2" @click="flxClick">保存</p>
      <p class="pro_bom2">下一步</p>
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
      pro3:'',
      disabled: false,
      content:{
        CM_J3_progress1:'',
        CM_J3_progress2:'',
        CM_J3_progress3:'',
        CM_J3_progress4:'',
        CM_J3_progress5:'',
        CM_J3_progress6:'',
        CM_J3_progress7:'',
        CM_J3_progress8:'',
        CM_J3_progress9:'',
        CM_J3_progress10:'',
        CM_J3_progress11:'',
        CM_J3_progress12:'',
        CM_J3_progress13:'',
        CM_J3_progress14:'',
        CM_J3_progress15:'',
        CM_J3_progress16:'',
        CM_J3_progress17:'',
        CM_J3_progress18:'',
        CM_J3_progress19:'',
        CM_J3_progress20:'',
        CM_J3_progress21:'',
        CM_J3_progress22:'',
        CM_J3_progress23:'',
        CM_J3_progress24:'',
        CM_J3_progress25:'',
        CM_J3_progress26:'',
        CM_J3_progress27:'',
        CM_J3_progress28:'',
        CM_J3_progress29:'',
        CM_J3_progress30:'',
        CM_J3_progress31:'',
        CM_J3_progress32:'',
        CM_J3_progress33:'',
        CM_J3_progress34:'',
        CM_J3_progress35:'',
        CM_J3_progress36:'',
        CM_J3_progress37:'',
        CM_J3_progress38:'',
        CM_J3_progress39:'',
        CM_J3_progress40:'',
        CM_J3_progress41:'',
      }
    }
  },
   created() {
    if (this.$route.query.id == undefined) {
    } else {
      GetRoutePageByTaskId(this.baseUrl, {
        id: this.$route.query.id,
      }).then((res) => {
        if (res.data.content == undefined) {
          
        } else {
          this.content= res.data.content;
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
          this.content = res.data.content;
        }
      });
    },
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a)
    },

    flxClick() {
       save(this.baseUrl,{
        taskId:this.$route.query.id,
        content:this.content 
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.enemy {
  height: 26rem;
  margin-left: 1rem;
  position: relative;
}
.pore {
  overflow-y: scroll;
  height: 18.9rem;
}
.pro3_b_b{
  height: 1.5rem;
    width: 88%;
    font-size: 0.8rem;
    word-break: break-all;
    overflow-y: scroll;
}
.pro3_b_b_b{
    width: 88%;
    font-size: 0.8rem;
    word-break: break-all;
    overflow-y: scroll;
  height: 4rem;
}
.input1 {
  // height: 20rem;
  //   overflow-y: scroll;
  margin-left: 2rem;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 0.8rem;
  margin: 0.5rem 0;
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0;
  width: 90%;
  color: #90c4df;
  font-size: 0.8rem;
}
.pro3_b1 {
  height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
  font-size: 0.8rem;
  word-break: break-all;
  overflow-y: scroll;
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  margin-left: 2rem;
  justify-content: space-around;
}
.title {
  font-size: 0.8rem;
  // text-align: center;
  font-weight: bold;
  color: #90c4df;
  padding-right: 0.5rem;
  // width: 5rem;
}
.title1 {
  font-size: 0.8rem;
  // text-align: center;
  font-weight: bold;
  color: #90c4df;
  width: 5rem;
}
.pro3_item_item {
  // height: 3rem;
  width: 90%;
  word-break: break-all;
  // overflow-y: scroll;
}
.pro3_a1 {
  height: 3rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
}
.pro_bom {
  display: flex;
  position: absolute;
  bottom: 0.5rem;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
/deep/ .el-table tr {
  background-color: #031437;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #134088;
  /* box-shadow: 0px 1px 5px 0px c; */
  /* border: 1px solid #a5c6fb; */
  color: #90c4df;
}
/deep/ .el-button {
  background: #061043;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  color: #90c4df;
  margin: 0.1rem 0.1rem;
}
/deep/.el-table th > .cell {
  text-align: center;
}
</style>
