
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeMycarList'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">车辆添加</h1>
    </header>
    <ul class="mui-content mycar-add">
      <li>
        <span class="title">车牌号</span>
        <span class="bottom">请选择</span>
        <input placeholder="请输入"/>
      </li>
      <li>
        <span class="title">品牌型号</span>
        <span class="bottom">请选择</span>
      </li>
    </ul>
    <div class="next-button">
      <div>保存</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'carLife-myCarList',
    data() {
      return {};
    },
    async mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      let res = await this.$formdata.post(this.$config.HTTPOPENAPIURL + '/openapi/common/cars/brand', {});
//      alert(res);
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>
<style lang="scss" scoped="">
  .mycar-add {
    background: #fff;
    li {
      padding: 0 .4rem;
      line-height: 1.2rem;
      border-bottom: 1px solid #e5e5e5;
      .title {
        display: inline-block;
        width: 5em;
      }
      input {
        width: 10em;
        font-size: .4rem;
        border: none;
      }
      .bottom, .right {
        color: gray;
      }
      .bottom:after {
        content: '\e581';
        font-family: Muiicons;
        font-size: inherit;
        line-height: 1;
        display: inline-block;
        color: #bbb;
      }
    }
  }
  .next-button {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9;
    div {
      height: 1.2rem;
      margin: .4rem;
      line-height: 1.2rem;
      text-align: center;
      color: #fff;
      background: #2193fc;
      border-radius: .1rem;
    }
  }
</style>
