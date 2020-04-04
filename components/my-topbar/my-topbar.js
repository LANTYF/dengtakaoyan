// components/my-topbar/my-topbar.js
Component({
  attached: function() {
    var that = this;
    that.setNavSize();
  },
  properties: {
    title: String
  },
  externalClasses: ["bg_color", "titleclass"],
  data: {
    status:0,
    navHeight: 0
  },
  methods: {
    // 通过获取系统信息计算导航栏高度
    setNavSize() {
        const sysinfo = wx.getSystemInfoSync()
        const statusHeight = sysinfo.statusBarHeight
        const isiOS = sysinfo.system.indexOf("iOS") > -1
        let navHeight = 0;
      if (!isiOS) {
        navHeight = 48;
      } else {
        navHeight = 44;
      }
      this.setData({
        status: statusHeight,
        navHeight: navHeight
      });
    },
    back() {
      wx.navigateBack({
        delta: 1
      });
    }
  }
});
