
<template>
  <div id="carlife-serviceList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeServiceList'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
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
        <p class="title">
          重庆市江北区卡娃汽车维修服务部
          <img src="../img/ic_star_whole.png" alt=""><img src="../img/ic_star_whole.png" alt=""><img src="../img/ic_star_whole.png" alt=""><img src="../img/ic_star_whole.png" alt=""><img src="../img/ic_star_whole.png" alt=""></p>
        <p>
          <img src="../img/ic_time.png" alt="">营业时间:800-22:00
        </p>
        <p>
          <img src="../img/ic_location.png" alt="">重庆市江北区观音桥1km
        </p>
      </div>
      <div class="service-info">
        <p class="title">服务内容</p>
        <p class="gray">服务内容</p>
      </div>
    </div>
    <div class="next-button">
      <span>一键投诉</span><span>前往导航</span>
    </div>
  </div>
</template>

<style lang="scss" scoped="">
  .mui-content {
    padding-bottom: 1.8rem;
  }
  .swiper-container,
  .swiper-container img {
    width: 100%;
    height: 4rem;
  }
  .service-info {
    margin-bottom: .2rem;
    padding: .3rem .4rem;
    background: #fff;
    p, p * {
      vertical-align: middle;
    }
    p {
      font-size: .34rem;
      &:first-child {
        margin-bottom: 5px;
      }
      &.title {
        font-size: .36rem;
        font-weight: bold;
      }
      &.gray {
        color: gray;
      }
      img {
        height: .28rem;
        margin-right: 2px;
      }
    }
  }
  .next-button {
    display: inline-flex;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9;
    background: #fff;
    padding: .4rem;
    span {
      display: inline-block;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
      background: #3984FF;
      border-radius: .1rem;
      &:first-child {
        margin-right: .2rem;
      }
      &:last-child {
        margin-left: .2rem;
        background: #FFC939;
      }
    }
  }
</style>

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
      document.body.style.backgroundColor = '#eeeeee';
      new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true,
        visibilityFullFit: true,
        pagination: '.swiper-pagination'
      });
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>

