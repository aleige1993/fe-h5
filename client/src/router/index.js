import Vue from 'vue';
import Router from 'vue-router';
import Store from '@/store';
import Config from '@/utils/Config';
import Formdata from '@/utils/Formdata';
// import Http from '@/utils/HttpUtils';

Vue.use(Router);

const MyRouter = new Router({
  routes: [
    ...require('./main'),
    ...require('./main-v2'),
    ...require('./scbang')
  ]
});

MyRouter.beforeEach((to, from, next) => {
  // 设置title
  document.title = to.meta.title || '颂车';
  if (Config.MOCK_USERINFO) {
    new Formdata().post('/openapi/common/user/login', {
      account: '15123334187',
      password: '123456',
      code: 3
    }).then((res) => {
      if (res.success && res.success === 'true') {
        Store.dispatch('setUserInfo', res.data);
        next();
      }
    })
  } else {
    next();
  }
});

// MyRouter.afterEach((route)=>{
//   // 注册微信js-sdk
//   new Http().post(Config.HTTPBASEURL + '/h5/app/recruit/share', {
//     shareUrl: encodeURI(location.href.split("#")[0])
//   },false ).then(res => {
//     let data= res.body;
//     wx.config({
//       debug: true,
//       appId: "wxe1e4c502ecfc80aa",
//       timestamp: data.timestamp,
//       nonceStr: data.nonceStr,
//       signature: data.signature,
//       jsApiList: [
//         'checkJsApi',
//         'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone',
//         'hideMenuItems','showMenuItems','hideAllNonBaseMenuItem','showAllNonBaseMenuItem',
//         'translateVoice','startRecord','stopRecord','onVoiceRecordEnd','playVoice','onVoicePlayEnd','pauseVoice','stopVoice','uploadVoice','downloadVoice',
//         'chooseImage','previewImage','uploadImage','downloadImage',
//         'getNetworkType','openLocation','getLocation',
//         'hideOptionMenu','showOptionMenu','closeWindow','scanQRCode',
//         'chooseWXPay','openProductSpecificView',
//         'addCard','chooseCard','openCard'
//       ]
//     });
//     wx.ready(function () {
//     });
//     wx.error(function () {
//       console.error("微信分享失败!");
//     })
//   });
// });

export default MyRouter;
