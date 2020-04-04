// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {content: "1~10"},
      {content: "11~20"},
      {content: "21~30"},
    ],
    currentIndex: 0,
    papers: {
      "0": [1,2,3,4,5,6,7,8,9,10],
      "1": [11,12,13,14,15,16,17,18,19,20],
      "2": [21,22,23,24,25,26,27,28,29,30]
    }
  },
  change(e) {
    const { index } = e.currentTarget.dataset
    this.setData({
      currentIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})