Page({
  addLog(event){
    const add=event.currentTarget.dataset.add
    console.log("add",add)
    const ui=wx.getStorageSync('userinfo')
    if(!ui.openid){
      wx.switchTab({
        url: '/pages/me/me',
      })
    }else{
      wx.cloud.callFunction({
      name:"createlog",
      data:{
        add:add,
        date:Date.now(),
        openid:ui.openid
      }
    })
    }  
  },
  data:{
    tempFilePaths: '',
    hasImg:false,
  },
  onLoad: function () {
  },
  onReady:function(){
    wx.getSystemInfo({
      success:function(res){
        let annulusHeight=Math.round(res.screenWidth*0.68)
        console.log(annulusHeight)
      }
    })
  },
  change: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.change('album')
          } else if (res.tapIndex == 1) {
            that.change('camera')
          }
        }
      }
    })

  },
  change: function (type) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album','camera'],
      success: function (res) {
        var tempFilePath = res.tempFilePaths[0]
        wx.navigateTo({
          url:'/pages/list/list?chooseemotion='+tempFilePath,
        })
        
        // ctx.drawImage(res.tempFilePaths[0],0,0,218,218)
        // ctx.draw()
        
        // that.setData({
        //   tempFilePaths:res.tempFilePaths[0],
        //   hasImg:true,
        // })
      }
    })
  },
  // change(){
  //   wx.navigateTo({
  //     url:'/pages/list/list'
  //   })
  // }
 })