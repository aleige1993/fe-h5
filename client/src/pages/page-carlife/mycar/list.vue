
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeIndex'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">车辆管理</h1>
      <router-link :to="{name: 'carlifeMycarAdd'}" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right"><span class="mui-icon mui-icon-plusempty"></span></router-link>
    </header>
    <ul class="mui-content mycar-list">
      <li v-for="list in myCarList" @click="goDetail(list.id)">
        <img :src="list.carPicUrl" alt="">
        <div class="text">
          <h1>{{list.carLicenseNo}}</h1>
          <p>{{list.carBrand}}{{list.carSeries}}{{list.carModel}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'carLife-myCarList',
    data() {
      return {
        myCarList: []
      };
    },
    methods: {
      goDetail(id) {
        this.$router.push({
          name: 'carlifeMycarModify',
          query: {
            id
          }
        });
      }
    },
    mounted() {
      this.$formdata.post('/openapi/member/car/list', {
        currentPage: 1,
        pageSize: 99999999999
      }, (res) => {
        if (res.success && res.success === 'true') {
          this.$data.myCarList = res.data;
        }
      });
    }
  };
</script>
<style lang="scss" scoped="">
  .mycar-list li{
    position: relative;
    display: flex;
    padding: .4rem;
    border-bottom: 1px solid #EEEEEE;
    img {
      width: 2.2rem;
      height: 1.6rem;
    }
    .text {
      margin-left: .3rem;
      h1 {
        margin-bottom: 5px;
        font-size: .38rem;
        font-weight: bold;
      }
      p {
        font-size: .34rem;
        color: gray;
      }
    }
  }
</style>
