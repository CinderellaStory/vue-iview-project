// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { configApi } from './common/commonApi' // 引入公共接口

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(ViewUI);

/* eslint-disable no-new */
// 请求公共配置域名接口
var params = {
  'app_secret': 'BC3.342.78',
  'appid': 'BC100'
}
configApi(params)
  .then(response => {
    var data = response.data.result
    if (process.env.EVN_CONFIG === 'prod' && process.env.NODE_ENV === 'production') {
      // 正式环境
      Vue.prototype.baseConfig = data[0]
    } else if (process.env.EVN_CONFIG === 'test' && process.env.NODE_ENV === 'test') {
      // 测试环境
      Vue.prototype.baseConfig = data[1]
    } else {
      // 开发环境
      Vue.prototype.baseConfig = data[2]
    }
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  })
  .catch((error) => {
    console.log(error.result)
  })