// This will be driven either by "the calling context" or "Lexically scoped"
// Other than arrow and bound functions "this" is driven by the calling context
class Person {
    age;
    name;
    constructor(name, age) {
        age = this.age;
        name = this.name;
    }
    //   growOld() {
    //     this.age++;
    //     console.log(`${this.name} is now ${this.age} years old.`);
    //   }
    growOld = () => {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old.`);
    };
}
const person = new Person("Ali", 0);
const growPerson = person.growOld;
growPerson();
growPerson();
//# sourceMappingURL=01-Lexical-this.js.map