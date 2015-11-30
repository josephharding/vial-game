

function Game(context, viewWidth, viewHeight, cb) {
  this.viewWidth = viewWidth;
  this.viewHeight = viewHeight;
  this.turnCount = 0;
  this.mapBuilder = new MapBuilder(40, 40, 32);
  this.renderer = new Renderer(context, viewWidth, viewHeight);
  

  this.refreshInterface = cb;


  // var width = 16;
  // var height = 16;
  // context.fillRect(100, 100, width, height);

  // testing image data vs. fill rect
  /*
  var width = 16;
  var height = 16;
  context.fillRect(0, 0, width, height);
  var image = context.createImageData(width, height);
  var data = image.data; 
  for(var i = 0; i < width * height * 4; i += 4) {
    data[i + 0] = 0;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  */
  
  // var img = new Image();
  // img.src = "vial.png";

  // img.onload = function(){
  //   context.drawImage(img, 30, 30);
  // };

  // step 1: load img into buffer
  
  

  // step 2: convert buffer into bitmap
  // step 3: convert bitmap into imgdata

}

Game.prototype.start = function(imagedata) {
  var mapTemplate = this.mapBuilder.getMapTemplate();
  this.world = new World(mapTemplate, imagedata);
  this.camera = new Camera(this.viewWidth, this.viewHeight, mapTemplate.getMapWidthInPixels(), mapTemplate.getMapHeightInPixels());
  this.refresh();


};

Game.prototype.refresh = function(){
  this.redraw();
  this.refreshInterface(this.turnCount, this.world.getPlayerEnergy());
};

Game.prototype.step = function() {
  this.turnCount++;
  this.world.turnOver();
  this.refresh();
};

Game.prototype.redraw = function(){
  this.renderer.submitToDraw(this.world.getDrawables());
  this.renderer.draw(this.camera.getX(), this.camera.getY());
};

Game.prototype.handleClick = function(x, y) {
  this.world.handleClick(x,y,this.camera);
  this.refresh();
};

Game.prototype.handleKeyDown = function(keyCode) {
  // handle key press
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
};

