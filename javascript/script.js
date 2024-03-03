document.addEventListener('DOMContentLoaded', function () {

    paper.install(window);
    paper.setup('background');

//var stars = new Symbol(star); i used symbols previously but you couldn't change the indivual color
var number = 500;
let positions = [];
  for (var i = 0; i < number; i++) {
    var star = new Path.Star({

        points: 4,
        radius1: 10,
        radius2: 40,
        fillColor: '#65D8E6',
    });
    star.fillColor.hue = i * 0.2 + 180;
    star.fillColor.lightness = 0.75;
      ;
    star.rotate(45);
    var point = view.size;
    var position = point.multiply(Point.random().multiply(2).subtract(1));
    star.position = position;
    positions.push(position)
    star.scale(new Size(0.75,0.75).multiply(Math.random()));
  }

  var mousepoint = new Point(0,0);
  
  view.onMouseMove = function(event) {
    mousepoint = event.point;
    return false;
  }
  view.onFrame = function() { 

   // stars.definition.rotate(1); makes the position bounce lol
    for (var i = 0; i < number + 0; i++) {

      var placedstar = project.activeLayer.children[i];
      var size = placedstar.bounds.size;
      var delta = mousepoint.subtract(positions[i]);
     placedstar.position = positions[i].add(delta.multiply(size.multiply(0.0025)));

    }     
  }
  paper.view.draw();
});
