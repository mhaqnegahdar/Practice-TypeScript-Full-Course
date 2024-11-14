// This will be driven either by "the calling context" or "Lexically scoped"
// Other than arrow and bound functions "this" is driven by the calling context

class Person {
  private age: number;
  private name: string;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  //   growOld() {
  //     this.age++;
  //     console.log(`${this.name} is now ${this.age} years old.`);
  //   }

  growOld = () => {
    this.age++;
    console.log(`${this.name} is now ${this.age} years old.`);
  };

  printAge() {
    return this.age;
  }
}

const person = new Person("Ali", 0);

const growPerson = person.growOld;
const printPersonAge = person.printAge;

growPerson();
growPerson();
// Ali is now 2 years old.


printPersonAge();
// Throws undefined run time error because the function has no calling context
