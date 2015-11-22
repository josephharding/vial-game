
function Renderer(context, width, height) {
  this.width = width;
  this.height = height;
  this.drawList = [];
  this.context = context;

  this.imageData = this.context.createImageData(this.width, this.height);
}

Renderer.prototype.submitToDraw = function(list) {
  this.drawList = list;
};

Renderer.prototype.draw = function(xOffset, yOffset) {
  this.context.clearRect(0, 0, this.width, this.height);
  for(var i = 0; i < this.drawList.length; i++) {
    this.drawList[i].draw(this.imageData.data, this.width, this.height, xOffset, yOffset);
  }
  this.context.putImageData(this.imageData, 0, 0);
};
