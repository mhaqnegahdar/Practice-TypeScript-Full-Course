/**
 * Types if you need:
 * Unions
 * Intersections (&)
 * Primitive Types
 * Shorthand Functions
 * Advanced Typed Functions
 *
 */

type Point2D__ = {
  x: number;
  y: number;
};

type Point3D__ = Point2D__ & {
  z: number;
};

export const point3d_: Point3D__ = {
  x: 0,
  y: 0,
  z: 0,
};

// ******************* VS

/**
 * Interfaces if you need:
 * Interface Merging
 * Syntax Familarity from other languages
 *
 */

interface Point2D_ {
  x: number;
  y: number;
}

interface Point3D_ extends Point2D_ {
  z: number;
}

export const point3d: Point3D_ = {
  x: 0,
  y: 0,
  z: 0,
};
