class Figura {

 constructor(x, y, tam, col) {

  this.x = x;

  this.y = y;

  this.tam = tam;

  this.col = col;

 }



 display() {

  fill(this.col);

  triangle(this.x, this.y, this.tam);

 }

}



let figuras = [];



function setup() {

 createCanvas(800, 600);

 noStroke();



 figuras = [

  new Figura(450, 150, 90, '#2600ff'),

  new Figura(400, 150, 120, '#065b25'),

  new Figura(345, 150, 70, '#f6e03b')

 ];

}



function draw() {

 background(5,2,4);



 for (const figura of figuras) {

  figura.display();

 }

}
