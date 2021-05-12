//app.js
App({
  onLaunch:function(){
    wx.cloud.init({
      env:'test-a69sm',
      traceUser:true
    })
    this.globalData.myDevice = wx.getSystemInfoSync()
  },
  globalData: {
    myDevice:null,
    userInfo:null,
    imgUrl:[],
  }
})