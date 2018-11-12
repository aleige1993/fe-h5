
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
      <div class="service-info">
        <p>重庆市江北区卡娃汽车维修服务部</p>
        <p>
          <span class="mui-icon mui-icon-starhalf"></span>
          <span class="mui-icon mui-icon-star"></span>
          <span class="mui-icon mui-icon-star"></span>
          <span class="mui-icon mui-icon-star"></span>
          <span class="mui-icon mui-icon-star"></span>
          <span class="mui-icon mui-icon-star"></span>
        </p>
        <p>
          <span class="mui-icon mui-icon-eye"></span>
          营业时间:800-22:00
        </p>
        <p>
          <span class="mui-icon mui-icon-location"></span>
          重庆市江北区观音桥1km
        </p>
      </div>
      <div class="service-content">
        <h1>服务内容</h1>
        <p>服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容</p>
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
  .service-info {
    padding: .2rem .4rem;
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
  .service-content {
    padding: .2rem .4rem;
    background: #eee;
  }
</style>
