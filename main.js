var currMode;
var Modes;

var canvas;
var context;
var imagedata;

var mouseX=0, mouseY=0, mouseDown=false;
var centerX=500, centerY=200;

function main(){
  canvas = document.getElementById('myCanvas');
  context = canvas.getContext('2d');

  context.imageSmoothingEnabled = false;

  currMode = new DDA();

  canvas.addEventListener('mousemove', function(evt) {
    updateMousePos(canvas, evt);
    currMode.move();
    draw();
  }, false);

  canvas.addEventListener('mousedown', function(evt) {
    if(evt.which == 1){
      mouseDown = true;
      currMode.click();
    }
    if(evt.which == 3){
      centerX = mouseX;
      centerY = mouseY;
    }

    draw();
  }, false);

  canvas.addEventListener('mouseup', function(evt) {
    if(evt.which == 1){
      mouseDown = false;
    }

    draw();
  }, false);

  canvas.oncontextmenu = function() {
    return false;
  }

  draw();

  document.getElementById('translate').onclick = function(){
    Translate(currMode,
      Number(document.getElementById('transX').value),
      Number(document.getElementById('transY').value));
    draw();
  }

  document.getElementById('rotate').onclick = function(){
    Rotate(currMode,
      centerX,
      centerY,
      Number(document.getElementById('rotAngle').value));
    draw();
  }

  document.getElementById('scale').onclick = function(){
    Scale(currMode,
      centerX,
      centerY,
      Number(document.getElementById('scaleX').value),
      Number(document.getElementById('scaleY').value));
    draw();
  }

  document.getElementById('reflect').onclick = function(){
    Reflect(currMode,
      centerX,
      centerY,
      document.getElementById('reflectX').checked,
      document.getElementById('reflectY').checked);
    draw();
  }
}

function updateMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  mouseX = evt.clientX - rect.left;
  mouseY = evt.clientY - rect.top;
}

function draw(){
  context.fillStyle="gray";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = '10pt Calibri';
  context.fillStyle = 'black';

  dda(centerX-5, centerY, centerX+5, centerY);
  dda(centerX, centerY+5, centerX, centerY-5);

  currMode.draw();
}
