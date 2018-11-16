
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name: 'carlifeMycarList'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 v-if="isAdd" class="mui-title">车辆添加</h1>
      <h1 v-else="" class="mui-title">车辆编辑</h1>
    </header>
    <ul class="mui-content mycar-modify">
      <li>
        <label class="title">车牌号</label>
        <span class="right">
          <span @click="showShortNameModal = true" class="arrow bottom car-shortname">{{carShortName}}</span>
          <input class="car-id" placeholder="请输入车牌号" value=""/>
        </span>
      </li>
      <li>
        <label class="title">品牌型号</label>
        <span class="right">
          <span @click="showCarModel = true" class="arrow right">
            <template v-if="!carBrandValue">请选择</template>
            <template v-else="">
              {{carBrandValue.brandName}}{{carBrandValue.seriesName}}{{carBrandValue.modelName}}
            </template>
          </span>
        </span>
      </li>
      <li v-if="!isAdd">
        <span class="title">车架号</span>
        <span class="right">
          <input placeholder="请输入车架号"/>
        </span>
      </li>
      <li v-if="!isAdd">
        <span class="title">发动机号</span>
        <span class="right">
          <input placeholder="请输入发动机号"/>
        </span>
      </li>
    </ul>
    <div class="next-button">
      <div>保存</div>
    </div>
    <template v-if="showShortNameModal">
      <select-cityshortname :name="carShortName" @on-select="getCarShortName" class="fullscreen-modal"></select-cityshortname>
      <div @click="showShortNameModal = false" class="fullscreen-mask"></div>
    </template>
    <select-carmodel class="fullscreen-modal fullheight" v-if="showCarModel" @on-close="closeCarModel" @on-select="getCarValue"></select-carmodel>
  </div>
</template>

<script>
  import SelectCityshortname from "../../../components/select-cityshortname/index.vue";
  import SelectCarmodel from "../../../components/select-carmodel/index.vue";
  export default {
    name: 'carLife-myCarList',
    data() {
      return {
        showShortNameModal: false,
        showCarModel: false,
        carShortName: '渝',
        carBrandValue: null
      };
    },
    props: {
      isAdd: {
        type: Boolean,
        default: true,
        required: false
      }
    },
    components: {
      SelectCityshortname,
      SelectCarmodel
    },
    methods: {
      getCarShortName(name) {
        this.$data.carShortName = name;
        this.$data.showShortNameModal = false;
      },
      getCarValue(value) {
        this.$data.carBrandValue = value;
        this.closeCarModel();
      },
      closeCarModel() {
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
        /*overflow: hidden;*/
        /*white-space: nowrap;*/
        /*text-overflow: ellipsis;*/
        input::-webkit-input-placeholder,  .arrow{
          color: gray;
        }
        input {
          display: inline-block;
          height: .6rem;
          line-height: .6rem;
          font-size: .38rem;
          text-align: right;
          border: none;
          &.car-id {
            width: 6em;
          }
        }
        .arrow {
          &:after {
            font-family: Muiicons;
            font-size: inherit;
            line-height: 1;
            display: inline-block;
            color: #bbb;
          }
        }
        .bottom:after {
          content: '\e581';
        }
        .right:after {
          content: '\e583';
        }
      }
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
</style>

