// Cause: Call backs are known for delayed execution
// Fix: After Check, Put the value in a new variable

let someValue: string | null = "Some Value";

if (someValue != null) {
  const exampleLocal = someValue;

  Array(4).forEach((val) => {
    exampleLocal.toUpperCase();
  });
}

//
// let example2: string | null = " ";
// if (example2 != null) {

//   setTimeout(() => {
//     console.log(example2.toUpperCase()); // The error because while this delays to execute, the variable can be set to null
//   });
// }
// example2 = null;
