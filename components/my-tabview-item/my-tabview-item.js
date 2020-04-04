// components/my-tabview-item/my-tabview-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    paper: Number
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
    todetail() {
      wx.navigateTo({
        url: '/pages/detail/detail'
      });
    }
  }
})
