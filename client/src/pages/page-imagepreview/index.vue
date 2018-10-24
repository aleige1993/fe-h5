<template>
  <div id="bannerDetail">
      <img :src="path">
  </div>
</template>
<script>
  export default {
    name: 'bannerDetail',
    data() {
      return {
        path: this.$route.query.path
      };
    }
  };
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>







