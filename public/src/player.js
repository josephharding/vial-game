
function Player(tileDim) {
  this.energy = 5;
  this.tileDim = tileDim;
  this.iPos = 0;
  this.jPos = 0;
  this.playerWidth = 16;
  this.playerHeight = 16;
  this.color = {'r': 0, 'g': 0, 'b': 0, 'a': 255};
  this.playerDrawable = new Drawable(this.getX(), this.getY(), this.playerWidth, this.playerHeight, this.color);
}

Player.prototype.getDrawablePlayer = function(){
  return this.playerDrawable;
};

Player.prototype.setPosition = function(tile){
  this.playerDrawable.setPos(tile.getX(), tile.getY());

  this.energy = this.energy - this.getMoveDistance(tile);
  this.iPos = tile.getI();
  this.jPos = tile.getJ();

};

Player.prototype.getMoveDistance = function(tile){
  var iDistance = Math.abs(this.getI() - tile.getI());
  var jDistance = Math.abs(this.getJ() - tile.getJ());
  console.log(iDistance, jDistance);
  return iDistance+jDistance;
};

Player.prototype.getI = function(){
  return this.iPos;
};

Player.prototype.getJ = function(){
  return this.jPos;
};

Player.prototype.getX = function(){
  return this.iPos*this.tileDim;
};

Player.prototype.getY = function(){
  return this.jPos*this.tileDim;
};

Player.prototype.getEnergy = function(){
  return this.energy;
};

Player.prototype.energyReset = function(){
  this.energy = 5;
};

Player.prototype.canMove = function(tile){
  //if player energy is enough to get to tile
  if (this.getMoveDistance(tile) <= this.getEnergy()) {
    return true;
  } else {
    return false;
  }
};

