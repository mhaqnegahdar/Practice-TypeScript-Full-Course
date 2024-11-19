type ReadOnlyPoint = readonly [number, number];

function movePoint(points: ReadOnlyPoint, x: number, y: number): ReadOnlyPoint {
  // Error: Cannot assign to '1' because it is a read-only property
  //   points[0] += x;
  //   points[1] += y;

  //   return points;

  return [points[0] + x, points[1] + y];
}

const rPoint: ReadOnlyPoint = [0, 0];

const movedPoint = movePoint(rPoint, 3, 6);

console.log(rPoint); // [0, 0]
console.log(movedPoint); // [3, 4] 😂
