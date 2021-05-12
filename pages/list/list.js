const app= getApp();
const ImageFilters=require('../../utils/weImageFilters/weImageFilters.js')
const Helper=require('../../utils/weImageFilters/weImageFiltersHelper.js')
var helper=new Helper({
  canvasId:'myCanvas',
  width:0,
  height:0,
  dx:0,
  dy:0,
  xiangsubi:0,
})
const ctx=wx.createCanvasContext('myCanvas');
const filters={
  original: function (data) {
      return data
  },
  Binarize: function (data) {//Binarize (srcImageData, threshold) 二值化, 参数:(imageData, 0.9)
      // Binarize (srcImageData, threshold)
      // threshold 0.0 <= n <= 1.0
      return ImageFilters.Binarize(data, 0.5)
  },
  // BoxBlur: function (data) {//BoxBlur (srcImageData, hRadius, vRadius, quality) 方框模糊, 参数:(imageData, 3, 3, 2)
  //     // BoxBlur (srcImageData, hRadius, vRadius, quality)

  //     return ImageFilters.BoxBlur(data, 3, 3, 2)
  // },
  GaussianBlur: function (data) {//GaussianBlur (srcImageData, strength) 高斯模糊, 参数:(imageData, 4)
      // GaussianBlur (srcImageData, strength)
      // strength 1 <= n <= 4
      return ImageFilters.GaussianBlur(data, 4)
  },
  StackBlur: function (data) {//StackBlur (srcImageData, radius) 高斯模糊和框模糊的折衷方案, 参数:(imageData, 6)
      // StackBlur (srcImageData, radius)

      return ImageFilters.StackBlur(data, 6)
  },
  Brightness: function (data) {//Brightness (srcImageData, brightness) 亮度调节, 参数:(imageData, 100)
      // Brightness (srcImageData, brightness)
      // brightness - 100 <= n <= 100
      return ImageFilters.Brightness(data, 100)
  },
  BrightnessContrastGimp: function (data) {//BrightnessContrastGimp (srcImageData, brightness, contrast) 亮度、对比度, 参数:(imageData, 26, 13)
      // BrightnessContrastGimp (srcImageData, brightness, contrast)
      // brightness - 100 <= n <= 100
      // contrast - 100 <= n <= 100
      return ImageFilters.BrightnessContrastGimp(data, 26, 13)
  },
  BrightnessContrastPhotoshop: function (data) {//BrightnessContrastPhotoshop (srcImageData, brightness, contrast) 亮度、对比度, 参数:(imageData, 26, 13)
      // ImageFilters.BrightnessContrastPhotoshop (srcImageData, brightness, contrast)
      // brightness - 100 <= n <= 100
      // contrast - 100 <= n <= 100
      return ImageFilters.BrightnessContrastPhotoshop(data, 26, 13)
  },
  Channels: function (data) {//Channels (srcImageData, channel) 单色通道，这里为 blue Channel, 参数:(imageData, 3)
      // ImageFilters.Channels (srcImageData, channel)
      // channel: default is red, 2 green, 3 blue

      return ImageFilters.Channels(data, 3)
  },
  ColorTransformFilter: function (data) {//ColorTransformFilter (srcImageData, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) 颜色变换滤波器, 参数:(imageData, 2, 1, 1, 1, 38, 0, 0, 0)
      // ImageFilters.ColorTransformFilter (srcImageData, redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset)
      // redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier: 0~5
      // redOffset, greenOffset, blueOffset, alphaOffset: 0~255

      return ImageFilters.ColorTransformFilter(data, 2, 1, 1, 1, 38, 0, 0, 0)
  },
  Desaturate: function (data) {//Desaturate (srcImageData) 冲淡
      // ImageFilters.Desaturate (srcImageData)
      return ImageFilters.Desaturate(data)
  },
  Dither: function (data) {//Dither (srcImageData, levels) 高频振动, 参数:(imageData, 2)
      // ImageFilters.Dither (srcImageData, levels)
      // levels 2 <= n <= 255
      return ImageFilters.Dither(data, 2)
  },
  Edge: function (data) {//Edge (srcImageData) 边缘
      // ImageFilters.Edge (srcImageData)
      return ImageFilters.Edge(data)
  },
  Emboss: function (data) {//Emboss (srcImageData) 浮雕
      // ImageFilters.Emboss (srcImageData)
      return ImageFilters.Emboss(data)
  },
  Enrich: function (data) {//Enrich (srcImageData) 丰富
      // ImageFilters.Enrich (srcImageData)
      return ImageFilters.Enrich(data)
  },
  Flip: function (data) {//Flip (srcImageData, vertical) 翻转, 参数:(imageData, 0)
      // ImageFilters.Flip (srcImageData, vertical)
      // vertical{Boolean}
      return ImageFilters.Flip(data, 0)
  },
  Gamma: function (data) {//Gamma (srcImageData, gamma) γ, 参数:(imageData, 5)
      // ImageFilters.Gamma (srcImageData, gamma)
      // gamma: 0~5
      return ImageFilters.Gamma(data, 5)
  },
  GrayScale: function (data) {//GrayScale (srcImageData) 灰度
      // ImageFilters.GrayScale (srcImageData)
      return ImageFilters.GrayScale(data)
  },
  HSLAdjustment: function (data) {//HSLAdjustment (srcImageData, hueDelta, satDelta, lightness) HSL调节, 参数:(imageData, -23, 54, 19)
      // ImageFilters.HSLAdjustment (srcImageData, hueDelta, satDelta, lightness)
      // hueDelta: 0~180
      // satDelta, lightness: 0~100
      return ImageFilters.HSLAdjustment(data, -23, 54, 19)
  },
  Invert: function (data) {//Invert (srcImageData) 反色
      // ImageFilters.Invert (srcImageData)
      return ImageFilters.Invert(data)
  },
  Mosaic: function (data) {//Mosaic (srcImageData, blockSize) 马赛克，blockSize马赛克块的大小, 参数:(imageData, 10)
      // ImageFilters.Mosaic (srcImageData, blockSize)
      // blockSize > 0
      return ImageFilters.Mosaic(data, 10)
  },
  Oil: function (data) {//Oil (srcImageData, range, levels) 油画效果, 参数:(imageData, 5, 62)
      // ImageFilters.Oil (srcImageData, range, levels)
      // range: 1~5
      // levels: 1~256
      return ImageFilters.Oil(data, 5, 62)
  },
  OpacityFilter: function (data) {//OpacityFilter (srcImageData, opacity) 不透明度, 参数:(imageData, 123)
      // ImageFilters.OpacityFilter (srcImageData, opacity)
      // opacity: 0~255
      return ImageFilters.OpacityFilter(data, 123)
  },
  Posterize: function (data) {//Posterize (srcImageData, levels) 多色调分色印, 参数:(imageData, 6)
      // ImageFilters.Posterize (srcImageData, levels)
      // levels: 2~32
      return ImageFilters.Posterize(data, 6)
  },
  Rescale: function (data) {//Rescale (srcImageData, scale) 重新调节, 参数:(imageData, 3.2)
      // ImageFilters.Rescale (srcImageData, scale)
      // scale: 0~5
      return ImageFilters.Rescale(data, 3.2)
  },
  // ResizeNearestNeighbor: function (data) {
  //     // ImageFilters.ResizeNearestNeighbor (srcImageData, width, height)
  //     return ImageFilters.ResizeNearestNeighbor(data, 500, 500)
  // },
  Sepia: function (data) {//Sepia(srcImageData) 褐色
      // ImageFilters.Sepia(srcImageData)
      return ImageFilters.Sepia(data)
  },
  Sharpen: function (data) {//Sharpen (srcImageData, factor) 锐化, 参数:(imageData, 9)
      // ImageFilters.Sharpen (srcImageData, factor)
      // factor: 1~10
      return ImageFilters.Sharpen(data, 9)
  },
  Solarize: function (data) {//Solarize (srcImageData) 曝光
    // ImageFilters.Solarize (srcImageData)
    return ImageFilters.Solarize(data)
  },
  Transpose: function (data) {//Transpose (srcImageData) 调换
      // ImageFilters.Transpose (srcImageData)
      // factor: 1~10
      return ImageFilters.Transpose(data)
  },
  Twril: function (data) {//Twril (srcImageData, centerX, centerY, radius, angle, edge, smooth) 水波旋转, 参数:(imageData, 0.5, 0.5, 40, 360, 0, true)
      // ImageFilters.Twril (srcImageData, centerX, centerY, radius, angle, edge, smooth)
      // centerX 0.0 <= n <= 1.0
      // centerY 0.0 <= n <= 1.0
      // radius
      // angle(degree)
      // smooth{Boolean}
      return ImageFilters.Twril(data, 0.5, 0.5, 120, 90, 0, true)
  },
}

const keys = Object.keys(filters)

Page({
  data: {
    emotionUrl:'',
    canvasWidth:'',
    canvasHeight:'',
    imagewidth:'',
    imageheight:'',
    dx0:'',
    dy0:'',
    selected:0,
    array:[],
    index:0,
    gap:0,
    explain:[],
    pixelRatio:0
  },
  tabChange(e){
    console.log('tab change', e)
  },
  onLoad: function (option) {
    // const ctx=wx.createCanvasContext('myCanvas');
    var myCanvasWidth;
    var myCanvasHeight;
    var mycanvaswidth;
    var mycanvasheight;
    var myimageWidth;
    var myimageHeight;
    var dx=0;
    var dy=0;
    var canvasid='myCanvas'
    var that=this
    wx.getSystemInfo({
      success:function(res){
        myCanvasWidth=res.windowWidth;
        myCanvasHeight=res.windowHeight*0.8;
        that.setData({
          pixelRatio:res.pixelRatio
        })
      }
    })
    that.setData({
      emotionUrl:option.chooseemotion,
      canvasHeight:myCanvasHeight,
      canvasWidth:myCanvasWidth,
      array:keys
    }),
    console.log(keys)
    wx.getImageInfo({
      src:option.chooseemotion,
      success:function(res){
        myimageHeight=res.height,
        myimageWidth=res.width
        if(myimageHeight>=myCanvasHeight && myimageWidth>=myCanvasHeight){
          if((myimageWidth/myimageHeight)>(myCanvasWidth/myCanvasHeight)){
            mycanvasheight=(myimageHeight/myimageWidth)*myCanvasWidth
            dy=(myCanvasHeight-mycanvasheight)/2
            mycanvasheight=Math.floor(mycanvasheight); 
            myCanvasWidth=Math.floor(myCanvasWidth)
            dy=Math.floor(dy)
            that.setData({
              dx0:dx,
              dy0:dy,
              imagewidth:myCanvasWidth,
              imageheight:mycanvasheight
            })
            console.log(mycanvasheight)
            ctx.drawImage(option.chooseemotion,dx,dy, myCanvasWidth,mycanvasheight)
            ctx.draw(false, () => {
              console.log('draw done')
              helper.getsysinfo(canvasid,myCanvasWidth,mycanvasheight,dx,dy,that.data.pixelRatio)
              helper.saveImageData(()=>{
                that.setData({
                  selected:1
                })
              })
          })
          }else{
            mycanvaswidth=(myimageWidth/myimageHeight)*myCanvasHeight
            dx=(myCanvasWidth-mycanvaswidth)/2
            myCanvasHeight=Math.floor(myCanvasHeight);
            mycanvaswidth=Math.floor(mycanvaswidth)
            dx=Math.floor(dx)
            that.setData({
              dx0:dx,
              dy0:dy,
              imagewidth:mycanvaswidth,
              imageheight:myCanvasHeight
            })
            ctx.drawImage(option.chooseemotion,dx,dy,mycanvaswidth,myCanvasHeight)
            ctx.draw(false, () => {
              console.log('draw done')
              helper.getsysinfo(canvasid,mycanvaswidth,myCanvasHeight,dx,dy,that.data.pixelRatio)
              helper.saveImageData(()=>{
                that.setData({
                  selected:1
                })
              })
          })
          }
        }
        else if(myimageHeight>=myCanvasHeight && myimageWidth<myCanvasWidth){
          mycanvaswidth=(myimageWidth/myimageHeight)*myCanvasHeight
          dx=(myCanvasWidth-mycanvaswidth)/2
          myCanvasHeight=Math.floor(myCanvasHeight)
          mycanvaswidth=Math.floor(mycanvaswidth)
          dx=Math.floor(dx)
          that.setData({
            dx0:dx,
            dy0:dy,
            imagewidth:mycanvaswidth,
            imageheight:myCanvasHeight
          })
          ctx.drawImage(option.chooseemotion,dx,dy, mycanvaswidth,myCanvasHeight)
          ctx.draw(false, () => {
            console.log('draw done')
            helper.getsysinfo(canvasid,mycanvaswidth,myCanvasHeight,dx,dy,that.data.pixelRatio)
            helper.saveImageData(()=>{
              that.setData({
                selected:1
              })
            })
        })
        }
        else if(myimageWidth>=myCanvasWidth && myimageHeight<myCanvasHeight){
          dy=(myCanvasHeight-myimageHeight)/2
          myimageHeight=Math.floor(myimageHeight)
          myCanvasWidth=Math.floor(myCanvasWidth)
          dy=Math.floor(dy)
          that.setData({
            dx0:dx,
            dy0:dy,
            imagewidth:myCanvasWidth,
            imageheight:myimageHeight
          })
          ctx.drawImage(option.chooseemotion,dx,dy,myCanvasWidth,myimageHeight)
          ctx.draw(false, () => {
            console.log('draw done')
            helper.getsysinfo(canvasid,myCanvasWidth,myimageHeight,dx,dy,that.data.pixelRatio)
            helper.saveImageData(()=>{
              that.setData({
                selected:1
              })
            })
        })
        }
        else{
          dx=(myCanvasWidth-myimageWidth)/2
          dy=(myCanvasHeight-myimageHeight)/2
          myimageHeight=Math.floor(myimageHeight)
          myimageWidth=Math.floor(myimageWidth)
          dx=Math.floor(dx)
          dy=Math.floor(dy)
          that.setData({
            dx0:dx,
            dy0:dy,
            imagewidth:myimageWidth,
            imageheight:myimageHeight
          })
          ctx.drawImage(option.chooseemotion,dx,dy,myimageWidth,myimageHeight)
          ctx.draw(false, () => {
            console.log('draw done')
            helper.getsysinfo(canvasid,myimageWidth,myimageHeight,dx,dy,that.data.pixelRatio)
            helper.saveImageData(()=>{
              that.setData({
                selected:1
              })
            })
        })
        }
      }
    })
  },
  cropper:function(){//裁剪
    var that=this   
    wx.navigateTo({
      url:'/pages/cropper/cropper-example?chooseemotion='+that.data.emotionUrl,
    })
  },
  bindPickerChange(e){//滤镜
    const z=this
    var path=z.data.emotionUrl
    console.log(path)
    // let e1=['二值化','高斯模糊']
    // this.setData({
    //   explain:e1
    // })
    let index=e.detail.value
    console.log(index)
    this.setData({
      index
    })
    wx.showLoading({
      title: '正在加载...',
      mask: true
    });

    let startTime=(new Date()).getTime()
    let imageData=helper.createImageData()
    let filtered=filters[keys[index]](imageData)

    helper.putImageData(filtered,()=>{
      wx.hideLoading();

      let endTime=(new Date()).getTime()
      let gap=(endTime-startTime)

      z.setData({
        gap
      })
    });
    wx.canvasToTempFilePath({
      x: z.data.dx0,
      y: z.data.dy0,
      width: z.data.imagewidth,
      height: z.data.imageheight,
      destWidth: z.data.imagewidth,
      destHeight: z.data.imageheight,
      canvasId: 'myCanvas',
      success: function (res) {
        z.setData({
          emotionUrl:res.tempFilePath
        })  
      }
    })
  },
  spin(){
    const z=this
    var canvasWidth1
    var canvasHeight1
    var canvasid='myCanvas'
    wx.getSystemInfo({
      success:function(res){
        canvasHeight1=res.windowHeight*0.8
        canvasWidth1=res.windowWidth
        
      }
    })
    // console.log(z.data.pixelRatio)
    canvasWidth1=Math.floor(canvasWidth1)
    canvasHeight1=Math.floor(canvasHeight1)
    
    var rate=z.data.imagewidth/z.data.imageheight//图片宽高比
    var rate1=canvasHeight1/canvasWidth1
    if(z.data.imagewidth>=z.data.imageheight && z.data.imagewidth>=canvasWidth1){//此时图片宽高比大于1
      if(rate>rate1){//此时宽高比大于屏幕宽高比
        
        var imagewidthcan=canvasHeight1/rate
        // var imageheightcan=z.data.imagewidth*rate
        var n2=(z.data.imagewidth-imagewidthcan)/2
        var yzuobiao=(canvasWidth1-imagewidthcan)/2
        imagewidthcan=Math.floor(imagewidthcan)
        ctx.translate(z.data.dx0+z.data.imagewidth,z.data.dy0)//原点转移右上角
        ctx.rotate(90*Math.PI/180)
        ctx.drawImage(z.data.emotionUrl,-z.data.dy0,yzuobiao,canvasHeight1,imagewidthcan)
        ctx.draw(false,()=>{
          helper.getsysinfo(canvasid,imagewidthcan,canvasHeight1,yzuobiao,0,z.data.pixelRatio)
          helper.saveImageData(()=>{
            z.setData({
              selected:1,
              dx0:yzuobiao,
              dy0:0,
              imagewidth:imagewidthcan,
              imageheight:canvasHeight1
            })
          })
          wx.canvasToTempFilePath({
            x:yzuobiao,
            y:0,
            width:imagewidthcan,
            height:canvasHeight1,
            destWidth:imagewidthcan*z.data.pixelRatio,
            destHeight:canvasHeight1*z.data.pixelRatio,
            canvasId:'myCanvas',
            success:function(res){
              z.setData({
                emotionUrl:res.tempFilePath
              })
              console.log(res.tempFilePath)
            }
          })
        })
        console.log('4')
      }
      else{
      var n1=(z.data.imagewidth-z.data.imageheight)/2//x,y轴坐标值，x轴取负
      ctx.translate(z.data.dx0+z.data.imagewidth,z.data.dy0)//原点
      ctx.rotate(90*Math.PI/180)
      ctx.drawImage(z.data.emotionUrl,-n1,n1,z.data.imageheight,z.data.imagewidth)//宽变为高
      ctx.draw(false,()=>{
        helper.getsysinfo(canvasid,z.data.imageheight,z.data.imagewidth,z.data.dx0,z.data.dy0,z.data.pixelRatio)
        helper.saveImageData(()=>{
          z.setData({
            selected:1,
            dx0:z.data.dx0,
            dy0:z.data.dy0,
            imagewidth:z.data.imageheight,
            imageheight:z.data.imagewidth
          })
        })
        wx.canvasToTempFilePath({
          x:z.data.dx0,
          y:z.data.dy0,
          width:z.data.imageheight,
          height:z.data.imagewidth,
          destWidth:z.data.imageheight*z.data.pixelRatio,
          destHeight:z.data.imagewidth*z.data.pixelRatio,
          canvasId:'myCanvas',
          success:function(res){
            z.setData({
              emotionUrl:res.tempFilePath
            })
            console.log(res.tempFilePath)
          }
        })
      } 
      )
       console.log('1')
      }
     
      
    }
    else{
      if(z.data.imageheight>canvasWidth1){//排除完毕
        var n3=rate*canvasWidth1//图片的高
        var n4=(z.data.imageheight-n3)/2//x轴坐标
        var n5=(canvasWidth1-z.data.dx0-z.data.imagewidth)//y轴坐标，取负
        n3=Math.ceil(n3)
        ctx.translate(z.data.dx0+z.data.imagewidth,z.data.dy0)
        ctx.rotate(90*Math.PI/180)
        ctx.drawImage(z.data.emotionUrl,n4,-n5,n3,canvasWidth1)//此时原点在右上角
        ctx.draw(false,()=>{
          helper.getsysinfo(canvasid,canvasWidth1,n3,0,n4,z.data.pixelRatio)//所以原点在左上角
          helper.saveImageData(()=>{
            z.setData({//数据从左上角开始存储
              selected:1,
              dx0:0,
              dy0:n4,
              imagewidth:canvasWidth1,
              imageheight:n3
            })
          })
          wx.canvasToTempFilePath({//数据从左上角开始存储
            x:0,
            y:n4,
            width:canvasWidth1,
            height:n3,
            destWidth:canvasWidth1*z.data.pixelRatio,
            destHeight:n3*z.data.pixelRatio,
            canvasId:'myCanvas',
            success:function(res){
              z.setData({
                emotionUrl:res.tempFilePath
              })
              console.log(res.tempFilePath)
            }
          })
        } 
        )
        console.log('2')
      }else if(z.data.imagewidth<canvasWidth1 && z.data.imageheight<canvasHeight1){
        var n6=(z.data.imageheight-z.data.imagewidth)/2
        var n7=(z.data.imageheight-z.data.imagewidth)/2
        var x1=(canvasWidth1-z.data.imageheight)/2
        var y1=(canvasHeight1-z.data.imagewidth)/2
        x1=Math.floor(x1)
        y1=Math.floor(y1)
        ctx.translate(z.data.dx0+z.data.imagewidth,z.data.dy0)
        ctx.rotate(90*Math.PI/180)
        ctx.drawImage(z.data.emotionUrl,n6,-n7,z.data.imagewidth,z.data.imageheight)
        ctx.draw(false,()=>{
          helper.getsysinfo(canvasid,z.data.imagewidth,z.data.imageheight,x1,y1,z.data.pixelRatio)
          helper.saveImageData(()=>{
            z.setData({
              selected:1,
              dx0:x1,
              dy0:y1,
              imagewidth:z.data.imageheight,
              imageheight:z.data.imagewidth
            })
          })
          wx.canvasToTempFilePath({
            x:x1,
            y:y1,
            width:z.data.imageheight,
            height:z.data.imagewidth,
            destWidth:z.data.imageheight*z.data.pixelRatio,
            destHeight:z.data.imagewidth*z.data.pixelRatio,
            canvasId:'myCanvas',
            success:function(res){
              z.setData({
                emotionUrl:res.tempFilePath
              })
              console.log(res.tempFilePath)
            }
          })
        } 
        )
        console.log('3')
      }
      // var n3=rate*z.data.canvasWidth
      // var n4=(canvasHeight1-z.data.imagewidth)/2
      
      // ctx.drawImage(z.data.emotionUrl,n4,-z.data.dx0,n3,canvasWidth1)
      // ctx.draw();
    }
    
  },
  save(){//保存
    helper.getImageTempFilePath(tempFilePath =>{
    
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success: (result)=>{
        
        wx.showToast({
          title: '保存成功',
        });
      },
      fail:(res)=>{
        wx.getSetting({
          success:function (res) {

           // 判断否有保存权限

            if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.showModal({
                title:'提示',
                content:'需要获取图片权限哦',
                success:function (res) {
                  if (res.confirm) {
                    wx.openSetting({
                      success(res) {
                        console.log(res);
                      },
                      fail(res) {
                        console.log(res);
                      }
                    });
                  }
                }
              })
            };
          }
        });
      }
    });  
    })

  },
  addtext(){
    var that=this
    wx.navigateTo({
      url:'/pages/emotionEdit/emotionEdit?chooseemotion='+that.data.emotionUrl+'&imagewidth='+that.data.imagewidth+'&imageheight='+that.data.imageheight,
    })
  }
}) 