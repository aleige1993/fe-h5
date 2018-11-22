import axios from 'axios';
import Config from './Config';
import BridgeFun from './BridgeFun';
import Tools from './Tools';

axios.defaults.baseURL = Config.HTTPOPENAPIURL;
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';

class Formdata {
  /**
   * 发起post请求
   */
  post(url, data, callback) {
    let param = new FormData();
    param.append('message', JSON.stringify(data));
    let headers = {
      'appId': Config.HTTPHEADER_APPID,
      'version': Config.HTTPHEADER_APPVERSION,
      'sign': Config.HTTPHEADER_APPSIGN
    };
    if (!callback) {
      return this.getPostResult(url, param, headers);
    } else {
      let _this = this;
      BridgeFun.getUserInfo((data) => {
        headers['token'] =  data.token;
        _this.getPostResult(url, param, headers, callback);
      });
    }
  }
  /**
   * 获取post请求结果
   */
  getPostResult(url, param, headers, callback) {
    return axios.post(url, param, {
      headers
    }).then(res => {
      let data = res.data;
      if (data.success && data.success === 'false') {
        Tools.layerOpen(data.message);
      }
      if (callback) {
        callback(data);
      }
      return data;
    }).catch(err => {});
  }
}
export default Formdata;
