
class Bridge {
  // 注册事件监听
  connectWebViewJavascriptBridge(callback) {
    if(window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge);
    } else {
      document.addEventListener("WebViewJavascriptBridgeReady", () => {
        callback(WebViewJavascriptBridge);
      }, false);
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
      bridge.init((message, responseCallback) => {
        responseCallback();
      });
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

};

export default new Bridge();
