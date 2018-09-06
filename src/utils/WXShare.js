class WXShare {
  static create(title, desc, link, imgUrl, success) {
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        success();
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享给好友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        success();
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到qq
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        success();
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到qq空间
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        success();
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到腾讯微博
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: link, // 分享链接
      imgUrl: imgUrl, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        success();
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      }
    });
  }
}

export default WXShare;
