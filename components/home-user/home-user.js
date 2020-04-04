// components/home-user/home-user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    username: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toscore() {
      wx.navigateTo({
        url: '/pages/score/score',
      });
    },
    toreward() {
      wx.navigateTo({
        url: '/pages/reward/reward',
      })
    }
  }
})
