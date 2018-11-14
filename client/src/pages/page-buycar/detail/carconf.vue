
<template>
  <div id="buycar-detail-carconf">
    <ul class="carconf-list">
      <li>厂商<span>预设内容</span></li>
      <li>级别<span>预设内容</span></li>
      <li>发动机<span>预设内容</span></li>
      <li>变速箱<span>预设内容</span></li>
      <li>长*宽*高（mm）<span>预设内容</span></li>
      <li>车身型式<span>预设内容</span></li>
      <li>最高速度（km/h）<span>预设内容</span></li>
      <li>燃料形式<span>预设内容</span></li>
      <li>工信部综合油耗（L/100km）<span>预设内容</span></li>
      <li>外部颜色<span>预设内容</span></li>
      <li>内饰颜色<span>预设内容</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'buyCarDetailCarConf',
    data() {
      return {

      };
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
