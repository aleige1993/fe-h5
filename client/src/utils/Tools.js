
class Tools {

  /**
   * 获取浏览器信息
   * @returns {string}
   */
  browserUserAgent() {
    return window.navigator.userAgent.toLowerCase();
  }
  isWeixinBrowser() {
    return this.browserUserAgent().indexOf('micromessenger') > -1;
  }
  isQQBrowser() {
    return this.browserUserAgent().indexOf('qq') > -1;
  }
  isAndroidBrowser() {
    return this.browserUserAgent().indexOf('android') > -1;
  }
  isAppleBrowser() {
    return this.browserUserAgent().indexOf('iphone') > -1;
  }

  /**
   * 全屏
   * @returns {string}
   */
  fullScreen() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    else if (docElm.msRequestFullscreen) {
      docElm = document.body; //overwrite the element (for IE)
      docElm.msRequestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
  }

  /**
   * layerOpen
   * @returns {string}
   */
  layerOpen(msg = '') {
    layer.open({
      content: msg,
      skin: 'msg',
      time: 3, // 3秒后自动关闭
      tips: [2]
    });
  }

  /**
   * 打开APP
   * @returns {string}
   */
  openApp() {
    let _this = this;
    let timeout = 600;
    let startTime = Date.now();
    let ifr = document.createElement('iframe');
    ifr.src = _this.isAndroidBrowser() ? 'com.sclpcustomer.commonapp://android' : 'sccustomer888://';
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
    let timer = setTimeout(() => {
      let endTime = Date.now();
      if (!startTime || endTime - startTime < timeout + 200) {
        let anroidUrl = 'http://www.songcw.com/apk/songcw.apk';
        let appleUrl = 'https://itunes.apple.com/us/app/%E9%A2%82%E8%BD%A6/id1296103036?l=zh&ls=1&mt=8';
        window.location.href = _this.isAndroidBrowser() ? anroidUrl : appleUrl;
      }
    }, timeout);
    window.onblur = () => {
      clearTimeout(timer);
    };
  }

  /**
   * 时间戳转时间
   * @returns {string}
   */
  timestampToTime(timestamp) {
    let date = new Date(timestamp);
    let Y = date.getFullYear();
    let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
  }

  /**
   * 时间戳转时间
   * @returns {string}
   */
  formatTimeCompatibleIos(time) {
    return time.replace(/-/g, '/');
  }

  /**
   * 字符串后四位加*号
   * @returns {string}
   */
  stringAddStar(string, index = 3, replacelength = 4) {
    return string.substring(0, index) + '****' + string.substring(index + replacelength, string.length);
  }
}
export default new Tools();
