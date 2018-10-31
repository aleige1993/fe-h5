
<template>
  <div id="carlife-service">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeIndex'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">美容洗车</h1>
    </header>
    <div class="mui-content">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../img/shuijiao.jpg">
          </div>
          <div class="swiper-slide">
            <img src="../img/muwu.jpg">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  export default {
    name: 'carlife-service',
    data() {
      return {

      };
    },
    mounted() {
      new Swiper('.swiper-container', {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      });
    }
  };
</script>

<style lang="scss" scoped="">
  .swiper-slide img {
    width: 100%;
    height: 4rem;
  }
</style>
