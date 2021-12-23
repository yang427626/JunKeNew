 <template>
  <div class="enemy">
    <div class="task_title">进行任务分析简报会准备</div>
    <div class="item">
      <p class="item_font">文本名称:</p>
      <p class="item_font_con"><textarea v-model="content.data1" class="textName" /></p>
    </div>
    <div class="pro4">
      <div class="pro3_item">
        <div>
          <p class="titles">新的真实威胁（能力和意图）：</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 content.data2
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">对实现目标所需条件的初步想法：</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 content.data3
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">目标选择指南：</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 content.data4
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">
            关键领域中可接受或不可接受的风险等级以及可能做出权衡的
          </p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 content.data5
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="titles">联合部队指挥官设想的作战方法：</p>
          <div class="pro3_a">
            <p class="sub_title"></p>
            <div class="textarea_div">
              <textarea
                v-model="
                 content.data6
                "
                :disabled="disabled"
                class="pro3_b1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

     <div class="pro_bom">
      <p class="pro_bom1" v-show="NumShow == 1">取消</p>
      <p class="pro_bom2" @click="refuse = true" v-show="authRight == 1">
        拒绝
      </p>
      <p class="pro_bom2" v-show="NumShow == 1" @click="saveClick">保存</p>
      <p class="pro_bom2" v-show="NumShow == 1 " @click="submitClick">提交</p>
    </div>
    <!-- 退回 -->
    <el-dialog :visible.sync="refuse" title="退回原因" width="30%">
      <div class="newMessage">
        <p class="newMessage_title">请说出您的退回理由：</p>
      </div>
      <div>
        <textarea
          v-model="refuseData"
          type="textarea"
          class="textarea dial"
          :autosize="{ minRows: 4, maxRows: 4 }"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="refuse = false">取 消</el-button>
        <el-button type="primary" @click="refuse_Dialog_Clcik">确 定</el-button>
      </span>
    </el-dialog>
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
      content:{
        data1:"",
        data2:"",
        data3:"",
        data4:"",
        data5:"",
        data6:"",
      }
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
        if (res.data.content == undefined) {
        } else {
          this.content = res.data.content;
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
        this.content = res.data.content;
        }
      });
    },
  },
  methods: {
       // 拒绝
    refuse_Dialog_Clcik() {
      this.id = parseInt(this.$route.query.id);
      handleProcess(this.baseUrl, {
        reason: this.refuseData,
        status: 1,
        taskId: this.id,
      }).then((res) => {
        this.refuse = false;
      });
    },
    // 保存
    saveClick() {
      save(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.content
      }).then((res) => {
        this.$message(res.msg);
      });
    },
    submitClick() {
      submit(this.baseUrl, {
        taskId: this.$route.query.id,
        content: this.content
      }).then((res) => {
        this.$message(res.msg);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.item_font {
  font-size: 0.9rem;
  font-weight: 900;
  color: rgb(144, 196, 223);
  padding: 0.2rem 1rem;
  width: 7rem;
}
.textName {
  height: 1.5rem;
}
.item {
  display: flex;
}
.item_font_con {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(144, 196, 223);
  padding: 0 0rem;
  width: 80%;
}
.enemy {
  position: relative;
  height: 23rem;
}
.task_title {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #90c4df;
  line-height: 27px;
  background-image: url("../../../assets/img/bag.png");
  background-size: cover;
  padding: 1rem 0;
  width: 28rem;
  margin: 0 auto;
}
.pro4 {
  height: 22rem;
  overflow: auto;
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
