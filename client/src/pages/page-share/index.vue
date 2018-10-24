<template>
  <div id="pageShare" class="page-share">
    <img src="./img/top.png" alt="" >
    <img src="./img/center.png" alt="" >
    <ul>
      <li>
        <img src="./img/download.png" alt="">
        <p>APP下载</p>
      </li><li>
        <img src="./img/wx.png" alt="">
        <p>微信公众号</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'share',
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped="">
  .page-share {
    padding-bottom: 2.8rem;
    background: url("./img/bottom.png") bottom center no-repeat;
    background-size: 100%;
    img {
      display: inline-block;
      width: 100%;
    }
    ul {
      margin-top: .4rem;
      li {
        display: inline-block;
        width: 50%;
        text-align: center;
        img {
          width: 1.8rem;
        }
        p {
          font-size: 9px;
        }
      }
    }
  }
</style>

