import Vue from 'vue';
import Router from 'vue-router';
import Config from '@/utils/Config';
import UserLogin from '@/utils/UserLogin';
import Http from '@/utils/HttpUtils'
Vue.use(Router);

const MyRouter = new Router({
  routes: [
    { path: '/', name: 'home', component: resolve => { require(['@/pages/page-home'], resolve)} },
    { path: '/login', name: 'login', component: resolve => { require(['@/pages/page-login'], resolve)} },
    //needlogin page
    { path: '/querysmscode', name: 'querySmsCode', component: resolve => { require(['@/pages/page-querysmscode'], resolve)} },

    // 大图浏览
    { path: '/imagepreview', name: 'imagePreview', component: resolve => { require(['@/pages/page-imagepreview'], resolve)} },
    // 额度测评
    {
      path: '/creditlimlt', name: 'creditlimlt', component: resolve => { require(['@/pages/page-creditlimit'], resolve)},
      children: [
        { path: 'assessment', name: 'creditLimtAssessment', meta: {title: '测测资格'}, component: resolve => { require(['@/pages/page-creditlimit/assessment'], resolve)} },
        { path: 'result', name: 'creditlimltResult',  meta: {title: '测测资格'}, component: resolve => { require(['@/pages/page-creditlimit/result'], resolve)} }
      ]
    },
    // 帮助中心
    { path: '/helpcenter', name: 'helpCenter', meta: {title: '帮助中心'}, component: resolve => { require(['@/pages/page-helpcenter'], resolve)} },
    // 分享
    { path: '/share', name: 'share', component: resolve => { require(['@/pages/page-share'], resolve)} },
    // 协议
    {
      path: '/agreement', name: 'agreement', component: resolve => { require(['@/pages/page-agreement'], resolve)},
      children: [
        // 注册
        { path: 'register', name: 'agreementRegister', meta: {title: '注册协议'}, component: resolve => { require(['@/pages/page-agreement/register'], resolve)} },
        // 征信授权书
        { path: 'protocol', name: 'agreementProtocol', meta: {title: '征信授权协议'}, component: resolve => { require(['@/pages/page-agreement/protocol'], resolve)} },
        // 支付
        { path: 'payment', name: 'agreementPayment', meta: {title: '支付协议'}, component: resolve => { require(['@/pages/page-agreement/payment'], resolve)} }
      ]
    },
    // 支持银行
    { path: '/supportbank', name: 'supportBank', meta: {title: '支持银行卡'}, component: resolve => { require(['@/pages/page-supportbank'], resolve)} },
    { path: '/supportbankInView', name: 'supportBank', props: {view: 'in'}, meta: {title: '支持银行卡'}, component: resolve => { require(['@/pages/page-supportbank'], resolve)} },
    // 头条详情
    { path: '/newsdetail', name: 'newsDetail', component: resolve => { require(['@/pages/page-newsdetail'], resolve)} },
    // 抽奖
    {
      path: '/draw', name: 'draw', component: resolve => { require(['@/pages/page-draw'], resolve)},
      children: [
        { path: 'begin', name: 'drawBegin', meta: {title: '抽奖活动'}, component: resolve => { require(['@/pages/page-draw/begin'], resolve)}},
        { path: 'admin', name: 'drawAdmin', meta: {title: '抽奖活动'}, component: resolve => { require(['@/pages/page-draw/admin'], resolve)}}
      ]
    },
    // 抽名字
    {
      path: '/drawname', name: 'draw', component: resolve => { require(['@/pages/page-drawname'], resolve)},
      children: [
        { path: 'begin', name: 'drawBegin', component: resolve => { require(['@/pages/page-drawname/begin'], resolve)}}
      ]
    },
    // 公众号颂车小站招募
    { path: '/recruit', name: 'recruit', meta: {title: '颂车小站站主招募'}, component: resolve => { require(['@/pages/page-station/car-recruit/recruit'], resolve)} },
    { path: '/recruitTwo', name: 'recruitTwo', meta: {title: '颂车小站站主招募'}, component: resolve => { require(['@/pages/page-station/car-recruit-two/recruitTwo'], resolve)} },
    // 小站租车
    {
      path: '/carlease', name: 'carShopLease', component: resolve => { require(['@/pages/page-carshoplease'], resolve)},
      children: [
        { path: 'activity', name: 'carShopLeaseActivity', meta: {title: '活动详情'}, component: resolve => { require(['@/pages/page-carshoplease/activity'], resolve)}},
        {
          path: 'order', name: 'carShopLeaseOrder', component: resolve => { require(['@/pages/page-carshoplease/order'], resolve)},
          children: [
            { path: 'selectcar', name: 'carShopLeaseOrderCreate', meta: {title: '预约租车'}, component: resolve => { require(['@/pages/page-carshoplease/order/order-create'], resolve)}},
            { path: 'confirm', name: 'carShopLeaseOrderConfirm', meta: {title: '订单确认'}, component: resolve => { require(['@/pages/page-carshoplease/order/order-confirm'], resolve)}},
            { path: 'success', name: 'carShopLeaseOrderSuccess', meta: {title: '下单成功'}, component: resolve => { require(['@/pages/page-carshoplease/order/order-success'], resolve)}},
            { path: 'detail', name: 'carShopLeaseOrderDetail', meta: {title: '订单详情'}, component: resolve => { require(['@/pages/page-carshoplease/order/order-details'], resolve)}}
          ]
        },
        {
          path: 'mine', name: 'carShopLeaseMine', component: resolve => { require(['@/pages/page-carshoplease/mine'], resolve)},
          children: [
            { path: 'couponlist', name: 'carShopLeaseCouponList', meta: {title: '我的优惠劵'}, component: resolve => { require(['@/pages/page-carshoplease/mine/coupon-list'], resolve)}},
            { path: 'orderlist', name: 'carShopLeaseOrderList', meta: {title: '我的租车订单'}, component: resolve => { require(['@/pages/page-carshoplease/mine/order-list'], resolve)}}
          ]
        }
      ]
    },
    {
      path: '/customer', name: 'customerDetails', component: resolve => { require(['@/pages/page-employee'], resolve)},
      children: [
        { path: 'collectionInfo', name: 'collectionInfo', meta: {title: '催收信息' },  component: resolve => { require(['@/pages/page-employee/customer-details/collectionInfo'], resolve)} },
        { path: 'basicInfo', name: 'basicInfo', meta: {title: '基础信息' },  component: resolve => { require(['@/pages/page-employee/customer-details/basicInfo'], resolve)} },
        { path: 'financInfo', name: 'financInfo', meta: {title: '融资信息' },  component: resolve => { require(['@/pages/page-employee/customer-details/financInfo'], resolve)} },
        { path: 'carInfo', name: 'carInfo', meta: {title: '车辆信息' },  component: resolve => { require(['@/pages/page-employee/customer-details/carInfo'], resolve)} },
        { path: 'overdueInfo', name: 'overdueInfo', meta: {title: '逾期账单' },  component: resolve => { require(['@/pages/page-employee/customer-details/overdueInfo'], resolve)} },
        { path: 'datumInfo', name: 'datumInfo', meta: {title: '融资材料' },  component: resolve => { require(['@/pages/page-employee/customer-details/datumInfo'], resolve)} },
        { path: 'pdf', name: 'pdfInfo', meta: {title: 'pdf' },  component: resolve => { require(['@/pages/page-employee/customer-details/pdf'], resolve)} }
      ]
    }
  ]
});
const needLoginPageRouteNames = ['querySmsCode'];
MyRouter.beforeEach((to, from, next) => {
  if (Config.ENV === 'dev') {
    next();
    return;
  }
  let title = '颂车金服';
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

MyRouter.afterEach((route)=>{
  //注册微信js-sdk
  new Http().post('/h5/app/recruit/share', {
    shareUrl: encodeURI(location.href.split("#")[0])
  },false ).then(res => {
    let data= res.body;
    wx.config({
      debug: false,
      appId: "wxe1e4c502ecfc80aa",
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone',
        'hideMenuItems','showMenuItems','hideAllNonBaseMenuItem','showAllNonBaseMenuItem',
        'translateVoice','startRecord','stopRecord','onVoiceRecordEnd','playVoice','onVoicePlayEnd','pauseVoice','stopVoice','uploadVoice','downloadVoice',
        'chooseImage','previewImage','uploadImage','downloadImage',
        'getNetworkType','openLocation','getLocation',
        'hideOptionMenu','showOptionMenu','closeWindow','scanQRCode',
        'chooseWXPay','openProductSpecificView',
        'addCard','chooseCard','openCard'
      ]
    });
    wx.ready(function () {
    });
    wx.error(function () {
      console.error("微信分享失败!");
    })
  });
});


export default MyRouter;
