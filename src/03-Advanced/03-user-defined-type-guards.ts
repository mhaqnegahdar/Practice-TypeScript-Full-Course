import { Rectangle, Square } from "02-Intermediate/16-never-type";

type Shape_ = Rectangle | Square;

// Type Guards

function isSquare(shape: Shape_): shape is Square {
  return "size" in shape;
}

function isRectangle(shape: Shape_): shape is Rectangle {
  return "width" in shape;
}

function calculateShapeArea(shape: Shape_): number {
  if (isSquare(shape)) {
    return shape.size ** 2;
  }

  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled;
}

console.log(calculateShapeArea({ size: 4, kind: "square" }));
