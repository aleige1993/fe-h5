<template>
  <div class="financ">
    <ul>
      <li>
        <span>订单创建时间:</span>
        <a>2019-09-12  12:00:12</a>
      </li>
      <li>
        <span>项目编号:</span>
        <a>xm340759347389</a>
      </li>
      <li>
        <span>产品名称:</span>
        <a>任分期</a>
      </li>
      <li>
        <span>融资期数:</span>
        <a>12期</a>
      </li>
      <li>
        <span>融资金额:</span>
        <a>200,000.00元</a>
      </li>
      <li>
        <span>放款日期:</span>
        <a> 2019-12-09</a>
      </li>
      <li>
        <span>融资状态:</span>
        <a>还款中</a>
      </li>
      <li>
        <span>云贷应还金额:</span>
        <a>200,000.00元</a>
      </li>
      <li>
        <span>租金应还金额:</span>
        <a>200,000.00元</a>
      </li>
      <li>
        <span>每期应还金额:</span>
        <a>200,000.00元</a>
      </li>
      <li>
        <span>经销商名称:</span>
        <a>某某某某的4s店</a>
      </li>
      <li>
        <span>渠道商名称:</span>
        <a>某某某某的4s店</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'financInfo',
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>
<style lang="scss" scoped>
  .financ{
    padding: 0.5rem 0.3rem;
    ul{
      background-color: #fff;
      padding: 0.3rem;
      border-radius:0.2rem;
      li{
        margin-bottom:0.4rem;
        span{
          margin-right:0.2rem;
        }
        a{
          color: #333;
        }
      }
      li:last-child{
        margin-bottom: 0;

      }
    }
  }
</style>
