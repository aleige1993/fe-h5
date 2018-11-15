
<template>
  <div id="buycar-detail-buyplan" class="buyplan">
    <h1>48期方案</h1>
    <ul>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
    </ul>
    <h1>48期方案</h1>
    <ul>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
    </ul>
    <h1>48期方案</h1>
    <ul>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
      <li>
        <p><span>1万</span><span>1799元</span><span>48期</span></p>
        <p><span>首付（10%）</span><span>月付</span><span>期数</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'buyCarDetailBuyIntro',
    data() {
      return {

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
