// utility functions for converting bmp to imagedata
function getBMP(buffer) {
  var datav = new DataView(buffer);
  var bitmap = {};
  bitmap.fileheader = {};
  bitmap.fileheader.bfType = datav.getUint16(0, true);
  bitmap.fileheader.bfSize = datav.getUint32(2, true);
  bitmap.fileheader.bfReserved1 = datav.getUint16(6, true);
  bitmap.fileheader.bfReserved2 = datav.getUint16(8, true);
  bitmap.fileheader.bfOffBits = datav.getUint32(10, true);
  bitmap.infoheader = {};
  bitmap.infoheader.biSize = datav.getUint32(14, true);
  bitmap.infoheader.biWidth = datav.getUint32(18, true);
  bitmap.infoheader.biHeight = datav.getUint32(22, true);
  bitmap.infoheader.biPlanes = datav.getUint16(26, true);
  bitmap.infoheader.biBitCount = datav.getUint16(28, true);
  bitmap.infoheader.biCompression = datav.getUint32(30, true);
  bitmap.infoheader.biSizeImage = datav.getUint32(34, true);
  bitmap.infoheader.biXPelsPerMeter = datav.getUint32(38, true);
  bitmap.infoheader.biYPelsPerMeter = datav.getUint32(42, true);
  bitmap.infoheader.biClrUsed = datav.getUint32(46, true);
  bitmap.infoheader.biClrImportant = datav.getUint32(50, true);
  var start = bitmap.fileheader.bfOffBits;
  bitmap.stride = Math.floor((bitmap.infoheader.biBitCount * bitmap.infoheader.biWidth+31)/32)*4;
  bitmap.pixels = new Uint8Array(buffer, start);
  return bitmap;
}

function convertToImageData(bitmap) {
  canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var Width = bitmap.infoheader.biWidth;
  var Height = bitmap.infoheader.biHeight;
  var imageData = ctx.createImageData(Width, Height);
  var data = imageData.data;
  var bmpdata = bitmap.pixels;
  var stride = bitmap.stride;

  for (var y = 0; y < Height; ++y) {
    for (var x = 0; x < Width; ++x) {
      var index1 = (x+Width*(Height-y))*4;
      var index2 = x * 3 + stride * y;
      data[index1] = bmpdata[index2 + 2];
      data[index1 + 1] = bmpdata[index2 + 1];
      data[index1 + 2] = bmpdata[index2];
      data[index1 + 3] = 255;
    }
  }
  return imageData;
}



function imgDrawable(x, y, imgdata) {
  this.imageData = imgdata;
  this.width = 32;
  this.height = 32;

  this.x = x;
  this.y = y;
}

imgDrawable.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
};

imgDrawable.prototype.highlight = function() {
  //this.color = "white";
};

// local i and j are the indexes in a 1d array
imgDrawable.prototype.colorPixel = function(data, index, localI, localJ) {
  // red
  data[index + 0] = this.imageData.data[localJ*32*4 + localI*4];
  // green 
  data[index + 1] = this.imageData.data[localJ*32*4 + localI*4 + 1];
  // blue
  data[index + 2] = this.imageData.data[localJ*32*4 + localI*4 + 2];
  // alpha
  data[index + 3] = this.imageData.data[localJ*32*4 + localI*4 + 3];
};

// data is the writeable component of imageData, an array with an entry for each pixel in the canvas
imgDrawable.prototype.draw = function(data, canvasWidth, canvasHeight, offsetX, offsetY) {
  // there are four elements that make a single pixel, the red value, the green, the blue, and alpha
  
  var pixelElements = 4;
  var startingJ = this.y - offsetY;
  var startingI = this.x - offsetX;
  // loop through the rectangle that starts at startingIndex and has width and height
  var row = 0;
  for(var j = 0; j < this.height; j++) {  
    for(var i = 0; i < this.width; i++) {
      
      var pixelJ = startingJ + j;
      var pixelI = startingI + i;
  
      if(pixelI > 0 && pixelI < canvasWidth && pixelJ > 0 && pixelJ < canvasHeight) {   
        this.colorPixel(data, pixelElements * ((pixelJ * canvasWidth) + pixelI), i, j);
      }
    }
  }

};
