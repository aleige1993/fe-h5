
module.exports = [
  { path: '/', name: 'home', component: resolve => { require(['@/pages/page-home'], resolve)} },

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

  // 帮助中心
  { path: '/helpcenter', name: 'helpCenter', meta: {title: '帮助中心'}, component: resolve => { require(['@/pages/page-helpcenter'], resolve)} },

  // 关于我们
  { path: '/aboutus', name: 'aboutUs', meta: {title: '关于我们'}, component: resolve => { require(['@/pages/page-aboutus'], resolve)} },

  // 颂车app-查看资料-静态页面
  {path: '/profileView', name: 'profileView', component: resolve => { require(['@/pages/page-profileview/index'], resolve)}},

  // 发现
  {path: '/discover', name: 'carDiscover', component: resolve => { require(['@/pages/page-discover/index'], resolve)}},

  // 我要买车
  {
    path: '/buycar', name: 'buyCar', component: resolve => { require(['@/pages/page-buycar'], resolve)},
    children: [
      {
        path: 'detail', name: 'buyCarDetail', component: resolve => { require(['@/pages/page-buycar/detail'], resolve)},
        children: [
          {path: 'carconf', name: 'buyCarDetailCarConf', component: resolve => { require(['@/pages/page-buycar/detail/carconf'], resolve)}},
          {path: 'buyintro', name: 'buyCarDetailBuyIntro', component: resolve => { require(['@/pages/page-buycar/detail/buyintro'], resolve)}}
        ]
      }
    ]
  },

  // 车生活
  {
    path: '/carlife', name: 'carLife', component: resolve => { require(['@/pages/page-carlife'], resolve)},
    children: [
      {path: 'index', name: 'carlifeIndex', component: resolve => { require(['@/pages/page-carlife/main'], resolve)}},
      {
        path: 'mycar', name: 'carlifeMycar', component: resolve => { require(['@/pages/page-carlife/mycar'], resolve)},
        children: [
          {path: 'list', name: 'carlifeMycarList', component: resolve => { require(['@/pages/page-carlife/mycar/list'], resolve)}},
          {path: 'add', name: 'carlifeMycarAdd', component: resolve => { require(['@/pages/page-carlife/mycar/modify'], resolve)}},
          {path: 'modify', name: 'carlifeMycarModify', component: resolve => { require(['@/pages/page-carlife/mycar/modify'], resolve)}}
        ]
      },
      {
        path: 'service', name: 'carlifeService', component: resolve => { require(['@/pages/page-carlife/service'], resolve)},
        children: [
          {path: 'list', name: 'carlifeServiceList', component: resolve => { require(['@/pages/page-carlife/service/list'], resolve)}},
          {path: 'detail', name: 'carlifeServiceDetail', component: resolve => { require(['@/pages/page-carlife/service/detail'], resolve)}}
        ]
      },
    ]
  }

];
