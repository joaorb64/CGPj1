function Bresenham(type) {
  this.vertexData = [new vertex(), new vertex()];

  this.click = function () {
    this.vertexData[0].x = mouseX;
    this.vertexData[0].y = mouseY;
    this.vertexData[1].x = mouseX;
    this.vertexData[1].y = mouseY;
  }

  this.move = function () {
    if(mouseDown == true){
      this.vertexData[1].x = mouseX;
      this.vertexData[1].y = mouseY;
    }
  }

  this.draw = function () {
      bresenham(this.vertexData[0].x, this.vertexData[0].y, this.vertexData[1].x, this.vertexData[1].y);

      context.fillText(
        "( " + this.vertexData[0].x.toFixed(2) + ", " + this.vertexData[0].y.toFixed(2) + " ) → ( "
        + this.vertexData[1].x.toFixed(2) + ", " + this.vertexData[1].y.toFixed(2) + " )",
        this.vertexData[0].x - 30, this.vertexData[0].y + 30);

      context.font = '12pt Calibri bold';
      context.fillText("Bresenham", 10, 30);
  };
}

function bresenham(x1, y1, x2, y2){
  var dx = x2-x1;
  var dy = y2-y1;

  var xincr, yincr;

  if(dx < 0){
    xincr = -1; dx = -dx;
  }
  else{
    xincr = 1;
  }

  if(dy < 0){
    yincr = -1; dy = -dy;
  }
  else{
    yincr = 1;
  }

  var x = x1, y = y1;

  putPixel(x, y);

  //Primeiro caso
  if(dx > dy){
    var p = 2*dy-dx;
    var const1 = 2*dy;
    var const2 = 2*(dy-dx);

    for(var i = 0; i < dx; i++){
      x += xincr;

      if(p<0){
        p += const1;
      }
      else{
        p += const2;
        y += yincr;
      }

      putPixel(x, y);
    }
  }
  //Segundo caso
  else{
    var p = 2*dx-dy;
    var const1 = 2*dx;
    var const2 = 2*(dx-dy);

    for(var i = 0; i < dy; i++){
      y += yincr;

      if(p<0){
        p += const1;
      }
      else{
        p += const2;
        x += xincr;
      }

      putPixel(x, y);
    }
  }
}
