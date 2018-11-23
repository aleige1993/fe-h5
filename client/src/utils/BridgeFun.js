import Bridge from './Bridge';
import Store from '@/store';

class BridgeFun {
  /**
   * 获取用户信息
   */
  getUserInfo(callback) {
    let userInfo = Store.getters.userInfo;
    if (userInfo) {
      callback(userInfo);
    } else {
      Bridge.callhandler('getUserInfo', {}, (data) => {
        callback(JSON.parse(data));
      });
    }
  }

  /**
   * 打开新的webView
   */
  openWebView(url) {
    Bridge.callhandler('toFindDetail', url);
  }
}

export default new BridgeFun();
