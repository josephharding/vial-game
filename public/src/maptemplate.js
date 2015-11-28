
function MapTemplate(tileDim, mapWidthTiles, mapHeightTiles) {
  this.tileDim = tileDim;
  this.mapWidthTiles = mapWidthTiles;
  this.mapHeightTiles = mapHeightTiles;
}

MapTemplate.prototype.getDim = function() {
  return this.tileDim;
};

MapTemplate.prototype.getMapHeightInTiles = function() {
  return this.mapHeightTiles;
};

MapTemplate.prototype.getMapWidthInTiles = function() {
  return this.mapWidthTiles;
};

MapTemplate.prototype.getMapHeightInPixels = function() {
  return this.tileDim * this.mapHeightTiles;
};

MapTemplate.prototype.getMapWidthInPixels = function() {
  return this.tileDim * this.mapWidthTiles;
};

MapTemplate.prototype.getTiles = function() {
  return this.tiles;
};

MapTemplate.prototype.setTiles = function(tiles) {
  this.tiles = tiles;
};
