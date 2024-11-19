// Comfirm that the Generic Objec Conforms to a particular structure

type Member = {
  firstName: string;
  lastName: string;
};

function addFullName<T extends Member>(obj: T): T & { fullName: string } {
  return { ...obj, fullName: `${obj.firstName.concat(" ", obj.lastName)}` };
}

const john = addFullName({ firstName: "John", lastName: "Deo" });

console.log(john.fullName);
