
function Grid(width, height, dim) {
  this.tiles = [];
  var types = ["forest", "grass", "rock"];

  for(var i = 0; i < width; i++) {
    for(var j = 0; j < height; j++) {
      this.tiles.push(new Tile(i, j, types[Math.floor(Math.random()*types.length)]));
    }
  }
}

Grid.prototype.getDrawables = function(x, y) {
  var drawableList = [];
  // loop through tiles array, call getDrawable method
  for(var i=0; i<this.tiles.length; i++) {
    drawableList.push(this.tiles[i].getDrawable());
  }
  return drawableList;
};
