
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeMycarList'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">车辆添加</h1>
    </header>
    <ul class="mui-content mycar-modify">
      <li>
        <label class="title">车牌号</label>
        <span class="right">
          <span class="arrow bottom">请选择</span>
          <input placeholder="请输入"/>
        </span>
      </li>
      <li>
        <label class="title">品牌型号</label>
        <span class="right">
          <span @click="showCarModel = true" class="arrow right">请选择</span>
        </span>
      </li>
      <li>
        <span class="title">车架号</span>
        <span class="right">
          <input placeholder="请输入车架号"/>
        </span>
      </li>
      <li>
        <span class="title">发动机号</span>
        <span class="right">
          <input placeholder="请输入发动机号"/>
        </span>
      </li>
    </ul>
    <div class="next-button">
      <div>保存</div>
    </div>
    <select-carmodel class="select-carmodel" v-if="showCarModel"
                     @on-close="closeCarModel" @on-select="getCarValue"></select-carmodel>
  </div>
</template>


<style lang="scss" scoped="">
  .mycar-modify {
    background: #fff;
    li {
      display: inline-flex;
      align-items: center;
      width: 100%;
      padding: .4rem;
      line-height: .6rem;
      border-bottom: 1px solid #e5e5e5;
      .title {
        width: 5em;
      }
      .right {
        width: 100%;
        text-align: right;
        input {
          display: inline-block;
          height: .6rem;
          line-height: .6rem;
          font-size: .4rem;
          text-align: right;
          border: none;
        }
        .arrow:after {
          font-family: Muiicons;
          font-size: inherit;
          line-height: 1;
          display: inline-block;
          color: #bbb;
        }
        .bottom:after {
          content: '\e581';
        }
        .right:after {
          content: '\e583';
        }
      }
      /*.title {*/
        /*display: inline-block;*/
        /*width: 5em;*/
      /*}*/
      /*input {*/
        /*width: 10em;*/
        /*font-size: .4rem;*/
        /*border: none;*/
      /*}*/
      /*.bottom, .right {*/
        /*color: gray;*/
      /*}*/
      /*.bottom:after {*/
        /*content: '\e581';*/
        /*font-family: Muiicons;*/
        /*font-size: inherit;*/
        /*line-height: 1;*/
        /*display: inline-block;*/
        /*color: #bbb;*/
      /*}*/
    }
  }
  .next-button {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 9;
    div {
      height: 1.1rem;
      margin: .4rem;
      line-height: 1.1rem;
      text-align: center;
      color: #fff;
      background: #2193fc;
      border-radius: .1rem;
    }
  }
  .select-carmodel {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 99;
  }
</style>

<script>
  import SelectCarmodel from "../../../components/select-carmodel/index.vue";
  export default {
    name: 'carLife-myCarList',
    data() {
      return {
        showCarModel: false,
        carValue: {}
      };
    },
    components: {
      SelectCarmodel
    },
    methods: {
      closeCarModel() {
        this.$data.showCarModel = false;
      },
      getCarValue(carValue) {
        this.$data.carValue = carValue;
        this.$data.showCarModel = false;
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
    },
    beforeDestroy() {
      document.body.style.backgroundColor = '#fff';
    }
  };
</script>

