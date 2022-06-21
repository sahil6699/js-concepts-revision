const address1 = new Address("1", 121, "ztm");
const address2 = new Address("1", 121, "ztm");
const address3 = address1;
console.log(address1);
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function Address(street, zipCode, city) {
  this.street = street;
  this.zipCode = zipCode;
  this.city = city;
}
//if all the prop of this function  are equal return  true else return false
function areEqual(address1, address2) {
  return (
    address1.city === address2.city &&
    address1.street === address2.street &&
    address1.zipCode === address2.zipCode
  );
}
//check if address1 and address2 are pointing to the same function
function areSame(address1, address2) {
  return address1 === address2;
}
