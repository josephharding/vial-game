function Tile(i, j, type) {

  var tileDim = 32;
  
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

Tile.prototype.getDrawable = function(){
  return this.drawable;
};