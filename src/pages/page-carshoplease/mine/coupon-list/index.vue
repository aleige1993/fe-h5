<template>
  <!--下拉刷新容器-->
  <div id="couponList" class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">
      <!--数据列表-->
      <div class="coupon-list">
        <p v-if="couponList && !couponList.length" class="no-data">暂无优惠券</p>
        <ul v-if="couponList && couponList.length">
          <li v-for="(list, index) in couponList">
            <div  :class="'main ' + list.className">
              <span @tap="couponShare(list.couponName, list.activityNo)" class="share"></span>
              <img v-if="list.status === '1'" class="status" src="../../img/coupon-used.png" alt="">
              <img v-if="list.status === '2'" class="status" src="../../img/coupon-exchanged.png" alt="">
              <img v-if="list.status === '3'" class="status" src="../../img/coupon-timeout.png" alt="">
              <!--couponType-->
              <div v-if="list.couponType === '1'" class="title">普通券</div>
              <div v-if="list.couponType === '2'" class="title">满减券</div>
              <div v-if="list.couponType === '3'" class="title">折扣券</div>
              <div v-if="list.couponType === '4'" class="title">现金券</div>
              <div v-if="list.couponType === '5'" class="title">免费接送券</div>
              <!--couponType-->
              <div class="text">
                <p>{{list.couponName}}</p>
                <p>编号：{{list.couponNo}}</p>
                <p>有效期：{{list.gmtCreate}}至{{list.validDate}}</p>
                <p @tap="showExplain(index)">
                  <span>
                    使用说明
                    <img v-if="list.status === '0'" src="../../img/bottom-arrow-solid2.png" alt="">
                    <img v-else src="../../img/bottom-arrow-solid.png" alt="">
                  </span>
                </p>
              </div>
            </div>
            <div v-if="list.show" class="explain">
              <h1>使用说明</h1>
              <div v-html="list.useInfo.replace(/\n/g, '<br/ >')"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        couponList: null
      };
    },
    methods: {
      couponShare(couponName, activityNo) {
        let username = this.$Tools.stringAddStar(this.$nativeAppUtils.getPhoneNo());
        let title = `${username}用户获得优惠劵"${couponName}"`;
        let desc = `${username}用户邀您到店参与颂车小站开业抽奖活动`;
        let url = `${window.location.origin}/#/draw/begin?id=${activityNo}&memberNo=${this.$nativeAppUtils.getNums()}`;
        this.$nativeAppUtils.appShareLink(title, desc, url, 'http://www.songcw.com/carshopLogo.png');
      },
      showExplain(listIndex) {
        this.$data.couponList = this.$data.couponList.map((item, index) => {
          if (index === listIndex) {
            item.show = !item.show;
          } else {
            item.show = false;
          }
          return item;
        });
      },
      async initData() {
        let res = await this.$http.get('/activity/travel/list/myCoupon?memberNo=' + this.$nativeAppUtils.getNums());
        this.$data.couponList = res.body;
        if (this.$data.couponList && this.$data.couponList.length) {
          this.$data.couponList = this.$data.couponList.map((item, index) => {
            if (item.status === '0') {
              item.className = 'white';
            } else {
              item.className = 'gray';
            }
            return item;
          });
        }
        setTimeout(() => {
          mui('#couponList').pullRefresh().endPulldownToRefresh(); // refresh completed
        }, 400);
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      let _this = this;
      mui.init({
        pullRefresh: {
          container: '#couponList',
          down: {
            callback: function() {
              _this.initData();
            }
          }
        }
      });
      this.initData();
    },
    beforeDestroy() {
      // do something before destroying vue instance
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>

<style type="css" scoped>
  .coupon-list {
    margin: .4rem;
  }
  .coupon-list .no-data {
    margin-top: 50%;
    text-align: center;
    color: gray;
  }
  .coupon-list li {
    margin-bottom: .4rem;
  }
  .coupon-list .main:before {
    content: '';
    position: absolute;
    top: .2rem;
    left: .2rem;
    display: inline-block;
    width: .4rem;
    height:.4rem;
    background: #eeeeee;
    border-radius: 50%;
  }
  .coupon-list .main {
    position: relative;
    display: flex;
    align-items: center;
    padding: .5rem .4rem;
    color: #3984ff;
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
  }
  .coupon-list .main .share{
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("../../img/share.png") center no-repeat;
    background-size: 50% 50%;
  }
  .coupon-list .main.white {
    background: #fff url("../../img/wave-white.png") left bottom no-repeat;
    background-size: 100%;
  }
  .coupon-list .main.orange {
    background: #ffc939 url("../../img/wave-orange.png") left bottom no-repeat;
    background-size: 100%;
  }
  .coupon-list .main.blue {
    background: #3984ff url("../../img/wave-blue.png") left bottom no-repeat;
    background-size: 100%;
  }
  .coupon-list .main.green {
    background: #25d171 url("../../img/wave-green.png") left bottom no-repeat;
    background-size: 100%;
  }
  .coupon-list .main.gray {
    color: #fff;
    background: #bfbfbf url("../../img/wave-gray.png") left bottom no-repeat;
    background-size: 100%;
  }
  .coupon-list .main .status {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.9rem;
  }

  .coupon-list .title {
    width: 3em;
    margin-right: .4rem;
    text-align: center;
  }
  .coupon-list .text {
    padding-left: .4rem;
    border-left: 1px dashed #3984ff;
  }
  .coupon-list .gray .text {
    border-left: 1px dashed #fff;
  }
  .coupon-list .text p, .coupon-list .text img {
    vertical-align: middle;
  }
  .coupon-list .text img {
    width: .2rem;
    margin-left: .1rem;
  }
  .coupon-list .explain {
    padding: .4rem;
    background: #e5e5e5;
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
  }
  .coupon-list .text p, .coupon-list .text span, .coupon-list .explain > div {
    font-size: .35rem;
  }
  .coupon-list .explain > div {
    line-height: 1.2;
  }
</style>

