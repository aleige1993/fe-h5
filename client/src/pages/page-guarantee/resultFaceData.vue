
<template>
  <div id="resultFaceData">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
      <h1 class="mui-title">人脸识别结果</h1>
      <!--<router-link :to="{name: 'carlifeMycarList'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">车辆管理</router-link>-->
    </header>
    <div class="mui-content">

      <div v-if="isShow" class="result">
        <img src="./img/success.png"/>
        <b class="blue">恭喜你认证通过~</b>
      </div>

      <div v-else class="result">
        <img src="./img/error.png"/>
        <b>对不起认证失败~~~<a @click="goback">去重新认证</a></b>
      </div>

      {{res}}

    </div>
  </div>
</template>

<script>
  export default {
    name: 'resultFaceData',
    data() {
      return {
        biz_no: '',
        isShow: false,
        res: ''
      };
    },
    mounted() {
      this.$data.biz_no = this.$route.query.biz_no;
      this.liteDo();
    },
    methods: {
      async liteDo() {
        let res = await this.$formdata.post('/openapi/face/guaperson/face/credit', {bizNo: this.$data.biz_no});
        this.$data.res = res;
        console.log(res);
        if (res.success === 'true') {
          this.$data.isShow = true;
        } else {
          this.$data.isShow = false;
        }
      },
      goback() {
        this.$router.push({path:'/guarantee', query:{guaPersonNo: this.$data.biz_no}});
      }
    }
  };
</script>

<style lang="scss" scoped="">
    .result{
     text-align: center;
    }
    .result img{
      width: 128px;
      height: 128px;
      margin:50px 0;
    }
    .result b{
      display: block;
      color: #666;
    }
    .blue{
      color: #3785ff !important;
    }
</style>
