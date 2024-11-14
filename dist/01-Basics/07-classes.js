class Animal {
    // Access modifiers
    // private : Access only within the class
    // protected : Access withing the class and the class heirarachy
    name;
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`The ${this.name} moved ${distance}m.`);
    }
}
class Bird extends Animal {
    fly(distance) {
        console.log(`The ${this.name} flew ${distance}m.`);
    }
}
const cat = new Animal("Cat");
cat.move(10);
const dock = new Bird("Dock");
dock.move(3);
dock.fly(20);
//# sourceMappingURL=07-classes.js.map