import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = new Vuex.Store({
  state: {
    dataShow:false,//数据库弹窗
    NavarchyShow: 0,// 接收想定,
    ComAnalyse: 0, //分析方案
    NavarchyP2: 0,
    progress: 1, // 规划启动
    ComCompare: 0,//比较方案
    ConRatify: 0,//批准方案
    creare: false,
    progressDatta: [
      {
        nodeName: "规划启动"
      },
      {
        nodeName: "任务分析"
      },
      {
        nodeName: "制定方案"
      },
      {
        nodeName: "分析方案"
      },
      {
        nodeName: "比较方案"
      },
      {
        nodeName: "批准方案"
      },
      {
        nodeName: "制定方案"
      },
    ],//七大步
    creareIndex: 0,//切换 自定义流程
    // 记事本
    SaveManualScriptData: '',
    Enact: "1",//ComEnact
    // HA 编辑规划指令
    HaAaveProject: {
      adminA: "",
      adminA1: "",
      adminA2: "",
      adminA3: "",
      adminA4: "",
      adminB: "",
      adminC: "",
      adminC1: "",
      adminC2: "",
      adminD: "",
      baseConfidentialityLevel: "",
      baseFileName: "",
      baseInfomationIndex: "",
      baseProjectNo: "",
      baseReference: "",
      baseSignDepartment: "",
      baseSignLocation: "",
      baseTarget: "",
      commanderA1: "",
      commanderA2: "",
      commanderA3: "",
      commanderA4: "",
      commanderB: "",
      createTime: "",
      fileUrl: "",
      guideA1: "",
      guideA2: "",
      guideB1: "",
      guideB2: "",
      guideC1: "",
      guideC2: "",
      guideC3: "",
      guideD: "",
      guideE: "",
      guideF: "",
      id: 0,
      limitCondition: "",
      missionA: "",
      missionB: "",
      missionB1: "",
      missionB2: "",
      missionC: "",
      proposal1: "",
      proposal2: "",
      suppose: "",
      target: "",
      taskA: "",
      taskB: "",
      taskB1: "",
      taskB2: "",
      troops1: "",
      troops2: ""
    },
    // 规划启动 收集和分析友方、中立方、敌方信息
    content: {
      CM_J2_1_progress1: '',
      CM_J2_1_progress2: '',
      CM_J2_1_progress4: '',
      CM_J2_1_progress5: '',
      CM_J2_1_progress6: '',
      CM_J2_1_progress7: '',
      CM_J2_1_progress8: '',
      CM_J2_1_progress9: '',
      CM_J2_1_progress10: '',
      CM_J2_1_progress11: '',
      CM_J2_1_progress12: '',
      CM_J2_1_progress13: '',
      CM_J2_1_progress14: '',
      CM_J2_1_progress15: '',

      CM_J2_2_progress1: '',
      CM_J2_2_progress2: '',
      CM_J2_2_progress3: '',
      CM_J2_2_progress4: '',
      CM_J2_2_progress5: '',

      CM_J2_3_progress1: '',
      CM_J2_3_progress2: '',
      CM_J2_3_progress3: '',
      CM_J2_3_progress4: '',
      CM_J2_3_progress5: '',
      CM_J2_3_progress6: '',
      CM_J2_3_progress7: '',
      CM_J2_3_progress8: '',
      CM_J2_3_progress9: '',
      CM_J2_3_progress10: '',
      CM_J2_3_progress11: '',
      CM_J2_3_progress12: '',
      CM_J2_3_progress13: '',
      CM_J2_3_progress14: '',
      CM_J2_3_progress15: '',

      CM_J2_4_progress1: '',
      CM_J2_4_progress2: '',
      CM_J2_4_progress3: '',
      CM_J2_4_progress4: '',
      CM_J2_4_progress5: '',
      CM_J2_4_progress6: '',
      CM_J2_4_progress7: '',
      CM_J2_4_progress8: '',
      CM_J2_4_progress9: '',
      CM_J2_4_progress10: '',

      CM_J2_5_progress1: '',
      CM_J2_5_progress2: '',
      CM_J2_5_progress3: '',
      CM_J2_5_progress4: '',
      CM_J2_5_progress5: '',
      CM_J2_5_progress6: '',

      CM_J2_6_progress1: {
        CM_J2_1_progress1: '',
        CM_J2_1_progress2: '',
        CM_J2_1_progress4: '',
        CM_J2_1_progress5: '',
        CM_J2_1_progress6: '',
        CM_J2_1_progress7: '',
        CM_J2_1_progress8: '',
        CM_J2_1_progress9: '',
        CM_J2_1_progress10: '',
        CM_J2_1_progress11: '',
        CM_J2_1_progress12: '',
        CM_J2_1_progress13: '',
        CM_J2_1_progress14: '',
        CM_J2_1_progress15: '',

        CM_J2_3_progress1: '',
        CM_J2_3_progress2: '',
        CM_J2_3_progress3: '',
        CM_J2_3_progress4: '',
        CM_J2_3_progress5: '',
        CM_J2_3_progress6: '',
        CM_J2_3_progress7: '',
        CM_J2_3_progress8: '',
        CM_J2_3_progress9: '',
        CM_J2_3_progress10: '',
        CM_J2_3_progress11: '',
        CM_J2_3_progress12: '',
        CM_J2_3_progress13: '',
        CM_J2_3_progress14: '',
        CM_J2_3_progress15: '',

        CM_J2_4_progress1: '',
        CM_J2_4_progress2: '',
        CM_J2_4_progress3: '',
        CM_J2_4_progress4: '',
        CM_J2_4_progress5: '',
        CM_J2_4_progress6: '',
        CM_J2_4_progress7: '',
        CM_J2_4_progress8: '',
        CM_J2_4_progress9: '',
        CM_J2_4_progress10: '',

        CM_J2_5_progress1: '',
        CM_J2_5_progress2: '',
        CM_J2_5_progress3: '',
        CM_J2_5_progress4: '',
        CM_J2_5_progress5: '',
        CM_J2_5_progress6: '',
      }
    },
    // 规划启动 描述作战环境
    CEcontent: {
      CE_J2_1: {
        CE_J2_1_data_progress1: '',
        CE_J2_1_data_progress2: '',
        CE_J2_1_data_progress3: '',
        CE_J2_1_data_progress4: '',
        CE_J2_1_data_progress5: '',
        CE_J2_1_data_progress6: '',
        CE_J2_1_data_progress7: '',
        CE_J2_1_data_progress8: '',
        CE_J2_1_data_progress9: '',
      },
      CE_J2_2: {
        CE_J2_2_data_progress1: '',
        CE_J2_2_data_progress2: '',
        CE_J2_2_data_progress3: '',
      },
      CE_J2_3: {
        CE_J2_3_data_progress1: '',
        CE_J2_3_data_progress2: '',
        CE_J2_3_data_progress3: '',
      },
      CE_J2_4: {
        CE_J2_4_data_progress1: '',
        CE_J2_4_data_progress2: '',
        CE_J2_4_data_progress3: '',
      },
      CE_J2_5: {
        CE_J2_5_data_progress1: '',
        CE_J2_5_data_progress2: '',
        CE_J2_5_data_progress3: '',
      },
      CE_J2_6: {
        CE_J2_6_data_progress1: '',
        CE_J2_6_data_progress2: '',
        CE_J2_6_data_progress3: '',
      },
      CE_J2_7: {
        CE_J2_7_data_progress1: '',
        CE_J2_7_data_progress2: '',
        CE_J2_7_data_progress3: '',
      },
    },
    //p2 编制参谋判断 NavarChy15_J1-2 
    CDcontestant: {
      CD1: {
        data1: ""
      },
      CD2: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
        data8: "",
        data9: "",
        data10: "",
      },
      CD3: {
        data1: "",
        data2: "",
        data3: "",
      },
      CD4: {
        data1: "",
      },
      CD5: {
        data1: "",
      }
    },
    //p2 编制参谋判断 NavarChy15_J2-2 
    CDcontestantJ2_2: {
      CD1: {
        data1: ""
      },
      CD2: {
        CDSin1: {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
          data5: "",
          data6: "",
          data7: "",
          data8: "",
          data9: "",
          data10: "",
          data11: "",
          data12: "",
          data13: "",
          data14: "",
          data15: "",
          data16: "",
          data17: "",
          data18: "",
          data19: "",
          data20: "",
          data21: "",
          data22: "",
          data23: "",
          data24: "",
          data25: "",
          data26: "",
          data27: "",
          data28: "",
          data29: "",
          data30: "",
        },
        CDSin2: {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
          data5: "",
          data6: "",
          data7: "",
          data8: "",
          data9: "",
          data10: "",
          data11: "",
          data12: "",
          data13: "",
          data14: "",
          data15: "",
        },
        CDSin3: {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
        },
      },
      CD3: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
        data8: "",
        data9: "",
        data10: "",
        data11: "",
      },
      CD4: {
        CDSin1: {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
        },
        CDSin2: {
          data1: "",
          data2: "",
          data3: "",
          data4: "",
          data5: "",
          data6: "",
        }
      },
      CD5: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
      }
    },
    //p2 编制参谋判断 NavarChy15_J3-2 
    CDcontestantJ3_2: {
      CD1: {
        data1: "",
      },
      CD2: {
        CDSin1: {
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
        },
        CDSin2: {
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
        },
        CDSin3: {
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
        },
        CDSin4: {
          data1: '',
          data2: '',
          data3: '',
          data4: '',
          data5: '',
          data6: '',
        },
      },
    },
    //p2 编制参谋判断 NavarChy15_J4-2 
    CDcontestantJ4_2: {
      CD1: {
        data1: ""
      },
      CD2: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: ""
      }, 
      CD3: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
      },
       CD4: {
        data1: ""
      }, 
      CD5: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
      }, 
      CD6: {
        data1: "",
        data2: "",
        data3: "",
        data4: "",
        data5: "",
        data6: "",
        data7: "",
      },
    },
    //p2 编制参谋判断 NavarChy15_J5-2 
    CDcontestantJ5_2:{
      CD1:{
        data1:"",
        data2:"",
        data3:"",
        data4:"",
      },
      CD2:{
        data1:"",
        data2:"",
        data3:"",
        data4:"",
        data5:"",
      },
      CD3:{
        data1:"",
        data2:"",
      },
      CD4:{
        data1:"",
        data2:"",
      },
      CD5:{
        data1:"",
        data2:"",
        data3:"",
      },
    },
     //p2 编制参谋判断 NavarChy15_J6-2 
     CDcontestantJ6_2:{
       CD1:{
         data1:"",
       },
       CD2:{
        data1:"",
        data2:"",
        data3:"",
        data4:"",
        data5:"",
        data6:"",
        data7:"",
        data8:"",
        data9:"",
        data10:"",
        data11:"",
       },
       CD3:{
        data1:"",
        data2:"",
        data3:"",
       },
       CD4:{
        data1:"",
       },
       CD5:{
        data1:"",
        data2:"",
        data3:"",
       }
     }
  },
  modules,
  // getters,
  getters: {
    NavarchyFn(state) {
      return state.NavarchyShow
    }
  }
})

export default store
