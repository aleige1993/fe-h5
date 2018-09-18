
<template>
  <div class="confirm-order">
    <div class="detail-panl">
      <ul class="shop-details">
        <li>
          <img src="../../img/shop.png">
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
      <em class="boxbor-left"></em>
      <em class="boxbor-right"></em>
    </div>
    <div class="tiem">
      预约时间：{{storeOrderVO.startTime.substring(0, 16)}} 至 {{storeOrderVO.endTime.substring(0, 16)}} <br />
      <span v-if="storeOrderVO.actType === '2'">
        出发地点：{{storeOrderVO.startPoint}} <br />
        目的地点：{{storeOrderVO.endPoint}} <br />
        出行人数：{{storeOrderVO.peopleNum}}人<br />
      </span>
    </div>
    <div class="user-info">
      <ul>
        <li>
          <p>
            <!--<img src="../../img/touxiang.png"/>-->
            姓名：{{storeOrderVO.memberName}}</p>
          <p>
            <!--<img src="../../img/phone.png" />-->
            手机号：{{storeOrderVO.memberMobile}}</p>
        </li>
      </ul>
    </div>
    <div class="car-info">
      <div class="car-one">
        <img :src="carVo.attach" alt="">
        <div class="car-title">
          <p>{{carVo.carsName}}</p>
          <p>￥{{carVo.unitPrice}}/{{carVo.unit}}</p>
          <!--<p>MPV | {{carVo.carPower}}自动 | 乘坐{{carVo.carSeating}}人</p>-->
        </div>
      </div>
      <em class="boxbor-left"></em>
      <em class="boxbor-right"></em>
    </div>
    <ul class="order-info">
      <li> <p><img src="../../img/coupon.png"/>支付方式</p> <span class="col999">到店支付</span></li>
      <li v-if="storeOrderVO.actType === '2'" class="conactiv">
        <p><img src="../../img/pay.png"/>活动优惠</p><span>免费接送</span>
      </li>
      <li v-if="storeOrderVO.actType === '1'" class="conactiv">
        <p><img src="../../img/pay.png"/>活动优惠</p><span>租4免1</span>
      </li>
      <li v-if="storeOrderVO.actType === '0'" class="conactiv">
        <p><img src="../../img/pay.png"/>优惠券</p>
        <span @click="selectCoupon" v-if="couponList && couponList.length">
          <span v-if="!formData.couponName" class="col999">请选择</span>
          <span v-else>{{formData.couponName}}</span>
          <img src="../../img/right.png"/>
        </span>
        <span v-else class="col999">暂无优惠券可用</span>
      </li>
      <li class="conpue">
        <span class="col999">优惠￥{{storeOrderVO.couponAmount}}</span>
        <span>总价￥<a>{{storeOrderVO.totalPrice}}</a></span>
      </li>
    </ul>

    <ul class="order-updeta">
      <li>
        实付：￥{{storeOrderVO.totalPrice - storeOrderVO.couponAmount}}
        <span @click="submit" v-if="!loading" class="next-button right">提交订单</span>
        <span v-else class="next-button right">loading...</span>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'carshopleaseOrderConfirm',
    data() {
      return {
        couponList: [],
        storeOrderVO: {
          startTime: '',
          endTime: ''
        },
        storeVo: {},
        carVo: {},
        formData: {
          orderCode: this.$route.query.orderNo,
          paymentType: '1',
          couponName: '',
          couponCode: '',
          couponOrderId: '',
          invoiceType: '1'
        },
        loading: false
      };
    },
    methods: {
      callPhone(number) {
        this.$nativeAppUtils.callPhone(number);
      },
      selectCoupon() {
        let _this = this;
        let picker = new mui.PopPicker();
        picker.setData(this.$data.couponList);
        picker.show(async (items) => {
          _this.$data.formData.couponCode = items[0].couponCode;
          _this.$data.formData.couponName = items[0].couponName;
          if (_this.$data.formData.couponCode) {
            _this.$data.formData.couponOrderId = items[0].id / 1;
            let res = await _this.$http.post('/store/orderDiscount', {
              ...this.$data.formData
            });
            _this.$data.storeOrderVO.couponAmount = res.body;
          } else {
            _this.$data.storeOrderVO.couponAmount = '0.00';
          }
        });
      },
      async submit() {
        this.$data.loading = true;
        let res = await this.$http.post('/store/submitOrder', this.$data.formData);
        this.$data.loading = false;
        if (res.success && res.success === 'true') {
          this.$router.push({
            name: 'carShopLeaseOrderSuccess',
            query: {
              orderNo: this.$data.formData.orderCode
            }
          });
        } else {
          this.$Tools.layerOpen(res.reMsg);
        }
      },
      async initData() {
        let res = await this.$http.get('/store/getDetail?orderNo=' + this.$data.formData.orderCode);
        this.$data.couponList = res.body.couponList;
        if (this.$data.couponList && this.$data.couponList.length) {
          this.$data.couponList = [{
            couponName: '不使用优惠劵',
            couponCode: null
          }].concat(this.$data.couponList);
        }
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

<style lang="scss" scoped>
  @import "style";
</style>


