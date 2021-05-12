
let cropper = null;
Page({


  data: {
    imageurl:'',
    aspectRatio0:'',
    choose:0
  },


//////////////  init /////////////////////////
  onLoad: function (options) {
    const z=this
    var aspect=null
    z.setData({
      imageurl:options.chooseemotion
    })
    if(options.aspectRatio0!=0){
      aspect=options.aspectRatio0
    }else{
      
    }
    cropper = this.selectComponent('#cropper');
    cropper.fnInit({
      imagePath:options.chooseemotion,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:null,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });

  },
  // onShow:function(){
  //   const z=this
  //   cropper = this.selectComponent('#cropper');
  //   cropper.fnInit({
  //     imagePath:z.data.imageurl,          //*必填
  //     debug: true,                        //可选。是否启用调试，默认值为false。
  //     outputFileType: 'jpg',              //可选。目标文件的类型。
  //     quality: 1,                         //可选。图片的质量。
  //     aspectRatio: z.data.aspectRatio0,   //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
  //     minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
  //     minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
  //     initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
  //     initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
  //     });
  // },
  // spin:function(){
  //   const z=this
  //   var select=10
  //   z.setData({
  //     choose:select
  //   })
  //   var trans=true
  //   cropper.fnInit({
  //     imagePath:z.data.imageurl,       //*必填
  //     debug: false,                        //可选。是否启用调试，默认值为false。
  //     outputFileType: 'jpg',              //可选。目标文件的类型。
  //     quality: 1,                         //可选。图片的质量。
  //     aspectRatio:null,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
  //     minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
  //     minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
  //     initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
  //     initialBoxHeightRatio: 0.6,
  //     start:trans,
  //   });
  //   // cropper.fnCrop({
  //   //   success(){
  //   //     console.log("chenggong")
  //   //   }
  //   // });
  //   // console.log(trans)
  // },
  free:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=0
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  one:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=1
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  sansi:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=2
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  sisan:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=3
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  yiliujiu:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=4
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  jiuyiliu:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=5
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  ersan:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=6
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  saner:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=7
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  yibajiu:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=8
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  jiuyiba:function(e){
    const z=this
    let index = e.currentTarget.dataset.num
    var select=9
    z.setData({
      choose:select
    })
    cropper.fnInit({
      imagePath:z.data.imageurl,       //*必填
      debug: false,                        //可选。是否启用调试，默认值为false。
      outputFileType: 'jpg',              //可选。目标文件的类型。
      quality: 1,                         //可选。图片的质量。
      aspectRatio:index,                 //可选。裁剪的宽高比，默认null，即不限制剪裁宽高比。
      minBoxWidthRatio: 0.2,              //可选。最小剪裁尺寸与原图尺寸的比率，默认0.15，即宽度最小剪裁到原图的0.15宽。
      minBoxHeightRatio: 0.2,             //可选。同minBoxWidthRatio，当设置aspectRatio时，minBoxHeight值设置无效。minBoxHeight值由minBoxWidth 和 aspectRatio自动计算得到。
      initialBoxWidthRatio: 0.6,          //可选。剪裁框初始大小比率。
      initialBoxHeightRatio: 0.6          //可选。同initialBoxWidthRatio，当设置aspectRatio时，initialBoxHeightRatio值设置无效。initialBoxHeightRatio值由initialBoxWidthRatio 和 aspectRatio自动计算得到。
      });
  },
  fnCancel:function(){
    console.log('cancel')
    wx.navigateBack({
      delta: 1
    });
    //todo something
  },

  fnSubmit:function(){
    console.log('submit')
    //do crop
    cropper.fnCrop({

      //剪裁成功的回调
      success:function(res){
        console.log(res)
         //生成文件的临时路径
        console.log(res.tempFilePath);
        // wx.previewImage({
        //   urls: [res.tempFilePath],
        // })
        wx.navigateTo({
          url:"/pages/modifyPhoto/modify?chooseemotion="+res.tempFilePath,
        })
      },
      //剪裁失败的回调
      fail:function(res){
        console.log(res);
        
      },

      //剪裁结束的回调
      complete:function(){
        //complete
      }
    });
  }
})