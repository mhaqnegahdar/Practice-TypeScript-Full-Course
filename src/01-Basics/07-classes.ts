class Animal {

    // Access modifiers
    // private : Access only within the class
    // protected : Access withing the class and the class heirarachy
    protected name;

    constructor(name:string){
        this.name = name;
    }

    move(distance:number){
        console.log(`The ${this.name} moved ${distance}m.`)
    }
}

class Bird extends Animal {
    fly(distance:number){

        console.log(`The ${this.name} flew ${distance}m.`)

    }
}


const cat = new Animal("Cat")

cat.move(10)

const dock = new Bird("Dock")

dock.move(3)
dock.fly(20)
