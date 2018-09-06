<template>
  <div id="recruit" :class="{addamt:isshow}">
    <div class="areaImg">
      <span class="atm-one"></span>
      <span class="atm-two"></span>
      <span class="atm-three"></span>
      <span class="atm-four"></span>
    </div>
    <div class="car-form">
      <div class="car-li">
        <span>姓名</span>
        <input type="text" v-model="formData.name" placeholder="请输入"/>
      </div>
      <div class="car-li">
        <span>电话</span>
        <input type="number" v-model="formData.mobile" placeholder="请输入"/>
      </div>
      <div class="car-li">
        <span>邮箱</span>
        <input type="text" v-model="formData.email" placeholder="请输入"/>
      </div>
      <div class="car-li">
        <span>地址</span>
        <input type="text" v-model="formData.address" placeholder="请输入"/>
      </div>
      <div class="car-type">
        <a>所属行业</a>
        <span @click="clickindex(0)" :class="{active: formData.industryType === 0}">汽车</span>
        <span @click="clickindex(1)" :class="{active: formData.industryType === 1}">金融</span>
        <span @click="clickindex(2)" :class="{active: formData.industryType === 2}">其他</span>
      </div>
      <div class="area">
        <!--<span>意向信息</span>-->
        <textarea v-model="formData.remark" placeholder="请输入意向信息"></textarea>
      </div>
      <div class="sbmit" @click="submit">提 交</div>
    </div>
  </div>
</template>
<script>
  import WXShare from '@/utils/WXShare';
  export default {
    name: 'recruit',
    data() {
      return {
        isshow: false,
        formData: {
          name: '',
          mobile: '',
          address: '',
          email: '',
          remark: '',
          industryType: 0
        }
      };
    },
    beforeCreate() {
      layer.open({
        type: 2,
        content: '加载中'
      });
    },
    methods: {
      layerOpen(msg) {
        layer.open({
          content: msg,
          skin: 'msg',
          time: 2
        });
      },
      clickindex(index) {
        this.$data.formData.industryType = index;
      },
      async submit() {
        if (!this.$data.formData.name) {
          this.layerOpen('姓名不能为空');
          return false;
        }
        if (!(/^1\d{10}$/.test(this.$data.formData.mobile))) {
          this.layerOpen('请输入正确的手机号');
          return false;
        }
        if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.$data.formData.email))) {
          this.layerOpen('请输入正确格式的邮箱');
          return false;
        }
        let resp = await this.$http.post('/h5/app/recruit/add', this.$data.formData, false);
        layer.open({
          type: 2,
          content: '提交...'
        });
        if (resp.success && resp.success === 'true') {
          layer.closeAll();
          this.layerOpen('报名成功！快去分享吧！');
          this.$data.formData = {
            name: '',
            mobile: '',
            address: '',
            email: '',
            remark: '',
            industryType: 0
          };
        } else {
          this.layerOpen(resp.reMsg);
        }
      }
    },
    mounted() {
      var _this = this;
      setTimeout(() => {
        layer.closeAll();
      }, 1000);
      setTimeout(() => {
        _this.$data.isshow = true;
      }, 1000);
      wx.ready(() => {
        let title = '颂车小站站主招募';
        let desc = '颂车小站开始招募,快来报名吧！！！';
        let link = 'https://feh5.songchedai.com/#/recruitTwo';
        let imgUrl = 'http://www.songcw.com/carShopLogo.png';
        WXShare.create(title, desc, link, imgUrl, function() {
          this.layerOpen('分享成功！');
        });
      });
    }
  };
</script>
<style lang="css" scoped>
  * {
    box-sizing: border-box;
  }
  input::-webkit-input-placeholder {
    color: #d2d2d2;
  }

  textarea::-webkit-input-placeholder {
    /*text-indent: 2.1rem;*/
    color: #d2d2d2;
    outline: none;
    border: none;
  }

  #recruit {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("img/bigbj.png") no-repeat;
    background-size: 120% 120%;
    padding-top:1rem;
  }
  .addamt{
    background-size: 100% 100% !important;
    transition-property: background-size;
    transition-duration: 2s;
    /*animation: bagamt 2.5s infinite;*/
    /*animation-iteration-count:1;*/
    /*animation-direction:alternate;*/
  }
  .car-form {
    /*margin-top: 8rem;*/
    width: 100%;
    padding: 0 10%;
    box-sizing: border-box;
    position: relative;
  }

  .car-form .car-li {
    border: 1px solid #c5c5c5;
    height: 1.1rem;
    margin-bottom: 0.55rem;
    display: flex;
    align-items: center;
    border-radius: 1.1rem;
    background-color: #fff;
  }
  .areaImg{
    width: 100%;
    height:5rem;
    background: url("img/centerBj.png") no-repeat;
    background-size: 100% 100%;
    margin:0rem 0 3.5rem 0;
    position: relative;
  }
  .areaImg span{
    display: inline-block;
    width:0.3rem;
    height: 0.4rem;
    background: url("img/rightup.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 5;
  }
  .atm-one{
    bottom:2rem;
    left:0.3rem;
    animation:scrl 1s linear infinite;
    animation-direction:alternate;
  }
  .atm-two{
    top: -0.3rem;
    right: 0.5rem;
    /*animation-delay:1s;*/
    animation:scrl 1.5s linear infinite;
    animation-direction:alternate;
  }
  .atm-three{
    bottom:0.5rem;
    left:1rem;
    /*animation-delay:2s;*/
    animation:scrl 2s linear infinite;
    animation-direction:alternate;
  }
  .atm-four{
    top: 1.5rem;
    right: 0.7rem;
    /*animation-delay:3s;*/
    animation:scrl 2.5s linear infinite;
    animation-direction:alternate;
  }

  @keyframes scrl {
    0%{
      transform:scale(0.2)
    }
    100%{
      transform:scale(1)
    }
  }
  @keyframes bagamt {
    0%{
      background-size: 120% 120%;
    }
    100%{
      background-size: 100% 100%;
    }
  }

  .car-form .car-li span {
    color: #434343;
    font-size: 0.35rem;
    padding-left: 0.5rem;
    padding-right: 0.2rem;
    display: inline-block;
    border-right: 1px solid #434343;
    margin-right: 0.2rem;
    display: inline-block;
  }
  /*.carlunone{*/
    /*display:inline-block;*/
    /*background: url("img/lunzi.png") no-repeat;*/
    /*background-size:100% 100%;*/
    /*width: 0.6rem;*/
    /*height: 0.6rem;*/
    /*margin-top: 0.68rem;*/
    /*margin-left: 0.36rem;*/
    /*animation:rotating 1.2s linear infinite;*/
  /*}*/
  /*.carluntwo{*/
    /*float: right;*/
    /*display:inline-block;*/
    /*background: url("img/lunzi.png") no-repeat;*/
    /*background-size:100% 100%;*/
    /*width: 0.55rem;*/
    /*height: 0.55rem;*/
    /*margin-top: 0.7rem;*/
    /*margin-right: 0.3rem;*/
    /*animation:rotating 1.2s linear infinite;*/
  /*}*/
  .car-form .car-li input {
    height: 0.9rem;
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: #434343;
    font-size: 0.35rem;
  }

  .car-form div.area {
    position: relative;
    border: 1px solid #c5c5c5;
    margin-bottom: 0.55rem;
    border-radius: 5px;
    background-color: #fff;
  }

  .car-form div.area span {
    position: absolute;
    color: #fff;
    font-size: 0.35rem;
    padding-left: 0.5rem;
    padding-right: 0.2rem;
    display: inline-block;
    border-right: 1px solid #fff;
    margin-right: 0.2rem;
    top: 0.35rem;
  }

  .car-form div.area textarea {
    min-height: 3rem;
    width: 100%;
    background: none;
    /*text-indent: 2.1rem;*/
    color: #434343;
    padding: 0.1rem 0.3rem;
    font-size: 0.35rem;
    line-height: 0.7rem;
    border: none;
    outline: none;
    -webkit-border: none;
    -webkit-outline: none;
    color: #434343;
  }

  .car-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.55rem;
    padding: 0 0.5rem;
  }

  .car-type a {
    color: #fff;
    font-size: 0.35rem;
  }

  .car-type span {
    padding: 0.1rem 0.3rem;
    color: #fff;
    font-size: 0.35rem;
    border-radius: 0.5rem;
    border: 1px solid #fff;
  }

  .car-type span.active {
    background-color: #fff;
    border: 1px solid #fff;
    color: #434343;
  }

  .sbmit {
    width: 100%;
    height: 1.1rem;
    background-color: #bd000f;
    color: #fff;
    text-align: center;
    line-height: 1.1rem;
    border-radius: 1.1rem;
    font-size: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .bjhader {
    width: 100%;
    padding: 1rem 5% 0.5rem 5%;
  }

  /*.carImg {*/
    /*position: absolute;*/
    /*width: 3.5rem;*/
    /*height: 1.3rem;*/
    /*top: -1.3rem;*/
    /*left: 35%;*/
    /*background-image: url("./img/1.png");*/
    /*background-size: 100% 100%;*/
    /*animation: bgchange 10s infinite;*/
    /*-webkit-animation: bgchange 10s infinite;*/
  /*}*/
  @keyframes rotating{
    from{transform:rotate(360deg)}
    to{transform:rotate(0)}
  }
  @-webkit-keyframes rotating{
    from{transform:rotate(360deg)}
    to{transform:rotate(0)}
  }
  /*@keyframes bgchange {*/
    /*20% {*/
      /*background: url(./img/2.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*40% {*/
      /*background: url(./img/3.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*60% {*/
      /*background: url(./img/4.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*80% {*/
      /*background: url(./img/5.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*100% {*/
      /*background: url(./img/1.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
  /*}*/
  /*@-webkit-keyframes bgchange {*/
    /*20% {*/
      /*background: url(./img/2.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*40% {*/
      /*background: url(./img/3.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*60% {*/
      /*background: url(./img/4.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*80% {*/
      /*background: url(./img/5.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
    /*100% {*/
      /*background: url(./img/1.png) no-repeat;*/
      /*background-size: 100% 100%;*/
    /*}*/
  /*}*/

</style>
