// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Config
import Config from './utils/Config';
Vue.prototype.$config = Config;

// http mockjs
// import {} from './utils/HttpMock';

import Tools from './utils/Tools';
Vue.prototype.$Tools = Tools;

// http utils
import Http from './utils/HttpUtils';
Vue.prototype.$http = new Http();
import Formdata from './utils/Formdata';
Vue.prototype.$formdata = new Formdata();

// 登录工具类
// import UserLogin from '@/utils/UserLogin';
// Vue.prototype.$userLogin = UserLogin;

// 与原生相互
// import NativeAppUtils from '@/utils/NativeAppUtils';
// Vue.prototype.$nativeAppUtils = NativeAppUtils;
import Bridge from './utils/Bridge';
Bridge.initBridge();
import BridgeFun from './utils/BridgeFun';
Vue.prototype.$BridgeFun = BridgeFun;

// 预浏览图片
import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
let options = {
  fullscreenEl: false
};
Vue.use(preview, options);

// 在线浏览pdf
// import pdf from '@/pages-scbang/page-employee/customer-details/pdf';
// Vue.use(pdf);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
