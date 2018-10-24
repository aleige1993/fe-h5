import Vue from 'vue';
import Router from 'vue-router';
import Config from '@/utils/Config';
import UserLogin from '@/utils/UserLogin';
import Http from '@/utils/HttpUtils';
Vue.use(Router);

const MyRouter = new Router({
  routes: [
    ...require('./main'),
    ...require('./scbang')
  ]
});

const needLoginPageRouteNames = ['querySmsCode'];
MyRouter.beforeEach((to, from, next) => {
  if (Config.ENV === 'dev') {
    next();
    return;
  }
  let title = '颂车';
  if (to.meta.title) {
    title = to.meta.title;
  }
  document.title = title;
  // 如果要跳转的页面需要登录，验证登录
  if (needLoginPageRouteNames.includes(to.name)) {
    if (UserLogin.isLogin()) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect_url: to.name
        }
      });
    }
  } else {
    next();
  }
});

// MyRouter.afterEach((route)=>{
//   //注册微信js-sdk
//   new Http().post('/h5/app/recruit/share', {
//     shareUrl: encodeURI(location.href.split("#")[0])
//   },false ).then(res => {
//     let data= res.body;
//     wx.config({
//       debug: false,
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
