
import Tools from './Tools';

class Bridge {
  // 注册事件监听
  connectWebViewJavascriptBridge(callback) {
    if (Tools.isAndroidBrowser()) {
      if (window.WebViewJavascriptBridge) {
        callback(window.WebViewJavascriptBridge);
      } else {
        document.addEventListener('WebViewJavascriptBridgeReady', () => {
          callback(window.WebViewJavascriptBridge);
        }, false);
      }
    }
    if (Tools.isAppleBrowser()) {
      if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      let WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    }
  }

  callhandler(name, data, callback) {
    this.connectWebViewJavascriptBridge((bridge) => {
      bridge.callHandler(name, data, (responseData) => {
        callback(responseData);
      });
    });
  }

  registerHandler(name, responseData) {
    this.connectWebViewJavascriptBridge((bridge) => {
      bridge.registerHandler(name, (data, responseCallback) => {
        responseCallback(responseData);
      });
    });
  }

  initBridge() {
    this.connectWebViewJavascriptBridge(function(bridge) {
      bridge.init(function(message, responseCallback) {
        responseCallback();
      });
    });
  }

}

export default new Bridge();
