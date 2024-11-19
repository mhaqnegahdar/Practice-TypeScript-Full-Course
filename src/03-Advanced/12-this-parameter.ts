// Must be the first parameter within the function decleratoin
function double(this: { value: number }) {
  this.value *= 2;
}

const validObj = {
  value: 10,
  double,
};

validObj.double();

console.log(validObj.value); // 20

const invalidObj = {
  valv: 20,
  double,
};

// invalidObj.double(); // Error
