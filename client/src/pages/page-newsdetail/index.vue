<template>
  <div id="newsDetail" class="news-detail" v-html="content">
  </div>
</template>
<script>
  export default {
    name: 'newsDetail',
    data() {
      return {
        id: this.$route.query.id,
        content: ''
      };
    },
    async mounted() {
      let res = await this.$http.post('/h5/app/content', {
        'bannerNo': this.$data.id
      });
      if (res) {
        this.$data.content = res;
      }
    }
  };
</script>
<style lang="css">
  .news-detail p {
    margin: 0!important;
  }
</style>
