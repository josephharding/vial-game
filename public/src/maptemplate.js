
function MapTemplate(tileDim, mapWidthTiles, mapHeightTiles) {
  this.tileDim = tileDim;
  this.mapWidthTiles = mapWidthTiles;
  this.mapHeightTiles = mapHeightTiles;
}

MapTemplate.prototype.getDim = function() {
  return this.tileDim;
};

MapTemplate.prototype.getTileHeight = function() {
  return this.mapHeightTiles;
};

MapTemplate.prototype.getTileWidth = function() {
  return this.mapWidthTiles;
};

MapTemplate.prototype.getTiles = function() {
  return this.tiles;
};

MapTemplate.prototype.setTiles = function(tiles) {
  this.tiles = tiles;
};
