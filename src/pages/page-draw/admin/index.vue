<template>
  <div id="page-drawbegin" class="luckydraw-begin">
    <div id="draw" class="luckydraw">
      <div class="title"><img  src="./img/draw-title.png" alt="" /></div>
      <div class="luckydraw-main">
        <img src="./img/draw-panel-bg.png" alt="">
        <div class="luckydraw-panel">
          <ul class="clearfix">
            <li v-for="list in drawDataList" :data-index="list.index"  :data-id="list.id">
              <div>
                <!--{{list.id}}-->
                {{list.prizeName}}
              </div>
            </li>
            <li >
              <span ></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="luckydraw-right">
      <div class="luckydraw-right-module">
        <div class="title"><img src="./img/rules-title.png" alt=""></div>
        <div class="text">
          1.每位注册用户均有一次抽奖机会；<br />
          2.分享至朋友圈，即可获得一次抽奖机会；<br />
          3.成功邀请一位朋友注册，即可获得一次抽奖机会；<br />
          4.优惠券需到指定汽后厂家使用，不得兑换现金；<br />
          5.以上活动必须到店内进行咨询或抽奖，本店地址：重庆市渝中区罗汉沟26号附4号。<br />
          6.该活动解释权归颂车网所有<span v-if="this.$Tools.isAppleBrowser()">，与苹果公司无关</span>
        </div>
      </div>
    </div>
    <div class="luckydraw-right-module namelist">
      <div class="title"><img src="./img/namelist-title.png" alt=""></div>
      <div id="namelist" class="text">
        <div class="left">
          <ul>
            <li v-for="(list, index) in nameDataList">
              <!--({{index + 1}}) -->
              {{list.mobile}}获得{{list.prizeName}}
            </li>
          </ul>
        </div>
        <div class="right">
          <div><img :src="qrcodeUrl" alt=""></div>
          <p>扫一扫 马上抽奖</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './draw';
  import './scroll';
  export default {
    name: 'pageDrawBegin',
    data() {
      return {
        clicked: false,
        drawing: false,
        indexList: [1, 2, 3, 4, 5, 6, 7, 8],
        drawDataList: [],
        nameDataList: [],
        qrcodeUrl: ''
      };
    },
    methods: {
      drawAction(prizeIndex, mobile, prizeName) {
//        console.log(prizeIndex);
        let _this = this;
//        this.$data.clicked = true;
//        setTimeout(() => {
//          _this.$data.clicked = false;
//        }, 400);
        this.$data.drawing = true;
        $('#draw').draw({
          length: _this.$data.drawDataList.length,
          speed: { //抽奖转动的快慢范围
            slow: 100,
            fast: 50
          },
          loopMaxCircle: 5, // 转动圈数
          prizeIndex: prizeIndex, //奖品转到哪个单元格
          callback: function() { // 抽到奖品的回调
            _this.$data.drawing = false;
            _this.$data.nameDataList.push({
              mobile: _this.$Tools.stringAddStar(mobile),
              prizeName: prizeName
            });
            if (_this.$data.nameDataList.length > 5) {
              _this.$nextTick(() => {
                $('#namelist').Scroll({line: 1, speed: 1000, timer: 1000});
              });
            }
          }
        });
      },
      initSock() {
        let _this = this;
        let socket = new SockJS(_this.$config.HTTPBASEURL + '/ws');
        let stompClient = Stomp.over(socket);
        stompClient.connect({}, function() {
          stompClient.subscribe('/topic/public', function(message) {
            let body = JSON.parse(message.body);
            let index = _this.$data.drawDataList.filter(item =>  item.id === body.prizeId)[0].index;
            _this.drawAction(index, body.mobile, body.prizeName);
          });
        }, function() {
          console.log('error');
        });
      },
      async drawList() {
        let res = await this.$http.get('/activity/initdata?actSn=' + this.$route.query.id);
        this.$data.drawDataList = res.body.prizeDTOList;
        this.$data.drawDataList.map((item, index) => {
          item.index = this.$data.indexList[index];
          return item;
        });
        this.$data.qrcodeUrl = res.body.meActivityDTO.img;
        this.initSock();
//        for (var index = 0; index < 16; index ++) {
//          this.drawAction(2, '1111111', '1111111111111111111111111111111111111111111111111');
//        }
      }
    },
    async mounted() {
      let _this = this;
      $(document.body).click(function() {
        _this.$Tools.fullScreen();
      });
      $(window).resize(function() {
        $('#page-drawbegin').height(document.documentElement.clientHeight);
      });
      this.drawList();
    }
  };
</script>

<style lang="scss" scoped="">
  @import "draw";
</style>
