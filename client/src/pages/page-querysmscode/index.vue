<template>
  <div id="qureySmsCode">
    <div class="page-form">
      <div class="form-row">
        <label for="username">手机号</label>
        <input type="text" id="username" placeholder="" v-model="mobile"/>
      </div>
      <div class="form-row">
        <button @click="submitLogin">
          <span v-if="!loading">查询短信验证码</span>
          <span v-else>Loading...</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'qureySmsCode',
    data() {
      return {
        loading: false,
        mobile: ''
      };
    },
    methods: {
      async submitLogin() {
        let mobile = this.$data.mobile;
        if (mobile.length !== 11) {
          alert('手机号不能为空或格式错误');
        } else {
          this.$data.loading = true;
          let res = await this.$http.post('h5/app/getSmsCaptcha', {
            mobile
          });
          this.$data.loading = false;
          if (res.success) {
            alert(res.reMsg);
          }
        }
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>
