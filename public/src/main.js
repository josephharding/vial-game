window.onload = function() {
  console.log("loaded!");
  
  var turnCounter = document.getElementById("turn_counter");
  var canvas = document.getElementById("game_canvas");
  
  var context = canvas.getContext("2d");
  
  var game = new Game(context, function() {
    turnCounter.textContent = game.getTurns(); 
  });

  document.onkeyup = function(event) {
    game.handleKeyUp(event.keyCode);
  }

  canvas.onclick = function(event) {
    game.handleClick(event.offsetX, event.offsetY);
  }

};
