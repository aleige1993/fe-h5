<template>
  <div id="limitResult">
    <div class="limit-result">
      <round-progress-panel :money="money" :maxMoney="maxMoney"></round-progress-panel>
      <div class="text">
        <div>
          <p>您的贷款额度</p>
          <p><span class="timer">{{money}}</span>元</p>
        </div>
      </div>
    </div>
    <div class="buycar-buttons">
      <a href="/creditlimlt/newcar">
        <h1>新车服务</h1>
        <p>立享有车生活</p>
      </a>
      <a href="/creditlimlt/secondhandcar"">
      <h1>二手车服务</h1>
      <p>车主福利，等你开启</p>
      </a>
    </div>
  </div>
</template>

<script>
  import RoundProgressPanel from '@/components/round-progress-panel';
  import CountUp from '../../../../static/js/jquery.countUp.js';
  export default {
    name: 'limitResult',
    data() {
      return {
        money: this.$route.query.money / 1,
        maxMoney: 500000
      };
    },
    components: {
      RoundProgressPanel,
      CountUp
    },
    mounted() {
      $('.timer').countTo({
        lastSymbol: '', // 显示在最后的字符
        from: 0, // 开始时的数字
        speed: 1500, // 总时间
        refreshInterval: 100, // 刷新一次的时间
        beforeSize: 0, // 小数点前最小显示位数，不足的话用0代替
        decimals: 0  // 小数点后的位数，小数做四舍五入
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import "style.scss";
</style>











