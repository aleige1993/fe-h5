
<template>
  <div id="buycar-detail-carconf">
    <ul class="carconf-list">
      <li>厂商<span>暂无提供</span></li>
      <li>级别<span>{{carConfInfo.classType}}</span></li>
      <li>发动机<span>{{carConfInfo.engine}}</span></li>
      <li>变速箱<span>{{carConfInfo.gearboxType}}</span></li>
      <li>长*宽*高（mm）<span>{{carConfInfo.longMm}}*{{carConfInfo.width}}*{{carConfInfo.hight}}</span></li>
      <li>车身型式<span>{{carConfInfo.struct}}</span></li>
      <li>最高速度（km/h）<span>{{carConfInfo.highSpeed}}</span></li>
      <li>燃料形式<span>{{carConfInfo.engineFuel}}</span></li>
      <li>工信部综合油耗（L/100km）<span>暂无提供</span></li>
      <li>外部颜色<span>暂无提供</span></li>
      <li>内饰颜色<span>暂无提供</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'buyCarDetailCarConf',
    data() {
      return {
        carConfInfo: {}
      };
    },
    async mounted() {
      let res = await this.$formdata.post('/openapi/ces/cars/car', {
        modelNo: this.$route.query.modelNo
      });
      if (res.success && res.success === 'true') {
        this.$data.carConfInfo = res.data;
      }
    }
  };
</script>

<style lang="scss" scoped="">
  .carconf-list {
    margin: 0 .4rem;
    li {
      padding: .3rem;
      border-bottom: 1px solid #E5E5E5;
      span {
        float: right;
        color: gray;
      }
    }
  }
</style>
