// Something that can never accure

type Circle = {
  kind: "circle";
  size: number;
};
type Square = {
  kind: "square";
  size: number;
};
type Rectangle = {
  kind: "rectangle";
  height: number;
  width: number;
};

type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind == "circle") {
    return Math.PI * shape.size ** 2;
  } else if (shape.kind == "square") {
    return shape.size ** 2;
  } else if (shape.kind == "rectangle") {
    return shape.width * shape.height;
  }

  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled; // if you return type return type of function will be number if not it will be number | undefined
}

const circleArea = calculateArea({ kind: "circle", size: 4 });
