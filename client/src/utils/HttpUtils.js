import Vue from 'vue';
import axios from 'axios';
import Config from './Config';
import UserLogin from './UserLogin';

// 处理Raw纯json字符串得请求
axios.defaults.baseURL = Config.HTTPBASEURL;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
// Vue.prototype.$ajax = axios;

class Http {
  /**
   * 发起post请求
   * @param _url
   * @param _data
   * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
   */
  post(_url, _data, isNeedLogin = true) {
    if (Config.XHRLOG) {
      /* eslint-disable */
      console.info(`----来自${_url}的POST请求----`);
      console.info(JSON.stringify(_data));
      /* eslint-disable */
    }
    let _headers = {};
    if (isNeedLogin) {
      _headers = {
        'token': '' + UserLogin.getLoginToken()
      };
    }
    return axios({
      url: _url,
      dataType: 'json',
      data: _data,
      method: 'POST'
    }).then(res => {
      if (typeof res === 'string') {
        res = JSON.parse(res);
      }
      return res.data || {};
    }).catch(err => {
      // error todo
      Vue.prototype.$Notice.error({ title: '错误提示', desc: err });
    });
  }
  /**
   * 发起get请求
   * @param _url
   * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
   */
  get(_url, _params = {}, isNeedLogin = true) {
    if (Config.XHRLOG) {
      /* eslint-disable */
      console.info(`----来自${_url}的GET请求----`);
      /* eslint-disable */
    }
    return axios({
      url: _url,
      dataType: 'json',
      method: 'GET',
      params: _params
    }).then(res => {
      if (typeof res === 'string') {
        res = JSON.parse(res);
      }
      return res.data || {};
    }).catch(err => {
      // error todo
      Vue.prototype.$Notice.error({ title: '错误提示', desc: err });
    });
  }
}
export default Http;
