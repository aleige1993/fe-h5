import Mock from 'mockjs';
let ary = [
  {
    url: '/login',
    on: true,
    resp: {
      reCode: '0000',
      success: true,
      body: {
        token: 'XCSDCSXSDSDS',
        username: 'xiaoming',
        userId: 123
      },
      reMsg: 'success'
    }
  },
  // 文件上传
  {
    url: '/common/upload',
    on: true,
    resp: {
      reCode: '0000',
      success: true,
      body: {
        'fileName': '照片',
        'fileSize': 100,
        'suffix': 'jpg',
        'url': 'http://www.sinaimg.cn/qc/autoimg/car/30/34/129863430_950.jpg'
      },
      reMsg: 'success'
    }
  },
  // 地址获取
  {
    url: '/common/region/list',
    on: true,
    resp: Mock.mock({
      reCode: '0000',
      success: true,
      'body': [
        {
          regionCode: '1',
          regionName: '@province'
        },
        {
          regionCode: '2',
          regionName: '@province'
        },
        {
          regionCode: '3',
          regionName: '@province'
        }
      ]
    })
  },
  // 银行下拉
  {
    url: '/common/support/bank/list',
    on: true,
    resp: Mock.mock({
      reCode: '0000',
      success: true,
      'body|10': [
        {
          bankCode: '1',
          bankName: '@name'
        }
      ]
    })
  }
];
let result = [
  ...ary
];
export default result;
