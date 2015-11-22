
function Game(context) {
  this.turnCount = 0;
  this.renderer = new Renderer(context);
  this.grid = new Grid(10, 10, 16);
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw();
}

Game.prototype.step = function() {
  this.turnCount++;
  this.renderer.submitToDraw(this.grid.getDrawables());
  this.renderer.draw();
};

Game.prototype.handleKeyUp = function(event) {
  // handle key press
  console.log(event.keyCode);
  if(event.keyCode == 13) {
    this.step();
  }
};

