
function Grid(width, height, dim) {
  this.tiles = [];
  var colors = ["red", "white", "blue"];

  var x = 0;
  var y = 0;
  for(var i = 0; i < width; i++) {
    for(var j = 0; j < height; j++) {
      this.tiles.push(new Drawable(x, y, dim, dim, colors[this.tiles.length % colors.length]));
      x += dim;
    }
    x = 0;
    y += dim;
  }
}

Grid.prototype.getDrawables = function(x, y) {
  return this.tiles;
}
