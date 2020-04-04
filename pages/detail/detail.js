// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question: {
      title: '社会主义从空想发展到科学，是因为马克思恩格斯在新的历史条件下创立了( )。',
      options: [
        {option: "A", text: "无产阶级革命说无产阶级革命说"},
        {option: "B", text: "无产阶级革命说"},
        {option: "C", text: "无产阶级革命说无产阶级革命说"},
        {option: "D", text: "无产阶级革命说"},
      ]
    },
    currentIndex: ''
  },
  choose(e) {
    console.log(e);
    
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