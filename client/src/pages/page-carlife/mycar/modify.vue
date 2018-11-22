
<template>
  <div id="carLife-myCarList">
    <header class="mui-bar mui-bar-nav">
      <!--<router-link :to="{name: 'carlifeMycarList'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>-->
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <h1 v-if="isAdd" class="mui-title">车辆添加</h1>
      <h1 v-else="" class="mui-title">车辆编辑</h1>
    </header>
    <ul class="mui-content mycar-modify">
      <li>
        <label class="title">车牌号</label>
        <span class="right">
          <span @click="showShortNameModal = true" class="arrow bottom car-shortname">{{submitData.carShortName || '请选择'}}</span>
          <input class="car-id" placeholder="请输入车牌号" v-model="submitData.carId"/>
        </span>
      </li>
      <li>
        <label class="title">品牌型号</label>
        <span class="right">
          <span @click="showCarModel = true" class="arrow right">
            <template v-if="!submitData.carModelNo">请选择</template>
            <template v-else="">
              {{submitData.carBrand}}{{submitData.carSeries}}{{submitData.carModel}}
            </template>
          </span>
        </span>
      </li>
      <li v-if="!isAdd">
        <span class="title">车架号</span>
        <span class="right">
          <input placeholder="请输入车架号" v-model="submitData.carVin"/>
        </span>
      </li>
      <li v-if="!isAdd">
        <span class="title">发动机号</span>
        <span class="right">
          <input placeholder="请输入发动机号" v-model="submitData.carEngineNumber"/>
        </span>
      </li>
    </ul>
    <div class="next-button">
      <div @click="submitFun" v-if="!submitLoading">保存</div>
      <div v-else>...</div>
    </div>
    <template v-if="showShortNameModal">
      <select-cityshortname :name="submitData.carShortName" @on-select="getCarShortName" class="fullscreen-modal"></select-cityshortname>
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
        submitLoading: false,
        submitData: {
          carShortName: '',
          carId: '',
          carLicenseNo: '',
          carBrand: '',
          carBrandNo: '',
          carSeries: '',
          carSeriesNo: '',
          carModel: '',
          carModelNo: '',
          carVin: '',
          carEngineNumber: ''
        }
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
        this.$data.submitData.carShortName = name;
        this.$data.showShortNameModal = false;
      },
      getCarValue(value) {
        this.$data.submitData.carBrand = value.brandName;
        this.$data.submitData.carBrandNo = value.brandNo;
        this.$data.submitData.carSeries = value.seriesName;
        this.$data.submitData.carSeriesNo = value.seriesNo;
        this.$data.submitData.carModel = value.modelName;
        this.$data.submitData.carModelNo = value.modelNo;
        this.closeCarModel();
      },
      closeCarModel() {
        this.$data.showCarModel = false;
      },
      submitFun() {
        let url = this.isAdd ? '/openapi/member/car/add' : '/openapi/member/car/update';
        this.$data.submitData.carLicenseNo = this.$data.submitData.carShortName + this.$data.submitData.carId;
        this.$formdata.post(url, {
          ...this.$data.submitData
        }, (res) => {
          if (res.success && res.success === 'true') {
            this.$Tools.layerOpen(this.isAdd ? '添加成功' : '修改成功');
            this.$router.push('/carlife/mycar/list');
          }
        });
      },
      getCarDetailByNo() {
        this.$formdata.post('/openapi/member/car/list', {
          currentPage: 1,
          pageSize: 99999999999
        }, (res) => {
          if (res.success && res.success === 'true') {
            let carDetail = res.data.filter(item => item.id === this.$route.query.id)[0];
            this.$data.submitData = carDetail;
            this.$data.submitData.carShortName = carDetail.carLicenseNo.substring(0, 1);
            this.$data.submitData.carId = carDetail.carLicenseNo.substring(1, carDetail.carLicenseNo.length);
          }
        });
      }
    },
    mounted() {
      document.body.style.backgroundColor = '#eeeeee';
      if (!this.isAdd) {
        this.getCarDetailByNo();
      }
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

