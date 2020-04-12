// pages/reward/reward.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['奖学金排行榜', '我的邀请'],
    currentIndex: 0,
    users: [
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "获奖学金2048元", username: "有一片云"},
    ],
    users1: [
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
      {avatar: "https://img2.woyaogexing.com/2020/03/01/63dba6d27b79483ea51f51c42c0604cd!400x400.jpeg", reward: "成功邀请获10元奖学金", username: "有一片云"},
    ]
  },
  choose(e) {
    const { index } = e.currentTarget.dataset
    this.setData({
      currentIndex: index
    })
  },
  toinvite() {
    wx.navigateTo({
      url: '/pages/invite/invite'
    });
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