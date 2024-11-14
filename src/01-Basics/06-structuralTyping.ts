type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

const takesPoint2D = (point: Point2D) => {};
const takesPoint3D = (point: Point3D) => {};

let point2D: Point2D = { x: 1, y: 3 };
let point3D: Point3D = { x: 1, y: 3, z: 4 };

// * Extra Info Is OK!

point2D = point3D;

takesPoint2D(point3D)

// * Error: Missing Info

// point3D = point2D

// takesPoint3D(point2D)
