class Memal {
    public readonly name:string;
    constructor (name:string){
        this.name=name;
    }
}

const animal = new Memal("Sheep")

//! animal.name = "WOlf"; Not Allowd

console.log(`the animal is a ${animal.name}`)