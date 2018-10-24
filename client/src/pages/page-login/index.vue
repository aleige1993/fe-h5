<template>
  <div id="page-login">
    <div class="page-form">
      <div class="form-row">
        <label for="username">用户名</label>
        <input type="text" id="username" placeholder="" v-model="loginForm.username"/>
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
import axios from 'axios';
export default {
  name: 'pageLogin',
  data() {
    return {
      loading: false,
      fromOtherPage: false,
      redirectUrl: '',
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async submitLogin() {
      if (this.$data.loginForm.username === '' || this.$data.loginForm.password === '') {
        alert('用户名或密码不能为空');
      } else {
        this.$data.loading = true;
        let loginResult = await axios({
          url: '/h5/app/sign',
          dataType: 'json',
          data: this.$data.loginForm,
          method: 'POST'
        });
        this.$data.loading = false;
        // 登录成功
        let res = loginResult.data;
        if (res.success && res.success === 'true') {
          this.$userLogin.setLoginInfo(res.reMsg);
          if (this.$data.fromOtherPage) {
            this.$router.push({
              name: this.$data.redirectUrl
            });
          } else {
            this.$router.push('/querysmscode');
          }
        } else {
          alert(res.reMsg);
        }
      }
    }
  },
  mounted() {
    if (this.$route.query.redirect_url) {
      this.$data.fromOtherPage = true;
      this.$data.redirectUrl = this.$route.query.redirect_url;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
