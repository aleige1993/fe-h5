
<template>
  <div id="select-carmodel">
    <header id="select-carmodel-header" class="mui-bar mui-bar-nav">
      <span @click="goBack" class="mui-icon mui-icon-left-nav mui-pull-left"></span>
      <h1 class="mui-title">{{titleText[selectStep]}}</h1>
    </header>
    <div class="mui-content">
      <div id="select-carmodel-list" class="mui-indexed-list">
        <div id="select-carmodel-top">
          <div class="mui-indexed-list-search mui-input-row mui-search">
            <input v-model="searchValue" type="search" class="mui-input-clear" placeholder="搜索品牌">
          </div>
          <div class="mui-indexed-list-bar">
            <a v-if="list.groupName" v-for="list in carBrandList">{{list.groupName}}</a>
          </div>
          <div class="mui-indexed-list-alert"></div>
        </div>
        <div id="select-carmodel-inner" class="mui-indexed-list-inner">
          <div class="mui-indexed-list-empty-alert">没有数据</div>
          <ul class="mui-table-view">
            <template v-if="selectStep === 0 && carBrand.groupName" v-for="carBrand in carBrandList">
              <li class="mui-table-view-divider mui-indexed-list-group" :data-group="carBrand.groupName">{{carBrand.groupName}}</li>
              <li @click="getSeriesList(list.brandNo, list.brandName)" v-for="list in carBrand.groupList" class="mui-table-view-cell mui-indexed-list-item">{{list.brandName}}</li>
            </template>
            <template v-if="selectStep === 1 && carSeries.groupName"  v-for="carSeries in carSeriesList">
              <li class="mui-table-view-divider mui-indexed-list-group" :data-group="carSeries.groupName">{{carSeries.groupName}}</li>
              <li @click="getModelList(list.seriesNo, list.seriesName)" v-for="list in carSeries.groupList" class="mui-table-view-cell mui-indexed-list-item">{{list.seriesName}}</li>
            </template>
            <template v-if="selectStep === 2 && carModel.groupName"  v-for="carModel in carModelList">
              <li class="mui-table-view-divider mui-indexed-list-group" :data-group="carModel.groupName">{{carModel.groupName}}</li>
              <li @click="selectModel(list.modelNo, list.modelName)" v-for="list in carModel.groupList" class="mui-table-view-cell mui-indexed-list-item">{{list.modelName}}</li>
            </template>
          </ul>
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
        selectCarModel: false,
        selectStep: 0, // 0,1,2分别代表选择品牌,车系,车型
        titleText: ['车辆品牌', '车系', '车型'],
        carBrandList: [],
        carSeriesList: [],
        carModelList: [],
        carValue: {
          brandNo: '',
          brandName: '',
          seriesNo: '',
          seriesName: '',
          modelNo: '',
          modelName: ''
        },
        searchValue: ''
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
      selectModel(modelNo, modelName) {
        this.$data.carValue.modelNo = modelNo;
        this.$data.carValue.modelName = modelName;
        this.$emit('on-select', this.$data.carValue);
      },
      async getModelList(seriesNo, seriesName) {
        this.$data.selectStep = 2;
        this.$data.carValue.seriesNo = seriesNo;
        this.$data.carValue.seriesName = seriesName;
        let res = await this.$formdata.post('/openapi/common/cars/model', {
          seriesNo
        });
        if (res.success && res.success === 'true') {
          this.$data.carModelList = res.data.resultList;
        }
      },
      async getSeriesList(brandNo, brandName) {
        this.$data.selectStep = 1;
        this.$data.carValue.brandNo = brandNo;
        this.$data.carValue.brandName = brandName;
        let res = await this.$formdata.post('/openapi/common/cars/series', {
          brandNo
        });
        if (res.success && res.success === 'true') {
          this.$data.carSeriesList = res.data.resultList;
        }
      },
      async getBrandList() {
        let res = await this.$formdata.post('/openapi/common/cars/brand', {
          brandName: this.$data.searchValue
        });
        if (res.success && res.success === 'true') {
          this.$data.carBrandList = res.data.resultList;
          this.$nextTick(() => {
            mui.init();
            mui.ready(function() {
              let header = document.getElementById('select-carmodel-header');
              let list = document.getElementById('select-carmodel-list');
              list.style.height = (document.documentElement.clientHeight - header.offsetHeight) + 'px';
              new mui.IndexedList(list);
            });
          });
        }
      }
    },
    watch: {
      'selectStep'(val) {
        document.getElementById('select-carmodel-top').style.display = val === 0 ? 'block' : 'none';
        document.getElementById('select-carmodel-inner').style.marginTop = val === 0 ? '0' : '10px';
      },
      'searchValue'() {
        this.getBrandList();
      }
    },
    mounted() {
      this.getBrandList();
    }
  };
</script>
