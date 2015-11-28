function Tile(i, j, tileDim, type) {

  this.i = i;
  this.j = j;
  this.tileDim = tileDim;

  var tileColor = {'r': 0, 'g': 0, 'b': 0, 'a': 255};
  if(type == "forest") {
    tileColor = {'r': 0, 'g': 100, 'b': 0, 'a': 255};
  } else if (type == "grass") {
    tileColor = {'r': 154, 'g': 205, 'b': 50, 'a': 255};
  } else if (type == "rock") {
    tileColor = {'r': 144, 'g': 144, 'b': 144, 'a': 255};
  }
  this.drawable = new Drawable (i*tileDim, j*tileDim, tileDim, tileDim, tileColor);
}

Tile.prototype.getDrawable = function() {
  return this.drawable;
};

Tile.prototype.activate = function() {
  this.drawable.highlight();
};

Tile.prototype.getI = function() {
  return this.i;
};

Tile.prototype.getJ = function() {
  return this.j;
};

Tile.prototype.getTileDim = function() {
  return this.tileDim;
};