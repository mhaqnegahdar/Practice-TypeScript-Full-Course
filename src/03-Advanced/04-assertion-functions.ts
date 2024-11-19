// Use mostly for testing

export type Person_ = {
  name: string;
  dateOfBirth?: Date;
};

function loadPerson(): Person_ {
  return { name: "Ali", dateOfBirth: new Date() };
}

const person_ = loadPerson();

// Assertions
function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new Error("Value is not a date");
}

assert(person_ != null, "Person is null");
console.log(`Welcome ${person_.name}`);

assertDate(person_.dateOfBirth);
console.log(`Welcome ${person_.dateOfBirth.toISOString()}`);
