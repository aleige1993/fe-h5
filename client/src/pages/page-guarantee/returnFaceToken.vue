
<template>
  <div id="returnFaceToken">
    <header class="mui-bar mui-bar-nav">
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
      <h1 class="mui-title">担保人授权</h1>
      </header>
    <div class="mui-content">
        <protocol></protocol>
       <!--<div class="Change-panl">-->
         <!--<div class="guachange">-->
           <!--<input id="item1" type="radio" name="radio" value="0" >-->
           <!--<label for="item1"> <span></span> <b>同意</b></label>-->

         <!--</div>-->
         <!--<div class="guachange">-->
           <!--<input id="item2" type="radio" name="radio" value="1">-->
           <!--<label for="item2"> <span></span> <b>不同意</b></label>-->

         <!--</div>-->
       <!--</div>-->
      <div class="button-panl">
        <button @click="goback">不同意</button>
        <button @click="getToken">同意</button>
      </div>
    </div>
  </div>
</template>

<script>
  import  Protocol from  '@/pages/page-agreement/protocol'
  export default {
    name: 'returnFaceToken',
    data() {
      return {
        userInfo: '',
        res: ''
      };
    },
    components: {
      Protocol
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      this.$data.userInfo = this.$route.query;
      console.log(this.$data.userInfo);
    },
    methods: {
      async getToken() {
        layer.open({ type: 2, content: '加载中' });
        let res = await this.$formdata.post('/openapi/fbs/loans/loan/guarantee/agree', {
          guaPersonNo: this.$data.userInfo.guaPersonNo,
          isWill: 0,
          guaPersonCreditStatus: 0
        });
        if (res.success === 'true') {
          let res = await this.$formdata.post('/openapi/face/get/face/token', {
            memberName: this.$data.userInfo.guaPersonName,
            certNo: this.$data.userInfo.guaPersonCertNo,
            source: '2',
            returnUrl: 'http://pfnr93.natappfree.cc/#/resultFaceData?biz_no=' + this.$data.userInfo.guaPersonNo,
            bizNo: this.$data.userInfo.guaPersonNo
          });
          if (res.success === 'true') {
            window.location.href = "https://api.megvii.com/faceid/lite/do?token="+res.data.token;
          }
        }
      },
      goback() {
        this.$router.push({path:'/guarantee', query:{guaPersonNo: this.$data.userInfo.guaPersonNo}});
      }
    }
  };
</script>

<style lang="scss" scoped="">
  .button-panl{
    background-color: #fff;
    height:1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    border-top: 1px solid #e2e2e2;
  }
  .button-panl button{
    height:1rem;
    width: 40%;
    border:0;
    color: #fff;
  }
  .button-panl button:first-child{
    background-color: #ffa125;
  }
  .button-panl button:last-child{
    background-color: #3785ff;
  }

  .text-panl{
    padding:0.3rem;
    background-color: #fff;
  }
  .Change-panl{
    display:flex;
    justify-content: space-around;
  }
  div.guachange {
    position: relative;
    line-height: 30px;
  }
  .Change-panl label b{
    margin-left: 5px;
  }
  .Change-panl input[type="radio"] {
    width: 20px;
    height: 20px;
    opacity: 0;
  }

  .Change-panl label span{
    position: absolute;
    left: 5px;
    top: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #999;
  }
   .Change-panl input:checked+label span{
    background-color: #3785ff;
    border: 1px solid #3785ff;
  }

   .Change-panl input:checked+label span::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 10px;
    top: 3px;
    left: 6px;
    border: 2px solid #fff;
    border-top: none;
    border-left: none;
    transform: rotate(45deg)
  }

</style>
