
function World(mapTemplate) {
  this.mapTemplate = mapTemplate;
  this.player = new Player(0, 0);

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
  if(Math.abs(this.player.getI() - tile.getI()) < 5 && Math.abs(this.player.getJ() - tile.getJ()) < 5){
    this.player.setPosition(tile.getI()*tile.getTileDim(), tile.getJ()*tile.getTileDim());
  }

};
