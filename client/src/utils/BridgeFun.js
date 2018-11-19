import Bridge from './Bridge';

class BridgeFun {
  /**
   * 获取用户信息
   */
  getUserInfo(callback) {
    Bridge.callhandler('getUserInfo', {}, (data) => {
      callback(JSON.parse(data));
    });
  }

  /**
   * 打开新的webView
   */
  openWebView(url) {
    Bridge.callhandler('toFindDetail', url);
  }
}

export default new BridgeFun();
