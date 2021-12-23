<template>
  <div class="task_conter">
    <div class="tssk_top">
      <div class="task_titleTab">
        <p @click="taskClick">协调研讨</p>
        <p @click="taskClick1">记事本</p>
      </div>
    
      <div v-show="taskData == 2" class="task_tab">
        <div class="home">
          <div id="demo1"></div>
          <el-button class="home_size" @click="getEditorData">保存</el-button>
        </div>
      </div>
      <div v-show="taskData == 1">
        <div class="task_con">
          <p class="task_con_item">接收想定会议</p>
          <p class="task_con_item">接收想定会议</p>
        </div>
        <div class="task_foot" @click="checkClick">新建研讨</div>
        <!-- 新建研讨弹窗 -->
        <el-dialog :visible.sync="cancelData" title="新建研讨" width="40%">
          <div class="newMessage">
            <p class="newMessage_title">选择开会人员</p>
          </div>
          <div>
            <el-checkbox-group v-model="checkList" class="newMessage_title">
              <el-checkbox label="p1" />
              <el-checkbox label="p2" />
              <el-checkbox label="p3" />
            </el-checkbox-group>
          </div>
          <div class="title_table">
            <p class="title_group">群主名称</p>
            <p class="title_p">
              <el-input v-model="input" placeholder="请输入内容" />
            </p>
          </div>
          <div class="title_table">
            <p class="title_group">主持人</p>
            <p class="title_p">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </p>
          </div>
          <div class="title_table">
            <p class="title_group">议程</p>
            <p class="title_p">
              <el-input v-model="input" />
            </p>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancelData = false">取 消</el-button>
            <el-button type="primary" @click="cancelData = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>
    <div v-show="taskData == 1" class="tssk_bm">
      <div class="task_title">历史案例</div>
      <div class="task_con">
        <!-- <p class="task_con_item">案例1</p>
        <p class="task_con_item">案例2</p>
        <p class="task_con_item">案例3</p> -->

        <vue-seamless-scroll
          :data="CardPartsStatisticsList"
          class="seamless-warp"
          :class-option="classOption"
        >
          <ul>
            <li
              class="DataList_top"
              v-for="(item, index) in CardPartsStatisticsList"
              :key="index"
              @click="CardPartsStatistClick(item.id,item.fileUrl)"
            >
              <div class="task_con_item">
               <p>
                  {{ item.projectName }}
                </p>
               <p>
                  {{ item.createTime }}  
               </p>
              </div>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
      <el-dialog
        :visible.sync="history"
        width="60%"
      >
        <div>
         <iframe
        :src="this.fileUrl"
        class="iframe"
        frameborder="0"
      />
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="history = false">取 消</el-button>
          <el-button type="primary" @click="history = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { HaIistHistoryProject } from "@/api/Ha";
import { SaveManualScript } from "@/api/item";
import wangEditor from "wangeditor";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  data() {
    return {
      CardPartsStatisticsList: [],
      fileUrl:'',
      editor: null,
      editorData: "",
      history: false,
      taskData: 1,
      cancelData: false,
      pro3_a: "",
      checkList: [],
      input: "",
      value: "",
      options: [
        {
          label: "1",
          value: "1",
        },
      ],
    };
  },
  created() {
      HaIistHistoryProject(this.baseUrl).then((res) => {
        if (res.code == 0) {
          this.CardPartsStatisticsList = res.data;
        } else {
          alert("HaIistHistoryProject");
        }
      });
  },
  components: {
    //组件
    vueSeamlessScroll,
  },
  computed: {
    classOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 100, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {
    const editor = new wangEditor(`#demo1`);
    editor.config.height = 550;
    // editor.config.height = 550;
    editor.config.zIndex = 100
    // editor.config.colors = ["#000000", "#eeece0", "#1c487f", "#4d80bf"];

    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };
    editor.create();
    this.editor = editor;
  },
  methods: {
    // 历史案例点击
    CardPartsStatistClick(index,fileUrl) {
      console.log(index, "1111");
      this.fileUrl=fileUrl
      this.history = true;
    },
    getEditorData() {
      //  document.getElementsByClassName("w-e-text")[0].innerHTML='<p>1111111111111111</p ><p>@##@#@#<span style="font-size: 13.91px;">?</span><span style="font-size: 13.91px;">?</span></p >'
      // 通过代码获取编辑器内容
      
      this.$store.state.SaveManualScriptData= this.editor.txt.html();
      SaveManualScript(this.baseUrl,{
        scriptString: this.$store.state.SaveManualScriptData
      }).then(res=>{
          if(res.code==0){
            this.$message(res.msg)
          }else{
            alert('SaveManualScript')
          }
      })
    },
    beforeDestroy() {
      this.editor.destroy();
      this.editor = null;
    },
    taskClick() {
      this.taskData = 1;
    },
    taskClick1() {
      this.taskData = 2;
    },
    // 新建研讨
    checkClick() {
      this.cancelData = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.iframe {
  width: 100%;
  height: 60vh;
}
.seamless-warp {
  width: 100%;
 height: 100%;
//  background: red;
  overflow: hidden;
  ul li {
    list-style: none;
  }
  ul{
    padding: 0px !important;
  }
}
#demo1 {
  background: red;
}
.home {
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  .home_size {
    // margin: 1rem;
    position: absolute;
    bottom: 0rem;
    right: 0rem;
    z-index: 999999;
  }
  .btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
  h3 {
    margin: 30px 0 15px;
  }
}
.title_table {
  display: flex;
  color: #ffffff;
  margin-left: 1rem;
  align-items: center;
}
.iframe {
  width: 100%;
  height: 60vh;
}
.title_p {
  width: 80%;
}
.title_group {
  width: 4rem;
}
.newMessage_title {
  margin-left: 1rem;
  font-size: 0.8rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.conter {
  width: 100%;
  margin: 0 auto;
  height: 30vh;
  background: #031437;
  border: 1px solid #4156f4;
  box-shadow: 0px 6px 9px 0px #000000;
  color: #ffffff;
}
.table {
  height: 26vh;
  overflow-y: scroll;
}

.task_con {
  height: 92%;
  /* background: red; */
  overflow: hidden;
}
.his_con_item_con {
  flex: 10;
  font-size: 0.7rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  margin-left: 1rem;
}
.his_con_item_bm {
  flex: 2;
  font-size: 0.7rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.his_con_item {
  display: flex;
}
.his_title {
  font-size: 0.8rem;
  /* font-family: Source Han Sans CN; */
  font-weight: 500;
  color: #ffffff;
}
.task_conter {
  background: #031437;
  border: 1px solid #4156f4;
  height: 67vh;
}
.task_titleTab {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  display: flex;
  justify-content: center;
  line-height: 1rem;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  cursor: pointer;
  p {
    margin: 0 1rem;
  }
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 1rem;
  background-image: url("../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
}
.tssk_top {
  height: 50%;
  background: #031437;
  border: 1px solid #4156f4;
  margin-bottom: 0rem;
  position: relative;
}
.tssk_bm {
  height: 45%;
  background: #031437;
  border-top: 1px solid #4156f4;
  position: relative;
}
.task_foots {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 6rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
}
.task_foot {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
  bottom: 0.5rem;
  width: 6rem;
  height: 3rem;
  line-height: 4rem;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  color: #fff;
  padding-right: 0.8rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  background-image: url("../../assets/img/his.png");
  background-size: 100% 100%;
}
.task_con_item {
  width: 85%;
  display: flex;
  margin: 0 auto;
  justify-content:space-between;
  align-content: center;
  height: 29px;
  line-height: 29px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  font-size: 0.8rem;
  color: #8ebcec;
  padding: 0 1rem;
  background: #0f1539;
  border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  p{
    line-height: 0rem;
  }
}
.task_tab {
  height: 60vh;
  background: #0f1539;
  border-top: 1px solid #4156f4;
  position: relative;
}
textarea {
  resize: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.pro3_b {
  height: 60vh;
  background: #0f1539;
  border-top: 1px solid #4156f4;
  width: 100%;
}
/deep/.el-dialog__header {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
  /* background-size: 100% 100%; */
  border: 1px solid #4156f4;
}
/deep/.el-dialog {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png");
  background-size: 100% 100%; */
  background: #031437;
  border: 1px solid #4156f4;
}
/deep/.el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
/deep/.el-table th > .cell {
  text-align: center;
}
/deep/.el-table tr {
  background-color: #031437;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #134088;
  /* box-shadow: 0px 1px 5px 0px c; */
  /* border: 1px solid #a5c6fb; */
  color: #90c4df;
}
/deep/.el-button {
  // background: #061043;
  // border: 1px solid #4156f4;
  box-shadow: 0px 1px 5px 0px #4f9adb;
  border-radius: 2px;
  color: #90c4df;
  margin: 0.1rem 0.1rem;
}
/deep/.el-dialog__headerbtn .el-dialog__close {
  display: none;
}
/deep/.el-checkbox__label {
  color: #ffffff;
}
/deep/.el-textarea__inner {
  background: #1f295c;
  height: 17rem;
  border: 1px solid #4156f4;
}
/deep/.el-input--small {
  width: 100%;
  margin-left: 1rem;
  background: #1f295c;
  border: 1px solid #4156f4;
}
/deep/.el-input__inner {
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #90c4df;
}
/deep/.el-step__title.is-process {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__title.is-finish {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__title.is-wait {
  font-weight: 400;
  color: #4156f4;
}
/deep/.el-step__icon.is-text {
  background: #031437;
  color: #fff;
}
/deep/.el-select {
  width: 100%;
}
/deep/ .el-dialog__header {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png"); */
  /* background-size: 100% 100%; */
  border: 1px solid #4156f4;
}
/deep/ .el-dialog {
  /* background-image: url("../../assets/img/矩形 1129 拷贝.png");
  background-size: 100% 100%; */
  background: #031437;
  border: 1px solid #4156f4;
}
/deep/ .el-dialog__title {
  font-size: 0.9rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
/deep/.w-e-text {
  background: #031437;
}
/deep/ .w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  color: #90c4df;
}
/deep/ .w-e-text p, .w-e-text h1, .w-e-text h2, .w-e-text h3, .w-e-text h4, .w-e-text h5, .w-e-text table, .w-e-text pre{
  color: #90c4df;
}
</style>
