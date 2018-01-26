function DDA(type) {
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
      dda(this.vertexData[0].x, this.vertexData[0].y, this.vertexData[1].x, this.vertexData[1].y);

      context.fillText(
        "( " + this.vertexData[0].x.toFixed(2) + ", " + this.vertexData[0].y.toFixed(2) + " ) → ( "
        + this.vertexData[1].x.toFixed(2) + ", " + this.vertexData[1].y.toFixed(2) + " )",
        this.vertexData[0].x - 30, this.vertexData[0].y + 30);

      context.font = '12pt Calibri bold';
      context.fillText("DDA", 10, 30);
  };
}

function dda(x1, y1, x2, y2){
  var x = x1;
  var y = y1;

  var dx = x2-x1;
  var dy = y2-y1;

  var passos;

  if(Math.abs(dx) > Math.abs(dy)) passos = Math.abs(dx);
  else passos = Math.abs(dy);

  var xincr = dx/passos;
  var yincr = dy/passos;

  putPixel(Math.round(x), Math.round(y));

  for(var i=0; i<=passos; i++){
    x+=xincr; y+=yincr;

    putPixel(Math.round(x), Math.round(y));
  }
}
