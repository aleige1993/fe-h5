
<template>
  <div id="carLifeMain">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
      <h1 class="mui-title">车生活</h1>
      <router-link :to="{name: 'carlifeMycarList'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">车辆管理</router-link>
    </header>
    <div class="mui-content">
      <div class="carlife-addcar">
        <router-link :to="{name: 'carlifeMycarAdd'}" class="button"><span class="mui-icon mui-icon-plusempty"></span>添加爱车</router-link>
        <div class="text">想要有更多的服务吗？快来添加爱车！</div>
      </div>
      <ul class="carlife-grid">
        <li>
          <router-link :to="{name: 'carlifeServiceList'}"><img src="./img/list_gas_station_ic.png" alt=""></router-link>
          <p>美容洗车</p>
        </li>
        <li>
          <router-link :to="{name: 'carlifeServiceList'}"><img src="./img/list_rechargeable_plug_ic.png" alt=""></router-link>
          <p>维修保养</p>
        </li>
        <li>
          <router-link :to="{name: 'carlifeServiceList'}"><img src="./img/list_violation_inquiry_ic.png" alt=""></router-link>
          <p>违章查询</p>
        </li>
        <li>
          <router-link :to="{name: 'carlifeServiceList'}"><img src="./img/list_service_ic.png" alt=""></router-link>
          <p>保险服务</p>
        </li>
      </ul>
      <!--<h1 class="carlife-title">活动专区</h1>-->
      <a class="carlife-advertisement" href=""><img src="./img/img_headline_blue.png" alt=""></a>
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
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
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
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: .14rem 0;
    padding: .2rem 0;
    background: #fff;
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
  /*.carlife-title {*/
    /*padding: .3rem 0;*/
    /*text-align: center;*/
    /*border-top: 4px solid #efeff4;*/
  /*}*/
  .carlife-advertisement,
  .carlife-advertisement img {
    display: block;
    width: 100%;
  }
</style>
