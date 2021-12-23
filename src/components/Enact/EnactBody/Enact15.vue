<template>
  <div class="box">
    <div class="task_title">检验每个行动方案的有效性</div>
    <div class="table_content">
      <el-tabs type="border-card">
        <el-tab-pane label="方案一">
          <div class="pane_cont">
            <div class="left_text">
              <textarea class="texta" cols="30" rows="10"></textarea>
            </div>
            <div class="right_text">
              <div class="table">
                <div class="table_title">
                  <p class="table_radioTiT">是</p>
                  <p class="table_radioTiT">否</p>
                  <p class="table_radioTis">表格(是否选中)</p>
                </div>
                <div class="table_content">
                  <div class="table_content_item">
                    <div
                      v-for="(item, index) in content.tableData"
                      :key="index"
                    >
                      <div class="table_radioTi_title">{{ item.name }}</div>
                      <div
                        v-for="(data, i) in item.conte"
                        :key="i"
                        class="group"
                      >
                        <el-radio-group v-model="data.radio">
                          <el-radio :label="3"><span></span></el-radio>
                          <el-radio :label="6"><span></span></el-radio>
                        </el-radio-group>
                        <div class="table_radioTi">{{ data.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="beizhu">
                <div>备注:</div>
                <div class="beizhu_texta">
                  <textarea class="texta" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="方案二"><div class="pane_cont">
            <div class="left_text">
              <textarea class="texta" cols="30" rows="10"></textarea>
            </div>
            <div class="right_text">
              <div class="table">
                <div class="table_title">
                  <p class="table_radioTiT">是</p>
                  <p class="table_radioTiT">否</p>
                  <p class="table_radioTis">表格(是否选中)</p>
                </div>
                <div class="table_content">
                  <div class="table_content_item">
                    <div
                      v-for="(item, index) in content.tableData"
                      :key="index"
                    >
                      <div class="table_radioTi_title">{{ item.name }}</div>
                      <div
                        v-for="(data, i) in item.conte"
                        :key="i"
                        class="group"
                      >
                        <el-radio-group v-model="data.radio">
                          <el-radio :label="3"><span></span></el-radio>
                          <el-radio :label="6"><span></span></el-radio>
                        </el-radio-group>
                        <div class="table_radioTi">{{ data.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="beizhu">
                <div>备注:</div>
                <div class="beizhu_texta">
                  <textarea class="texta" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div></el-tab-pane>
        <el-tab-pane label="方案三"><div class="pane_cont">
            <div class="left_text">
              <textarea class="texta" cols="30" rows="10"></textarea>
            </div>
            <div class="right_text">
              <div class="table">
                <div class="table_title">
                  <p class="table_radioTiT">是</p>
                  <p class="table_radioTiT">否</p>
                  <p class="table_radioTis">表格(是否选中)</p>
                </div>
                <div class="table_content">
                  <div class="table_content_item">
                    <div
                      v-for="(item, index) in content.tableData"
                      :key="index"
                    >
                      <div class="table_radioTi_title">{{ item.name }}</div>
                      <div
                        v-for="(data, i) in item.conte"
                        :key="i"
                        class="group"
                      >
                        <el-radio-group v-model="data.radio">
                          <el-radio :label="3"><span></span></el-radio>
                          <el-radio :label="6"><span></span></el-radio>
                        </el-radio-group>
                        <div class="table_radioTi">{{ data.name }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="beizhu">
                <div>备注:</div>
                <div class="beizhu_texta">
                  <textarea class="texta" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
          </div></el-tab-pane>
      </el-tabs>
    </div>

    <div class="pro_bom">
      <p class="pro_bom1">取消</p>
      <p class="pro_bom2">保存</p>
      <p class="pro_bom2">提交</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pro3: "",
      content: {
        tableData: [
          {
            name: "1、使用性",
            conte: [
              {
                yes: 1,
                no: 2,
                name: "能否完成使命",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "是否符合指挥官意图",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "能否完成所有基本任务",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "是否满足相关最终状态的条件",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "是否考虑了敌我重心",
                radio: 0,
              },
            ],
          },
          {
            name: "2、可行性",
            radio: 0,
            conte: [
              {
                yes: 1,
                no: 2,
                name: "能否在既定的时间、空间和资源限制内完成任务",
                radio: 0,
              },
            ],
          },
          {
            name: "3、可接受性",
            radio: 0,
            conte: [
              {
                yes: 1,
                no: 2,
                name: "否包含不可接受的风险",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "是否考虑对指挥官的限制（必须做的和不能做的）",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "是否符合外部限制（交战规则和法律、政策约束）",
                radio: 0,
              },
            ],
          },
          {
            name: "4、可区分性（与其他行动有明显区别）",
            radio: 0,
            conte: [
              {
                yes: 1,
                no: 2,
                name: "主要行动的重点和方向",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "机动方案",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "完任务的主要途径",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "任务编组",
                radio: 0,
              },
            ],
          },
          {
            name: "5、完整性（5W1h）",
            radio: 0,
            conte: [
              {
                yes: 1,
                no: 2,
                name: "目标、期望的创造的预期效果和要执行的任务",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "所需的主要兵力和能力",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "部署、运用和保障构想",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "实现目标的时间判断",
                radio: 0,
              },
              {
                yes: 1,
                no: 2,
                name: "军事 最终状态和任务成功标准",
                radio: 0,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    addClick() {
      let Objuct = {};
      this.tableData.push(Objuct);
    },
  },
};
</script>
<style scoped lang="scss">
.texta {
  width: 100%;
  height: 100%;
  overflow: auto;
}
::v-deep.el-radio {
  margin: 0 0.5rem;
      width: 1rem;
}
.table_title {
  display: flex;
  .table_radioTiT {
    width: 1rem;
    height: 1rem;
    font-size: 0.7rem;
    // background: red;
    margin: 0.5rem 0.5rem;
  }
  .table_radioTis {
    margin: 0.5rem 0.5rem;
    font-size: 0.7rem;
  }
}
.table_radioTi {
  margin: 0rem 0.5rem;
  width: 10rem;
  overflow: hidden;
  font-size: 0.6rem;
    height: 0.5rem;
}
.table_radioTi_title {
  margin-left: 4.8rem;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
}
.group {
  display: flex;
  height: 1rem;
  line-height: 0.5rem;
}
.left_text {
  width: 60%;
  height: 100%;
  // overflow: auto;
}
.right_text {
  width: 39%;
  height: 100%;
  // overflow: auto;
  .table {
    height: 13rem;
    overflow: auto;
  }
  .beizhu {
    height: 8.5rem;
    margin-top: 0.5rem;
    .beizhu_texta {
      height: 7.1rem;
      margin-top: 0.4rem;
    }
  }
}
textarea {
  resize: none;
  outline: none;
  background: #1f295c;
  border: 1px solid #4156f4;
  color: #4a88a8;
}
.pane_cont {
  width: 100%;
  margin: 0.5rem auto 0;
  display: flex;
  height: 22rem;
  justify-content: space-around;
}
::v-deep.el-tabs--border-card > .el-tabs__content {
  background: #1f295c;
}
::v-deep.el-tabs--border-card {
  border: 0px;
}
::v-deep.el-scrollbar__wrap {
  background: #1f295c;
}
::v-deep.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background: #1f295c;
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

.box {
  width: 90%;
  margin: 0 auto;
  font-size: 0.8rem;
  color: #90c4df;
}
</style>