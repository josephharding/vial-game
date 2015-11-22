
function World(mapTemplate) {
  this.mapTemplate = mapTemplate;
}

World.prototype.selectTile = function(x, y, camera) {
  var result = null;
  var i = Math.floor ((x - camera.getX()) / this.mapTemplate.getDim());
  var j = Math.floor ((y - camera.getY()) / this.mapTemplate.getDim());
  var tiles = this.mapTemplate.getTiles();
  if(i < this.mapTemplate.getTileHeight() && i > -1 && j < this.mapTemplate.getTileWidth() && j > -1) {
    result = tiles[(i * this.mapTemplate.getTileHeight()) + j];
  }
  return result;
}

World.prototype.getMapWidth = function() {
  return this.mapTemplate.getTileWidth() * this.mapTemplate.getTileDim();
};

World.prototype.getMapHeight = function() {
  return this.mapTemplate.getTileHeight() * this.mapTemplate.getTileDim();
};

World.prototype.getDrawables = function() {
  return this.mapTemplate.getTiles().map(function(tile) {
    return tile.getDrawable();
  });
};
