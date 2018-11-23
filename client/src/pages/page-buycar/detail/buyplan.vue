
<template>
  <div id="buycar-detail-buyplan" class="buyplan">
    <template v-for="item in buyPlanList">
      <h1>{{item.name}}期方案</h1>
      <ul>
        <li v-for="(list, index) in item.list">
          <p><span>{{list.downPaymentRatio}}元</span><span>{{list.monthPayment}}元</span><span>{{list.clyle}}期</span></p>
          <p><span>首付（{{10 * (index + 1)}}%）</span><span>月付</span><span>期数</span></p>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'buyCarDetailBuyIntro',
    data() {
      return {
        buyPlanList: []
      };
    },
    async mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      let res = await this.$formdata.post('/openapi/ces/cars/more', {
        price: this.$route.query.price / 1
      });
      if (res.success && res.success === 'true') {
        this.$data.buyPlanList = res.data;
      }
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>

<style lang="scss" scoped="">
  .buyplan {
    margin: 0 .4rem;
    h1, h1:before {
      vertical-align: middle;
    }
    h1 {
      padding: .2rem 0;
      font-weight: bold;
      &:before {
        content: '';
        display: inline-block;
        width: .1rem;
        height: .38rem;
        margin-right: .1rem;
        background: #3984FF;
        border-radius: .1rem;
      }
    }
    li {
      margin-bottom: .2rem;
      padding: .24rem 0;
      background: #fff;
      border-radius: .1rem;
      p {
        span {
          display: inline-block;
          width: 33.33%;
          text-align: center;
          font-size: .34rem;
        }
        &:first-child {
          span {
            font-size: .42rem;
            color: #FFC939;
          }
        }
      }
    }
  }
</style>
