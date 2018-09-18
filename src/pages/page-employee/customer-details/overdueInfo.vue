<template>
  <div class="overdueInfo">
    <div class="overdue">
      <p>2018年1月</p>
      <ul>
        <li>
          <span>期数:</span>
          <a><font>02</font>/24</a>
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
          <a><font>02</font>/24</a>
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
    mounted() {
      var mun = this.$route.query.id;
      console.log(mun);
    },
    methods: {
    }
  };
</script>
<style lang="scss" scoped>
  .overdueInfo{
    padding:0 0.5rem;
  }
  .overdue{
    border-bottom: 1px solid #e5e5e5;
    p{
      line-height:1.2rem;
      font-size:0.5rem;
      text-align: center;
      border-bottom: 1px solid #e5e5e5;
      font-weight: 600;
    }
    ul{
      padding:0.3rem 0;
      li{
        margin-bottom:0.2rem;
        span{
          margin-right:0.2rem;
        }
        a{
          color: #333;
          font{
            color:#E7B24D;
          }
        }
      }
      li:last-child{
        margin-bottom: 0;
      }
    }
  }
</style>
