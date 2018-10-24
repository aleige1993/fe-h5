<template>
  <div class="dispatch">
    <div class="cuidan">
      <div>
        <b>催收单号</b>
        <p>5456587854568464565</p>
      </div>
      <div>
        <b>任务类型<span>*</span></b>
        <p>恢复GPS</p>
      </div>
    </div>
    <div class="wenjian">
      <div class="imgInfo">
        <p class="titele">图片浏览</p>
        <ul>
          <img  preview="0" src="../img/bg.png" preview-text="">
          <p class="p-title">催收委托书</p>
        </ul>
        <ul>
          <img  preview="0" src="../img/bg.png" preview-text="">
          <p class="p-title">催收委托书</p>
        </ul>
        <ul>
          <img  preview="0" src="../img/bg.png" preview-text="">
          <p class="p-title">催收委托书</p>
        </ul>
        <ul>
          <img  preview="0" src="../img/bg.png" preview-text="">
          <p class="p-title">催收委托书</p>
        </ul>
      </div>
      <div class="datum_two margin">
        <p>文件浏览</p>
        <ul>
          <li>
            <i><img src="../img/ic_liulan.png"/></i>
            <span>这是文件标题</span>
            <a>查看</a>
          </li>
          <li>
            <i><img src="../img/ic_liulan.png"/></i>
            <span>这是文件标题</span>
            <a>查看</a>
          </li>
          <li>
            <i><img src="../img/ic_liulan.png"/></i>
            <span>这是文件标题</span>
            <a>查看</a>
          </li>
          <li>
            <i><img src="../img/ic_liulan.png"/></i>
            <span>这是文件标题</span>
            <a>查看</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="gpsInfo margin">
      <b class="p-title">最近GPS轨迹</b>
      <ul>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
        <li><span>·</span>重庆大渡口区平安轻轨车站</li>
      </ul>
    </div>
    <div class="gpsInfo border">
      <b class="p-title">任务期望完成时间</b>
      <ul>
        <li>2018-09-12</li>
      </ul>
    </div>
    <div class="gpsInfo">
      <b class="p-title">备注</b>
      <ul>
        <li>记得拍小视频哟</li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'dispatchInfo',
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
  .titele{
    padding:0.3rem;
  }
   .margin{
     margin-top:0.3rem;
   }
   .border{
     border-bottom: 1px solid #e5e5e5;
     border-top:1px solid #e5e5e5;
   }
   .cuidan{
     background-color: #fff;
     padding:0.5rem 0.3rem;
     div:first-child{
       margin-bottom:0.8rem;
     }
     div{
       p{
         color: #707070;
         margin-top:0.1rem;
       }
     }
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
   .datum_two{
     background-color: #fff;
     padding:0.3rem;
     p{
       padding:0.5rem 0;
     }
     ul{
       padding:0.3rem 0;
       li{
         padding:0.3rem;
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
           border: 1px solid #000;
           text-align: center;
           line-height:0.8rem;
           img{
             width:0.4rem;
             /*height: 0.2rem;*/
           }
         }
         span{
           margin-left:0.2rem;
         }
         a{
           float: right;
           color:#E7B24D;
         }
       }
     }
   }
</style>
