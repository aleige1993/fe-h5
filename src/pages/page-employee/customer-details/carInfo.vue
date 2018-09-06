<template>
  <div class="carInfo">
    <ul>
      <li>
        <span>车辆品牌:</span>
        <a>2019-09-12  12:00:12</a>
      </li>
      <li>
        <span>车系:</span>
        <a>xm340759347389</a>
      </li>
      <li>
        <span>车型:</span>
        <a>任分期</a>
      </li>
      <li>
        <span>车牌号:</span>
        <a>12期</a>
      </li>
      <li>
        <span>车架号:</span>
        <a>12期</a>
      </li>
      <li>
        <span>发动机号:</span>
        <a>12期</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'carInfo',
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
  .carInfo{
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
