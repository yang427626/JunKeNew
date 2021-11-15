import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* Layout */
import Layout from '@/layout'
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    redirect: '/login',
    children: [
      {
        path: '/login',
        component: () => import('@/views/login/index'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/monitor',
    component: Layout,
    redirect: '/monitor',
    children: [
      {
        path: '/monitor',
        component: () => import('@/views/monitor/monitoring'),
        name: '首页',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/datamang',
    component: Layout,
    redirect: '/datamang',
    children: [
      {
        path: 'data',
        component: () => import('@/views/datamang/index'),
        name: '数据管理',
        meta: {
          title: '数据管理',
          icon: 'lock',
          roles: ['admin']
        }
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
