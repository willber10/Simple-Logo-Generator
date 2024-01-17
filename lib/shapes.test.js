const { Circle, Square, Triangle } = require('./shapes.js');

describe("Circle", () => {
    test("has a radius of 50", () => {
        let circle = new Circle();
        expect(circle.radius).toBe(50);
    });
    test("has a cx", () => {
        let circle = new Circle();
        expect(circle.cx).toBe(50);
    });
    test("has a cy", () => {
        let circle = new Circle();
        expect(circle.cy).toBe(50);
    });
    test("has a color", () => {
        let circle = new Circle("orange");
        expect(circle.color).toBe("orange");
    });
    test("has a render method which returns a circle", () => {
        let circle = new Circle();
        const expected = `<circle cx="${circle.cx}" cy="${circle.cy}" r="${circle.radius}" fill="${circle.color}"/>`;
        expect(circle.render()).toEqual(expected);
    });
});
    
describe("Square", () => {
    test("has a width of 100", () => {
        let square = new Square();
        expect(square.width).toBe(100);
    });
    test("has a height of 100", () => {
        let square = new Square();
        expect(square.height).toBe(100);
    });
    test("has a x", () => {
        let square = new Square();
        expect(square.x).toBe(0);
    });
    test("has a y", () => {
        let square = new Square();
        expect(square.y).toBe(0);
    });
    test("has a color", () => {
        let square = new Square("orange");
        expect(square.color).toBe("orange");
    });
    test("has a render method which returns a square", () => {
        let square = new Square();
        const expected = `<rect x="${square.x}" y="${square.y}" width="${square.width}" height="${square.height}" fill="${square.color}"/>`;
        expect(square.render()).toEqual(expected);
    });
});
    
describe("Triangle", () => {
    test("has a points", () => {
        let triangle = new Triangle();
        expect(triangle.points).toBe("50,0 0,100 100,100");
    });
    test("has a color", () => {
        let triangle = new Triangle("orange");
        expect(triangle.color).toBe("orange");
    });
    test("has a render method which returns a triangle", () => {
        let triangle = new Triangle();
        const expected = `<polygon points="${triangle.points}" fill="${triangle.color}"/>`;
        expect(triangle.render()).toEqual(expected);
    });
});