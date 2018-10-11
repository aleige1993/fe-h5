
module.exports = [
  { path: '/scbang', name: 'scBang', component: resolve => { require(['@/pages-scbang'], resolve)},
    children: [
      {
        path: 'customer', name: 'customerDetails', component: resolve => { require(['@/pages-scbang/page-employee'], resolve)},
        children: [
          { path: 'collectionInfo', name: 'collectionInfo', meta: {title: '催收信息' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/collectionInfo'], resolve)} },
          { path: 'basicInfo', name: 'basicInfo', meta: {title: '基础信息' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/basicInfo'], resolve)} },
          { path: 'financInfo', name: 'financInfo', meta: {title: '融资信息' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/financInfo'], resolve)} },
          { path: 'carInfo', name: 'carInfo', meta: {title: '车辆信息' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/carInfo'], resolve)} },
          { path: 'overdueInfo', name: 'overdueInfo', meta: {title: '逾期账单' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/overdueInfo'], resolve)} },
          { path: 'datumInfo', name: 'datumInfo', meta: {title: '融资材料' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/datumInfo'], resolve)} },
          { path: 'pdf', name: 'pdfInfo', meta: {title: 'pdf' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/pdf'], resolve)} },
          { path: 'dispatchInfo', name: 'dispatchInfo', meta: {title: '派单信息' },  component: resolve => { require(['@/pages-scbang/page-employee/customer-details/dispatchInfo'], resolve)} }
        ]
      }
    ]
  }
];
