const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render() returns SVG string with given shape color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render() returns SVG string with given shape color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  test('render() returns SVG string with given shape color', () => {
    const square = new Square();
    square.setColor('blue');
    const svg = square.render();
    expect(svg).toEqual('<rect x="50" y="50" width="200" height="200" fill="blue" />');
  });
});
