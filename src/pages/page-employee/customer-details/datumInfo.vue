<template>
  <div class="datum">
    <div class="changDiv">
      <div>
        <span :class="isback==1?'active':''" @click="changNum(1)">资料</span>
        <span :class="isback==2?'active':''" @click="changNum(2)">合同</span>
      </div>
    </div>
    <div class="datumInfo">
      <div class="datum datum_one" v-if="isback==1">
          <div class="imgInfo">
              <p>身份证照片</p>
              <img preview="0" src="../img/bg.png">
          </div>
        <div class="imgInfo">
          <p>身份证照片</p>
          <img preview="0" src="../img/bg.png">
        </div>
        <div class="imgInfo">
          <p>身份证照片</p>
          <img preview="0" src="../img/bg.png">
        </div>

      </div>
      <div class="datum datum_two" v-if="isback==2">
          <ul>
            <li>
              <i>图标</i>
              <span>这是什么资料</span>
              <a>点击</a>
            </li>
            <li>
              <i>图标</i>
              <span>这是什么资料</span>
              <a>点击</a>
            </li>
            <li>
              <i>图标</i>
              <span>这是什么资料</span>
              <a>点击</a>
            </li>
            <li>
              <i>图标</i>
              <span>这是什么资料</span>
              <a>点击</a>
            </li>
            <li>
              <i>图标</i>
              <span>这是什么资料</span>
              <a>点击</a>
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
        isback: 1
      };
    },
    methods: {
      changNum(num) {
        this.$data.isback = num;
      }
    },
    mounted() {
//      document.body.style.backgroundColor = '#eeeeee';
      this.$previewRefresh();
    },
    beforeDestroy() {
//      document.body.style.backgroundColor = '#fff';
    }
  };
</script>
<style lang="scss" scoped>
    .datum{
      padding:0.3rem;
      .changDiv{
        display: flex;
        justify-content: center;
        div{
          border: 1px solid #3785ff;
         display: flex;
          border-radius: 0.1rem;
        }
        span{
          padding: 0.1rem 0.7rem;
          text-align: center;
        }
        span:first-child{
          border-right:1px solid #3785ff;
        }
        span.active{
          background-color: #3785ff;
          color: #fff;
        }
      }
    .imgInfo{
      width: 100%;
      img{
        width: 80%;
        height: 4rem;
      }
    }
    .datum_two{
      ul{

        li{
          padding: 0.3rem;
          border:1px solid #e5e5e5;
          margin-bottom: 0.2rem;
          border-radius:0.1rem;
        }
      }

    }

    }
</style>
