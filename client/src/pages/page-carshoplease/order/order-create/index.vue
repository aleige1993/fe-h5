<template>
  <div class="create-order">
    <ul class="selectcar-type">
      <li @click="selectActivity(list.type, list.saleSn, list.saleName)" v-for="(list, index) in activityList"
          :class="{active:list.active}">{{list.saleName}}
      </li>
    </ul>
    <div class="create-order-inview first">
      <h1 @click="selectType('shopInfo', 'shopList')">{{shopInfo.corpName || '--'}}<img
        src="../../img/bottom-arrow-solid2.png"></h1>
      <h2>
        地址：{{shopInfo.bizProvinceName || '--'}}{{shopInfo.bizCityName}}{{shopInfo.bizDistrictName}}{{shopInfo.bizRoadAddr}}</h2>
      <h2>联系电话：
        <a v-if="this.$nativeAppUtils.getAPPDevice() === 'ios'" :href="'tel:' + shopInfo.telephone">{{shopInfo.telephone}}</a>
        <a @click="callPhone(shopInfo.telephone)" v-else>{{shopInfo.telephone}}</a>
      </h2>
    </div>
    <ul v-if="formData.actType === '2'" class="create-order-inview select-place">
      <li><img src="../../img/address.png" alt=""><span>出发地点</span><input @click="selectPlace()" readonly
                                                                          placeholder="请选择"
                                                                          v-model="formData.startPoint" type="text"/>
      </li>
      <li><img src="../../img/address-yellow.png" alt=""><span>目的地点</span><input placeholder="请输入"
                                                                                 v-model="formData.endPoint"
                                                                                 type="text"/></li>
      <li><img src="../../img/person.png" alt=""><span>出行人数</span><input @click="selectPersonNum()" readonly
                                                                         placeholder="请选择" v-model="formData.peopleNum"
                                                                         type="text"/></li>
    </ul>
    <div class="create-order-inview second">
      <div class="select-time">
        <div @click="selectTime('startTime')" class="datatime" id="startTime">
          <p>{{formData.startTime.substring(0, 10)}}</p>
          <p><span>{{formData.startTime.substring(11, 16)}} <img src="../../img/bottom-arrow.png"></span></p>
        </div>
        <div class="countime">{{countTime}}</div>
        <div @click="selectTime('endTime')" class="datatime" id="endTime">
          <p>{{formData.endTime.substring(0, 10)}}</p>
          <p><span>{{formData.endTime.substring(11, 16)}} <img src="../../img/bottom-arrow.png"></span></p>
        </div>
      </div>
      <div v-if="formData.actType !== '2'" @click="selectType('carInfo', 'carList')" class="car-message">
        <img :src="carInfo.attach" alt="">
        <p>
          {{carInfo.carsName || '--'}} ￥{{carInfo.unitPrice || '--'}}/{{carInfo.unit || '--'}}
          <span class="right select">选择车型<img src="../../img/bottom-arrow-solid2.png" alt=""></span>
        </p>
      </div>
      <div v-else class="car-message">
        <img :src="carInfo.attach" alt="">
        <p>{{carInfo.carsName || '--'}} <span
          class="right">￥{{carInfo.unitPrice || '--'}}/{{carInfo.unit || '--'}}</span></p>
      </div>
    </div>
    <!--<p class="remarks">如有问题请拨打官方电话：400-045-0968</p>-->
    <div @click="submit" v-if="!loading" class="next-button">
      <div>下一步</div>
    </div>
    <div v-else="" class="next-button">
      <div>loading...</div>
    </div>
  </div>
</template>

<script>
  import palceArr from './placeData';
  export default {
    name: '',
    data() {
      return {
//        activityType: this.$route.query.type || '0',
//        activityCode: '',
        oneHourTimestamp: 60 * 60 * 1000,
        activityList: [],
        shopInfo: {},
        shopList: null,
        carInfo: {},
        carList: null,
        carAllList: null,
        placeList: palceArr.getData(),
        personList: [{
          text: '4',
          value: '4'
        }, {
          text: '5',
          value: '5'
        }, {
          text: '6',
          value: '6'
        }],
        formData: {
          startTime: '',
          endTime: '',
//          countTime: '',
          carCode: '',
          storeNo: '',
          memberNo: '',
          startPoint: '',
          endPoint: '',
          peopleNum: '',
          actType: '',
          actCode: '',
          actName: ''
        },
        loading: false
      };
    },
    computed: {
      countTime() {
        if (this.$data.formData.actType === '2') {
          return '1小时';
        } else {
          let countDay = null;
          if (this.$data.formData.endTime && this.$data.formData.startTime) {
            let endTime = new Date(this.$Tools.formatTimeCompatibleIos(this.$data.formData.endTime)).getTime();
            let startTime = new Date(this.$Tools.formatTimeCompatibleIos(this.$data.formData.startTime)).getTime();
            countDay = (endTime - startTime) / this.$data.oneHourTimestamp / 24;
            countDay = countDay <= 0 ? 0 : countDay;
          } else {
            countDay = 0;
          }
          return countDay + '天';
        }
      }
    },
    methods: {
      callPhone(number) {
        this.$nativeAppUtils.callPhone(number);
      },
      getStartTime() {
        let time = new Date().getTime();
        let startTime = time + 2 * 24 * this.$data.oneHourTimestamp;
        return this.$Tools.timestampToTime(startTime);
//        let time = new Date().getTime();
//        let timeArr = this.$Tools.timestampToTime(time).split(' ');
//        timeArr[1] = timeArr[1].split(':').map((item, index) => {
//          if (index === 0) {
//            item = item / 1 + 1;
//          }
////          if (index === 1) {
////            item = item / 1 <= 30 ? '00' : '30';
////          }
//          if (index === 2) {
//            item = '00';
//          }
//          return item.toString();
//        }).join(':');
//        return timeArr.join(' ');
      },
      initTime(time = this.getStartTime()) {
        this.$data.formData.startTime = time;
        let timestamp = new Date(this.$Tools.formatTimeCompatibleIos(time)).getTime();
        if (this.$data.formData.actType === '0') {
          this.$data.formData.endTime = this.$Tools.timestampToTime(timestamp + 24 * 2 * this.$data.oneHourTimestamp);
        } else if (this.$data.formData.actType === '1') {
          this.$data.formData.endTime = this.$Tools.timestampToTime(timestamp + 24 * 4 * this.$data.oneHourTimestamp);
        } else if (this.$data.formData.actType === '2') {
          this.$data.formData.endTime = this.$Tools.timestampToTime(timestamp + this.$data.oneHourTimestamp);
        }
      },
      selectTime(type) {
        if (this.$data.formData.actType === '2' && type === 'endTime') {
          this.$Tools.layerOpen('结束时间默认为开始时间后一个小时');
        } else {
//          let hourArr = [];
//          if (type === 'startTime') {
//            for (let index = 0; index <= 23; index++) {
//              index = index < 10 ?  '0' + index : index;
//              hourArr.push({text: index + ':00', value: index + ':00'});
//              hourArr.push({text: index + ':30', value: index + ':30'});
//            }
//          } else {
//            let startTime = this.$data.formData.startTime.substring(11, 16);
//            hourArr.push({text: startTime, value: startTime});
//          }
//          let dtPicker = new mui.DtPicker({type: 'hour', customData: {h: hourArr}});
          let year = new Date().getFullYear();
          let value = type === 'startTime' ? this.$data.formData.startTime : this.$data.formData.endTime;
          let dtPickerType = type === 'startTime' ? 'datetime' : 'date';
          let dtPicker = new mui.DtPicker({
            type: dtPickerType,
            beginYear: year,
            endYear: year + 1,
            value: value.substring(0, 16)
          });
          let _this = this;
          dtPicker.show(function (rs) {
            if (type === 'startTime') {
              _this.initTime(rs.value + ':00');
            } else {
//              console.log(_this.$data.formData.endTime.substring(10, 19));
              _this.$data.formData.endTime = rs.value + _this.$data.formData.endTime.substring(10, 19);
            }
            dtPicker.dispose();
          });
        }
      },
      validateTime() {
//        let currentTime = new Date().getTime();
        let startTime = new Date(this.$Tools.formatTimeCompatibleIos(this.getStartTime().substring(0, 16))).getTime();
        let beginTime = new Date(this.$Tools.formatTimeCompatibleIos(this.$data.formData.startTime.substring(0, 16))).getTime();
        let endTime = new Date(this.$Tools.formatTimeCompatibleIos(this.$data.formData.endTime.substring(0, 16))).getTime();
        if (beginTime < startTime) {
          this.$Tools.layerOpen('开始时间需在当前时间的两天后');
          return false;
        }
        if (endTime <= beginTime) {
          this.$Tools.layerOpen('结束时间不能小于或等于开始时间');
          return false;
        }
        if (this.$data.formData.actType === '1' && endTime - beginTime < 24 * 4 * this.$data.oneHourTimestamp) {
          this.$Tools.layerOpen('租车时间至少4天起');
          return false;
        }
        return true;
      },
      async selectActivity(type, saleSn, saleName) {
//        this.$Tools.layerOpen(this.$nativeAppUtils.getNums());
        if (type === '1') {
          this.$data.carList = this.$data.carAllList.filter(item => item.carsName.indexOf('朗逸') > -1 ||
            item.carsName.indexOf('华颂7') > -1 || item.carsName.indexOf('雪铁龙C3-XR') > -1);
        } else if (type === '2') {
          if (!this.$nativeAppUtils.getNums()) {
            this.$nativeAppUtils.toLogin();
            return false;
          }
          let res = await this.$http.post('/store/attend', {
            actType: type,
            memberNo: this.$nativeAppUtils.getNums()
          });
          if (res.body.ifAttend === 'no') {
            this.$Tools.layerOpen('您没有免费接送的资格，去抽奖活动可获取资格');
            return false;
          }
          this.$data.carList = this.$data.carAllList.filter(item => item.carsName.indexOf('华颂7') > -1);
        } else {
          this.$data.carList = this.$data.carAllList;
        }
        this.$data.carInfo = this.$data.carList[0];
        this.$data.carList = this.$data.carList.map((item, index) => {
          item.value = index;
          item.text = item.carsName + `(￥${item.unitPrice}/${item.unit})`;
          return item;
        });
        this.$data.activityList = this.$data.activityList.map(item => {
          item.active = type === item.type;
          return item;
        });
        this.$data.formData.actType = type;
        this.$data.formData.actCode = saleSn;
        this.$data.formData.actName = saleName;
        this.initTime();
        this.$nativeAppUtils.setNavTitle(saleName);
      },
      selectType(info, list) {
        let _this = this;
        let picker = new mui.PopPicker();
        picker.setData(_this.$data[list]);
        picker.show(items => {
          _this.$data[info] = _this.$data[list][items[0].value];
          picker.dispose();
        });
      },
      selectPlace() {
        let _this = this;
        let picker = new mui.PopPicker({
          layer: 2
        });
        let $picker = $('.mui-poppicker-body');
        $('.mui-picker:first-child', $picker).width('25%');
        $('.mui-picker:last-child', $picker).width('75%');
        picker.setData(this.$data.placeList);
        picker.show(items => {
          _this.$data.formData.startPoint = items[0].value + items[1].value;
          picker.dispose();
        });
      },
      selectPersonNum() {
        let _this = this;
        let picker = new mui.PopPicker();
        picker.setData(this.$data.personList);
        picker.show(items => {
          _this.$data.formData.peopleNum = items[0].value / 1;
          picker.dispose();
        });
      },
      async submit() {
        let memberNo = this.$nativeAppUtils.getNums();
        if (!memberNo) {
          this.$nativeAppUtils.toLogin();
          return false;
        }
        if (this.$data.formData.actType === '2') {
          if (this.$data.formData.startPoint === '' || this.$data.formData.endPoint === '') {
            this.$Tools.layerOpen('出发地或目的地不能为空');
            return false;
          }
          if (this.$data.formData.peopleNum === '') {
            this.$Tools.layerOpen('请选择出行人数');
            return false;
          }
        }
        if (!this.validateTime()) {
          return false;
        }
        this.$data.loading = true;
        this.$data.formData.memberNo = memberNo;
        this.$data.formData.storeNo = this.$data.shopInfo.merchantNo;
        this.$data.formData.carCode = this.$data.carInfo.carsCode;
        let res = await this.$http.post('/store/createOrder', this.$data.formData);
        this.$data.loading = false;
        if (res.success && res.success === 'true') {
          this.$router.push({
            name: 'carShopLeaseOrderConfirm',
            query: {
              orderNo: res.body.orderNo
            }
          });
        } else {
          this.$Tools.layerOpen(res.reMsg);
          if (res.reCode === 'MERCHANT2' || res.reCode === '2') {
            this.$nativeAppUtils.toIdentityAuth();
          }
          if (this.$data.formData.actType !== '2') {
            if (res.reCode === 'MERCHANT3' || res.reCode === '3') {
              this.$nativeAppUtils.toDriveAuth();
            }
          }
        }
      },
      async initData() {
        let actType = this.$route.query.type || '0'
        let actCode = '';
        let actName = '';
        let actRes = await this.$http.get('/activity/travel/list/Activity', {});
        if (actRes.success && actRes.success === 'true') {
          if (actRes.body && actRes.body.length) {
            this.$data.activityList = [{
              type: '0',
              saleName: '预约租车',
              saleSn: '',
              active: true
            }].concat(actRes.body);
          }
          this.$data.activityList.map(item => {
            if (item.type === actType) {
              actCode = item.saleSn;
              actName = item.saleName;
            }
          });
        }
        let shopRes = await this.$http.get('/store/storeList', {});
        if (shopRes.success && shopRes.success === 'true') {
          this.$data.shopList = shopRes.body.resultList.map((item, index) => {
            item.value = index;
            item.text = item.corpName;
            return item;
          });
          this.$data.shopInfo = this.$data.shopList[0];
        }
        let carRes = await this.$http.get('/store/car/carSeriesList', {});
        if (carRes.success && carRes.success === 'true') {
          this.$data.carAllList = carRes.body.resultList;
//          this.$data.carInfo = this.$data.carList[0];
        }
        this.selectActivity(actType, actCode, actName);
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
//      this.initTime();
      this.initData();
    },
    beforeDestroy() {
      // do something before destroying vue instance
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>

<style lang="scss" scoped>
  @import "style";
</style>



