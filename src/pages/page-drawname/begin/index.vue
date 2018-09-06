<template>
  <div id="page-drawbegin" class="luckydraw">
    <div id="draw" class="luckydraw-panel">
      <!--<div class="title">-->
        <!--<span></span>-->
      <!--</div>-->
      <ul class="clearfix">
        <li v-for="list in drawDataList" :data-index="list.index"  :data-id="list.id">
          <div>
            <!--<p v-if="list.giftType !== 5"><img v-if="" :src="list.imgUrl" alt=""></p>-->
            <p><span>{{list.prizeName}}</span></p>
          </div>
        </li>
      </ul>
      <input @click="drawAction" type="button" class="begin" value="点击开始"/>
    </div>
    <div v-show="showPrizeModel" id="result" class="luckydraw-result">
      <div>
        <p><img :src="prizeInfo.imgUrl"></p>
        <p>恭喜您获得<br>{{prizeInfo.name}}</p>
        <p><a class="button" @click="receivePrize"></a></p>
      </div>
      <!--<a class="close" @click="closeModel"></a>-->
    </div>
    <div v-show="showPrizeModel" class="layui-m-layershade"></div>
  </div>
</template>

<script>
  import './draw';
  export default {
    name: 'pageDrawBegin',
    data() {
      return {
//        indexList: [1, 2, 3, 4, 16, 15, 14, 5, 11, 12, 13, 6, 10, 9, 8, 7],
        drawDataList: [],
        prizeInfo: [],
        showPrizeModel: false,
        drawing: false
      };
    },
    methods: {
      async receivePrize() {
        let giftType = this.$data.prizeInfo.giftType;
        let id = this.$data.prizeInfo.id;
        if (giftType === 1 || giftType === 2 || giftType === 3) {
          this.$router.push({
            name: 'drawUserInfo',
            query: {
              id,
              giftType
            }
          });
        } else {
          let res = await this.$http.post('/communist/bis/fetchAward', {
            "uid": this.$WXAuth.getInfo().uid,
            "id": id
          });
          if (res.code === 'SUC') {
            this.$Tool.layerOpen('领取成功');
            this.$data.showPrizeModel = false;
            this.$router.push({name: 'drawBegin'});
          }
        }
      },
      drawPrizeModel() {
        let winIndex = this.$data.prizeInfo.winIndex;
        let prizeInfo = this.$data.drawDataList[winIndex];
        this.$data.prizeInfo = $.extend({}, prizeInfo, this.$data.prizeInfo);
        this.$data.showPrizeModel = true;
      },
      async drawAction() {
        if (!this.$data.drawing) {
          this.$data.drawing = true;
          let res = await this.$http.get('/emp/share/doLottery');
          if (res.success && res.success === 'true') {
            let _this = this;
            $('#draw').draw({
              length: _this.$data.drawDataList.length,
              speed: { //抽奖转动的快慢范围
                slow: 100,
                fast: 50
              },
              loopMaxCircle: 3, // 转动圈数
              prizeIndex: res.body.id, //奖品转到哪个单元格
              callback: function() { // 抽到奖品的回调
                _this.$data.drawing = false;
              }
            });
          } else {
            this.$Tools.layerOpen(res.reMsg);
          }
        }
      },
      async drawList() {
        let res = await this.$http.post('/emp/share/initdata', {});
        this.$data.drawDataList = res.body;
        this.$data.drawDataList.map((item, index) => {
          item.index = index;
          return item;
        });
      }
    },
    async mounted() {
      document.getElementById('page-drawbegin').style.height = document.documentElement.clientHeight + 'px';
      this.drawList();
    }
  };
</script>

<style lang="scss" scoped="">
  @import "draw";
</style>
