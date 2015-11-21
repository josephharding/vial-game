
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
}

Drawable.prototype.draw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);  
}
