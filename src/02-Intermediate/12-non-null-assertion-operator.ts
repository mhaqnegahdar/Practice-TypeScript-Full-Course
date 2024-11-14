// ! Compile tiem only with no runtime impact

let point: Point2D;

function initialize() {
  point = { x: 0, y: 0 };
}

initialize();

console.log(`X:${point!.x}, Y:${point!.y}`);
