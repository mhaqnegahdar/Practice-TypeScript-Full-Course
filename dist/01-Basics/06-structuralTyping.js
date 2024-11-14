const takesPoint2D = (point) => { };
const takesPoint3D = (point) => { };
let point2D = { x: 1, y: 3 };
let point3D = { x: 1, y: 3, z: 4 };
// * Extra Info Is OK!
point2D = point3D;
takesPoint2D(point3D);
// * Error: Missing Info
// point3D = point2D
// takesPoint3D(point2D)
//# sourceMappingURL=06-structuralTyping.js.map