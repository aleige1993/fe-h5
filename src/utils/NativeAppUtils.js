// import Tool from './Tools';

class NativeAppUtils {
  getJsApi() {
    return window.jsApi;
  }

  /**
   * 获取设备为android或ios
   * @returns {*}
   */
  getAPPDevice() {
    if (this.getJsApi()) {
      return this.getJsApi().getAPPDevice().toLowerCase();
    } else {
      return null;
      // return 'android'.toLowerCase();
    }
  }

  /**
   * 获取用户NO
   * @returns {*}
   */
  getNums() {
    if (this.getJsApi()) {
      // Tool.layerOpen(this.getJsApi().getNums());
      return this.getJsApi().getNums();
    } else {
      return null;
      // return 101803220305;
      // return 101808030003;
    }
  }

  /**
   * 获取用户手机号
   * @returns {*}
   */
  getPhoneNo() {
    if (this.getJsApi()) {
      return this.getJsApi().getPhoneNo();
    } else {
      return null;
    }
  }

  /**
   * 打电话
   * @returns {*}
   */
  callPhone(number) {
    if (this.getJsApi()) {
      this.getJsApi().callPhone(number);
    }
  }

  /**
   * 跳原生登录
   * @returns {*}
   */
  toLogin() {
    if (this.getJsApi()) {
      this.getJsApi().goLogin();
    }
  }

  /**
   * 跳原生实名认证
   * @returns {*}
   */
  toIdentityAuth() {
    if (this.getJsApi()) {
      this.getJsApi().goIdentityAuth();
    }
  }

  /**
   * 跳原生驾驶认证
   * @returns {*}
   */
  toDriveAuth() {
    if (this.getJsApi()) {
      this.getJsApi().goDriveAuth();
    }
  }

  /**
   * 设置原生title
   * @returns {*}
   */
  setNavTitle(title) {
    if (this.getJsApi()) {
      this.getJsApi().setNavTitle(title);
    }
  }

  /**
   * 显示隐藏分享按钮
   * @returns {*}
   */
  titleShareIcon(status) {
    if (this.getJsApi()) {
      this.getJsApi().titleShareIcon(status);
    }
  }

  /**
   * 调原生分享
   * @returns {*}
   */
  appShareLink(title, desc, link, imgUrl) {
    if (this.getJsApi()) {
      this.getJsApi().appShareLink(JSON.stringify({
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl
      }));
    }
  }

}

export default new NativeAppUtils();
