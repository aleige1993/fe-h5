
module.exports = [
  { path: '/', name: 'home', component: resolve => { require(['@/pages/page-home'], resolve)} },
  { path: '/login', name: 'login', component: resolve => { require(['@/pages/page-login'], resolve)} },
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
  //颂车app-发现
  {
    path: '/discover', name: 'carDiscover', component: resolve => { require(['@/pages/page-discover/index'], resolve)}
  },
  //颂车app-查看资料-静态页面
  {
    path: '/profileView', name: 'profileView', component: resolve => { require(['@/pages/page-profileview/index'], resolve)}
  }

];
