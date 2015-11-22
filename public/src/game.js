
function Game(context, cb) {
  this.turnCount = 0;
  this.renderer = new Renderer(context);
  this.grid = new Grid(10, 10, 16);
  //this.tileManager = new TileManager();
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw();

  this.onTurnFinished = cb;
}

Game.prototype.step = function() {
  this.turnCount++;
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw();

  this.onTurnFinished();
}

Game.prototype.handleClick = function(x, y) {
  var tile = this.grid.selectTile(x, y);
  if(tile != null) {
    console.log("you selected tile: " + tile.getI() + ", " + tile.getJ());
    tile.activate();
  }
}

Game.prototype.handleKeyUp = function(keyCode) {
  // handle key press
  console.log(keyCode);
  if(keyCode == 13) {
    this.step();
  }
};

Game.prototype.getTurns = function() {
  return this.turnCount;
}

