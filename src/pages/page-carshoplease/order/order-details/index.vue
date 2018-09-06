
<template>
  <div id="order-details">
    <div class="details">
      <div class="detail-panl">
        <ul class="order-code">
          <li>
            <span>订单编号:{{storeOrderVO.orderCode}}</span>
            <span v-if="storeOrderVO.orderState === '1'" class="colbluc">待接单</span>
            <span v-if="storeOrderVO.orderState === '2'" class="colbluc">已预约</span>
            <span v-if="storeOrderVO.orderState === '3'" class="colbluc">使用中</span>
            <span v-if="storeOrderVO.orderState === '4'" class="colbluc">已完成</span>
            <span v-if="storeOrderVO.orderState === '99'" class="">已取消</span>
          </li>
          <li>
            <span>下单时间:{{storeOrderVO.gmtModified}}</span>
          </li>
          <em class="boxbor-left"></em>
          <em class="boxbor-right"></em>
        </ul>
        <ul class="shop-details">
          <li>
            <img src="../../img/shop.png" alt="">
            <b>{{storeVo.corpName}}</b>
          </li>
          <li>
            <span>地址：{{storeVo.bizProvinceName}}{{storeVo.bizCityName}}{{storeVo.bizDistrictName}}{{storeVo.bizRoadAddr}}</span>
          </li>
          <li>
            <span>联系电话：
              <a v-if="this.$nativeAppUtils.getAPPDevice() === 'ios'" :href="'tel:' + storeVo.telephone">{{storeVo.telephone}}</a>
              <a v-else @click="callPhone(storeVo.telephone)">{{storeVo.telephone}}</a>
            </span>
          </li>
        </ul>
      </div>
      <div class="tiem">
        预约时间：{{storeOrderVO.startTime.substring(0, 16)}} 至 {{storeOrderVO.endTime.substring(0, 16)}} <br />
        <span v-if="storeOrderVO.actType === '2'">
          出发地点：{{storeOrderVO.startPoint}} <br />
          目的地点：{{storeOrderVO.endPoint}} <br />
          出行人数：{{storeOrderVO.peopleNum}}人 <br />
        </span>
      </div>
      <div class="cer-details">
        <ul>
          <li>
            <img :src="carVo.attach" alt=""/>
            <div>
              <p>{{carVo.carsName}}</p>
              <p>￥{{carVo.unitPrice}}/{{carVo.unit}}</p>
              <!--<p>MPV | {{carVo.carPower}}自动 | 乘坐{{carVo.carSeating}}人</p>-->
            </div>
          </li>
        </ul>
        <!--<ul class="cer-info">-->
          <!--<li>车牌号：渝A56892</li>-->
          <!--<li>颜色：咖啡色</li>-->
          <!--<li>出发地：长寿区桃源西三路颂车小站</li>-->
          <!--<li>目的地：长寿区桃源西三路颂车小站</li>-->
          <!--<li>出行人数：3人</li>-->
        <!--</ul>-->
      </div>
      <div class="car-pice">
        <em class="boxbor-left"></em>
        <em class="boxbor-right"></em>
        <p>
          <span>优惠￥{{storeOrderVO.couponAmount}}</span>
          <a class="total-price">总价￥{{storeOrderVO.totalPrice}}</a>
        </p>
        <p class="order-price">
          <a>实付￥<b>{{storeOrderVO.orderPrice}}</b></a>
        </p>
      </div>
      <!--<p class="Telephone"> 如有问题请拨打官方电话：400-045-0968 </p>-->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ordedetails',
    data() {
      return {
        storeOrderVO: {
          startTime: '',
          endTime: ''
        },
        storeVo: {},
        carVo: {}
      };
    },
    methods: {
      callPhone(number) {
        this.$nativeAppUtils.callPhone(number);
      },
      async initData() {
        let res = await this.$http.get('/store/getDetail?orderNo=' + this.$route.query.orderNo);
        this.$data.couponList = res.body.couponList;
        this.$data.couponList.map((item, index) => {
          item.value = index;
          item.text = item.couponName;
          return item;
        });
        this.$data.storeOrderVO = res.body.storeOrderVO;
        this.$data.storeVo = res.body.storeVo;
        this.$data.carVo = res.body.carVo;
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      this.initData();
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>
<style lang="scss" scoped="">
    .details{
        padding: 0.4rem;
    }
    .detail-panl{
      background-color: #fff;
      border-top-left-radius:0.2rem;
      border-top-right-radius:0.2rem;
      .order-code{
        position: relative;
        em{
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          background-color: #eee;
          position: absolute;
          bottom:-0.25rem;
          border-radius: 100%;
        }
        em.boxbor-left{
          left:-0.25rem;
        }
        em.boxbor-right{
          right:-0.25rem;
        }
      }
      ul{
        padding: 0.6rem 0.4rem;
      }
      ul:first-child{
        border-bottom: 1px dashed #e5e5e5;
        li{
          display: flex;
          justify-content: space-between;
        }
        li:first-child{
          margin-bottom: 0.3rem;
          span:nth-child(2){
            color: #999;
            font-size: 0.38rem;
          }
        }
      }
      .shop-details li{
        margin-top: .2rem;
        span{
          color: #333;
        }
        a {
          text-decoration: underline;
        }
      }
      .shop-details li:first-child{
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        img{
          width:0.6rem;
        }
        b{
          color: #3785ff;
          font-size: 0.5rem;
          margin-left:0.2rem;
        }

      }
    }
    .tiem{
      background-color: #3785ff;
      color: #fff;
      font-size: 0.35rem;
      padding: 0.4rem;
      span {
        font-size: 0.35rem;
      }
    }
    .cer-details{
      background-color: #fff;
      padding: 0.4rem;
      ul:first-child{
        li{
          display: flex;
          align-items: center;
          img{
            width: 3rem;
            height: 1.8rem;
            border-radius: 0.1rem;
          }
          div{
            display: inline-block;
            margin-left: 0.2rem;
            p:first-child{
              margin-bottom:0.2rem;
            }
          }
        }
      }
      .cer-info{
        margin-top: 0.4rem;
        li{
          margin-top:0.3rem;
          color: #333;
          font-size: 0.38rem;
        }
      }
    }
    .car-pice{
      padding: 0.6rem;
      border-top:1px dashed #e5e5e5;
      background-color: #fff;
      border-bottom-left-radius:0.2rem;
      border-bottom-right-radius: 0.2rem;
      text-align: right;
      position: relative;
      .total-price {
        text-decoration: line-through;
      }
      .order-price {
        margin-top: .2rem;
        vertical-align: top;
        a, b {
          vertical-align: top;
        }
      }
      span{
        color: #999;
        font-size: 0.35rem;
        margin-right: 0.2rem;
      }
      a{
        font-size: 0.35rem;
        b{
          font-size: 0.5rem;
          color: #3785ff;
        }
      }
      em{
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        top:-0.25rem;
        border-radius: 100%;
        background-color: #eee;
        z-index: 5;
      }
      em.boxbor-right{
        right: -0.25rem;
      }
      em.boxbor-left{
        left: -0.25rem;
      }
    }
  .Telephone{
    text-align: center;
    color: #999;
    font-size: 0.38rem;
    margin-top: 1rem;
  }
  .colbluc{
    color: #3785ff !important;
  }

</style>
