
function Renderer(context, width, height) {
  this.width = width;
  this.height = height;
  this.drawList = [];
  this.context = context;
}

Renderer.prototype.submitToDraw = function(list) {
  this.drawList = list;
};

Renderer.prototype.draw = function(xOffset, yOffset) {
  this.context.clearRect(0, 0, this.width, this.height);
  
  var imgData = this.context.createImageData(this.width, this.height);
  console.log("image data data has length: " + imgData.data.length);

  for(var i = 0; i < this.drawList.length; i++) {
    this.drawList[i].draw(imgData.data, this.width);
  }
  this.context.putImageData(imgData, xOffset, yOffset);
};
