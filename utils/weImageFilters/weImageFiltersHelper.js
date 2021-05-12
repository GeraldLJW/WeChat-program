const ImageFilters = require('./weImageFilters.js')

let Helper = function(options) {
    /**
     * options{canvasId, width, height}
     */
    // var syswidth;
    // var sysheight;
    // wx.getSystemInfo({
    //     success: (result)=>{
    //         syswidth=result.width,
    //         sysheight=result.height*0.8
    //     },
    //     fail: ()=>{
    //         console.log("shibai")
    //     },
    //     complete: ()=>{}
    // });
    this.originalImageData = null
    this.canvasInfo = {
        canvasId: options.canvasId,
        width: options.width,
        height: options.height,
        dx:options.dx,
        dy:options.dy,
    }
}
Helper.prototype.getsysinfo=function(canvasid,syswidth,sysheight,dx,dy){
    const z=this
    // var syswidth
    // var sysheight
    // wx.getSystemInfo({
    //     success:function(result){
    //         syswidth=result.width;
    //         sysheight=result.height*0.8
    //     },
    // });
    z.canvasInfo.canvasId=canvasid,
    z.canvasInfo.width=syswidth,
    z.canvasInfo.height=sysheight,
    z.canvasInfo.dx=dx,
    z.canvasInfo.dy=dy
}
// 保存当前的画布像素信息到 originalImageData
Helper.prototype.saveImageData = function(cb) {
    const z = this
    // console.log(syswidth)
    // 获取canvas像素数据
    console.log(z.canvasInfo.height)
    wx.canvasGetImageData({//不支持小数
        canvasId: z.canvasInfo.canvasId,
        x: z.canvasInfo.dx,
        y: z.canvasInfo.dy,
        width: z.canvasInfo.width,
        height: z.canvasInfo.height,
        success: res => {
            console.log(res)
            let {
                data
            } = res

            z.originalImageData = data
            if (cb) {
                cb()
                // console.log(cb)
            }
        }
    })
}

// 初始化画布内容
Helper.prototype.initCanvas = function(tempFilePath, cb) {
    const z = this
    // const ctx = wx.createCanvasContext(z.canvasInfo.canvasId)
    // ctx.drawImage(tempFilePath, 0, 0, z.canvasInfo.width, z.canvasInfo.height)
    // ctx.draw(false, () => {
    //     console.log('draw done')

    //     z.saveImageData(cb)
    // })
}

// 更新canvas信息
Helper.prototype.updateCanvasInfo = function (options) {
    if (options.canvasId) {
        this.canvasInfo.canvasId = options.canvasId
    }
    if (options.width) {
        this.canvasInfo.width = options.width
    }
    if (options.height) {
        this.canvasInfo.height = options.height
    }
    if (options.tempFilePath) {
        this.initCanvas(options.tempFilePath)
    }
}

// 从originalImageData创建 imageData
Helper.prototype.createImageData = function() {
    const z = this
    // console.log(z.originalImageData)
    // console.log(z.canvasInfo.height=z.canvasInfo.height.toFixed(0))
    
    return ImageFilters.utils.createImageDataFromData(z.originalImageData, z.canvasInfo.width, z.canvasInfo.height)
}

Helper.prototype.putImageData = function(imageData, cb) {
    const z = this
    // 将像素数据绘制到画布
    console.log(imageData)
    wx.canvasPutImageData({
        canvasId:z.canvasInfo.canvasId,
        x: z.canvasInfo.dx,
        y: z.canvasInfo.dy,
        width: z.canvasInfo.width,
        height: z.canvasInfo.height,
        data: imageData.data,
        success:function(){
            console.log('chenggong')
        },
        fail(){
            console.log('shibai')
        },
        complete: res => {
            if (cb) {
                cb()
            }
        }
    })
}

Helper.prototype.getImageTempFilePath = function (cb) {
    const z = this
    // 将画布内容保存为图片
    wx.canvasToTempFilePath({
        x: z.canvasInfo.dx,
        y: z.canvasInfo.dy,
        width: z.canvasInfo.width,
        height: z.canvasInfo.height,
        destWidth: z.canvasInfo.width*z.canvasInfo.xiangsubi,
        destHeight: z.canvasInfo.height*z.canvasInfo.xiangsubi,
        canvasId: z.canvasInfo.canvasId,
        quality:1,
        fileType:'jpg',
        success: function (res) {
            cb(res.tempFilePath)
        }
    })
}

module.exports = Helper