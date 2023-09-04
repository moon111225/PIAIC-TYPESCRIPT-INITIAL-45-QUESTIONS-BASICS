interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

let person: Person = {
  firstName: "abid",
  lastName: "ali",
  age: 32,
};

console.log(`
  First Name: ${person.firstName}
  Last Name: ${person.lastName}
  Age: ${person.age}
`);