//Desenha um pixel no canvas
function putPixel(x, y, style="black;"){
  x = Math.round(x);
  y = Math.round(y);
  context.fillStyle = style;
  context.fillRect(x, y, 1, 1);
}

//Estrutura de dados - vértice
function vertex(type) {
  this.x = -999;
  this.y = -999;
}

//Calcula a distância entre 2 vértices
function distance(vert1, vert2){
  return Math.round(Math.sqrt((vert1.x-vert2.x)*(vert1.x-vert2.x) + (vert1.y-vert2.y)*(vert1.y-vert2.y)));
}
