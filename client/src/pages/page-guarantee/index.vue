
<template>
  <div id="guarantee">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
      <h1 class="mui-title">担保人信息</h1>
      <!--<router-link :to="{name: 'carlifeMycarList'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">车辆管理</router-link>-->
    </header>
    <div class="mui-content">
        <div class="title-panl">
          您的{{memberInfo.guaRelationMessage}}【{{memberInfo.memberName}}】正在颂车网进行融资贷款申请,需要您为其担保,如果您愿意担保请填写本页信息进行提交,如果不愿意请忽略。
        </div>
      <div class="userInfo-panl">
        <ul>
          <li>贷款客户姓名：{{memberInfo.memberName}}</li>
          <li>客户电话：{{memberInfo.memberMobile}}</li>
          <li>身份证：{{memberInfo.memberCertNo}}</li>
          <li>申请贷款金额：{{memberInfo.approveLimitAmt}}元</li>
          <li>申请期数：{{memberInfo.loanPeriods}}期</li>
        </ul>
      </div>

      <div class="guaranteeInfo-panl">
        <ul>
          <li>
            <span>担保人姓名</span>
            <input name="gar_name" v-model="userInfo.guaPersonName" type="text" placeholder="请输入"/>
          </li>
          <li>
            <span>担保人电话</span>
            <input name="gar_phone" v-model="userInfo.guaPersonMobile" type="text" placeholder="请输入"/>
          </li>
          <li>
            <span>担保人身份证</span>
            <input name="gar_cardID" v-model="userInfo.guaPersonCertNo" type="text" placeholder="请输入"/>
          </li>
          <li>
            <span>居住省份</span>
            <input  type="text" v-model="userInfo.gar_province" name="gar_province" readonly placeholder="请选择省/市/区" @click="showCityModel = true"/>
            <b class="arrow right-arrow" @click="showCityModel = true"></b>
          </li>
          <li>
            <span>详细地址</span>
            <input name="gar_address"  v-model="userInfo.guaRoadAddr" type="text" placeholder="请输入"/>
          </li>
        </ul>

      </div>

    <a class="a-submit" @click="submitData">提 交</a>

    </div>


    <select-cityname class="fullscreen-modal fullheight" v-if="showCityModel"  @on-close="closeCarModel" @on-select="getCityValue"></select-cityname>
  </div>
</template>

<script>
  import SelectCityname from "../../components/select-cityname/index.vue";
  export default {
    name: 'guarantee',
    data() {
      return {
        showCityModel: false,
        userInfo: {
          guaPersonNo: '',
          guaPersonName: '',
          guaPersonCertNo: '',
          guaPersonMobile: '',
          guaRoadAddr: '',
          guaRelation: '2',
          guaProvinceCode: '',
          guaProvinceName: '',
          guaCityCode: '',
          guaCityName: '',
          guaDistrictCode: '',
          guaDistrictName: '',
          guaRelationMessage: '',
          gar_province: ''
        },
        memberInfo: {}

      };
    },
    components: {
      SelectCityname
    },
    async mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      let res = await this.$formdata.post("/openapi/fbs/loans/loan/guarantee/h5/info", {
        guaPersonNo: "201811241411172101248100010"
      });
      this.$data.memberInfo = res.data;
      this.$data.userInfo.guaPersonNo = res.data.guaPersonNo;
      console.log(res);
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    },
    methods: {
      getCityValue(value) {
        this.$data.userInfo.guaProvinceCode = value.provinceId;
        this.$data.userInfo.guaProvinceName = value.provinceName;
        this.$data.userInfo.guaCityCode = value.cityId;
        this.$data.userInfo.guaCityName = value.cityName;
        this.$data.userInfo.guaDistrictCode = value.districtId;
        this.$data.userInfo.guaDistrictName = value.districtName;
        this.$data.userInfo.gar_province = value.provinceName +','+ value.cityName +','+ value.districtName;
        this.closeCarModel();
      },
      closeCarModel() {
        this.$data.showCityModel = false;
      },
      async submitData() {
        if (!(/^1\d{10}$/.test(this.$data.userInfo.guaPersonMobile))) {
          this.$Tools.layerOpen('请输入正确的手机号');
          return false;
        }
        if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.$data.userInfo.guaPersonCertNo))) {
          this.$Tools.layerOpen('请输入合法的身份证');
          return false;
        }
        let res = await this.$formdata.post('/openapi/fbs/loans/loan/guarantee/modify', this.$data.userInfo);
        console.log(res);
        if (res.success === 'true') {
          console.log('我进来了');
          this.getToken();
        }
        console.log('我没进来');
      },
      getToken() {
        let res = this.$formdata.post('/openapi/face/get/face/token', {
          memberName: this.$data.userInfo.guaPersonName,
          certNo: this.$data.userInfo.guaPersonCertNo,
          source: '2',
          returnUrl: 'http://192.168.201.114:8090/#/returnFaceToken',
          bizNo: this.$data.memberInfo.loanNo
        });
        console.log(res);
      }

    }
  };
</script>

<style lang="scss" scoped="">
  .a-submit{
    position:fixed;
    bottom:0.5rem;
    width: 90%;
    left: 5%;
    height: 1.2rem;
    background-color: #3984FF;
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius:0.1rem;
    line-height: 1.2rem;
    font-size:0.45rem;
  }
  .title-panl{
    background-color:#FFC939;
    color: #fff;
    padding:0.2rem 0.3rem;
    font-size:12px;
  }
  .userInfo-panl{
    padding:0.3rem;
    ul{
      padding:0.3rem;
      border-radius:5px;
      background-color: #fff;
      li{
        color: #313131;
        margin-bottom:0.2rem;
      }
      li:last-child{
        margin-bottom: 0;
      }
    }
  }
  .guaranteeInfo-panl{
    background-color: #fff;
    ul{
      li{
        padding: 0.3rem;
        border-bottom: 1px solid #E5E5E5;
        display: flex;
        justify-content: space-between;
        span{
          display: inline-block;
          width:2.5rem;
          font-size: 0.38rem;
        }
        input{
          flex: 1;
          text-align: right;
          border: 0;
          font-size: 0.38rem;
        }
      }
    }
  }
  .arrow {
    &:after {
      font-family: Muiicons;
      font-size: inherit;
      line-height: 1;
      display: inline-block;
      color: #bbb;
    }
  }
  .bottom-arrow:after {
    content: '\e581';
  }
  .right-arrow:after {
    content: '\e583';
  }
  /*.carlife-addcar {*/
    /*padding: .6rem 0;*/
    /*text-align: center;*/
    /*background: #3984FF;*/
    /*.button, .text {*/
      /*color: #fff;*/
    /*}*/
    /*.button, .button img {*/
      /*vertical-align: top;*/
    /*}*/
    /*.button {*/
      /*display: inline-block;*/
      /*margin-bottom: .4rem;*/
      /*padding: .3rem 1.6rem;*/
      /*border: 1px solid #fff;*/
      /*border-radius: .1rem;*/
      /*img {*/
        /*height: .4rem;*/
        /*margin-top: .2em;*/
        /*margin-right: .1rem;*/
      /*}*/
    /*}*/
    /*.text {*/
      /*font-size: 12px;*/
    /*}*/
  /*}*/
  /*.carlife-grid {*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*flex-wrap: wrap;*/
    /*width: 100%;*/
    /*margin: .14rem 0;*/
    /*padding: .2rem 0;*/
    /*background: #fff;*/
    /*li {*/
      /*width: 25%;*/
      /*margin: .2rem 0;*/
      /*text-align: center;*/
      /*img {*/
        /*width: 40%;*/
      /*}*/
      /*p {*/
        /*font-size: .3rem;*/
      /*}*/
    /*}*/
  /*}*/
  /*!*.carlife-title {*!*/
  /*!*padding: .3rem 0;*!*/
  /*!*text-align: center;*!*/
  /*!*border-top: 4px solid #efeff4;*!*/
  /*!*}*!*/
  /*.carlife-advertisement,*/
  /*.carlife-advertisement img {*/
    /*display: block;*/
    /*width: 100%;*/
  /*}*/
</style>
