
<template>
  <div id="carlife-serviceList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeIndex'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">美容洗车</h1>
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
        <div class="service-title">
          <span>附近门店</span><span class="right">全部门店</span>
        </div>
        <ul>
          <li>
            <div class="service-main-top">
              <img src="../img/muwu.jpg" alt="">
              <div class="text">
                <p>重庆市江北区卡娃汽车维修服务部</p>
                <p><span class="label">维修保养</span><span class="label">美容改装</span></p>
                <p>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                </p>
              </div>
            </div>
            <div class="service-main-bottom">
              <p><span class="mui-icon mui-icon-eye"></span>营业时间:800-22:00</p>
              <p>
                <span class="mui-icon mui-icon-location"></span>重庆市江北区观音桥1km
                <span class="label">前往导航</span>
              </p>
            </div>
          </li>
          <li>
            <div class="service-main-top">
              <img src="../img/muwu.jpg" alt="">
              <div class="text">
                <p>重庆市江北区卡娃汽车维修服务部</p>
                <p><span class="label">维修保养</span><span class="label">美容改装</span></p>
                <p>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                  <span class="mui-icon mui-icon-star"></span>
                </p>
              </div>
            </div>
            <div class="service-main-bottom">
              <p><span class="mui-icon mui-icon-eye"></span>营业时间:800-22:00</p>
              <p>
                <span class="mui-icon mui-icon-location"></span>重庆市江北区观音桥1km
                <span class="label">前往导航</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
  export default {
    name: 'carlife-serviceList',
    data() {
      return {

      };
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
  .swiper-slide img {
    width: 100%;
    height: 4rem;
  }
  .service-list {
    padding: .2rem;
    li {
      margin-bottom: .2rem;
      padding-top: .2rem;
      border-top: 1px dashed #d2d2d2;
    }
    p {
      margin-bottom: .1rem;
    }
    .mui-icon {
      font-size: .48rem;
    }
    .label {
      padding: 0 .1rem;
      border: 1px solid #d2d2d2;
      border-radius: .1rem;
    }
  }
  .service-title {
    margin-bottom: .2rem;
    .right {
      float: right;
    }
  }
  .service-main-top {
    display: flex;
    align-items: center;
    margin-bottom: .2rem;
    > img {
      width: 3rem;
      height: 2rem;
      margin-right: .2rem;
    }
    .label {
      margin-right: .1rem;
    }
  }
  .service-main-bottom {
    p {
      position: relative;
      padding-right: 5em;
      .label {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
</style>
