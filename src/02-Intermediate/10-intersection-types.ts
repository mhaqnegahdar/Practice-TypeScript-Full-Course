type Pont2D = {
  name: string;
};

// We can chain any number of types
type Pont3D = Pont2D & { z: number };
