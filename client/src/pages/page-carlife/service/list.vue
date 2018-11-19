
<template>
  <div id="carlife-serviceList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeIndex'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">美容洗车</h1>
      <span @click="showCityModel = true" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">
        重庆市<span class="mui-icon mui-icon-arrowdown"></span>
      </span>
    </header>
    <div class="mui-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../img/shuijiao.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../img/muwu.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="service-list">
        <div class="title">
          <span class="left">附近门店</span><span class="right">全部门店<img class="icon" src="../img/arrow_right_gray.png" alt=""></span>
        </div>
        <ul>
          <li>
            <img class="img" src="../img/muwu.jpg" alt="">
            <div class="text">
              <h1>重庆市江北区卡娃汽车维修服务部</h1>
              <p>
                <span class="label">维修保养</span><span class="label">美容改装</span>
                <img class="icon" src="../img/ic_star_whole.png" alt="" /><img class="icon" src="../img/ic_star_whole.png" alt="" /><img class="icon" src="../img/ic_star_whole.png" alt="" /><img class="icon" src="../img/ic_star_whole.png" alt="" /><img class="icon" src="../img/ic_star_whole.png" alt="" />
              </p>
              <p><img class="icon" src="../img/ic_time.png" alt="">营业时间:800-22:00</p>
              <p><span class="address"><img class="icon" src="../img/ic_location.png" alt="">重庆市江北区观音桥重庆市江北区观音桥</span><span class="button">前往导航</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <select-cityname class="fullscreen-modal fullheight" v-if="showCityModel" @on-close="closeCityModal" @on-select="getCityValue"></select-cityname>
    {{cityValue}}
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  import SelectCityname from "../../../components/select-cityname/index.vue";
  export default {
    name: 'carlife-serviceList',
    data() {
      return {
        showCityModel: false,
        cityValue: null
      };
    },
    components: {
      SelectCityname
    },
    methods: {
      getCityValue(value) {
        this.$data.cityValue = value;
        this.closeCityModal();
      },
      closeCityModal() {
        this.$data.showCityModel = false;
      }
    },
    mounted() {
      new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true,
        visibilityFullFit: true,
        pagination: '.swiper-pagination'
      });
    }
  };
</script>

<style lang="scss" scoped="">
  .mui-bar .mui-icon-arrowdown {
    font-size: 16px;
  }
  .swiper-container,
  .swiper-container img {
    width: 100%;
    height: 4rem;
  }
  .service-list {
    margin: 0 .4rem;
    .icon {
      height: .28rem;
    }
    .title {
      margin-top: .2rem;
      .left {
        font-size: .4rem;
        font-weight: bold;
      }
      .right, .right .icon {
        vertical-align: middle;
      }
      .right {
        float: right;
        color: #707070;
        .icon {
          margin-left: 2px;
        }
      }
    }
    li {
      position: relative;
      padding: .34rem 0 .34rem 3.2rem;
      border-bottom: 1px solid #EEEEEE;
      .img {
        position: absolute;
        top: .4rem;
        left: 0;
        width: 3rem;
        height: 2.4rem;
      }
      h1 {
        font-size: .34rem;
        font-weight: bold;
      }
      p, p * {
        vertical-align: middle;
      }
      p {
        margin-top: 5px;
        font-size: .34rem;
        color: #313131;
        .label, .button {
          font-size: .32rem;
          border-radius: 4px;
        }
        .label {
          margin-right: 2px;
          padding: 0 2px;
          color: #A0A0A0;
          border: 1px solid #DCDCDC;
          border-radius: 4px;
        }
        .icon {
          margin-right: 2px;
        }
        &:last-child {
          position: relative;
          .address {
            display: inline-block;
            width: 12em;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: .34rem;
          }
          .button {
            position: absolute;
            top: 0;
            right: 0;
            display: inline-block;
            width: 5em;
            font-size: .34rem;
            text-align: center;
            color: #fff;
            background: #3984FF;
          }
        }
      }
    }
  }
</style>
