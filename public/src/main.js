window.onload = function() {
  console.log("loaded!");
  
  var canvas = document.getElementById("game_canvas");
  var context = canvas.getContext("2d");
  
  var game = new Game(context);

  document.onkeyup = function(event) {
    game.handleKeyUp(event);
  }

};
