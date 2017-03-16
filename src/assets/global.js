exports.install = function (Vue, options) {
  Vue.prototype.$config = {
    getCookie (Name){
      var search = Name + "="//查询检索的值
      var returnvalue = "";//返回值
      if (document.cookie.length > 0) {
        var sd = document.cookie.indexOf(search);
        if (sd!= -1) {
          sd += search.length;
          var end = document.cookie.indexOf(";", sd);
          if (end == -1)
            end = document.cookie.length;
          //unescape() 函数可对通过 escape() 编码的字符串进行解码。
          returnvalue= document.cookie.substring(sd, end);
        }
      }
      return returnvalue;
    },
    user () {
      var _this = this,
        wxuname = decodeURIComponent(_this.getCookie('wxuname')),
        wxavatar =  decodeURIComponent(_this.getCookie('wxavatar'));
      return{
        name : wxuname,
        head : wxavatar
      }
    },
    iswx(){
      var ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
      }else{
        return false;
      }
    },
    wxshare (){
      var config = oe_wxconfig,
        title = "南方都市报邀你加入“两会记者”私密群聊",
        summary = "看到此消息的都是真爱",
        link = "http://h5.oeeee.com/index.php?s=StaticH5/chat",
        thumb = "http://img1.ndapp.oeeee.com/avatar/180x180_573be4065fdfe.jpg",
        content = {
          title: title,
          desc:summary,
          link: link,
          imgUrl:thumb,
          type: '',
          dataUrl: '',
          success: function () {},
          cancel: function () {}
        }

      wx.config({
        debug: false,
        appId: config.appId,
        timestamp: config.timestamp,
        nonceStr: config.nonceStr,
        signature: config.signature,
        jsApiList: [
          'onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo'
        ]
      });
      wx.checkJsApi({
        jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline','onMenuShareQQ','onMenuShareWeibo'],
        success: function(res) {}
      });
      wx.ready(function () {
        wx.onMenuShareAppMessage(content);
        wx.onMenuShareTimeline(content);
        wx.onMenuShareQQ(content);
        wx.onMenuShareWeibo(content);
      });
    },
    init(){
      var _this = this;
      if(!_this.user().name && !_this.user().head && location.host == 'h5.oeeee.com'){
        location.href = 'http://h5.oeeee.com/index.php?s=StaticH5/chat';
      }
      if(_this.iswx()){
        _this.wxshare();
      }
    }
  }
}
