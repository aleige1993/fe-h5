<template>
  <div id="page-login">
    <div class="page-form">
      <div class="form-row">
        <label for="username">用户名</label>
        <input type="text" id="username" placeholder="" v-model="loginForm.account"/>
      </div>
      <div class="form-row">
        <label for="pwd">密码</label>
        <div >
          <input type="password" id="pwd" placeholder="" v-model="loginForm.password"/>
        </div>
      </div>
      <div class="form-row">
        <button @click="submitLogin">
          <span v-if="!loading">登录</span>
          <span v-else>Loading...</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageLogin',
  data() {
    return {
      loading: false,
      loginForm: {
        account: '15123334187',
        password: '123456',
        code: 2
      }
    };
  },
  methods: {
    async submitLogin() {
      this.$data.loading = true;
      let res = await this.$formdata.post('/openapi/common/user/login', {
        ...this.$data.loginForm
      });
      this.$data.loading = false;
      // 登录成功
      if (res.success && res.success === 'true') {
        this.$store.dispatch('setUserInfo', res.data);
        this.$router.push(this.$route.query.redirect_url);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
