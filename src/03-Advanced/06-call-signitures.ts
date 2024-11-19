type Add = {
  (x: number, y: number): number;
  (x: number, y: number, z: number): number;
  debugName?: string;
};

const add_: Add = (x, y) => {
  return x + y;
};

console.log(add_.debugName);
