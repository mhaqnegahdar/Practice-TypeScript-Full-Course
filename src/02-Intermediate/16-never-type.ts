// Something that can never accure

type Circle = {
  kind: "circle";
  size: number;
};
export type Square = {
  kind: "square";
  size: number;
};
export type Rectangle = {
  kind: "rectangle";
  height: number;
  width: number;
};

export type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape) {
  
  switch(shape.kind){
    case "circle":
    return Math.PI * shape.size ** 2;

    case "square":
    return shape.size ** 2;

    case "rectangle":
    return shape.width * shape.height;

  }


 
  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled; // if you return type return type of function will be number if not it will be number | undefined
}

const circleArea = calculateArea({ kind: "circle", size: 4 });
