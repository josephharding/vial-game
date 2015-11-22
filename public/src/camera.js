
function Camera() {
  this.moveMag = 4;
  this.x = 0;
  this.y = 0;
}

Camera.prototype.moveUp = function() {
  this.y -= this.moveMag;
};

Camera.prototype.moveDown = function() {
  this.y += this.moveMag;
};

Camera.prototype.moveRight = function() {
  this.x += this.moveMag;
};

Camera.prototype.moveLeft = function() {
  this.x -= this.moveMag;
};

Camera.prototype.getX = function() {
  return this.x;
};

Camera.prototype.getY = function() {
  return this.y;
};
