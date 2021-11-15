<template>
  <div class="enemy">
    <!-- <div class="pro1">3.使命人物</div> -->

    <div class="input1">
      <div class="pro3_item">
        <span class="title">a.兵力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （说明在作战区域内投入的敌军数量和规模，以及可供使用的敌军增援部队。地面力量、空中力量、海军力量、核生化武器、电子战、非常规战争、保障潜力以及所有其他力量都需要进行考虑。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">b.构成</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述敌军的结构和非常规组织特点，标识和武器系统。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">c.位置和部署</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述该地区敌军的地理位置，包括火力支援部队、指挥和控制设施、地面部队、空军、海军和导弹部队以及基地。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">d.支援能力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （从地面部队、空军、海军、导弹和大规模杀伤性武器等方面描述敌军的增援能力；描述地形、天气、公路和铁路网、运输、轮换、劳动力、战俘政策以及其他参与邻国可能提供的援助。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">e.调遣与活动</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">描述敌军在区域内的最新活动。）</p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">f.后勤</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            描述补给水平和重复补给能力，以及海滩、港口、公路、铁路、机场和其他基础设施支援补给和再补给的能力。考虑医疗与撤离、军事建筑、劳动力资源和作战装备的维护。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">g.发射导弹的作战能力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述该地区作战部队的总导弹能力（空中、地面和海上），包括导弹系统的特点、发射或运载装置的位置和容量、初始和可持续发射率、储存的大小和位置以及其他相关因素。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">g.飞机的可用能力和出勤率</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述按类型划分的飞机总库存量、作战飞机的性能特征、按类型划分的飞机初始架次和停机架次以及其他相关因素。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">h.作战舰艇的作战能力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述海军库存中舰船和船只的数量、类型和操作特点；基地位置；以及支持能力。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">i.装备的技术特点</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述尚未考虑的敌方其他主要装备的技术特征）。
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">j.信号情报</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述利用通信系统和非通信系统发射源收集敌方情报的能力。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">k、核生化武器能力</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            （描述敌方库存中核生化武器的类型和特点、库存数据、运载能力、核生化武器的使用政策和技术，以及其他相关因素。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">l、主要优势与劣势</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
          <p class="sub_title">
            讨论上述事实中可以得出的敌人的主要优势和劣势。）
          </p>
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">m、信息战</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
      <div class="pro3_item">
        <span class="title">n、测量和签署情报</span>
        <div class="pro3_item_item">
          <textarea v-model="pro3_a" class="pro3_b" />
        </div>
      </div>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2">下一步</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3_input: '',
      pro3_a: ''
    }
  },
  methods: {
    submitClick() {
      console.log(this.pro3_a)
    },

    nextClick() {
      this.$emit('nextClick', 4)
    },
    flxClick() {}
  }
}
</script>
<style lang="scss" scoped>
.enemy{
    position: relative;
    height: 25.5rem;
}
.input1{
    height: 20rem;
    overflow-y: scroll;
}
.pro1 {
  font-weight: bold;
  color: #90c4df;
  font-size: 1rem;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.sub_title {
  margin: 0;
  width: 90%;
  color: #90c4df;
  font-size: 0.8rem;
  // text-align: center;
}
.pro3_b1 {
  height: 1.5rem;
  width: 90%;
}
.pro3_b {
  height: 1.5rem;
  width: 90%;
  word-break: break-all;
  overflow-y: scroll;
  font-size: 0.8rem;
}
.pro3_item {
  display: flex;
  margin-top: 1rem;
  justify-content: space-around;
}
.title {
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  width: 5rem;
}
.title1 {
  font-size: 0.7rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
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
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../../assets/img/his.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
