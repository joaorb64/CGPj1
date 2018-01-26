function BresenhamCircle(type) {
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
      bresenhamCircle(this.vertexData[0].x,
        this.vertexData[0].y,
        distance(this.vertexData[0], this.vertexData[1]));

      context.fillText("( " + this.vertexData[0].x.toFixed(2) + ", " + this.vertexData[0].y.toFixed(2) + " ) - radius: "
        + distance(this.vertexData[0], this.vertexData[1]).toFixed(2),
        this.vertexData[0].x - 30, this.vertexData[0].y + distance(this.vertexData[0], this.vertexData[1]) + 30);

      putPixel(this.x, this.y);
      putPixel(this.x+1, this.y);
      putPixel(this.x-1, this.y);
      putPixel(this.x, this.y+1);
      putPixel(this.x, this.y-1);

      context.font = '12pt Calibri bold';
      context.fillText("Bresenham Circle", 10, 30);
  };
}

function bresenhamCircle(xc, yc, r){
  var x=0; y=r; p=3-2*r;

  putPixel(xc+x, yc+y);
  putPixel(xc-x, yc+y);
  putPixel(xc+x, yc-y);
  putPixel(xc-x, yc-y);
  putPixel(xc+y, yc+x);
  putPixel(xc-y, yc+x);
  putPixel(xc+y, yc-x);
  putPixel(xc-y, yc-x);

  while(x<y){
    if(p < 0) p += 4*x+6;
    else{
      p += 4 * (x-y) + 10;
      y--;
    }
    x++;

    putPixel(xc+x, yc+y);
    putPixel(xc-x, yc+y);
    putPixel(xc+x, yc-y);
    putPixel(xc-x, yc-y);
    putPixel(xc+y, yc+x);
    putPixel(xc-y, yc+x);
    putPixel(xc+y, yc-x);
    putPixel(xc-y, yc-x);
  }
}
