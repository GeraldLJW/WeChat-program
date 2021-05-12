// pages/spliceMenu/spliceMenu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
    },
    chooseSpliceLongImg(){
      wx.navigateTo({
        url: '/pages/splicePhoto/splice?choosed=longImages'
      })
    },
    chooseSpliceFrame(){
      wx.navigateTo({
        url: '/pages/splicePhoto/splice?choosed=photoFrame'
      })
    }
  })