class Shapes {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
  constructor() {
    super();
    this.radius = 20;
    this.radius = radius;
    this.cx = 0;
    this.cy = 0;
    this.render = function() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}"/>`;
    }
  }

}

class Square extends Shapes {
    constructor() {
        this.width = 20;
        this.height = 20;
        this.x = 20;
        this.y = 20;
        this.render = function() {
          return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
        }

    }

}

class Triangle extends Shapes {
    constructor() {
        super();
        this.points = "0,0 20,0 10,20"
        this.render = function() {
          return `<polygon points="${this.points}" fill="${this.color}"/>`;
        }
    }

}