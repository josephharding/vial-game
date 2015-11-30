window.onload = function() {
  console.log("loaded!");
  var energyMeter = document.getElementById("energy_meter");
  var turnCounter = document.getElementById("turn_counter");
  var canvas = document.getElementById("game_canvas");
  
  var context = canvas.getContext("2d");

  var game = new Game(context, canvas.width, canvas.height, function(turns, energy) {
    turnCounter.textContent = turns;
    energyMeter.textContent = energy;
  });

  var oReq = new XMLHttpRequest();
  oReq.open("GET", "vial.bmp", true);
  oReq.responseType = "blob";

  oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response;
    var reader = new FileReader();
    reader.addEventListener("load", function(e){
      var buffer = e.target.result;
      var bitmap = getBMP(buffer);
      var imageData = convertToImageData(bitmap);
      // context.putImageData(imageData, 0, 0);
      game.start(imageData);
    }, false);
    reader.readAsArrayBuffer(arrayBuffer);
  };

  oReq.send(null);
  
  

  document.onkeydown = function(event) {
    game.handleKeyDown(event.keyCode);
  };

  canvas.onclick = function(event) {
    game.handleClick(event.offsetX, event.offsetY);
  };

};
