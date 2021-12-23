import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
/* Layout */
import Layout from "@/layout";
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/login/index"),
    redirect: "/login",
    children: [
      {
        path: "/login",
        component: () => import("@/views/login/index"),
        name: "首页",
        meta: { title: "首页", icon: "dashboard", affix: true }
      }
    ]
  },

  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true
  },
  {
    path: "/Ha/monitor",
    component: Layout,
    redirect: "/Ha/monitor",
    children: [
      {
        path: "/Ha/monitor",
        component: () => import("@/views/monitor/HaMonitoring"),
        name: "Ha",
        meta: { title: "Ha", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/Commander",
    component: Layout,
    name: "启动规划",
    children: [
      {
        path: "/Commander/monitor",
        component: () => import("@/views/monitor/Commander/ComMonitoring"),
        name: "接收想定",
        meta: { title: "接收想定", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ComRecord",
        component: () => import("@/views/monitor/Commander/ComRecord"),
        name: "/Commander/ComRecord/:",
        meta: { title: "整理会议记录", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ComMessageJ2-1",
        component: () => import("@/views/monitor/Commander/ComMessageJ2"),
        name: "收集和分析友方,中立信息",
        meta: {
          title: "收集和分析友方,中立信息",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/Commander/ComMessageJ3-1",
        component: () => import("@/views/monitor/Commander/ComMessageJ3"),
        name: "收集和分析友方,中立信息",
        meta: {
          title: "收集和分析友方,中立信息",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/Commander/ComEnviron",
        component: () => import("@/views/monitor/Commander/ConEnviron"),
        name: "描述作战环境",
        meta: { title: "描述作战环境", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ConDefineIssue",
        component: () => import("@/views/monitor/Commander/ConDefineIssue"),
        name: "下发",
        meta: { title: "下发", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ConDefine",
        component: () => import("@/views/monitor/Commander/ConDefine"),
        name: "定义问题",
        meta: { title: "定义问题", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ConAction",
        component: () => import("@/views/monitor/Commander/ConAction"),
        name: "制定行动方法",
        meta: { title: "制定行动方法", icon: "dashboard", affix: true }
      },
      {
        path: "/Commander/ComGuite",
        component: () => import("@/views/monitor/Commander/ComGuite"),
        name: "形成指挥官初始化规划指南",
        meta: {
          title: "形成指挥官初始化规划指南",
          icon: "dashboard",
          affix: true
        }
      }
    ]
  },

  // p2
  {
    path: "/ComDevelop",
    component: Layout,
    children: [
      {
        path: '/ComDevelop',
        component: () => import('@/views/monitor/ComDevelop'),
        name: 'Commander',
        meta: { title: 'Commander', icon: 'dashboard', affix: true }
      },
      {
        path: "/ComDevelop/CDtactic-J2-1",
        component: () => import("@/views/monitor/ComDevelop/CDtactic/CDtactic"),
        name: "战略判断",
        meta: { title: "战略判断", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDtacticBe1",
        component: () =>
          import("@/views/monitor/ComDevelop/CDtactic/CDtacticBe1"),
        name: "对主要战略和作战挑战的评估",
        meta: {
          title: "对主要战略和作战挑战的评估",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDtacticBe2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDtactic/CDtacticBe2"),
        name: "编写潜在的机遇",
        meta: { title: "编写潜在的机遇", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDtacticBe3",
        component: () =>
          import("@/views/monitor/ComDevelop/CDtactic/CDtacticBe3"),
        name: "风险评估",
        meta: { title: "风险评估", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDRecord",
        component: () => import("@/views/monitor/ComDevelop/CDRecord"),
        name: "整理会议记录",
        meta: { title: "整理会议记录", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDguide_J0",
        component: () =>
          import("@/views/monitor/ComDevelop/CDguide/CDguide_J0.vue"),
        name: "调整战略判断和指挥官初始化规划指南",
        meta: {
          title: "调整战略判断和指挥官初始化规划指南",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDguide_J5_1",
        component: () =>
          import("@/views/monitor/ComDevelop/CDguide/CDguide_J5-1.vue"),
        name: "调整战略判断和指挥官初始化规划指南",
        meta: {
          title: "调整战略判断和指挥官初始化规划指南",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDguide_J2_1",
        component: () =>
          import("@/views/monitor/ComDevelop/CDguide/CDguide_J2_1.vue"),
        name: "调整战略判断和指挥官初始化规划指南",
        meta: {
          title: "调整战略判断和指挥官初始化规划指南",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDconfirm",
        component: () => import("@/views/monitor/ComDevelop/CDconfirm.vue"),
        name: "确定已知事实和制定规划假设",
        meta: {
          title: "确定已知事实和制定规划假设",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/Commander/ConDefineIssue",
        component: () => import("@/views/monitor/Commander/ConDefineIssue"),
        name: "下发",
        meta: { title: "下发", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDanalyse",
        component: () => import("@/views/monitor/ComDevelop/CDanalyse.vue"),
        name: "确定并分析行动限制",
        meta: { title: "确定并分析行动限制", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDcrytic",
        component: () => import("@/views/monitor/ComDevelop/CDcrytic.vue"),
        name: "确定指定、隐含和基本任务",
        meta: {
          title: "确定指定、隐含和基本任务",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDstate",
        component: () => import("@/views/monitor/ComDevelop/CDstate.vue"),
        name: "制定任务陈述",
        meta: { title: "制定任务陈述", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDinitialize",
        component: () => import("@/views/monitor/ComDevelop/CDinitialize.vue"),
        name: "初始化兵力分析",
        meta: { title: "初始化兵力分析", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDtarget",
        component: () => import("@/views/monitor/ComDevelop/CDtarget.vue"),
        name: "制定军事目标",
        meta: { title: "制定军事目标", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDassess",
        component: () => import("@/views/monitor/ComDevelop/CDassess.vue"),
        name: "制定行动方案评估标准",
        meta: { title: "制定行动方案评估标准", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDrisk",
        component: () => import("@/views/monitor/ComDevelop/CDrisk.vue"),
        name: "开展风险评估",
        meta: { title: "开展风险评估", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDdemand",
        component: () => import("@/views/monitor/ComDevelop/CDdemand.vue"),
        name: "确定初始指挥官关键信息需求",
        meta: {
          title: "确定初始指挥官关键信息需求",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDcontestantJ1_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ1_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },
      {
        path: "/ComDevelop/CDcontestantJ2_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ2_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDcontestantJ3_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ3_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDcontestantJ4_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ4_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDcontestantJ5_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ5_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDcontestantJ6_2",
        component: () =>
          import("@/views/monitor/ComDevelop/CDcontestantJ6_2.vue"),
        name: "参谋判断",
        meta: { title: "参谋判断", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_risk",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_fengxian.vue"),
        name: "准备任务分析简报-风险评估",
        meta: {
          title: "准备任务分析简报-风险评估",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_standard",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_pingu.vue"),
        name: "准备任务分析简报-评估标准",
        meta: {
          title: "准备任务分析简报-评估标准",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_conclusion",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_jielun.vue"),
        name: "准备任务分析简报-评估标准",
        meta: { title: "准备任务分析简报-结论", icon: "dashboard", affix: true }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_intelligence",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_qingbao.vue"),
        name: "准备任务分析简报-优先情报需求",
        meta: {
          title: "准备任务分析简报-优先情报需求",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_enemy",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_difang.vue"),
        name: "准备任务分析简报-敌方中立方",
        meta: {
          title: "准备任务分析简报-敌方中立方",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_message",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_xinxi.vue"),
        name: "准备任务分析简报--乙方部队信息需求",
        meta: {
          title: "准备任务分析简报-乙方部队信息需求",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_comment",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_pinglun.vue"),
        name: "准备任务分析简报-乙方评论",
        meta: {
          title: "准备任务分析简报-乙方评论",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_analyse",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_fenxi.vue"),
        name: "准备任务分析简报-任务分析情况",
        meta: {
          title: "准备任务分析简报-任务分析情况",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_state",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_chenshu.vue"),
        name: "准备任务分析简报-任务陈述",
        meta: {
          title: "准备任务分析简报-任务陈述",
          icon: "dashboard",
          affix: true
        }
      },

      {
        path: "/ComDevelop/CDbulletinJ1_intention",
        component: () =>
          import("@/views/monitor/ComDevelop/CDbulletinJ_yitu.vue"),
        name: "准备任务分析简报-指挥官意图",
        meta: {
          title: "准备任务分析简报-指挥官意图",
          icon: "dashboard",
          affix: true
        }
      },
      {
        path: "/ComDevelop/CDconvoke",
        component: () => import("@/views/monitor/ComDevelop/CDconvoke.vue"),
        name: "准备任务分析简报-指挥官意图",
        meta: {
          title: "准备任务分析简报-指挥官意图",
          icon: "dashboard",
          affix: true
        }
      }
    ]
  },

  
  {
    path: "/ComEnact",
    component: Layout,
    redirect: "/ComEnact",
    children: [
      {
        path: "/ComEnact",
        component: () => import("@/views/monitor/ComEnact"),
        name: "Commander",
        meta: { title: "Commander", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/ComAnalyse",
    component: Layout,
    redirect: "/ComAnalyse",
    children: [
      {
        path: "/ComAnalyse",
        component: () => import("@/views/monitor/ComAnalyse"),
        name: "Commander",
        meta: { title: "Commander", icon: "dashboard", affix: true }
      }
    ]
  },
  {
    path: "/ComCompare",
    component: Layout,
    redirect: "/ComCompare",
    children: [
      {
        path: "/ComCompare",
        component: () => import("@/views/monitor/ComCompare"),
        name: "Commander",
        meta: { title: "Commander", icon: "dashboard", affix: true }
      }
    ]
  },

  {
    path: "/ConRatify",
    component: Layout,

  },
  {
    path: "/ComFormulate",
    component: Layout,
    redirect: "/ComFormulate",
    children: [
      {
        path: "/ComFormulate",
        component: () => import("@/views/monitor/ComFormulate"),
        name: "Commander",
        meta: { title: "Commander", icon: "dashboard", affix: true }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
