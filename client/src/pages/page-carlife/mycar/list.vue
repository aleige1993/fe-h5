
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeIndex'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">车辆管理</h1>
      <router-link :to="{name: 'carlifeMycarAdd'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">添加</router-link>
    </header>
    <ul class="mui-content mycar-list">
      <li>
        <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2072836687,872676525&fm=58">
        <div class="text">
          <h1>渝BTD123</h1>
          <p>大众桑塔纳 2016款1.6L 自动风尚版大众桑塔纳 2016款1.6L 自动风尚版</p>
        </div>
      </li>
      <li>
        <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2072836687,872676525&fm=58">
        <div class="text">
          <h1>渝BTD123</h1>
          <p>大众桑塔纳 2016款1.6L 自动风尚版大众桑塔纳 2016款1.6L 自动风尚版</p>
        </div>
      </li>
      <li>
        <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2072836687,872676525&fm=58">
        <div class="text">
          <h1>渝BTD123</h1>
          <p>大众桑塔纳 2016款1.6L 自动风尚版大众桑塔纳 2016款1.6L 自动风尚版</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'carLife-myCarList',
    data() {
      return {};
    }
  };
</script>
<style lang="scss" scoped="">
  .mycar-list li{
    position: relative;
    display: flex;
    padding: .4rem;
    border-bottom: 1px solid #EEEEEE;
    img {
      width: 2.2rem;
      height: 1.6rem;
    }
    .text {
      margin-left: .3rem;
      h1 {
        margin-bottom: 5px;
        font-size: .38rem;
        font-weight: bold;
      }
      p {
        font-size: .34rem;
        color: gray;
      }
    }
  }
</style>
