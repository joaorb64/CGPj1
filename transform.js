//translação, rotação, escala, reflexão

function Translate(object, x, y) {
  for(var i=0; i<object.vertexData.length; i++){
    object.vertexData[i].x += x;
    object.vertexData[i].y += y;
  }
}

function Rotate(object, x, y, angle) {
  for(var i=0; i<object.vertexData.length; i++){
    var _angle = (Math.PI / 180) * angle;
    var _x, _y;
    _x = (object.vertexData[i].x - x)*Math.cos(_angle) - (object.vertexData[i].y - y)*Math.sin(_angle) + x;
    _y = (object.vertexData[i].y - y)*Math.cos(_angle) + (object.vertexData[i].x - x)*Math.sin(_angle) + y;

    object.vertexData[i].x = _x;
    object.vertexData[i].y = _y;
  }
}

function Scale(object, cx, cy, sx, sy) {
  for(var i=0; i<object.vertexData.length; i++){
    object.vertexData[i].x = (object.vertexData[i].x-cx) * sx + cx;
    object.vertexData[i].y = (object.vertexData[i].y-cy) * sy + cy;
  }
}

function Reflect(object, cx, cy, rx, ry) {
  for(var i=0; i<object.vertexData.length; i++){
    if(rx == true){
      object.vertexData[i].x -= cx;
      object.vertexData[i].x *= -1;
      object.vertexData[i].x += cx;
    }
    if(ry == true){
      object.vertexData[i].y -= cy;
      object.vertexData[i].y *= -1;
      object.vertexData[i].y += cy;
    }
  }
}
