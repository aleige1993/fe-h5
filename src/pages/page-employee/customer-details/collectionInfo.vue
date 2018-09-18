<template>
  <div class="collection">
    <div class="gpsInfo">
      <b class="p-title">最近GPS轨迹</b>
      <ul>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
      </ul>
    </div>
    <div class="imgInfo">
      <ul>
         <img  preview="0" src="../img/bg.png" preview-text="">
        <p class="p-title">催收委托书</p>
      </ul>
      <ul>
        <img  preview="0" src="../img/bg.png" preview-text="">
        <p class="p-title">催收委托书</p>
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
    }
    .gpsInfo{
      background-color: #fff;
      padding:0.5rem 0.3rem;
      b{
        font-size: 0.4rem;
        margin-bottom:0.3rem;
      }
      ul{
        li{
          line-height:0.8rem;
          color:#707070;
        }
      }
    }
    .imgInfo{
      padding:0.5rem 0;
      background-color: #fff;
      margin-top:0.3rem;
      overflow: hidden;
      ul{
       width: 50%;
        float: left;
        padding:0.3rem;
        text-align: center;
        img{
          width:100%;
          height: 3rem;
        }
      }
    }



</style>
