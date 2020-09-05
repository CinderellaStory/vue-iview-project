import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '管理配置',
      meta: {
        title: '管理配置',
        bgColor: 'white'
      },
      component: resolve => require(['@/components/backstageManagement'], resolve),
      children: [
        {
          path: '/managementStaffing',
          name: '管理人员配置',
          meta: {
            title: '管理人员配置',
            bgColor: 'white'
          },
          component: resolve => require(['./../views/managementStaffing'], resolve)
        },
        {
          path: '/basicInformation',
          name: '基本信息配置',
          meta: {
            title: '基本信息配置',
            bgColor: 'white'
          },
          component: resolve => require(['./../views/basicInformation'], resolve)
        }
      ],
    },
    {
      path: '/login',
      name: '登录',
      meta: {
        title: '登录',
        bgColor: 'white'
      },
      component: resolve => require(['./../views/login'], resolve)
    }
  ]
})
