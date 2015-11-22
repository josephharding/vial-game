
function MapBuilder(width, height, dim) {
  var tiles = [];
  var types = ["forest", "grass", "grass", "rock"];
  for(var i = 0; i < width; i++) {
    for(var j = 0; j < height; j++) {
      var typeIndex = Math.floor(Math.random() * types.length);
      tiles.push(new Tile(i, j, dim, types[typeIndex]));
    }
  }

  this.mapTemplate = new MapTemplate(dim, width, height);
  this.mapTemplate.setTiles(tiles);
}

MapBuilder.prototype.getMapTemplate = function() {
  return this.mapTemplate;
};
