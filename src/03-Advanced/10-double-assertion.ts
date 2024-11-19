// Only for JS migration

import { Point3D, Point2D } from "01-Basics/06-structuralTyping";
import { Person_ } from "./04-assertion-functions";

let point2d: Point2D = { x: 0, y: 0 };
let point3d: Point3D = { x: 0, y: 0, z: 0 };
let person: Person_ = { name: "Ali" };

point2d = point3d;
point3d = point2d; //Error

point3d = point2d as Point3D;

person = point3d as unknown as Person_;
