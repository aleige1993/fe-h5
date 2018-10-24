<template>
  <!--下拉刷新容器-->
  <div id="orderList" class="mui-content mui-scroll-wrapper">
    <div class="mui-scroll">
      <!--数据列表-->
      <div class="car-list">
        <p v-if="orderList && !orderList.length" class="no-data">暂无订单</p>
        <ul v-if="orderList && orderList.length"  @tap="toDetail(list.orderCode)" v-for="list in orderList" class="list-panl">
          <li>
            <p v-if="list.actName">
              <span class="bor-orange">{{list.actName}}</span>
            </p>
            <p v-else >
              <span class="bor-orange" v-if="list.actType === '0'">普通租车</span>
              <span class="bor-orange" v-if="list.actType === '1'">租四免一</span>
              <span class="bor-orange" v-if="list.actType === '2'">免费接送</span>
            </p>
            <p>
              <span v-if="list.orderState === '1'" class="col-blue">待接单</span>
              <span v-if="list.orderState === '2'" class="col-blue">已预约</span>
              <span v-if="list.orderState === '3'" class="col-blue">使用中</span>
              <span v-if="list.orderState === '4'" class="col-blue">已完成</span>
              <span v-if="list.orderState === '99'" class="col-gray">已取消</span>
              <img src="../../img/right.png"/>
            </p>
          </li>
          <li>
            <p class="col-999">订单编号：{{list.orderCode}}</p>
            <p class="col-999">下单时间：{{list.gmtModified}}</p>
            <p class="col-999">实付金额：￥{{list.orderPrice}}</p>
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
        orderList: null
      };
    },
    methods: {
      toDetail(orderNo) {
        this.$router.push({
          name: 'carShopLeaseOrderDetail',
          query: {
            orderNo: orderNo
          }
        });
      },
      async initData() {
        let res = await this.$http.get('/store/queryAllOrder?memberNo=' + this.$nativeAppUtils.getNums());
        this.$data.orderList = res.body;
        if (this.$data.orderList) {
          this.$data.orderList = this.$data.orderList.filter(item => item.orderState !== '0');
        }
        setTimeout(() => {
          mui('#orderList').pullRefresh().endPulldownToRefresh(); // refresh completed
        }, 400);
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      let _this = this;
      mui.init({
        pullRefresh: {
          container: '#orderList',
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

<style lang="scss" scoped>
  .bor-orange {
    color: #ffa125;
    border: 1px solid #ffa125;
  }
  .col-blue {
    color: #3984ff;
  }
  .col-gray {
    color: gray;
  }
  .col-999 {
    color: #999;
  }
  .car-list {
    padding: 0.4rem;
    .no-data {
      margin-top: 50%;
      text-align: center;
      color: gray;
    }
  }

  .list-panl {
    padding: 0.4rem;
    background-color: #fff;
    border-radius: 0.2rem;
    margin-bottom: 0.4rem;
    li {
      .col-999 {
        padding: 0 .2rem;
      }
    }
    li:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: .2rem;
      p {
        display: flex;
        align-items: center;
      }
      p:first-child {
        span:first-child {
          padding: 0 .2rem;
          border-radius: 1rem;
        }
        a {
          color: #999;
        }
      }
      p:last-child {
        img {
          margin-left: 0.2rem;
          width: 0.15rem;
        }
      }
    }
  }

</style>
