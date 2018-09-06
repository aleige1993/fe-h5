<template>
  <div class="overdueInfo">
    <div class="overdue">
      <p>2018年1月</p>
      <ul>
        <li>
          <span>期数:</span>
          <a>2/24</a>
        </li>
        <li>
          <span>应还款日:</span>
          <a>2018年1月</a>
        </li>
        <li>
          <span>应还本金:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还利息:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还租金:</span>
          <a>12期</a>
        </li>
        <li>
          <span>逾期费用:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还总额:</span>
          <a>12期</a>
        </li>
      </ul>
    </div>

    <div class="overdue">
      <p>2018年1月</p>
      <ul>
        <li>
          <span>期数:</span>
          <a>2/24</a>
        </li>
        <li>
          <span>应还款日:</span>
          <a>2018年1月</a>
        </li>
        <li>
          <span>应还本金:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还利息:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还租金:</span>
          <a>12期</a>
        </li>
        <li>
          <span>逾期费用:</span>
          <a>12期</a>
        </li>
        <li>
          <span>应还总额:</span>
          <a>12期</a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'overdueInfo',
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
  .overdue:first-child{
    padding-top: 0.5rem;
  }
  .overdue{
    padding:0 0.5rem 0 0.3rem;
    margin-bottom:0.5rem;
    p{
        line-height:1rem;
        font-size:0.5rem;
    }
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
