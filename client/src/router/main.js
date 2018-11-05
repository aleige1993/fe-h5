
module.exports = [
  { path: '/', name: 'home', component: resolve => { require(['@/pages/page-home'], resolve)} },
  // 支持银行
  { path: '/supportbank', name: 'supportBank', meta: {title: '支持银行卡'}, component: resolve => { require(['@/pages/page-supportbank'], resolve)} },
  { path: '/supportbankInView', name: 'supportBank', props: {view: 'in'}, meta: {title: '支持银行卡'}, component: resolve => { require(['@/pages/page-supportbank'], resolve)} },

  // 颂车app-发现
  {path: '/discover', name: 'carDiscover', component: resolve => { require(['@/pages/page-discover/index'], resolve)}},
  // 颂车app-查看资料-静态页面
  {path: '/profileView', name: 'profileView', component: resolve => { require(['@/pages/page-profileview/index'], resolve)}},

  // 车生活
  {
    path: '/carlife', name: 'carLife', component: resolve => { require(['@/pages/page-carlife'], resolve)},
    children: [
      {path: 'index', name: 'carlifeIndex', meta: {needUserInfo: true}, component: resolve => { require(['@/pages/page-carlife/main'], resolve)}},
      {path: 'service', name: 'carlifeService', component: resolve => { require(['@/pages/page-carlife/service'], resolve)}},
      {
        path: 'mycar', name: 'carlifeMycar', component: resolve => { require(['@/pages/page-carlife/mycar'], resolve)},
        children: [
          {path: 'list', name: 'carlifeMycarList', component: resolve => { require(['@/pages/page-carlife/mycar/list'], resolve)}},
          {path: 'add', name: 'carlifeMycarAdd', component: resolve => { require(['@/pages/page-carlife/mycar/add'], resolve)}}
        ]
      }
    ]
  }
];
