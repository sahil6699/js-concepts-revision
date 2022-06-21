const person = {
  firstName: "Mosh",
  lastName: "Hamediani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "John Smith";
console.log(person);
// console.log(person.u);

// person.fullName = "John Smith";
// getters => acces properties
// setters => change (mutate) them
