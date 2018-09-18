<template>
  <div class="datum">
    <div class="changDiv">
      <div>
        <span :class="isback==1?'active':''" @click="changNum(1)">资料</span>
        <span :class="isback==2?'active':''" @click="changNum(2)">合同</span>
      </div>
    </div>
    <div class="datumInfo">
      <div class="datum_one" v-if="isback==1">
          <div class="imgInfo">
            <img preview="0" src="../img/bg.png">
            <p>身份证照片</p>
          </div>
          <div class="imgInfo">
            <img preview="0" src="../img/bg.png">
            <p>身份证照片</p>
          </div>
        <div class="imgInfo">
          <img preview="0" src="../img/bg.png">
          <p>身份证照片</p>
        </div>
        <div class="imgInfo">
          <img preview="0" src="../img/bg.png">
          <p>身份证照片</p>
        </div>
      </div>
      <div class="datum_two" v-if="isback==2">
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
  </div>
</template>
<script>
  export default {
    name: 'datumInfo',
    data() {
      return {
        isback:1
      };
    },
    methods: {
      changNum(num) {
        this.$data.isback = num;
      }
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
    .datum{
      padding:0.3rem;
      background-color: #fff;
      .changDiv{
        display: flex;
        justify-content: center;
        margin:0.5rem 0;
        div{
         display: flex;
        }
        span{
          padding: 0.1rem 0.7rem;
          text-align: center;
          color:#707070;
          border: 1px solid #BFBFBF;
        }
        span:first-child{
          border-right:none;
          border-bottom-left-radius:0.1rem;
          border-top-left-radius:0.1rem;
        }
        span:last-child{
          border-left:none;
          border-bottom-right-radius:0.1rem;
          border-top-right-radius:0.1rem;
        }
        span.active{
          background-color:#E7B24D;
          color: #fff;
          border: 1px solid #E7B24D;
        }
      }
    .imgInfo{
      width: 100%;
      img{
        width: 100%;
        height: 2rem;
      }
    }

    .datum_one{
      padding:0.3rem  0;
      .imgInfo{
        width:32.4%;
        display: inline-block;
        text-align: center;
        margin-bottom:0.3rem;
        p{
          font-size:0.38rem;
        }
      }
    }
    .datum_two{
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
    }
</style>
