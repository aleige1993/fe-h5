<template>
  <div class="basic">
      <ul>
        <li>
          <span>客户名称:</span>
          <a>再见</a>
        </li>
        <li>
          <span>性别:</span>
          <a>女</a>
        </li>
        <li>
          <span>证件号码:</span>
          <a>5003811999889288</a>
        </li>
        <li>
          <span>客户电话:</span>
          <a>15870523697</a>
        </li>
        <li>
          <span>本地有否房产:</span>
          <a>否</a>
        </li>
        <li>
          <span>职业类型:</span>
          <a>国企单位</a>
        </li>
        <li>
          <span>教育程度:</span>
          <a>本科</a>
        </li>
        <li>
          <span>客户户籍地址:</span>
          <a>重庆市大渡口区平安轻轨</a>
        </li>
        <li>
          <span>客户工作地址:</span>
          <a>重庆市大渡口区平安轻轨</a>
        </li>
        <li>
          <span>客户常驻地址:</span>
          <a>重庆市大渡口区平安轻轨</a>
        </li>
        <li>
          <span>婚姻状况:</span>
          <a>已婚</a>
        </li>
        <li>
          <span>配偶姓名:</span>
          <a>凤凰</a>
        </li>
        <li>
          <span>联系电话:</span>
          <a>166297377</a>
        </li>
        <li>
          <span>担保人:</span>
          <a>123</a>
        </li>
        <li>
          <span>担保关系:</span>
          <a>夫妻</a>
        </li>
        <li>
          <span>担保证件号码:</span>
          <a>166297377</a>
        </li>
        <li>
          <span>联系电话:</span>
          <a>166297377</a>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    name: 'basicInfo',
    data() {
      return {
      };
    },
    mounted() {
      var mun = this.$route.query.id;
      console.log(mun);
    },
    methods: {
    }
  };
</script>
<style lang="scss" scoped>
  @import './pubild.scss';
</style>
