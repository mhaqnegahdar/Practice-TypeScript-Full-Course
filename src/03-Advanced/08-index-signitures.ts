type Person__ = {
  name: string;
  email: string;
};

type PersonDictionionary = {
  [key: string]: Person__ | undefined;
};

const person__: PersonDictionionary = { Ali: { name: "Ali", email: "Email" } };

console.log(person__.Ali?.email);
