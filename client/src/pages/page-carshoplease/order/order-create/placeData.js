class placeList {
  getData() {
    let placeArr = [{
      text: '渝中区',
      value: '渝中区',
      children: [{
        text: '威斯汀酒店正门口',
        value: '威斯汀酒店正门口'
      }, {
        text: '上清寺中山4路求精中学门口',
        value: '上清寺中山4路求精中学门口'
      }, {
        text: '大坪时代天街A馆1号门',
        value: '大坪时代天街A馆1号门'
      }, {
        text: '菜园坝火车站下客点',
        value: '菜园坝火车站下客点'
      }]
    }, {
      text: '江北区',
      value: '江北区',
      children: [{
        text: '观音桥星光68步行街',
        value: '观音桥星光68步行街'
      }, {
        text: '北滨路君豪大酒店',
        value: '北滨路君豪大酒店'
      }, {
        text: '重庆大剧院',
        value: '重庆大剧院'
      }]
    }, {
      text: '渝北区',
      value: '渝北区',
      children: [{
        text: '重庆江北机场T3航站楼网约车接车点',
        value: '重庆江北机场T3航站楼网约车接车点'
      }, {
        text: '重庆北站南广场',
        value: '重庆北站南广场'
      }, {
        text: '新牌坊新光天地',
        value: '新牌坊新光天地'
      }, {
        text: '欢乐谷大门',
        value: '欢乐谷大门'
      }]
    }, {
      text: '九龙坡区',
      value: '九龙坡区',
      children: [{
        text: '巴国城大门',
        value: '巴国城大门'
      }, {
        text: '直港大道派出所门口',
        value: '直港大道派出所门口'
      }, {
        text: '万象城公交车站',
        value: '万象城公交车站'
      }, {
        text: '黄桷坪美术学院大门口',
        value: '黄桷坪美术学院大门口'
      }]
    }, {
      text: '沙坪坝区',
      value: '沙坪坝区',
      children: [{
        text: '三峡广场重庆宾馆门后',
        value: '三峡广场重庆宾馆门后'
      }, {
        text: '沙坪坝站出租车上下客点',
        value: '沙坪坝站出租车上下客点'
      }, {
        text: '重庆西站出发站',
        value: '重庆西站出发站'
      }, {
        text: '磁器口大门',
        value: '磁器口大门'
      }, {
        text: '白公馆停车场',
        value: '白公馆停车场'
      }]
    }, {
      text: '大渡口区',
      value: '大渡口区',
      children: [{
        text: '区政府公园门口',
        value: '区政府公园门口'
      }, {
        text: '马桑溪古镇门口',
        value: '马桑溪古镇门口'
      }, {
        text: '大渡口步行街陶瓷市场门口',
        value: '大渡口步行街陶瓷市场门口'
      }]
    }, {
      text: '南岸区',
      value: '南岸区',
      children: [{
        text: '南滨路喜来登酒店',
        value: '南滨路喜来登酒店'
      }, {
        text: '洋人街滨江路口',
        value: '洋人街滨江路口'
      }, {
        text: '南坪万达艾美酒店',
        value: '南坪万达艾美酒店'
      }]
    }, {
      text: '巴南区',
      value: '巴南区',
      children: [{
        text: '巴南万达广场公交站',
        value: '巴南万达广场公交站'
      }, {
        text: '八公里凯恩国际家具城',
        value: '八公里凯恩国际家具城'
      }, {
        text: '鱼洞人民医院',
        value: '鱼洞人民医院'
      }]
    }];
    return placeArr;
  }
}
export default new placeList();
