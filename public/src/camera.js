
function Camera(viewWidth, viewHeight, mapWidthPixels, mapHeightPixels) {
  this.moveMag = 4;
  this.mapWidthPixels = mapWidthPixels;
  this.mapHeightPixels = mapHeightPixels;
  this.viewWidth = viewWidth;
  this.viewHeight = viewHeight;
  this.x = 0;
  this.y = 0;
}

Camera.prototype.moveUp = function() {
  if (this.y > 0) {
    this.y -= this.moveMag;
  }
};

Camera.prototype.moveDown = function() {
  if (this.y < this.mapHeightPixels - this.viewHeight) {
    this.y += this.moveMag;
  }
};

Camera.prototype.moveRight = function() {
  if (this.x < this.mapWidthPixels - this.viewWidth){
    this.x += this.moveMag;
  }
};

Camera.prototype.moveLeft = function() {
  if(this.x > 0){
    this.x -= this.moveMag;
  }
};

Camera.prototype.getX = function() {
  return this.x;
};

Camera.prototype.getY = function() {
  return this.y;
};
