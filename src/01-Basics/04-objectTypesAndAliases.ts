// Benefits of using type aliases
// 1. Better code readability
// 2. Better code maitainability

type Point = { x: number; y: number };

const circle: Point = {
  x: 3,
  y: 4,
};


// Using Records

type Points = Record<string, number>;

const locationPoint: Points = {
  lat: 3,
  lon: 4,
  x: 5,
};
