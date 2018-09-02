$(function() {
    var canvas = document.getElementById("MyCanvas");
    var context = canvas.getContext("2d");
  
    function hexagon(x, y, color) {
      var size = 40;
      context.beginPath();
      context.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  
      for (side = 0; side < 7; side++) {
        context.lineTo(
          x + size * Math.cos((side * 2 * Math.PI) / 6),
          y + size * Math.sin((side * 2 * Math.PI) / 6)
        );
        context.strokeStyle = "#ffa100";
        context.stroke();
      }
      context.fillStyle = color;
      context.fill();
    }
  
    hexagon(240, 180, "#ffa100");
    hexagon(100, 180, "#ffffff");
    hexagon(170, 60, "#ffffff");
    hexagon(170, 140, "#ffffff");
    hexagon(170, 220, "#ffffff");
    hexagon(240, 100, "#ffffff");
    hexagon(100, 100, "#ffffff");
  });
    
  
  