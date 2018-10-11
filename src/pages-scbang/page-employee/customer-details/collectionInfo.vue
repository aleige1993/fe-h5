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
    <div class="colle">
        <div class="collebox">
         <b class="p-title">催收委托书</b>
            <ul class="file">
                <li class="word">
                  <i></i>
                  <span>这是文件标题</span>
                  <a>查看</a>
                </li>
                <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
                 <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
                 <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
            </ul> 
        </div>
        <div class="collebox">
         <b class="p-title">催收申请凭证</b>
           <ul class="file">
                <li class="word">
                  <i></i>
                  <span>这是文件标题</span>
                  <a>查看</a>
                </li>
                <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
                 <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
                 <li class="png">
                    <img preview="0" src="../img/bg.png" preview-text="">
                </li>
            </ul> 
        </div>

    </div>
    <!-- <div class="imgInfo">
      <ul>
         <img  preview="0" src="../img/bg.png" preview-text="">
        <p class="p-title">催收委托书</p>
      </ul>
      <ul>
        <img  preview="0" src="../img/bg.png" preview-text="">
        <p class="p-title">催收委托书</p>
      </ul>
    </div> -->
  </div>
</template>
<script>
  export default {
    name: 'collectionInfo',
    data() {
      return {
        mun:''
      };
    },
    methods: {
    },
    mounted() {
      var mun = this.$route.query.id;
      console.log(mun);
      this.$data.mun=mun;
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
    .collebox{
      margin-bottom: 1rem;
     
    }
     .p-title{
       display: block;
        margin-bottom: 0.3rem;
      }
    .colle{
      background-color: #fff;
      margin-top: 0.3rem;
      padding: 0.3rem;
      margin-bottom: 0.5rem;
    }
    .file{
      width: 100%;
    } 
    .word{
      padding:0.2rem 0.3rem;
      border: 1px solid #e5e5e5;
      margin-bottom: 0.3rem;
      border-radius:0.1rem;
      /*display: flex;*/
      /*align-items: center;*/
      line-height:1rem;
      i{
        display: inline-block;
        width:0.8rem;
        height: 0.8rem;
        border-radius: 100%; 
        text-align: center;
        line-height:0.8rem;
        background:url('../img/ic_liulan.png') no-repeat ;
        background-size: 100% 100%;
        float:left;
        margin-top: 0.05rem;
      }
      span{
        margin-left:0.2rem;
      }
      a{
        float: right;
        color:#E7B24D;
      }
    }
    .png{
      width:48%;
      display: inline-block;
      margin-bottom:0.3rem;
      img{
        width: 100%;
        height: 3rem;
      }
    }
    .png:nth-child(even){
      margin-right:0.25rem;
    }

    // .imgInfo{
    //   padding:0.5rem 0;
    //   background-color: #fff;
    //   margin-top:0.3rem;
    //   overflow: hidden;
    //   ul{
    //    width: 50%;
    //     float: left;
    //     padding:0.3rem;
    //     text-align: center;
    //     img{
    //       width:100%;
    //       height: 3rem;
    //     }
    //   }
    // }



</style>
