const { Circle, Square, Triangle } = require('./lib/shapes.js');

const fs = require('fs');

let circle = new Circle();
let square = new Square();
let triangle = new Triangle();

console.log(circle.render());