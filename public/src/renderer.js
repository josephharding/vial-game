
function Renderer(context) {
  this.drawList = [];
  this.context = context;
}

Renderer.prototype.submitToDraw = function(list) {
  this.drawList = list;
};

Renderer.prototype.draw = function(xOffset, yOffset) {
  for(var i = 0; i < this.drawList.length; i++) {
    this.drawList[i].draw(this.context, xOffset, yOffset);
  }
};
