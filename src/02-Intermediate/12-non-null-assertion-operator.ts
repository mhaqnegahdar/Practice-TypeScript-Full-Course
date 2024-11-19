// ! Compile tiem only with no runtime impact

import { Point2D } from "01-Basics/06-structuralTyping";

let point: Point2D;

function initialize() {
  point = { x: 0, y: 0 };
}

initialize();

console.log(`X:${point!.x}, Y:${point!.y}`);
