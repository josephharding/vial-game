
function Game(context, width, height, cb) {
  this.turnCount = 0;
  this.camera = new Camera();
  this.renderer = new Renderer(context, width, height);
  this.grid = new Grid(40, 40, 16);
  this.onTurnFinished = cb;
  this.step();
}

Game.prototype.step = function() {
  this.turnCount++;
  this.redraw();
  this.onTurnFinished(this.turnCount);
};

Game.prototype.redraw = function(){
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw(this.camera.getX(), this.camera.getY());
};

Game.prototype.handleClick = function(x, y) {
  var tile = this.grid.selectTile(x, y);
  if(tile !== null) {
    console.log("you selected tile: " + tile.getI() + ", " + tile.getJ());
    tile.activate();
  }
};

Game.prototype.handleKeyDown = function(keyCode) {
  // handle key press
  console.log(keyCode);
  if(keyCode == 13) {
    this.step();
    // up
  } else if (keyCode == 38) {
    this.camera.moveUp();
    this.redraw();

    // down
  } else if (keyCode == 40) {
    this.camera.moveDown();
    this.redraw();

    // right
  } else if (keyCode == 39) {
    this.camera.moveRight();
    this.redraw();

    // left
  } else if (keyCode == 37) {
    this.camera.moveLeft();
    this.redraw();

  }
};

Game.prototype.getTurns = function() {
  return this.turnCount;
}

