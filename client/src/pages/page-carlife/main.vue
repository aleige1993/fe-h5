
<template>
  <div id="carLifeMain">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
      <h1 class="mui-title">车生活</h1>
      <router-link :to="{name: 'carlifeMycarList'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">车辆管理</router-link>
    </header>
    <div class="mui-content">
      <div class="carlife-addcar">
        <router-link :to="{name: 'carlifeMycarAdd'}" class="button"><img src="./img/add_to_ic@2x.png" alt="">添加爱车</router-link>
        <div class="text">想要有更多的服务吗？快来添加爱车！</div>
        <!--<div class="text">{{this.$store.getters.userInfo}}</div>-->
      </div>
      <ul class="carlife-grid">
        <li>
          <router-link :to="{name: 'carlifeService'}"><img src="./img/list_car_wach_ic@2x.png" alt=""></router-link>
          <p>美容洗车</p>
        </li>
        <li>
          <img src="./img/list_car_wach_ic@2x.png" alt="">
          <p>美容洗车</p>
        </li>
        <li>
          <img src="./img/list_car_wach_ic@2x.png" alt="">
          <p>美容洗车</p>
        </li>
        <li>
          <img src="./img/list_car_wach_ic@2x.png" alt="">
          <p>美容洗车</p>
        </li>
      </ul>
      <h1 class="carlife-title">活动专区</h1>
      <a class="carlife-advertisement" href=""><img src="./img/img_balck@2x.png" alt=""></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carLifeMain',
    data() {
      return {
        message: ''
      };
    }
  };
</script>

<style lang="scss" scoped="">
  .carlife-addcar {
    padding: .6rem 0;
    text-align: center;
    background: #3984FF;
    .button, .text {
      color: #fff;
    }
    .button, .button img {
      vertical-align: top;
    }
    .button {
      display: inline-block;
      margin-bottom: .4rem;
      padding: .3rem 1.6rem;
      border: 1px solid #fff;
      border-radius: .1rem;
      img {
        height: .4rem;
        margin-top: .2em;
        margin-right: .1rem;
      }
    }
    .text {
      font-size: 12px;
    }
  }
  .carlife-grid {
    display: flex;
    width: 100%;
    padding: .2rem 0;
    border-top: 4px solid #efeff4;
    /*border-bottom: 2px solid #efeff4;*/
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 25%;
      margin: .2rem 0;
      text-align: center;
      img {
        width: 40%;
      }
      p {
        font-size: .3rem;
      }
    }
  }
  .carlife-title {
    padding: .3rem 0;
    text-align: center;
    border-top: 4px solid #efeff4;
  }
  .carlife-advertisement, .carlife-advertisement img {
    display: block;
    width: 100%;
  }
</style>
