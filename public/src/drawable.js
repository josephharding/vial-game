
function Drawable(x, y, width, height, color) {

  this.width = width;
  this.height = height;
  this.color = color;

  this.x = x;
  this.y = y;
}

Drawable.prototype.setPos = function(x, y) {
  this.x = x;
  this.y = y;
};

Drawable.prototype.highlight = function() {
  //this.color = "white";
};

Drawable.prototype.colorPixel = function(data, index) {
  // red
  data[index + 0] = this.color.r;
  // green 
  data[index + 1] = this.color.g;
  // blue
  data[index + 2] = this.color.b;
  // alpha
  data[index + 3] = this.color.a; 
};

// data is the writeable component of imageData, an array with an entry for each pixel in the canvas
Drawable.prototype.draw = function(data, canvasWidth) {
  var startingIndex = (this.y * canvasWidth) + this.x;
  // there are four elements that make a single pixel, the red value, the green, the blue, and alpha
  var pixelElements = 4;
  // loop through the rectangle that starts at startingIndex and has width and height
  var row = 0;
  for(var j = 0; j < this.height; j++) {  
    for(var i = 0; i < this.width; i++) {
      var pixelIndex = startingIndex + (i * pixelElements) + row;
      this.colorPixel(data, pixelIndex);
    }
    // 4 is the number of elements per pixel
    row += (canvasWidth * pixelElements);
  }
};
