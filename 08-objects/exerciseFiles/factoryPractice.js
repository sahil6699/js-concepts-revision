// write an factory function to initalize and address object
//Factory Function
function createAddress(street, zipCode, city) {
  return {
    street,
    zipCode,
    city,
  };
}

const createAddress1 = createAddress("1223", 21, "fbd");
const createAddress2 = createAddress("393", 121001, "delhi");

console.log(createAddress1);
console.log(createAddress2);
