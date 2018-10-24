
<template>
  <div id="order-success">
    <div class="success">
      <div class="detail-panl">
         <p>
           <img src="../../img/success.png"/>
           <b>下单成功</b>
         </p>
        <p>
          您预约的租车订单已成功下单，小站工作人员正在接单中，请耐心等待。
        </p>
      </div>

      <div class="but-panl">
        <router-link :to="{path:'/carlease/order/detail?orderNo=' + this.$route.query.orderNo}" class="active">订单详情</router-link>
        <router-link :to="{path:'/carlease/order/selectcar'}">继续下单</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'carshopleaseOrder',
    data() {
      return {};
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
  .success{
    padding: 0.4rem;
  }
  .detail-panl{
    background-color: #fff;
    border-radius:0.2rem;
    padding:1rem 0.6rem;
    p:first-child{
       text-align: center;
      img{
        width: 2rem;
      }
      b{
        display: block;
        color: #3785ff;
        font-size:0.5rem;
        margin-top:0.3rem;
        margin-bottom: 1rem;
      }
    }
    p:nth-child(2){
      color: #999;
      /*font-size: 0.3rem;*/
      line-height:0.6rem;
    }
  }
  .but-panl{
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
    a{
      display: inline-block;
      padding: .3rem 0;
      width: 45%;
      text-align: center;
      border-radius:1rem;
      background-color: #fff;
      color: #3785ff;
    }
    a.active{
      background-color: #3785ff !important;
      color: #fff !important;
    }
  }

</style>
