// Infers that you want the most immutable type possible so:
// - changes any property to readonly
// - changes any primitives to literal types

//use when working with objects that have literal members

function layout(setting: { align: "left" | "top" | "right"; point: number }) {
  console.log(setting);
}

const example = {
  align: "top" as const,
  point: 0,
};

layout(example);
