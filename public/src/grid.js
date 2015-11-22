
function Grid(width, height, dim) {
  this.tileDim = dim;
  this.maxI = width;
  this.maxJ = height;

  this.tiles = [];
  var types = ["forest", "grass", "grass", "rock"];

  for(var i = 0; i < this.maxI; i++) {
    for(var j = 0; j < this.maxJ; j++) {
      var typeIndex = Math.floor(Math.random() * types.length);
      this.tiles.push(new Tile(i, j, this.tileDim, types[typeIndex]));
    }
  }
}

Grid.prototype.selectTile = function(x, y) {
  var result = null;
  var i = Math.floor( x / this.tileDim);
  var j = Math.floor( y / this.tileDim);
  if(i < this.maxI && i > -1 && j < this.maxJ && j > -1) {
    result = this.tiles[(i * this.maxJ) + j];
  }
  return result;
};

Grid.prototype.getDrawables = function(x, y) {
  var drawableList = [];
  // loop through tiles array, call getDrawable method
  for(var i=0; i<this.tiles.length; i++) {
    drawableList.push(this.tiles[i].getDrawable());
  }
  return drawableList;
};
