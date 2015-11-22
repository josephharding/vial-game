function Tile(i, j, tileDim, type) {

  this.i = i;
  this.j = j;

  var tileColor = "black";
  if(type == "forest") {
    tileColor = "DarkGreen";
  } else if (type == "grass") {
    tileColor = "Green";
  } else if (type == "rock") {
    tileColor = "Gray";
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
