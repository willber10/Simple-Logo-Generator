const { Circle, Square, Triangle } = require('./lib/shapes.js');

const fs = require('fs');

const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to draw?',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    name: 'color',
    message: 'What color would you like to use?'
  }
]).then(answers => {
  let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle(answers.color);
      break;
    case 'square':
      shape = new Square(answers.color);
      break;
    case 'triangle':
      shape = new Triangle(answers.color);
      break;
  }
  fs.writeFile("examples/" + answers.shape + ".svg", renderSvg(shape), function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  })
});


let circle = new Circle("orange");
let square = new Square();
let triangle = new Triangle();


function renderSvg(shape) {
    return `<svg width="100" height="100">
    ${shape.render()}
    </svg>`;
}

// console.log(circle.render());
// fs.writeFile("examples/circle.svg", renderSvg(circle), function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("The file was saved!");
//   }
// });