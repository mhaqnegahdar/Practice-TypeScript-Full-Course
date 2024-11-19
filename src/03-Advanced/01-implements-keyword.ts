// To make sure that instances of Cat & Dog class can be used anywhere that Animal type is required
type Animal_ = {
  name: string;
  voice(): string;
};

function talkingAnimal(animal: Animal_) {
  console.log(`${animal.name} says ${animal.voice()}`);
}

class Cat implements Animal_ {
  constructor(public name: string) {}

  voice(): string {
    return "Meow";
  }
}

class Dog implements Animal_ {
  constructor(public name: string) {}

  voice(): string {
    return "bark";
  }
}

const cat_ = new Cat("Pishi");

talkingAnimal(cat_);
