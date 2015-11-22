
function Game(context, cb) {
  this.turnCount = 0;
  this.camera = new Camera();
  this.renderer = new Renderer(context);
  this.grid = new Grid(10, 10, 16);
  this.onTurnFinished = cb;
  this.step();
}

Game.prototype.step = function() {
  this.turnCount++;
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw(this.camera.getX(), this.camera.getY());
  this.onTurnFinished(this.turnCount);
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
    // up
  } else if (keyCode == 38) {
    this.camera.moveUp();
    // down
  } else if (keyCode == 40) {
    this.camera.moveDown();
    // right
  } else if (keyCode == 39) {
    
    this.camera.moveRight();
    // left
  } else if (keyCode == 37) {
    this.camera.moveLeft();
  }
};

Game.prototype.getTurns = function() {
  return this.turnCount;
}

