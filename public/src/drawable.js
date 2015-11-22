
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
  this.color = "white";
};

Drawable.prototype.draw = function(context, xOffset, yOffset) {
  context.fillStyle = this.color;
  console.log("offset x, y: " + xOffset + ", " + yOffset);
  context.fillRect(this.x + xOffset, this.y + yOffset, this.width, this.height);  
};
