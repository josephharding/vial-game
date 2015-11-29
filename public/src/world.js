
function World(mapTemplate) {
  this.mapTemplate = mapTemplate;
  this.player = new Player(this.mapTemplate.getDim());

}

World.prototype.selectTile = function(x, y, camera) {
  var result = null;
  // convert x,y position to i,j indices in map grid
  var i = Math.floor ((x + camera.getX()) / this.mapTemplate.getDim());
  var j = Math.floor ((y + camera.getY()) / this.mapTemplate.getDim());
  var tiles = this.mapTemplate.getTiles();
  if(i < this.mapTemplate.getMapHeightInTiles() && i > -1 && j < this.mapTemplate.getMapWidthInTiles() && j > -1) {
    result = tiles[(i * this.mapTemplate.getMapHeightInTiles()) + j];
  }
  return result;
};

World.prototype.getDrawables = function() {
  var drawables = this.mapTemplate.getTiles().map(function(tile) {
    return tile.getDrawable();
  });
  drawables.push(this.player.getDrawablePlayer());
  return drawables;
};

World.prototype.handleClick = function(x, y, camera) {
  var tile = this.selectTile(x, y, camera);

  //this.player.getI and getJ not yet implemented
  if(this.player.canMove(tile)){
    this.player.setPosition(tile);
  } else {
    console.log("Target is too far away");
  }
};

World.prototype.getPlayerEnergy = function(){
  return this.player.getEnergy();
};

World.prototype.turnOver = function(){
  this.player.energyReset();
};
