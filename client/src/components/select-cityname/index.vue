
<template>
  <div id="select-city">
    <header id="select-city-header" class="mui-bar mui-bar-nav">
      <span @click="goBack" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
      <h1 class="mui-title">选择地区</h1>
    </header>
    <div class="mui-content">
      <div id="select-city-list" class="mui-indexed-list">
        <div id="select-city-top">
          <div class="mui-indexed-list-search mui-input-row mui-search"></div>
          <div class="mui-indexed-list-bar"></div>
          <div class="mui-indexed-list-alert"></div>
        </div>
        <div id="select-city-inner" class="mui-indexed-list-inner">
          <template v-if="selectStep === 0">
            <div v-if="provinceList && !provinceList.length" class="mui-indexed-list-empty-alert">没有数据</div>
            <ul v-else="" class="mui-table-view">
                <li @click="getCityList(list.provinceId, list.provinceName, list.cityList)" v-for="list in provinceList" class="mui-table-view-cell mui-indexed-list-item">
                  {{list.provinceName}}
                </li>
            </ul>
          </template>
          <template v-if="selectStep === 1">
            <div v-if="cityList && !cityList.length" class="mui-indexed-list-empty-alert">没有数据</div>
            <ul v-else="" class="mui-table-view">
              <li @click="getDistrictList(list.cityId, list.cityName, list.districtList)" v-for="list in cityList" class="mui-table-view-cell mui-indexed-list-item">
                {{list.cityName}}
              </li>
            </ul>
          </template>
          <template v-if="selectStep === 2">
            <div v-if="districtList && !districtList.length" class="mui-indexed-list-empty-alert">没有数据</div>
            <ul v-else="" class="mui-table-view">
              <li @click="selectDistrict(list.districtId, list.districtName)" v-for="list in districtList" class="mui-table-view-cell mui-indexed-list-item">
                {{list.districtName}}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'select-carmodel',
    data() {
      return {
        selectStep: 0, // 0,1,2分别代表选择省,市,区
        provinceList: null,
        cityList: null,
        districtList: null,
        cityValue: {
          provinceId: '',
          provinceName: '',
          cityId: '',
          cityName: '',
          districtId: '',
          districtName: ''
        }
      };
    },
    methods: {
      goBack() {
        if (this.$data.selectStep === 0) {
          this.$emit('on-close', false);
        } else {
          this.$data.selectStep = this.$data.selectStep - 1;
        }
      },
      selectDistrict(districtId, districtName) {
        this.$data.cityValue.districtId = districtId;
        this.$data.cityValue.districtName = districtName;
        this.$emit('on-select', this.$data.cityValue);
      },
      async getDistrictList(cityId, cityName, districtList) {
        this.$data.selectStep = 2;
        this.$data.cityValue.cityId = cityId;
        this.$data.cityValue.cityName = cityName;
        this.$data.districtList = districtList;
      },
      async getCityList(provinceId, provinceName, cityList) {
        this.$data.selectStep = 1;
        this.$data.cityValue.provinceId = provinceId;
        this.$data.cityValue.provinceName = provinceName;
        this.$data.cityList = cityList;
      },
      async getProvinceList() {
        this.$data.provinceList = null;
        let res = await this.$formdata.post('/openapi/common/regions', {});
        if (res.success && res.success === 'true') {
          this.$data.provinceList = res.data;
          this.$nextTick(() => {
            mui.init();
            mui.ready(function() {
              let header = document.getElementById('select-city-header');
              let list = document.getElementById('select-city-list');
              list.style.height = (document.documentElement.clientHeight - header.offsetHeight) + 'px';
              new mui.IndexedList(list);
            });
          });
        }
      }
    },
    mounted() {
      this.getProvinceList();
    }
  };
</script>

<style lang="scss" scoped="">
  .mui-indexed-list-empty-alert {
    display: block;
  }
</style>
