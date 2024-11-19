// Compile time only
// Up to you to ensure correctness

class Point2D___ {
  x!: number;
  y!: number;

  constructor() {
    // Initialized indirectly here
    this.moveRandome();
  }

  moveRandome() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
