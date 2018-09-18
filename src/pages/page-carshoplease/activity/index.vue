
<template>
  <div id="carLeaseActivity">
    <div class="activity-info">
      <img src="../img/activity-bg.png" alt="">
      <div class="content">
        <div class="title"><img src="../img/activity-explain.png" alt=""></div>
        <ul class="explain">
          <li><span>活动名称：</span><span>{{activityInfo.saleName}}</span></li>
          <li><span>活动时间：</span><span>{{activityInfo.startTime}} - {{activityInfo.endTime}}</span></li>
          <!--<li><span>活动地点：</span><span>{{activityInfo.addr}}</span></li>-->
          <li><span>活动规则：</span><span>{{activityInfo.rule}}</span></li>
          <!--<li><span>活动流程：</span><span>{{activityInfo.expression}}</span></li>-->
        </ul>
        <div class="button">
          <div v-if="!this.$nativeAppUtils.getAPPDevice()" @click="openApp" >打开APP，立即参与</div>
          <div v-else @click="signupNow" >立即参与</div>
        </div>
        <!--<p class="bottom-text">如有问题请拨打官方电话：400-045-0968</p>-->
      </div>
    </div>
    <selectbrowser-modal @on-close="showModal=false" :isShow="showModal"></selectbrowser-modal>
  </div>
</template>

<script>
  import SelectBrowserModal from '@/components/selectbrowser-modal';
  export default {
    name: 'carLeaseActivity',
    data() {
      return {
        type: this.$route.query.type,
        memberNo: '',
        activityInfo: {},
        showModal: false
      };
    },
    components: {
      'selectbrowser-modal': SelectBrowserModal
    },
    methods: {
      openApp() {
        if (this.$Tools.isWeixinBrowser()) {
          this.$data.showModal = true;
        } else {
          this.$Tools.openApp();
        }
      },
      async signupNow() {
        if (this.$data.type === '2') {
          let memberNo = this.$nativeAppUtils.getNums();
          if (!memberNo) {
            this.$nativeAppUtils.toLogin();
            return false;
          }
          let res = await this.$http.post('/store/attend', {
            actType: this.$data.type,
            memberNo: memberNo
          });
          if (res.body.ifAttend === 'no') {
            this.$Tools.layerOpen('您没有免费接送的资格，去抽奖活动可获取资格');
            return false;
          }
        }
        this.$router.push({
          name: 'carShopLeaseOrderCreate',
          query: {
            type: this.$route.query.type
          }
        });
        this.$nativeAppUtils.titleShareIcon('hide');
      },
      async initData() {
        let res = await this.$http.get('/activity/travel/getOneActivity?id=' + this.$route.query.id);
        this.$data.activityInfo = res.body;
      }
    },
    mounted() {
      this.$nativeAppUtils.titleShareIcon('show');
      this.initData();
    }
  };
</script>

<style lang="scss" scoped>
  .activity-info {
    position: relative;
    > img {
      display: block;
      width: 100%;
    }
    .content {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      .title {
        > img {
          display: block;
          width: 7rem;
          margin: 0 auto;
        }
      }
      .explain {
        min-height: 5rem;
        margin: 0 .4rem;
        padding: .4rem;
        color: #fff;
        border: 2px solid #fff;
        border-radius: .3rem;
        li {
          display: flex;
          margin-bottom: .2rem;
          line-height: 1.4;
          span {
            display: inline-block;
            font-size: .38rem;
          }
          span:first-child {
            width: 2.8rem;
          }
          span:last-child {
            width: 100%;
            word-break: break-all;
          }
        }
      }
      .button {
        div {
          height: 1.4rem;
          margin: .6rem .4rem .4rem;
          line-height: 1.4rem;
          text-align: center;
          color: #fff;
          background: #405fab;
          border: 2px solid #fff;
          border-radius: 1.2rem;
        }
      }
      .bottom-text {
        margin-bottom: .4rem;
        text-align: center;
        color: #fff;
      }
    }
  }

</style>



