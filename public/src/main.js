window.onload = function() {
  console.log("loaded!");
  
  var turnCounter = document.getElementById("turn_counter");
  var canvas = document.getElementById("game_canvas");
  
  var context = canvas.getContext("2d");
  
  var game = new Game(context, canvas.width, canvas.height, function(turns) {
    turnCounter.textContent = turns; 
  });

  document.onkeydown = function(event) {
    game.handleKeyDown(event.keyCode);
  };

  canvas.onclick = function(event) {
    game.handleClick(event.offsetX, event.offsetY);
  };

};
