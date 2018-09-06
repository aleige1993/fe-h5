<template>
  <div class="collection">
    <div class="gpsInfo">
      <p class="p-title">最近GPS轨迹</p>
      <ul>
        <li>重庆大渡口区平安轻轨车站</li>
        <li>重庆大渡口区平安轻轨车站</li>
        <li>重庆大渡口区平安轻轨车站</li>
      </ul>
    </div>
    <div class="imgInfo">
        <p class="p-title">催收委托书</p>
        <ul>
           <img  preview="0" src="../img/bg.png" preview-text="">
        </ul>
    </div>
    <div class="imgInfo">
      <p class="p-title">催收申请凭证</p>
      <ul>
        <img preview="1" src="../img/bg.png" preview-text="">
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'collectionInfo',
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      this.$previewRefresh();
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>
<style lang="scss" scoped>
    .collection{
      padding:0.3rem;
    }
    .gpsInfo{
      background-color: #fff;
      padding:0.3rem;
      border-radius:0.2rem;
      p{
        font-size: 0.4rem;
        margin-bottom:0.3rem;
      }
      ul{
        text-indent: 2em;
        li{
          line-height:0.8rem;
        }
      }
    }
    .imgInfo{
      padding:0.3rem;
      background-color: #fff;
      border-radius:0.2rem;
      margin-top:0.3rem;
      p{
        font-size: 0.4rem;
        margin-bottom:0.3rem;
      }
      ul{
        text-indent: 2em;
        img{
          width:3rem;
          height: 3rem;
        }
      }
    }



</style>
