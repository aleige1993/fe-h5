<template>
  <div id="page-drawbegin" class="luckydraw-begin">
    <div id="draw" class="luckydraw">
      <div class="title"><img  src="./img/draw-title.png" alt="" /></div>
      <div class="luckydraw-main">
        <img src="./img/draw-panel-bg.png" alt="">
        <div class="luckydraw-panel">
          <ul class="clearfix">
            <li v-for="list in drawDataList" :data-index="list.index"  :data-id="list.id">
              <div>{{list.prizeName}}</div>
            </li>
            <li >
              <span :class="{active: clicked}" v-if="this.$nativeAppUtils.getAPPDevice() && drawDataList.length" @click="drawAction" ></span>
              <span :class="{active: clicked}" v-if="!this.$nativeAppUtils.getAPPDevice() && drawDataList.length"  @click="inputPhoneNo" ></span>
              <!--<span :class="{active: drawing}" v-if="drawDataList.length" @click="drawAction" ></span>-->
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="luckydraw-rules">
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
    <selectbrowser-modal @on-close="showModal=false" :isShow="showModal"></selectbrowser-modal>
  </div>
</template>

<script>
  import './draw';
  import SelectBrowserModal from '@/components/selectbrowser-modal';
  export default {
    name: 'pageDrawBegin',
    data() {
      return {
        clicked: false,
        drawing: false,
        showModal: false,
        indexList: [1, 2, 3, 4, 5, 6, 7, 8],
        drawDataList: [],
        formData: {
          memberNo: '',
          tel: ''
        }
      };
    },
    components: {
      'selectbrowser-modal': SelectBrowserModal
    },
    methods: {
//      openApp() {
//        if (this.$Tools.isWeixinBrowser()) {
//          this.$data.showModal = true;
//        } else {
//          this.$Tools.openApp();
//        }
//      },
      inputPhoneNo() {
        if (this.$data.drawing) {
          return false;
        }
        let _this = this;
        let btnArray = ['确定', '取消'];
        mui.prompt('请输入您的手机号码', '', '', btnArray, function(e) {
          if (e.index === 0) {
            if (!e.value) {
              _this.$Tools.layerOpen('请输入您的手机号码');
              return false;
            }
            if (e.value.length !== 11) {
              _this.$Tools.layerOpen('请输入正确的手机号码');
              return false;
            }
            _this.$data.formData.tel = e.value;
            _this.$data.formData.memberNo = _this.$route.query.memberNo || '';
            _this.drawAction();
          }
        });
      },
      async drawAction() {
        if (this.$nativeAppUtils.getAPPDevice()) {
          let memberNo = this.$nativeAppUtils.getNums();
          if (!memberNo) {
            this.$nativeAppUtils.toLogin();
            return false;
          } else {
            this.$data.formData.memberNo = memberNo;
          }
        }
        if (!this.$data.drawing) {
          let _this = this;
          this.$data.clicked = true;
          setTimeout(() => {
            _this.$data.clicked = false;
          }, 400);
          this.$data.drawing = true;
          let res = await this.$http.post('/activity/doLottery', {
            ...this.$data.formData
          });
          if (res.body) {
            if (res.body.flag === '1') {
              if (!this.$nativeAppUtils.getAPPDevice()) {
                window.location.href = 'http://www.songcw.com/apk/downLoad.html';
              } else {
                let index = this.$data.drawDataList.filter(item =>  item.id === res.body.product_id)[0].index;
                $('#draw').draw({
                  length: _this.$data.drawDataList.length,
                  speed: { //抽奖转动的快慢范围
                    slow: 100,
                    fast: 50
                  },
                  loopMaxCircle: 5, // 转动圈数
                  prizeIndex: index, //奖品转到哪个单元格
                  callback: function() { // 抽到奖品的回调
                    _this.$data.drawing = false;
                    let prizeName = _this.$data.drawDataList[index - 1].prizeName;
                    if (prizeName.indexOf('谢谢') > -1) {
                      return false;
                    }
                    if (_this.$nativeAppUtils.getAPPDevice()) {
                      _this.$Tools.layerOpen(`抽中的"${prizeName}"已到你的账户`);
                    } else {
//                    let btnArray = ['好的', '取消'];
//                    mui.confirm(`抽中的"${prizeName}"已到你的账户，现在打开APP使用优惠劵？`, '', btnArray, function(e) {
//                      if (e.index === 0) {
//                        _this.openApp();
//                      }
//                    });
                    }
                  }
                });
              }
            } else {
              this.$data.drawing = false;
              this.$Tools.layerOpen(res.body.msg);
            }
          } else {
            this.$data.drawing = false;
//            this.$Tools.layerOpen('未返回flag');
          }
        }
      },
      async drawList() {
        let res = await this.$http.get('/activity/initdata?actSn=' + this.$route.query.id);
        this.$data.drawDataList = res.body.prizeDTOList;
        this.$data.drawDataList.map((item, index) => {
          item.index = this.$data.indexList[index];
          return item;
        });
      }
    },
    mounted() {
//      if (!this.$nativeAppUtils.getAPPDevice()) {
//        window.location.href = 'http://www.songcw.com/apk/downLoad.html';
//      } else {
//        this.drawList();
//      }
      this.drawList();
    }
  };
</script>

<style lang="scss" scoped="">
  @import "draw";
</style>
