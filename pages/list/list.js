const app= getApp();
Page({
  data: {
    emotionUrl:'',
    canvasWidth:'',
    canvasHeight:'',
    imagewidth:'',
    imageheight:'',
  },
  tabChange(e){
    console.log('tab change', e)
  },
  onLoad: function (option) {
    const ctx=wx.createCanvasContext('myCanvas');
    var myCanvasWidth;
    var myCanvasHeight;
    var mycanvaswidth;
    var mycanvasheight;
    var dx;
    var dy;
    wx.getSystemInfo({
      success:function(res){
        myCanvasWidth=res.windowWidth;
        myCanvasHeight=res.windowHeight*0.8;
      }
    })
    var that=this
    console.log(option.chooseemotion)
    that.setData({
      emotionUrl:option.chooseemotion,
      canvasHeight:myCanvasHeight,
       canvasWidth:myCanvasWidth
    }), 
    (async ()=>{
      let myimageWidth=await this.ajax1(option.chooseemotion)
      let myimageHeight=await this.ajax2(option.chooseemotion)
      console.log(myimageWidth)
      console.log(myimageHeight)
      if(myimageHeight>=myCanvasHeight && myimageWidth>=myCanvasHeight){
        if((myimageWidth/myimageHeight)>(myCanvasWidth/myCanvasHeight)){
          mycanvasheight=(myimageHeight/myimageWidth)*myCanvasWidth
          dy=(myCanvasHeight-mycanvasheight)/2
          ctx.drawImage(option.chooseemotion,0,dy, myCanvasWidth,mycanvasheight)
          ctx.draw()
        }else{
          mycanvaswidth=(myimageWidth/myimageHeight)*myCanvasHeight
          dx=(myCanvasWidth-mycanvaswidth)/2
          ctx.drawImage(option.chooseemotion,dx,0, mycanvaswidth,myCanvasHeight)
          ctx.draw()
        }
      }
      else if(myimageHeight>=myCanvasHeight && myimageWidth<myCanvasWidth){
        mycanvaswidth=(myimageWidth/myimageHeight)*myCanvasHeight
        dx=(myCanvasWidth-mycanvaswidth)/2
        ctx.drawImage(option.chooseemotion,dx,0, mycanvaswidth,myCanvasHeight)
        ctx.draw()
      }
      else if(myimageWidth>=myCanvasWidth && myimageHeight<myCanvasHeight){
        dy=(myCanvasHeight-myimageHeight)/2
        ctx.drawImage(option.chooseemotion,0,dy,myCanvasWidth,myimageHeight)
        ctx.draw()
      }
      else{
        dx=(myCanvasWidth-myimageWidth)/2
        dy=(myCanvasHeight-myimageHeight)/2
        ctx.drawImage(option.chooseemotion,dx,dy,myimageWidth,myimageHeight)
        ctx.draw()
      }
    })()
  },
  ajax1(url){
    return new Promise((resolve , reject)=>{
      wx.getImageInfo({
        src: url,
        success: (res)=>{
          let width=res.width
          resolve(width)
        },
        fail: err=>{
          reject(err)
        },
      });
    })
  },
  ajax2(url){
    return new Promise((resolve , reject)=>{
      wx.getImageInfo({
        src: url,
        success: (res)=>{
          let height=res.height
          resolve(height)
        },
        fail: err=>{
          reject(err)
        },
      });
    })
  },
  cropper:function(){
    var that=this
    
    wx.redirectTo({
      url:'/pages/cropper/cropper-example?chooseemotion='+that.data.emotionUrl,
    })
  }
}) 