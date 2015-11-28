
function Player(iTile, jTile) {
  this.initialXPos = 0;
  this.initialYPos = 0;
  this.playerWidth = 16;
  this.playerHeight = 16;
  this.color = {'r': 0, 'g': 0, 'b': 0, 'a': 255};
  this.playerDrawable = new Drawable(this.initialXPos, this.initialYPos, this.playerWidth, this.playerHeight, this.color);
}

Player.prototype.getDrawablePlayer = function(){
  return this.playerDrawable;
};

Player.prototype.setPosition = function(x, y){
  this.playerDrawable.setPos(x, y);
};

Player.prototype.getI = function(){
  return playerI;
};

Player.prototype.getJ = function(){
  return playerJ;
};
